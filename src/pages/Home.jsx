import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Home.module.scss';

const Home = () => {
  const { t } = useTranslation();
  
  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <h1 className={styles.title}>{t('home.title')}</h1>
        <p className={styles.subtitle}>{t('home.subtitle')}</p>
        <div className={styles.cta}>
          <button className={styles.primaryBtn}>{t('home.viewWork')}</button>
          <button className={styles.secondaryBtn}>{t('home.contactMe')}</button>
        </div>
      </div>
    </div>
  );
};

export default Home;