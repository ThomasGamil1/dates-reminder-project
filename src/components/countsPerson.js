import React from 'react'
import { Col, Row } from 'react-bootstrap';

const CountsPerson = ({personInfo}) => {
  return (
    
        <Row className="justify-content-center my-2">
            <Col sm='8' className="">
            لديك {personInfo.length} مواعيد اليوم 
            </Col>
        </Row>
  )
}

export default CountsPerson