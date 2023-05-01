import React, { useState } from "react";
import {Container} from 'react-bootstrap';
import {personInfo} from './data.js';
import CountsPerson from './components/countsPerson.js';
import CountsList from './components/countsList.js';
import DatesAction from "./components/datesAction.js";



function App() {

  const [PersonData, SetPersonData] = useState(personInfo)
  
  const onDelete = ()=>{
    SetPersonData([])
  }
  const onViewData = ()=>{
    SetPersonData(personInfo)
  }

  return (
    <div className="font main-body">

      <Container className="py-5">

        <CountsPerson personInfo={PersonData}/>

        <CountsList personInfo={PersonData}/>

        <DatesAction deleteData={onDelete} viewData={onViewData}/>

      </Container>

    </div>
  );
}

export default App;
