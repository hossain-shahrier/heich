import React, { useEffect } from 'react';
import Link from 'next/link';
import { signIn, useSession } from 'next-auth/react';
import Button from '../components/button/Button';
import Layout from '../components/Layout';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { getError } from '../utils/error';
import { useRouter } from 'next/router';

const Login = () => {
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
    formState: { errors },
  } = useForm();
  const submitHandler = async ({ email, password }) => {
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      if (result.error) {
        toast.error(result.error);
      }
    } catch (err) {
      toast.error(getError.error);
    }
  };
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
              autoFocus
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
                  value: 4,
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
