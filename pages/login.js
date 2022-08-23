import React from 'react';
import Link from 'next/link';
import Button from '../components/button/Button';
import Layout from '../components/Layout';
import { useForm } from 'react-hook-form';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitHandler = ({ email, password }) => {};
  return (
    <Layout>
      <div className="">
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="mx-auto max-w-md border rounded-md shadow-md p-10"
        >
          <h1 className="mb-4 text-xl font-serif">Login</h1>
          <div className="mb-4">
            <label htmlFor="email" className="font-serif">
              Email
            </label>
            <input
              type="email"
              className="w-full p-2 my-2 border rounded-md outline-none"
              id="email"
              autoFocus="true"
              {...register('email', {
                required: 'Please enter an email address.',
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                  message: 'Please enter valid email address',
                },
              })}
            />
            {errors.email && (
              <div className="text-red-500 text-sm font-serif">
                {errors.email.message}
              </div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="font-serif">
              Password
            </label>
            <input
              type="password"
              className="w-full outline-none p-2 my-2 border rounded-md"
              id="password"
              autoFocus
              {...register('password', {
                required: 'Please enter a password.',
                minLength: {
                  value: 6,
                  message: 'password should be more than 5 characters.',
                },
              })}
            />
            {errors.password && (
              <div className="text-red-500 text-sm font-serif">
                {errors.password.message}
              </div>
            )}
          </div>
          <div className="mb-4">
            <Button text="Login" type="submit" />
          </div>
          <div className="mb-4">
            Don&apos;t have an account?&nbsp;
            <span className="font-bold">
              <Link href="/register">Register</Link>
            </span>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
