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
      <symbol viewBox='0 0 12 12' id='arrowNumUp'>
        <path
          d='M9.50006 7.5L6.39054 4.83469C6.16584 4.6421 5.83428 4.6421 5.60959 4.83469L2.50006 7.5'
          stroke='CurrentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
        />
      </symbol>
      <symbol viewBox='0 0 12 12' id='arrowNumDown'>
        <path
          d='M2.49994 4.5L5.60946 7.16531C5.83416 7.3579 6.16572 7.3579 6.39041 7.16531L9.49994 4.5'
          stroke='CurrentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
        />
      </symbol>
      <symbol viewBox='0 0 16 8' id='arrowBig'>
        <path
          d='M1 0.999999L7.21905 6.33061C7.66844 6.7158 8.33156 6.7158 8.78095 6.33061L15 1'
          stroke='CurrentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
        />
      </symbol>
      <symbol viewBox='0 0 16 16' id='search'>
        <path
          d='M11.468 11.468L14.5714 14.5714M13.0924 7.54622C13.0924 10.6093 10.6093 13.0924 7.54622 13.0924C4.48313 13.0924 2 10.6093 2 7.54622C2 4.48313 4.48313 2 7.54622 2C10.6093 2 13.0924 4.48313 13.0924 7.54622Z'
          stroke='CurrentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
        />
      </symbol>
      <symbol viewBox='0 0 18 21' id='location'>
        <path
          d='M14.6569 14.6569C13.7202 15.5935 11.7616 17.5521 10.4138 18.8999C9.63275 19.681 8.36768 19.6814 7.58663 18.9003C6.26234 17.576 4.34159 15.6553 3.34315 14.6569C0.218951 11.5327 0.218951 6.46734 3.34315 3.34315C6.46734 0.218951 11.5327 0.218951 14.6569 3.34315C17.781 6.46734 17.781 11.5327 14.6569 14.6569Z'
          stroke='#ACADB9'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M12 9C12 10.6569 10.6569 12 9 12C7.34315 12 6 10.6569 6 9C6 7.34315 7.34315 6 9 6C10.6569 6 12 7.34315 12 9Z'
          stroke='#ACADB9'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </symbol>
      <symbol viewBox='0 0 22 20' id='star'>
        <path
          d='M9.97183 1.70846C10.4382 0.933481 11.5618 0.933482 12.0282 1.70847L14.3586 5.58087C14.5262 5.85928 14.7995 6.05784 15.116 6.13116L19.5191 7.15091C20.4002 7.35499 20.7474 8.42356 20.1545 9.10661L17.1918 12.5196C16.9788 12.765 16.8744 13.0863 16.9025 13.41L17.2932 17.9127C17.3714 18.8138 16.4625 19.4742 15.6296 19.1214L11.4681 17.3583C11.1689 17.2316 10.8311 17.2316 10.5319 17.3583L6.37038 19.1214C5.53754 19.4742 4.62856 18.8138 4.70677 17.9127L5.09754 13.41C5.12563 13.0863 5.02124 12.765 4.80823 12.5196L1.8455 9.1066C1.25257 8.42356 1.59977 7.35499 2.48095 7.15091L6.88397 6.13116C7.20053 6.05784 7.47383 5.85928 7.64138 5.58087L9.97183 1.70846Z'
          stroke='CurrentColor'
          strokeWidth='1.5'
        />
      </symbol>
      <symbol viewBox='0 0 32 32' id='error'>
        <path
          d='M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z'
          fill='CurrentColor'
          stroke='#3b7cd3'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path d='M16 10V17' stroke='white' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
        <path
          d='M16 22.75C16.6904 22.75 17.25 22.1904 17.25 21.5C17.25 20.8096 16.6904 20.25 16 20.25C15.3096 20.25 14.75 20.8096 14.75 21.5C14.75 22.1904 15.3096 22.75 16 22.75Z'
          fill='white'
        />
      </symbol>
      <symbol viewBox='0 0 24 24' id='filter'>
        <g id='style=fill'>
          <g id='filter-circle'>
            <path
              id='vector (Stroke)'
              fillRule='evenodd'
              clipRule='evenodd'
              d='M7.75 17.5C7.75 17.0858 7.41421 16.75 7 16.75H2C1.58579 16.75 1.25 17.0858 1.25 17.5C1.25 17.9142 1.58579 18.25 2 18.25H7C7.41421 18.25 7.75 17.9142 7.75 17.5Z'
            />
            <path
              id='vector (Stroke)_2'
              fillRule='evenodd'
              clipRule='evenodd'
              d='M16.25 6.5C16.25 6.08579 16.5858 5.75 17 5.75H22C22.4142 5.75 22.75 6.08579 22.75 6.5C22.75 6.91421 22.4142 7.25 22 7.25H17C16.5858 7.25 16.25 6.91421 16.25 6.5Z'
            />
            <path
              id='vector (Stroke)_3'
              fillRule='evenodd'
              clipRule='evenodd'
              d='M22.75 17.5C22.75 17.0858 22.4142 16.75 22 16.75H13C12.5858 16.75 12.25 17.0858 12.25 17.5C12.25 17.9142 12.5858 18.25 13 18.25H22C22.4142 18.25 22.75 17.9142 22.75 17.5Z'
            />
            <path
              id='vector (Stroke)_4'
              fillRule='evenodd'
              clipRule='evenodd'
              d='M1.25 6.5C1.25 6.08579 1.58579 5.75 2 5.75H11C11.4142 5.75 11.75 6.08579 11.75 6.5C11.75 6.91421 11.4142 7.25 11 7.25H2C1.58579 7.25 1.25 6.91421 1.25 6.5Z'
            />
            <path
              id='vector (Stroke)_5'
              fillRule='evenodd'
              clipRule='evenodd'
              d='M13.75 17.3999C13.75 15.3288 12.0711 13.6499 10 13.6499C7.92893 13.6499 6.25 15.3288 6.25 17.3999C6.25 19.471 7.92893 21.1499 10 21.1499C12.0711 21.1499 13.75 19.471 13.75 17.3999Z'
            />
            <path
              id='vector (Stroke)_6'
              fillRule='evenodd'
              clipRule='evenodd'
              d='M10.25 6.3999C10.25 4.32883 11.9289 2.6499 14 2.6499C16.0711 2.6499 17.75 4.32883 17.75 6.3999C17.75 8.47097 16.0711 10.1499 14 10.1499C11.9289 10.1499 10.25 8.47097 10.25 6.3999Z'
            />
          </g>
        </g>
      </symbol>
    </svg>
  </div>
);
