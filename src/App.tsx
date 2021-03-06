import React from 'react';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

const App = React.memo(() => {
  return (
    <div className='app'>
      <Header />
      <Content />
      <Footer />
    </div>
  );
});

export default App;
