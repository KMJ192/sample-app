'use client';

import { RecoilRoot } from 'recoil';

import Root from './Root/Root';

function page() {
  return (
    <RecoilRoot>
      <Root />
    </RecoilRoot>
  );
}

export default page;
