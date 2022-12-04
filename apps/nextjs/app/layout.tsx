'use client';

import { useRouter } from 'next/navigation';

import 'styles/globals.css';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type Props = {
  children: React.ReactNode;
};

function RootLayout({ children }: Props) {
  const router = useRouter();
  const handleMain = () => {
    router.push('/');
  };

  return (
    <html lang='ko'>
      <body className={cx('body')}>
        <div className={cx('container')}>
          <header className={cx('header')}>
            <div className={cx('desc')}>
              <h2 className={cx('main')} onClick={handleMain}>
                백분위 계산기
              </h2>
              <div className={cx('left')}>
                <span className={cx('about')}>About</span>
                <span>신체백분위</span>
              </div>
            </div>
          </header>
          <main className={cx('contents')}>{children}</main>
          <footer className={cx('footer')}>
            <div className={cx('copyright')}>© Seunghyun Yoo © Myungjun Kim</div>
          </footer>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
