import PageContents from './PageContents/PageContents';

import classNames from 'classnames/bind';
import style from './Root.module.scss';
const cx = classNames.bind(style);

function Root() {
  return (
    <section className={cx('section')}>
      <header>
        <h1>나의 백분위</h1>
      </header>
      <PageContents />
    </section>
  );
}

export default Root;
