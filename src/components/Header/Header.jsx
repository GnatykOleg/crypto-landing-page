import { Container } from 'components';
import sprite from '../../images/sprite.svg';
import s from './Header.module.css';

export default function Header() {
  return (
    <header className={s.header}>
      <Container>
        <div className={s.shadow}></div>
        <nav>
          <ul className={s.list}>
            <li className={s.item}>
              <a className={s.link} href="/">
                C
              </a>
              <button className={s.btn}></button>
            </li>
            <li className={s.item}>
              <a className={s.desktopLink} href="/">
                Activities
              </a>
              <a className={s.desktopLink} href="/">
                Technology
              </a>
              <a className={s.desktopLink} href="/">
                R&D
              </a>
              <a className={s.desktopLink} href="/">
                Community
              </a>
              <a className={s.desktopLinkButton} href="/">
                Career{' '}
                <svg className={s.arrow} width={24} height={24}>
                  <use href={sprite + '#arrow-left-up'}></use>
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
