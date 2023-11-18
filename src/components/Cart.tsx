"use client"
import { Row, Col, Select, InputNumber, Button, Space, Card } from 'antd'
import React, { useState } from 'react'
import Image from 'next/image'
import { RootState } from '@/store'
import { useDispatch, useSelector } from 'react-redux'

import styles from './Cart.module.css'
import cartProductStyles from './Cart.module.css'
import { removeFromCart } from './CartSlice'
import { useRouter } from 'next/navigation'
import { ShoppingCartOutlined } from '@ant-design/icons'
import Link from 'next/link'
interface productType{
  
  data:{
  products:{
  id: string,
  images: string,
  brand: string,
  price: string
  }[]
},
fetchStatus: string
}
interface cartType{
  cartProductIds:{
    id: number
  }[]
}
interface stateType{
products : productType,
cart: cartType
}


const Cart = () => {

  const dispatch = useDispatch()
  const router = useRouter()

  const state = useSelector((state) => state) as stateType
  const { products } = state
  const { cartProductIds } = state.cart
  const productData = products?.data?.products?.filter(product => cartProductIds?.includes(product.id as unknown as {id: number}));
  // const cartTotal = () => {
  //   const updatedItemPrice = cart?.map(item => item.price * item.quantity)
  //   // console.log(updatedItemPrice)
  //   return updatedItemPrice.reduce(function (total, item) { return total + item }, 0)
  // }


  // const updatePrice = (product: { id: any }) => {
  //   dispatch(increment({ id: product.id }))
  //   // cartTotal()


  // }
  const { Option } = Select;

  const selectBefore = (
    <Button>-</Button>
  );
  const selectAfter = (
    <Button>+</Button>
  );
  return (
    <>
    <Space
      direction="vertical"
      size="middle"
      style={{
        display: 'flex',
      }}>
      <h1 className={cartProductStyles.heading}>Cart</h1>
      <Button type='link' className = {cartProductStyles.btn} onClick={() => { router.push('/')}}>Go Back</Button>
      {productData?.length > 0 && productData?.map((product, i) =>
        <Card key={i} size="small" className={cartProductStyles.card}>
          <Image src={product.images[0]} alt='Logo' width={200} height={150} />
          <p>{product.brand}</p>
          <p>{product.price}</p>
          <Button type='primary' onClick={() => { dispatch(removeFromCart(product.id)) }}>Remove From Cart</Button>
        </Card>)}
    </Space>
     {productData?.length == 0 && (
      <Card size="small" className={cartProductStyles.card}>
      <ShoppingCartOutlined className={cartProductStyles.cart}/>
      <p className={cartProductStyles.info}>Your cart is empty! Click <Link href = "/">here</Link> to add...</p>
      </Card>)}
   </>)}
export default Cart;