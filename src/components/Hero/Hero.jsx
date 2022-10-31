import { Container } from 'components';
import sprite from '../../images/sprite.svg';
import mouse from '../../images/mouse.svg';

import s from '../Hero/Hero.module.css';

export default function Hero() {
  return (
    <section className={s.section}>
      <div className={s.shadow}></div>
      <h1 className="visually-hidden">Hero Section</h1>
      <Container>
        <ul>
          <li>
            <p className={s.textPrimary}>crypto trading</p>
            <h2 className={s.title}>
              Engineers Meet{' '}
              <span className={s.titleGradient}>
                Traders <span className={s.titleUnderScore}>__</span>
              </span>
            </h2>
            <p className={s.text}>
              Advanced crypto algorithmic trading and efficient cross-chain
              execution, at scale.
            </p>
            <a className={s.link} href="#about">
              Learn More
              <svg className={s.linkArrow} width={34} height={34}>
                <use href={sprite + '#icon-arrow-down'}></use>
              </svg>
            </a>
            <svg className={s.mouse} width={17} height={29}>
              <use href={mouse + '#mouse'}></use>
            </svg>
          </li>
        </ul>
      </Container>
    </section>
  );
}
