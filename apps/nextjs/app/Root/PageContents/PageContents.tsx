'use client';

import { useRouter } from 'next/navigation';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

const data = [
  {
    title: 'BMI',
    path: 'bmi',
  },
  {
    title: '키',
    path: 'height',
  },
  {
    title: '허리둘레',
    path: 'border',
  },
  {
    title: '체지방률',
    path: 'fat',
  },
];

function PageContents() {
  const router = useRouter();

  const handleCard = (data: { title: string; path: string }) => {
    router.push(`/my_percentage/${data.path}`);
  };

  return (
    <div className={cx('card')}>
      <ul>
        {data.map((d, idx) => {
          return (
            <li
              key={idx}
              onClick={() => {
                handleCard(d);
              }}
            >
              {d.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PageContents;
