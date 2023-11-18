import React from 'react'
import Logo from './Logo'
import CartWidget from './CartWidget'
import { Col, Row } from 'antd';
import styles from './Header.module.css'
import classes from './CartWidget.module.css'

const Header = () => {
    return (
        <Row className={styles.header}>
            <Col xs={20} sm={16} md={12} lg={8} xl={4} > 
            <Logo />
            </Col>
            <Col xs={18} sm={18} md={18} lg={8} xl={16}>
            <div><h1 className={styles.heading}>Shopper <span className={styles['heading-second']}>Zone</span></h1></div>
            </Col>
            <Col xs={6} sm={4} md={4} lg={8} xl={4}  className={classes.cart}>
            <CartWidget />
            </Col>
       </Row>
    )
}

export default Header