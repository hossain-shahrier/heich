import React, { useEffect } from 'react';
import Link from 'next/link';
import { signIn, useSession } from 'next-auth/react';
import Button from '../components/button/Button';
import Layout from '../components/Layout';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { getError } from '../utils/error';
import { useRouter } from 'next/router';
import axios from 'axios';
const Register = () => {
  const router = useRouter();
  const { redirect } = router.query;
  const { data: session } = useSession();
  useEffect(() => {
    if (session?.user) {
      router.push(redirect || '/');
    }
  }, [router, session, redirect]);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const submitHandler = async ({ name, email, password }) => {
    try {
      await axios.post('/api/auth/signup', {
        name,
        email,
        password,
      });

      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      if (result.error) {
        toast.error(result.error);
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };
  return (
    <Layout title="Create Account">
      <div className="">
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="mx-auto max-w-md border rounded-md shadow-md p-10"
        >
          <h1 className="mb-4 text-xl font-serif">Create Account</h1>
          <div className="mb-4">
            <label htmlFor="name" className="font-serif">
              Name
            </label>
            <input
              type="text"
              className="w-full p-2 my-2 border rounded-md outline-none"
              id="name"
              autoFocus
              {...register('name', {
                required: 'Please enter your name.',
              })}
            />
            {errors.name && (
              <div className="text-red-500 text-sm font-serif">
                {errors.name.message}
              </div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="font-serif">
              Email
            </label>
            <input
              type="email"
              className="w-full p-2 my-2 border rounded-md outline-none"
              id="email"
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
                  value: 5,
                  message: 'password should be more than 6 characters.',
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
            <label htmlFor="confirmPassword" className="font-serif">
              Confirm Password
            </label>
            <input
              type="password"
              className="w-full outline-none p-2 my-2 border rounded-md"
              id="confirmPassword"
              autoFocus
              {...register('confirmPassword', {
                required: 'Please enter a confirm password.',
                validate: (value) => value === getValues('password'),
                minLength: {
                  value: 5,
                  message: 'confirm password should be more than 6 characters.',
                },
              })}
            />
            {errors.confirmPassword && (
              <div className="text-red-500 text-sm font-serif">
                {errors.confirmPassword.message}
              </div>
            )}
            {errors.confirmPassword &&
              errors.confirmPassword.type === 'validate' && (
                <div className="text-red-500 text-sm font-serif">
                  <p>Password does not match.</p>
                </div>
              )}
          </div>
          <div className="mb-4">
            <Button text="Register" type="submit" />
          </div>
          <div className="mb-4">
            Already have an account?&nbsp;
            <span className="font-bold">
              <Link href={`/login?login=${redirect || '/'}`}>Login</Link>
            </span>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
