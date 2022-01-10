import React from 'react';
import Card from './Card/Card';
import Footer from './navigation/Footer';
import Navbar from './navigation/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <main className='container mx-auto'>
        <div className='bg-white h-screen py-10 px-4'>
          <Card />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
