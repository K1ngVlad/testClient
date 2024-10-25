import { FC } from 'react';

import s from './Header.module.scss';

import logoUrl from '../../assets/svg/dog-svgrepo-com.svg';
import { Link } from 'react-router-dom';
import {
  DASHBOARD_PATH,
  EXPORT_PATH,
  IMPORT_PATH,
  TASKS_PATH,
} from '../../pathes';

const Header: FC = () => {
  return (
    <header className={s.header}>
      <img alt="Перейти в дашбоард" src={logoUrl} />
      <nav>
        <li>
          <ul>
            <Link to={DASHBOARD_PATH}>Дашбоард</Link>
          </ul>
          <ul>
            <Link to={TASKS_PATH}>Задачи</Link>
          </ul>
          <ul>
            <Link to={IMPORT_PATH}>Импорт</Link>
          </ul>
          <ul>
            <Link to={EXPORT_PATH}>Экспорт</Link>
          </ul>
        </li>
      </nav>
    </header>
  );
};

export { Header };
