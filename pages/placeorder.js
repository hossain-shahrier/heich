import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import CheckoutWizard from '../components/checkout_wizard/CheckoutWizard';
import Layout from '../components/Layout';
import { Store } from '../utils/Store';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { getError } from '../utils/error';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../components/button/Button';

export default function PlaceOrder() {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const { cartItems, shippingAddress, paymentMethod } = cart;

  const round2 = (num) => Math.round(num * 100 + Number.EPSILON) / 100;

  const itemsPrice = round2(
    cartItems.reduce((a, c) => a + c.quantity * c.price, 0)
  ); // 123.4567 => 123.46

  const shippingPrice = itemsPrice > 200 ? 0 : 15;
  const taxPrice = round2(itemsPrice * 0.15);
  const totalPrice = round2(itemsPrice + shippingPrice + taxPrice);

  const router = useRouter();
  useEffect(() => {
    if (!paymentMethod) {
      router.push('/payment');
    }
  }, [paymentMethod, router]);

  const [loading, setLoading] = useState(false);

  const placeOrderHandler = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post('/api/orders', {
        orderItems: cartItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        shippingPrice,
        taxPrice,
        totalPrice,
      });
      setLoading(false);
      dispatch({ type: 'CART_CLEAR_ITEMS' });
      Cookies.set(
        'cart',
        JSON.stringify({
          ...cart,
          cartItems: [],
        })
      );
      router.push(`/order/${data._id}`);
    } catch (err) {
      setLoading(false);
      toast.error(getError(err));
    }
  };

  return (
    <Layout title="Place Order">
      <CheckoutWizard activeStep={3} />
      <h1 className="text-2xl font-serif mb-3">Place order</h1>
      {cartItems.length === 0 ? (
        <div>
          <span className="text-xl">Your cart is empty. </span>
          <span className="text-gray-600 tracking-wider uppercase">
            <Link href="/">Go shopping</Link>
          </span>
        </div>
      ) : (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 md:gap-5">
          <div className="overflow-x-auto md:col-span-3 ">
            <div className="border my-5 rounded-md shadow-md p-10">
              <h2 className="mb-2 text-lg">Shipping Address</h2>
              <div className="font-medium  text-sm">
                {shippingAddress.fullName}, {shippingAddress.address},{' '}
                {shippingAddress.city}, {shippingAddress.postalCode},{' '}
                {shippingAddress.country}
              </div>
              <div className="mt-2">
                <span className="bg-gray-200 px-2 py-1 border rounded-sm text-sm text-gray-600 font-mono hover:text-gray-900 cursor-pointer">
                  <Link href="/shipping">Edit</Link>
                </span>
              </div>
            </div>
            <div className="border my-5 rounded-md shadow-md p-10">
              <h2 className="mb-2 text-lg">Payment Method</h2>
              <div className="font-medium  text-sm">{paymentMethod}</div>
              <div className="mt-2">
                <span className="bg-gray-200 px-2 py-1 border rounded-sm text-sm text-gray-600 font-mono hover:text-gray-900 cursor-pointer">
                  <Link href="/payment">Edit</Link>
                </span>
              </div>
            </div>
            <div className="border my-5 rounded-md shadow-md p-10 overflow-x-auto">
              <h2 className="mb-2  text-lg">Order Items</h2>
              <table className="min-w-full">
                <thead className="border-b">
                  <tr>
                    <th className="px-5 text-left">Item</th>
                    <th className="    p-5 text-right">Quantity</th>
                    <th className="  p-5 text-right">Price</th>
                    <th className="p-5 text-right">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item._id} className="border-b">
                      <td>
                        <Link href={`/product/${item.slug}`}>
                          <a className="flex items-center ">
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={50}
                              height={50}
                              className="object-cover rounded-sm"
                            ></Image>
                            &nbsp;
                            <span className="text-sm">{item.name}</span>
                          </a>
                        </Link>
                      </td>
                      <td className=" p-5 text-right font-serif">
                        {item.quantity}
                      </td>
                      <td className="p-5 text-right font-serif">
                        ${item.price}
                      </td>
                      <td className="p-5 text-right font-serif">
                        ${item.quantity * item.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-2">
                <span className="bg-gray-200 px-2 py-1 border rounded-sm text-sm text-gray-600 font-mono hover:text-gray-900 cursor-pointer">
                  <Link href="/">Edit</Link>
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="border my-5 rounded-md shadow-md p-10">
              <h2 className="mb-2 text-lg">Order Summary</h2>
              <ul>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>Items</div>
                    <span className="font-serif text-sm">${itemsPrice}</span>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>Tax</div>
                    <div className="font-serif text-sm">${taxPrice}</div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>Shipping</div>
                    <div className="font-serif text-sm">${shippingPrice}</div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>Total</div>
                    <div className="font-serif text-sm">${totalPrice}</div>
                  </div>
                </li>
                <li>
                  <Button
                    disabled={loading}
                    handler={placeOrderHandler}
                    type="button"
                    text={loading ? 'Loading...' : 'Place Order'}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
PlaceOrder.auth = true;
