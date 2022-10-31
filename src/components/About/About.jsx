import { Container, Bars } from 'components';
import arrowPink from '../../images/arrow-pink.svg';
import arrowBlue from '../../images/arrow-blue.svg';
import { motion } from 'framer-motion';
import s from '../About/About.module.css';

const animation = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    rotare: 180,
    opacity: 1,

    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 80,
    },
  },
};

export default function About() {
  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      className={s.section}
    >
      <h2 className="visually-hidden">About Section</h2>
      <Container>
        <div className={s.shadowTopRigth}></div>
        <div className={s.shadow}></div>
        <ul className={s.list}>
          <li className={s.itemTitle}>
            <motion.p variants={animation} className={s.itemTitle__text}>
              about us
            </motion.p>
            <motion.h3 variants={animation} className={s.itemTitle__title}>
              Global technologies
            </motion.h3>
          </li>

          <ul className={s.secondListDesktopFlex}>
            <li className={s.itemBars}>
              <Bars width={334} heigth={332} />
            </li>
            <li className={s.itemBarsDesktop}>
              <Bars width={497} heigth={494} />
            </li>
            <ul>
              <li className={s.itemText}>
                <motion.p variants={animation} className={s.itemText__title}>
                  Level 1
                </motion.p>

                <motion.div
                  variants={animation}
                  className={s.itemText__container}
                >
                  <svg className={s.arrow}>
                    <use href={arrowPink + '#arrow-pink'}></use>
                  </svg>
                  <p className={s.itemText__text}>
                    Deploy a multi-legged futures strategy by simultaneously
                    placing orders to buy and sell from the same order ticket.
                  </p>
                </motion.div>

                <motion.div
                  variants={animation}
                  className={s.itemText__container}
                >
                  <svg className={s.arrow}>
                    <use href={arrowBlue + '#arrow-blue'}></use>
                  </svg>
                  <p className={s.itemText__text}>
                    Place and manage orders based on the Level 2 order book,
                    which provides a live display of all bids and offers waiting
                    to be executed.
                  </p>
                </motion.div>
              </li>

              <li className={s.itemBtn}>
                <motion.button
                  variants={animation}
                  type="button"
                  className={s.btn}
                >
                  Start Now
                </motion.button>
              </li>
            </ul>
          </ul>
        </ul>
      </Container>
    </motion.section>
  );
}
