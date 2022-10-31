import { Container } from 'components';
import { motion } from 'framer-motion';

import s from '../Cards/Cards.module.css';

const sectionAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

export default function Cards() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      className={s.section}
    >
      <h2 className="visually-hidden">Cards Section</h2>
      <Container>
        <ul className={s.list}>
          <motion.li
            variants={sectionAnimation}
            custom={1}
            className={s.firstCard}
          >
            <p className={s.text}>Spot & Margin</p>
            <h3 className={s.titleFirstCard}>
              Trade <span className={s.titleGradient}>200+</span> pairs with up
              to 10x leverage
            </h3>
            <a className={s.link} href="/">
              Learn more
            </a>
            <div className={s.shadowTop}></div>
            <div className={s.shadowBottom}></div>
          </motion.li>

          <ul>
            <ul className={s.desktopFlex}>
              <motion.li
                variants={sectionAnimation}
                custom={2}
                className={s.secondCard}
              >
                <p className={s.text}>Derivatives</p>
                <h4 className={s.titleSecondCard}>
                  <span className={s.titleWhite}>40+ </span>quarterly futures
                  and contracts
                </h4>
                <a className={s.link} href="/">
                  Learn more
                </a>
                <div className={s.shadowTop}></div>
                <div className={s.shadowBottom}></div>
              </motion.li>
              <motion.li
                variants={sectionAnimation}
                custom={3}
                className={s.thirdCard}
              >
                <p className={s.text}>Trading Arena</p>
                <h5 className={s.titleThirdCard}>
                  Prize pools worth up to <br />
                  <span className={s.titleWhite}>USD 1,000,000</span>
                </h5>
                <a className={s.link} href="/">
                  Learn more
                </a>
                <div className={s.shadowTop}></div>
                <div className={s.shadowBottom}></div>
              </motion.li>
            </ul>
            <motion.li
              variants={sectionAnimation}
              custom={4}
              className={s.fourthCard}
            >
              <p className={s.text}>mobile app</p>
              <h6 className={s.titleFourthCard}>
                Trade anytime, <span className={s.titleWhite}>anywhere</span>
              </h6>
              <a className={s.link} href="/">
                Learn more
              </a>
              <div className={s.shadowTop}></div>
              <div className={s.shadowBottom}></div>
            </motion.li>
          </ul>
        </ul>
        <div className={s.shadow}></div>
      </Container>
    </motion.section>
  );
}
