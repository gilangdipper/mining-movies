import React, { useEffect } from 'react';

import { HomePageWrapper } from './style';

const HomePage = () => {
  useEffect(() => {
    console.log('test');
  }, []);

  return (
    <HomePageWrapper>
      <div className="content">kocak</div>
    </HomePageWrapper>
  );
};

export default HomePage;
