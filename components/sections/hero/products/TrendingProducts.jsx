import axios from 'axios';
import React, { useContext } from 'react'
import { toast } from 'react-toastify';
import { Store } from '../../../../utils/Store';
import Button from '../../../button/Button';
import TrendingProductItems from './trending_product_Items/TrendingProductItems'

export const TrendingProducts = ({ products }) => {
    const { state, dispatch } = useContext(Store);
    // Add to cart
    const addToCartHandler = async (product) => {
        const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
        const quantity = existItem ? existItem.quantity + 1 : 1;
        const { data } = await axios.get(`/api/products/${product._id}`);
        if (data.countInStock < quantity) {
            return toast.error('Sorry, product is out of stock');
        }
        dispatch({
            type: 'CART_ADD_ITEM',
            payload: { ...product, quantity: quantity },
        });
    };
    return (
        <div className='container mx-auto max-w-full my-3'>
            <div className='text-center my-10 mx-auto w-2/3 md:w-1/3 lg:w-1/4'>
                <h1 className="text-sm tracking-widest text-[#5a7087] uppercase">The Latest Collections</h1>
                <h2 className='text-5xl font-serif'>Explore Heich</h2>
                <Button text="Shop now" />
            </div>

            <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5 p-2 ">
                {products
                    .filter((product, index) => product.type === 'trends' && index < 5)
                    .map((product) => (
                        <TrendingProductItems
                            key={product._id}
                            product={product}
                            addToCartHandler={addToCartHandler}
                        />
                    ))}
            </div>
        </div>
    )
}
