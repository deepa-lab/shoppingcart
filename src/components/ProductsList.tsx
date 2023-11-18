"use client"

import React, { useEffect} from 'react'
import { Row, Col, Button, Spin } from 'antd'
import styles from './ProductsList.module.css'
const API_URL = 'https://dummyjson.com/products'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from './ProductSlice'
import { addToCart, removeFromCart } from './CartSlice'
import { AnyAction } from '@reduxjs/toolkit'

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
const ProductsList = (): JSX.Element => {

  const state = useSelector(state => state) as stateType
  
  const { products } = state
  const {cartProductIds} = state.cart as cartType
  console.log(state)
const fetchStatus = products.fetchStatus;
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllProducts(API_URL) as unknown as AnyAction);
  }, [dispatch])


  return (
    <Row className={styles.productlist}>
      {fetchStatus === 'loading' && (
        
      
        <p className={styles.empty}><Spin size='large'/></p>)}
      { }
      {fetchStatus === 'success' && (products?.data?.products?.length > 0 && products?.data?.products?.map((product, i: number) => {
        return <Col xs={20} sm={16} md={12} lg={8} xl={4} key={i} className={styles.product}><Image src={product.images[0]} alt='Logo' className={styles.image} width={200} height={200} /><p className={styles['product-item']}>{product.brand}</p><p className={styles['product-item']}>{product.price}</p>
        {!cartProductIds?.includes(product.id as unknown as {id: number}) && <Button type='primary' block onClick={() => { dispatch(addToCart(product.id)) }}>Add To Cart</Button>}
        {cartProductIds?.includes(product.id as unknown as {id: number}) && <Button type='primary' block onClick={() => { dispatch(removeFromCart(product.id)) }}>Remove From Cart</Button>}</Col>
      }))}
      {fetchStatus === 'error' && (
        
      
      <p className={styles.empty}>There was an error loading products!</p>)}
    
    </Row>


  )
}

export default ProductsList