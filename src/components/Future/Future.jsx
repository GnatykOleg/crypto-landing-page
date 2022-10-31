import { Container, Info } from 'components';
import { motion } from 'framer-motion';
import s from '../Future/Future.module.css';

const animation = {
  hidden: {
    scale: 0,
    opacity: 1,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 80,
    },
  },
};

export default function Future() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      className={s.section}
    >
      <Container>
        <ul className={s.flexContainer}>
          <ul className={s.list}>
            <li>
              <motion.h2 variants={animation} className={s.title}>
                The future
                <span className={s.titleGray}> of </span>
                Cryptocurrency trading
                <span className={s.titleGradient}> platform</span>
              </motion.h2>
              <motion.p variants={animation} className={s.text}>
                Take advantage of time and sales, futures spread orders and
                depth trader — plus, trade directly from charts.
              </motion.p>
              <a className={s.link} href="/">
                Learn more
              </a>
            </li>
          </ul>
          <div className={s.shadow}></div>

          <div className={s.shadowRigth}></div>
          <div className={s.shadowBottom}></div>
          <Info />
        </ul>
      </Container>
    </motion.section>
  );
}
