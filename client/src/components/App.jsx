import React, { useEffect } from 'react';
import { useGetAllVacationsQuery } from '../services/vacations';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Card from './Card/Card';
import Footer from './navigation/Footer';
import Navbar from './navigation/Navbar';
import Carousel from './Carousel/Carousel';
import Login from './Protected/Login';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;

const Main = () => {
  const { data, error, isLoading } = useGetAllVacationsQuery();

  return (
    <main className='container mx-auto'>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <h1>Loading...</h1>
      ) : data ? (
        <div className='bg-white h-max py-10 px-4 max-w-7xl mx-auto'>
          <Carousel vacations={data.data.vacations} />
        </div>
      ) : null}
    </main>
  );
};
