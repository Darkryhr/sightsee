import React from 'react';
import { useSelector } from 'react-redux';
import { useGetAllVacationsQuery } from '../../services/vacations';
import Card from '../Card/Card';

const ProtectedRoute = () => {
  const { data, error, isLoading } = useGetAllVacationsQuery();
  const follows = useSelector((state) => state.follows);

  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <h1>Loading...</h1>
      ) : data ? (
        <div className='container my-12 mx-auto px-4 md:px-12'>
          <div className='flex flex-wrap -mx-1 lg:-mx-4'>
            {data.data.vacations.map((vacation) => (
              <Card
                vacation={vacation}
                key={vacation.id}
                following={follows.includes(vacation.id)}
              />
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ProtectedRoute;
