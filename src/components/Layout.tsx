import React from 'react'
import Header from './Header'
import Footer from './Footer'

interface childrenType{
  children: React.ReactNode
}
const Layout = ({children}: childrenType ) => {
  return (
    <div><Header />{children}<Footer/></div>
  )
}

export default Layout