import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './About.module.scss';

const About = () => {
  const { t } = useTranslation();
  
  const skills = [
    'JavaScript', 'React', 'Node.js', 'Python', 'HTML5', 'CSS3', 
    'SCSS', 'MongoDB', 'PostgreSQL', 'Git', 'Docker', 'AWS'
  ];

  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <h1 className={styles.title}>{t('about.title')}</h1>
          <div className={styles.content}>
            <div className={styles.text}>
              <p className={styles.description}>
                {t('about.description1')}
              </p>
              <p className={styles.description}>
                {t('about.description2')}
              </p>
            </div>
            <div className={styles.avatar}>
              <div className={styles.placeholder}>{t('about.profilePhoto')}</div>
            </div>
          </div>
        </div>
        
        <div className={styles.skills}>
          <h2 className={styles.skillsTitle}>{t('about.skillsTitle')}</h2>
          <div className={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <div key={index} className={styles.skillItem}>
                {skill}
              </div>
            ))}
          </div>
        </div>
        
        <div className={styles.experience}>
          <h2 className={styles.experienceTitle}>{t('about.experienceTitle')}</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.year}>{t('about.experience.senior.period')}</div>
              <div className={styles.role}>
                <h3>{t('about.experience.senior.title')}</h3>
                <p>{t('about.experience.senior.description')}</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.year}>{t('about.experience.fullstack.period')}</div>
              <div className={styles.role}>
                <h3>{t('about.experience.fullstack.title')}</h3>
                <p>{t('about.experience.fullstack.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;