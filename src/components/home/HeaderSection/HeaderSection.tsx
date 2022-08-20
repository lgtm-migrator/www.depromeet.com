import { css } from '@emotion/react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';

import { ScrollBottomIcon } from '~/components/common/icons';
import { NAV_HEIGHT } from '~/components/common/NavigationBar/NavigationBar';
import { defaultEasing } from '~/constants/motions';

export default function HeaderSection() {
  const { scrollY } = useScroll();
  const scrollBottomOpacity = useTransform(scrollY, [0, 800], [1, 0]);
  const scrollBottomScale = useTransform(scrollY, [0, 800], [1, 0.6]);

  return (
    <header css={headerCss}>
      <p>some text or image</p>

      <motion.div
        css={scrollBottomIconWrapperCss}
        style={{ opacity: scrollBottomOpacity, scale: scrollBottomScale }}
        variants={scrollBottomVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <ScrollBottomIcon />
      </motion.div>
    </header>
  );
}

const headerCss = css`
  position: relative;
  width: 100%;
  height: calc(100vh - ${NAV_HEIGHT}px);
`;

const scrollBottomIconWrapperCss = css`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  margin: 0 auto;
`;

const scrollBottomVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.5,
    x: '-50%',
    y: -30,
    transition: { duration: 1.2, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 1.2, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
  exit: {
    opacity: 0,
    scale: 0.85,
    y: 0,
    transition: { duration: 1.2, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
};
