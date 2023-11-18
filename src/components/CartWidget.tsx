"use client"
import React from 'react'
import { ShoppingCartOutlined } from '@ant-design/icons'
import styles from './CartWidget.module.css'
import { useRouter } from 'next/navigation'
import { RootState } from '@/store'
import { useSelector } from 'react-redux'


const CartWidget = () => {
  const cartCount = useSelector((state: RootState) => state.cart?.cartProductIds?.length)
  const router = useRouter()
  return (
    <div className={styles['cart-container']} onClick={()=>{router.push('/cart')}}> <span><ShoppingCartOutlined className={styles.cart}/><sup className={styles['cart-count']}>{cartCount}</sup></span></div>
  )
}

export default CartWidget