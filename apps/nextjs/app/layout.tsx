'use client';

import { useRouter } from 'next/navigation';

import 'styles/globals.css';

import classNamse from 'classnames/bind';
import style from './style.module.scss';
const cx = classNamse.bind(style);

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
        <header className={cx('header')}>
          <div className={cx('desc')}>
            <h2 className={cx('main')} onClick={handleMain}>
              백분위 계산기
            </h2>
            <div className={cx('left')}>
              <span>About</span>
              <div>
                <span>신체백분위</span>
                <div className={cx('arrow')}></div>
              </div>
            </div>
          </div>
        </header>
        <main className={cx('contents')}>{children}</main>
        <footer className={cx('footer')}>
          <div>Copyright</div>
        </footer>
      </body>
    </html>
  );
}

export default RootLayout;
