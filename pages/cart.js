import React, { useContext } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import { XCircleIcon } from '@heroicons/react/outline';
import { Store } from '../utils/Store';
import Image from 'next/image';
import Button from '../components/button/Button';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

function Cart() {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  const removeItemHandler = (item) => {
    dispatch({ type: 'CART_REMOVE_ITEM', payload: item });
  };
  const updateCartHandler = (item, qty) => {
    const quantity = Number(qty);
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...item, quantity } });
  };
  return (
    <Layout>
      <h1 className="mb-4 text-xl font-serif">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div className="text-sm">
          Your cart is empty.{' '}
          <span className="font-bold">
            <Link href="/">Go shopping</Link>
          </span>
        </div>
      ) : (
        <div className="grid relative md:grid-cols-4 md:gap-5">
          <div className="overflow-x-auto md:col-span-3">
            <table className="min-w-full">
              <thead className="border-b">
                <tr>
                  <th className="px-5 text-left">Item</th>
                  <th className="p-5 text-right">Quantity</th>
                  <th className="p-5 text-right">Price</th>
                  <th className="p-5">Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td>
                      <Link href={`/product/${item.slug}`}>
                        <a className="flex items-center">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={50}
                            height={50}
                            className="object-cover border rounded-md"
                          />
                          &nbsp;
                          <span className="text-sm ml-2">{item.name}</span>
                        </a>
                      </Link>
                    </td>
                    <td className="p-5 text-right">
                      <select
                        value={item.quantity}
                        onChange={(e) =>
                          updateCartHandler(item, e.target.value)
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="p-5 text-right font-serif">
                      <span>Tk</span> {item.price}
                    </td>
                    <td className="p-5 text-center">
                      <button onClick={() => removeItemHandler(item)}>
                        <XCircleIcon className="h-5 w-5"></XCircleIcon>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="border h-36 w-full rounded-md shadow-sm p-5 my-5 lg:my-0">
            <ul>
              <li>
                <div className="pb-3 text-xl">
                  Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}) :{' '}
                  <span className="font-serif">
                    Tk.{' '}
                    {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
                  </span>
                </div>
              </li>
              <li>
                <Button
                  type="button"
                  text="Checkout"
                  handler={() => router.push('login?redirect=/shipping')}
                />
              </li>
            </ul>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(Cart), { ssr: false });
