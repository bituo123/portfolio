import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Contact.module.scss';

const Contact = () => {
  const { t } = useTranslation();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert(t('contact.form.success'));
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>{t('contact.title')}</h1>
          <p className={styles.subtitle}>
            {t('contact.subtitle')}
          </p>
        </div>
        
        <div className={styles.content}>
          <div className={styles.contactInfo}>
            <h2 className={styles.infoTitle}>{t('contact.info.title')}</h2>
            <div className={styles.infoItem}>
              <h3>{t('contact.info.email')}</h3>
              <p>hello@example.com</p>
            </div>
            <div className={styles.infoItem}>
              <h3>{t('contact.info.phone')}</h3>
              <p>+1 (555) 123-4567</p>
            </div>
            <div className={styles.infoItem}>
              <h3>{t('contact.info.location')}</h3>
              <p>San Francisco, CA</p>
            </div>
            <div className={styles.social}>
              <h3>{t('contact.info.follow')}</h3>
              <div className={styles.socialLinks}>
                <a href="#" className={styles.socialLink}>{t('contact.social.github')}</a>
                <a href="#" className={styles.socialLink}>{t('contact.social.linkedin')}</a>
                <a href="#" className={styles.socialLink}>{t('contact.social.twitter')}</a>
              </div>
            </div>
          </div>
          
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>{t('contact.form.name')}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>{t('contact.form.email')}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.label}>{t('contact.form.subject')}</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>{t('contact.form.message')}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={styles.textarea}
                rows="6"
                required
              ></textarea>
            </div>
            
            <button type="submit" className={styles.submitBtn}>
              {t('contact.form.send')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;