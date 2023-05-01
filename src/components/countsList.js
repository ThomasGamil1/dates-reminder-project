import React from 'react'
import { Col, Row } from 'react-bootstrap';

const CountsList = ({personInfo}) => {
  return (
    <Row className="justify-content-center">
    <Col sm='8' className="">
      <div className="rectangle p-2">
        {
          personInfo.length ? (personInfo.map(item =>{
            return (
              <div key={item.id} className="d-flex border-bottom mx-3 my-2">
               <img className="img-avatar" src={item.img} alt="info"/>
                <div className="px-2">
                  <p className="d-inline fs-5">{item.PerName}</p>
                  <p className="fs-5">{item.PerTime}</p>
                </div>
             </div>  
            )
          })) : <h2 className="p-5">لا يوجد مواعيد اليوم</h2>
        }
      </div>
    </Col>
  </Row>
  )
}

export default CountsList