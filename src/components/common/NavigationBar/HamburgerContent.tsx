import { css } from '@emotion/react';
import { motion, Variants } from 'framer-motion';

import { defaultEasing } from '~/constants/motions';
import { colors } from '~/styles/constants';

import Anchor from './Anchor';
import Svg from '../icons/Svg';

export default function HamburgerContent() {
  return (
    <motion.div
      css={contentWrapperCss}
      variants={contentVariants}
      initial="closed"
      animate="open"
      exit="closed"
    >
      <div css={anchorWrapperCss}>
        <Anchor href="/project" name="프로젝트" />
        <Anchor href="/contact" name="문의하기" />

        <div css={recruitAnchorWrapperCss}>
          <Anchor href="/recruit" name="리쿠르팅" />
          <RecruitBanner />
        </div>
      </div>
    </motion.div>
  );
}

const contentWrapperCss = css`
  width: 100%;
  background-color: ${colors.gray9};

  z-index: -1;
  overflow: hidden;
`;

const anchorWrapperCss = css`
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const recruitAnchorWrapperCss = css`
  display: flex;
  gap: 8px;
  align-items: center;

  margin-top: -3px;
`;

const contentVariants: Variants = {
  closed: {
    height: 0,
    transition: { duration: 0.3, ease: defaultEasing },
    willChange: 'opacity',
  },
  open: {
    height: 'auto',
    transition: { duration: 0.3, ease: defaultEasing, delay: 0.16 },
    willChange: 'opacity',
  },
};

function RecruitBanner() {
  return (
    <motion.div
      animate={{ rotateZ: [0, 0, 0, 1.2, -1.4, 1, -1.8, 1.2, 0, 0], transformOrigin: 'left' }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <Svg width="96" height="25" viewBox="0 0 96 25">
        <rect x="6" width="90" height="25" rx="4" fill="#1B5BFF" />
        <path
          d="M20.6348 7.10156H19.1582L16.6973 8.71484V10.1504L19.0625 8.60547H19.1172V17H20.6348V7.10156ZM23.0804 17H29.7386V15.7148H25.1722V15.6328L27.182 13.5957C29.0413 11.7705 29.5609 10.8887 29.5745 9.78125C29.5609 8.1748 28.2415 6.96484 26.3343 6.96484C24.4476 6.96484 23.0667 8.16113 23.0804 9.97266H24.5023C24.5091 8.91992 25.2064 8.22266 26.307 8.22266C27.346 8.22266 28.139 8.84473 28.139 9.82227C28.139 10.6904 27.5989 11.3193 26.512 12.4473L23.0804 15.9062V17ZM41.0983 5.91211H39.7858V18.1621H41.0983V5.91211ZM31.0358 14.8809L31.7194 15.9336C35.9235 13.917 37.4479 10.8135 37.4479 7.22461H31.6237V8.26367H36.1354C35.8825 11.1211 34.2897 13.3291 31.0358 14.8809ZM57.5012 15.5508H52.511V12.7207H56.1614V6.89648H47.5755V12.7207H51.2259V15.5508H46.2903V16.6309H57.5012V15.5508ZM48.8333 11.6953V7.93555H54.8899V11.6953H48.8333ZM62.859 7.86719V7.73047H65.5523V6.67773H58.7984V7.73047H61.5465V7.86719C61.5396 9.47363 60.3502 10.9775 58.443 11.5586L59.0992 12.584C60.5689 12.0986 61.6627 11.0869 62.2096 9.79492C62.7701 10.998 63.8502 11.9277 65.2789 12.3652L65.9352 11.3535C64.0484 10.7998 62.859 9.3916 62.859 7.86719ZM60.4664 18.0117H68.4781V13.1172H67.193V14.4844H61.7379V13.1172H60.4664V18.0117ZM61.7379 16.959V15.5098H67.193V16.959H61.7379ZM67.1793 12.543H68.4781V5.91211H67.1793V12.543ZM81.5195 11.5859H70.3495V12.6387H75.2851V13.8145C73.0087 13.9307 71.6757 14.6895 71.6757 15.9746C71.6757 17.3623 73.2616 18.1416 75.9277 18.1348C78.5595 18.1416 80.1454 17.3623 80.1523 15.9746C80.1454 14.6895 78.8124 13.9375 76.5702 13.8145V12.6387H81.5195V11.5859ZM70.9374 9.91797L71.3886 10.9434C73.5146 10.6973 75.2577 9.80176 75.9345 8.50293C76.5976 9.80176 78.3544 10.6973 80.4804 10.9434L80.9452 9.91797C78.703 9.69238 76.9804 8.70117 76.8027 7.51172H80.5214V6.47266H71.3749V7.51172H75.0527C74.8749 8.69434 73.1386 9.69238 70.9374 9.91797ZM72.9882 15.9746C72.9814 15.2158 74.0546 14.8057 75.9277 14.7988C77.7734 14.8057 78.8534 15.2158 78.8534 15.9746C78.8534 16.7197 77.7734 17.1504 75.9277 17.1367C74.0546 17.1504 72.9814 16.7197 72.9882 15.9746ZM84.635 7.10156H83.0354L83.1584 14.1426H84.512L84.635 7.10156ZM82.8713 16.125C82.8645 16.6582 83.3088 17.0889 83.842 17.0957C84.3684 17.0889 84.8059 16.6582 84.8127 16.125C84.8059 15.5918 84.3684 15.1543 83.842 15.1543C83.3088 15.1543 82.8645 15.5918 82.8713 16.125Z"
          fill="white"
        />
        <path
          d="M8 16.099V8.90103C8 8.09585 7.09697 7.62083 6.43347 8.07699L1.19861 11.676C0.620645 12.0733 0.620644 12.9267 1.19861 13.324L6.43347 16.923C7.09697 17.3792 8 16.9041 8 16.099Z"
          fill="#1B5BFF"
        />
      </Svg>
    </motion.div>
  );
}
