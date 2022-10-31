import symbol from '../../images/symbol.svg';
import { motion } from 'framer-motion';

import s from '../Info/Info.module.css';

const animation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.2,
      type: 'spring',
      stiffness: 260,
      damping: 80,
    },
  }),
};

export default function Info() {
  return (
    <motion.div initial="hidden" whileInView="visible" className={s.section}>
      <h2 className="visually-hidden">Info section</h2>

      <div className={s.flex}>
        <ul className={s.firstBlockContainer}>
          <motion.div variants={animation} custom={3} className={s.firstBlock}>
            <li className={s.firstBlock__firstItem}>
              <p className={s.firstBlock__firstText}>P2P Networks</p>
            </li>
            <li className={s.firstBlock__secondItem}>
              <p className={s.firstBlock__secondText}>
                Artificial Intelligence
              </p>
              <p className={s.firstBlock__secondText}>
                Storage <br />
                Networks
              </p>
            </li>
          </motion.div>
        </ul>

        <motion.div
          variants={animation}
          custom={1}
          className={s.line}
        ></motion.div>

        <motion.ul variants={animation} custom={2} className={s.secondBlock}>
          <li className={s.secondBlock__item}>
            <p className={s.secondBlock__text}>Public Data</p>
            <p className={s.secondBlock__text}>
              Encrypted <br /> Private Data *
            </p>
          </li>
        </motion.ul>

        <motion.ul variants={animation} custom={1} className={s.thirdBlock}>
          <li className={s.fourthBlock}>
            <div className={s.arrows}>
              <div className={s.arrowDown}>
                <div className={s.arrowDownHead}></div>
              </div>
              <div className={s.arrowUP}>
                <div className={s.arrowUpHead}></div>
              </div>
            </div>
            <p className={s.thirdBlock__textConsumers}>Consumers</p>
          </li>
          <li className={s.thirdBlock__item}>
            <p className={s.thirdBlock__text}>Indexing</p>
            <p className={s.thirdBlock__text}>API</p>
          </li>

          <li className={s.thirdBlock__itemSecond}>
            <svg className={s.symbol}>
              <use href={symbol + '#symbol'}></use>
            </svg>
            <p className={s.thirdBlock__textDescription}>
              Easy to use digital service and exclusive personal service for our
              active traders
            </p>
          </li>
        </motion.ul>
      </div>
    </motion.div>
  );
}
