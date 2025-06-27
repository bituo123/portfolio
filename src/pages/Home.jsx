import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Home.module.scss';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Vanta 背景配置 - 使用主题感知
  const vantaOptions = {
    // 可以覆盖预设配置的特定参数
    waveSpeed: 1.5,
    shininess: 50
  };

  return (
    <div className={styles.home}>
      <div className={styles.hero}>
          <h1 className={styles.title}>{t('home.title')}</h1>
          <p className={styles.subtitle}>{t('home.subtitle')}</p>
          <div className={styles.cta}>
            <button className={styles.primaryBtn} onClick={()=>{navigate('/portfolio')}}>{t('home.viewWork')}</button>
            <button className={styles.secondaryBtn} onClick={()=>{navigate('/contact')}}>{t('home.contactMe')}</button>
          </div>
        </div>
    </div>
  );
};

export default Home;