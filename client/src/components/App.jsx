import React, { useEffect } from 'react';
import { useGetAllVacationsQuery } from '../services/vacations';

import Card from './Card/Card';
import Footer from './navigation/Footer';
import Navbar from './navigation/Navbar';
import Carousel from './Carousel/Carousel';

const App = () => {
  const { data, error, isLoading } = useGetAllVacationsQuery();

  return (
    <>
      <Navbar />
      <main className='container mx-auto'>
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <h1>Loading...</h1>
        ) : data ? (
          <div className='bg-white h-max py-10 px-4 max-w-7xl mx-auto'>
            <Carousel vacations={data.data.vacations} />

            {/* {data.data.vacations.map((vacation) => (
              <Card vacation={vacation} key={vacation.id} />
            ))} */}
          </div>
        ) : null}
      </main>
      <Footer />
    </>
  );
};

export default App;
