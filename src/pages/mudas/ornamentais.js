import React, { useContext } from 'react'
import Template from '@/src/components/template'
import { GlobalContext } from '@/src/context/globalContext'
import { Container, Row, Col } from 'react-bootstrap'
import dynamic from 'next/dynamic'
const TypeList = dynamic(() => import('@/src/components/products/type-list'))

const Flowers = () => {
    const { app } = useContext(GlobalContext)
    return (
        <Template title="Produtos" isMobile={app.isMobile} current="products">
            <Container>
                <Row className="pb-5 mt-3" id="products-page">
                    <TypeList compact={true} active="flowers" />
                </Row>
                <Row>
                    <Container>
                        <Col>
                            Ornamentais
                        </Col>
                    </Container>
                </Row>
            </Container>
        </Template>
    )
}
export default Flowers