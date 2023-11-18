import { Row, Col } from 'antd'
import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
    const date = new Date().getFullYear()
    return (
        <Row className={styles.header}>
            <Col span={24}>
            <div className={styles.footer}><h3 className={styles.info}>Copyright &copy;{date}</h3></div>
            </Col>
       </Row>
    )
}

export default Footer