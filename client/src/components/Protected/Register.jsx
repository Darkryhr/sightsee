import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSignUpMutation } from '../../services/auth';
import toast from 'react-hot-toast';

import { setCredentials } from '../../redux/authSlice';

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signUp, { isLoading }] = useSignUpMutation();

  let from = '/';

  const onSubmit = async (data) => {
    try {
      const user = await signUp(data).unwrap();
      dispatch(setCredentials(user));
      dispatch(setFollows([]));
      navigate(from, { replace: true });
    } catch (error) {
      toast('Oh no, there was an error!');
    }
  };

  return (
    <div className='w-full max-w-xs mx-auto'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='bg-gray-100 shadow-lg border border-gray-200 rounded px-8 pt-6 pb-6 mb-4'
      >
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            First Name
          </label>
          <input
            {...register('firstName')}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Last Name
          </label>
          <input
            {...register('lastName')}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Username
          </label>
          <input
            {...register('username')}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Password
          </label>
          <input
            type='password'
            {...register('password')}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='flex items-center justify-between mt-8'>
          <button
            type='submit'
            className='font-bold block text-sm bg-blue-700 text-white px-5 py-2 rounded hover:bg-blue-400 transition-all'
          >
            Submit
          </button>
          <a
            className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'
            href='#'
          >
            Already a user?
          </a>
        </div>
      </form>
    </div>
  );
};

export default Register;
