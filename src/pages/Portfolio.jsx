import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Portfolio.module.scss';

const Portfolio = () => {
  const { t } = useTranslation();
  
  const projects = [
    {
      id: 1,
      title: t('portfolio.projects.project1.title'),
      description: t('portfolio.projects.project1.description'),
      technologies: t('portfolio.projects.project1.technologies', { returnObjects: true })
    },
    {
      id: 2,
      title: t('portfolio.projects.project1.title'),
      description: t('portfolio.projects.project1.description'),
      technologies: t('portfolio.projects.project1.technologies', { returnObjects: true })
    },
    {
      id: 3,
      title: t('portfolio.projects.project1.title'),
      description: t('portfolio.projects.project1.description'),
      technologies: t('portfolio.projects.project1.technologies', { returnObjects: true })
    },
    {
      id: 4,
      title: t('portfolio.projects.project2.title'),
      description: t('portfolio.projects.project2.description'),
      technologies: t('portfolio.projects.project2.technologies', { returnObjects: true })
    },
    {
      id: 5,
      title: t('portfolio.projects.project3.title'),
      description: t('portfolio.projects.project3.description'),
      technologies: t('portfolio.projects.project3.technologies', { returnObjects: true })
    }
  ];

  return (
    <div className={styles.portfolio}>
      <div className={styles.header}>
        <h1 className={styles.title}>{t('portfolio.title')}</h1>
        <p className={styles.subtitle}>{t('portfolio.subtitle')}</p>
      </div>
      <div className={styles.projects}>
        {projects.map(project => (
          <div key={project.id} className={styles.projectCard}>
            <div className={styles.projectImage}>
              <div className={styles.placeholder}>{t('portfolio.projectImage')}</div>
            </div>
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.technologies}>
                {project.technologies.map((tech, index) => (
                  <span key={index} className={styles.tech}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;