import styles from './sprite.module.css';

export const Sprite = () => (
  <div className={styles.wrapper}>
    <svg className={styles.svg}>
      <symbol viewBox='0 0 30 30' id='logo'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M15.039 4.81473C9.08945 0.423546 3.45945 -1.27661 1.13587 1.02923C-1.18771 3.33507 0.469263 8.97794 4.81473 14.961C0.423547 20.9105 -1.27661 26.5405 1.02923 28.8641C3.33507 31.1877 8.97793 29.5307 14.9609 25.1852C20.9105 29.5764 26.5405 31.2766 28.8641 28.9708C31.1877 26.6649 29.5307 21.022 25.1852 15.039C29.5764 9.08944 31.2766 3.45942 28.9708 1.13584C26.6649 -1.18775 21.022 0.469237 15.039 4.81473Z'
          fill='#5E96FC'
        />
      </symbol>
      <symbol viewBox='0 0 16 16' id='close'>
        <line x1='11.7425' y1='4.44219' x2='4.44197' y2='11.7427' stroke='CurrentColor' strokeWidth='1.25' />
        <line x1='11.9013' y1='11.7425' x2='4.60082' y2='4.44197' stroke='CurrentColor' strokeWidth='1.25' />
      </symbol>
    </svg>
  </div>
);
