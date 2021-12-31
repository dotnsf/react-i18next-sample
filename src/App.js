import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n, { t } from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use( initReactI18next ).init({
  resources: {
    en: {
      translation: {
        'edit_message1': 'Edit',
        'edit_message2': 'and save to reload.',
        'learn_react': 'Learn React',
        'change_lang': 'Change Lang'
      }  
    },
    ja: {
      translation: {
        'edit_message1': 'リロードするには',
        'edit_message2': 'を編集後、保存してください。',
        'learn_react': 'React を学ぶ',
        'change_lang': '言語を変更'
      }  
    }
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
});

function App() {
  const [t, i18n] = useTranslation();
  const [lang, setLang] = useState( 'en' );

  useEffect( () => {
    i18n.changeLanguage( lang );
  }, [ lang, i18n ] );

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://raw.githubusercontent.com/dotnsf/react-i18next-sample/gh-pages/logo.svg" className="App-logo" alt="logo" />
        <p>
          {t('edit_message1')} <code>src/App.js</code> {t('edit_message2')}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('learn_react')}
        </a>
        <div>
          <button onClick={() => setLang(lang === 'en' ? 'ja' : 'en' )}>{t('change_lang')}</button>
        </div>
      </header>
    </div>
  );
};

export default App;
