import React from 'react';
import Card from './Card/Card';
import Navbar from './navigation/Navbar';

const App = () => {
  return (
    <main className='container mx-auto'>
      <Navbar />
      <div className='bg-white h-screen'>
        <Card />
      </div>
    </main>
  );
};

export default App;
