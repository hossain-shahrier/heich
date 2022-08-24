/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useForm } from 'react-hook-form';
import Button from '../components/button/Button';
import CheckoutWizard from '../components/checkout_wizard/CheckoutWizard';
import Layout from '../components/Layout';
import { Store } from '../utils/Store';
import { useRouter } from 'next/router';

export default function Shipping() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm();

  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const { shippingAddress } = cart;
  const router = useRouter();

  useEffect(() => {
    setValue('fullName', shippingAddress.fullName);
    setValue('address', shippingAddress.address);
    setValue('city', shippingAddress.city);
    setValue('postalCode', shippingAddress.postalCode);
    setValue('country', shippingAddress.country);
  }, [setValue, shippingAddress]);

  const submitHandler = ({ fullName, address, city, postalCode, country }) => {
    dispatch({
      type: 'SAVE_SHIPPING_ADDRESS',
      payload: { fullName, address, city, postalCode, country },
    });
    Cookies.set(
      'cart',
      JSON.stringify({
        ...cart,
        shippingAddress: {
          fullName,
          address,
          city,
          postalCode,
          country,
        },
      })
    );
    router.push('/payment');
  };
  return (
    <Layout title="Shipping Address">
      <CheckoutWizard activeStep={1} />
      <form
        className="mx-auto max-w-md border rounded-md shadow-md p-10 my-5"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className="mb-4 text-xl font-serif">Shipping Address</h1>
        <div className="mb-4">
          <label htmlFor="fullName" className="font-serif">
            Full Name
          </label>
          <input
            type="text"
            className="w-full p-2 my-2 border rounded-md outline-none "
            id="fullName"
            autoFocus
            {...register('fullName', {
              required: 'Please enter full name.',
            })}
          />
          {errors.fullName && (
            <div className="text-red-500 text-sm font-serif">
              {errors.fullName.message}
            </div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="font-serif">
            Address
          </label>
          <input
            type="text"
            className="w-full p-2 my-2 border rounded-md outline-none"
            id="address"
            {...register('address', {
              required: 'Please enter your address.',
              minLength: {
                value: 5,
                message: 'address should be more than 4 characters.',
              },
            })}
          />
          {errors.address && (
            <div className="text-red-500 text-sm font-serif">
              {errors.address.message}
            </div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="city" className="font-serif">
            City
          </label>
          <input
            type="text"
            className="w-full p-2 my-2 border rounded-md outline-none"
            id="city"
            {...register('city', {
              required: 'Please enter your city.',
            })}
          />
          {errors.city && (
            <div className="text-red-500 text-sm font-serif">
              {errors.city.message}
            </div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="postalCode" className="font-serif">
            Postal Code
          </label>
          <input
            type="number"
            className="w-full p-2 my-2 border rounded-md outline-none"
            id="postalCode"
            {...register('postalCode', {
              required: 'Please enter your postal code.',
            })}
          />
          {errors.postalCode && (
            <div className="text-red-500 text-sm font-serif">
              {errors.postalCode.message}
            </div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="country" className="font-serif">
            Country
          </label>
          <input
            type="text"
            className="w-full p-2 my-2 border rounded-md outline-none"
            id="country"
            {...register('country', {
              required: 'Please enter your country.',
            })}
          />
          {errors.country && (
            <div className="text-red-500 text-sm font-serif">
              {errors.country.message}
            </div>
          )}
        </div>
        <div className="mb-4 flex justify-between">
          <Button text="Next" type="submit" />
        </div>
      </form>
    </Layout>
  );
}

Shipping.auth = true;
