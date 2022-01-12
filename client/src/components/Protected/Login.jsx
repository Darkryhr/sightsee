import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || '/';

  const onSubmit = (data) => {
    navigate(from, { replace: true });
  };

  return (
    <div className='w-full max-w-xs mx-auto'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='bg-gray-100 shadow-lg border border-gray-200 rounded px-8 pt-6 pb-6 mb-4'
      >
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Username
          </label>
          <input
            {...register('user', { required: true, maxLength: 20 })}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
          {errors.user && (
            <span className='text-xs text-red-500'>This field is required</span>
          )}
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Password
          </label>
          <input
            type='password'
            {...register('pass', { required: true, maxLength: 20 })}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
          {errors.pass && (
            <span className='text-xs text-red-500'>This field is required</span>
          )}
        </div>
        <div className='flex items-center justify-between mt-8'>
          <button
            type='submit'
            className='font-bold block text-sm bg-blue-700 text-white px-5 py-2 rounded hover:bg-blue-400 transition-all'
          >
            Submit
          </button>
          <Link
            className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'
            to='/register'
          >
            Not a user yet?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
