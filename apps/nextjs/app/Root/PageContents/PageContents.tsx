'use client';

import { useRouter } from 'next/navigation';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

function PageContents() {
  return (
    <div className={cx('card')}>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}

export default PageContents;
