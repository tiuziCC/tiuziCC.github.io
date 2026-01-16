import { css } from 'styled-components';

const variables = css`
  :root {
    // --dark-navy: #020c1b;
    // --navy: #0a192f;
    // --light-navy: #112240;
    // --lightest-navy: #233554;
    // --navy-shadow: rgba(2, 12, 27, 0.7);
    // --dark-slate: #495670;
    // --slate: #8892b0;
    // --light-slate: #a8b2d1;
    // --lightest-slate: #ccd6f6;
    // --white: #e6f1ff;
    // --green: #64ffda;
    // --green-tint: rgba(100, 255, 218, 0.1);
    // --pink: #f57dff;
    // --blue: #57cbff;

    // /* Backgrounds — Sky & Light */
    // --navy: #edf2f4;            /* 天空雾白 */
    // --light-navy: #e3eaee;      /* 云层灰 */
    // --lightest-navy: #d4dde2;   /* 天空边界 */

    // /* Text — Figure & Shadow */
    // --slate: #3e4a50;           /* 人物衣服深灰蓝 */
    // --light-slate: #58666d;
    // --lightest-slate: #2a3439;  /* 标题 / 强文字 */

    // /* White (反转语义，用于深字) */
    // --white: #2a3439;

    // /* Accent — Parasol Green */
    // --green: #6f9f8a;           /* 莫奈伞绿（非常关键） */
    // --green-tint: rgba(111, 159, 138, 0.14);

    // /* Secondary Nature Tones */
    // --dark-slate: #7f9184;      /* 草地灰绿 */
    // --dark-navy: #cfd8dc;
    // --navy-shadow: rgba(62, 74, 80, 0.18);

    // /* Rare-use colors (压低存在感) */
    // --pink: #d8b5b0;            /* 云层暖光 */
    // --blue: #9bbcd1;            /* 天空深处 */


    /* Backgrounds — Soft Sky Blue (slightly brighter & cooler) */
    --navy: #eef4f7;
    --light-navy: #e4ecf1; 
    --lightest-navy: #d9e3e9;

    /* Text — Calm & Clear */
    --slate: #3c4f57;
    --light-slate: #5b6c73;s
    --lightest-slate: #263238;

    /* White (semantic inverted) */
    --white: #263238;

    /* Accent — Monet Parasol Green (slightly lifted) */
    --green: #77a896;
    --green-tint: rgba(119, 168, 150, 0.16);

    /* Secondary Nature Tones */
    --dark-slate: #879a8f;
    --dark-navy: #d5e0e6;
    --navy-shadow: rgba(60, 79, 87, 0.16);

    /* Rare-use colors (still quiet) */
    --pink: #cb978ede;
    --blue: #c5d7e3;



    --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
      sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --border-radius: 4px;
    --nav-height: 80px;
    --nav-scroll-height: 110px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`;

export default variables;
