import classNamse from 'classnames/bind';
import style from './style.module.scss';
const cx = classNamse.bind(style);

type Props = {
  children: React.ReactNode;
};

function RootLayout({ children }: Props) {
  return (
    <html lang='ko'>
      <body>
        <header>
          <div className={cx('header')}>
            <h2>백분위 계산기</h2>
            <div className={cx('left')}>
              <span>About</span>
              <div>
                <span>신체백분위</span>
                <div className={cx('arrow')}></div>
              </div>
            </div>
          </div>
        </header>
        <main>{children}</main>
        <footer>footer</footer>
      </body>
    </html>
  );
}

export default RootLayout;
