import { useRouter } from 'next/router';
import React, { useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import CheckoutWizard from '../components/checkout_wizard/CheckoutWizard';
import Layout from '../components/Layout';
import { Store } from '../utils/Store';

export default function Payment() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const { shippingAddress, paymentMethod } = cart;
  const router = useRouter();
  const submitHandler = (e) => {
    e.preventDefault();
    if (!selectedPaymentMethod) {
      return toast.error('Payment method is required');
    }
    dispatch({ type: 'SAVE_PAYMENT_METHOD', payload: selectedPaymentMethod });
    Cookies.set(
      'cart',
      JSON.stringify({
        ...cart,
        paymentMethod: selectedPaymentMethod,
      })
    );

    router.push('/placeorder');
  };
  useEffect(() => {
    if (!shippingAddress.address) {
      return router.push('/shipping');
    }
    setSelectedPaymentMethod(paymentMethod || '');
  }, [paymentMethod, router, shippingAddress.address]);

  return (
    <Layout title="Payment Method">
      <CheckoutWizard activeStep={2} />
      <form
        className="mx-auto max-w-md border rounded-md shadow-md p-10 my-5"
        onSubmit={submitHandler}
      >
        <h1 className="mb-4 text-xl font-serif">Payment Method</h1>
        {['Bkash', 'Rocket', 'DBBL', 'Cash on Delivery'].map((payment) => (
          <div key={payment} className="mb-4">
            <input
              name="paymentMethod"
              className="p-2 outline-none focus:ring-0"
              id={payment}
              type="radio"
              checked={selectedPaymentMethod === payment}
              onChange={() => setSelectedPaymentMethod(payment)}
            />

            <label className="p-2" htmlFor={payment}>
              {payment}
            </label>
          </div>
        ))}
        <div className="mb-4 flex flex-col justify-between">
          <button
            className="bg-gray-300 mt-3 p-2 w-full text-gray-700 font-medium rounded text-sm hover:text-white hover:bg-gray-800 active:bg-gray-400"
            type="button"
            onClick={() => router.push('/shipping')}
          >
            Back
          </button>
          <button
            type="submit"
            text="Next"
            className="mt-2 bg-gray-800 font-medium p-2 rounded text-sm text-gray-100 shadow outline-none hover:bg-gray-300 hover:text-gray-700  active:bg-gray-300"
          >
            Next
          </button>
        </div>
      </form>
    </Layout>
  );
}
