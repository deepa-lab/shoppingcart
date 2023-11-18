import React from 'react'
import Image from 'next/image'
import LogoImage from '@/assets/images/shopping-bags.svg'
import styles from './Logo.module.css'

const Logo = () => {
  return (
    <Image src={LogoImage} alt = 'Logo' width = '200' height = '200' className={styles.logo}/>
  )
}

export default Logo