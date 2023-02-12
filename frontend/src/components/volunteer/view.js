import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector , useDispatch} from 'react-redux';
import { Row , Col } from 'react-bootstrap';

import { MainScreen } from '../mainScreen.js'
import {ViewCard}  from './cardView/card'
import { listVolunteers } from '../../actions/volunteersActions.js';
import { Search } from './searchList/search.jsx';
import Loading from './loading.js';
import ErrorMessage from './errorMessage.js';


export const View = () => {

  const dispatch = useDispatch();
  const volunteerList =  useSelector( state => state.volunteerList);
  const { loading , volunteers , error } = volunteerList;

  const [search , setSearch ] = useState("");
  //console.log(search);
   
 
  useEffect( ()=> {
  dispatch(listVolunteers());

  }, [dispatch]);

  return (

    <MainScreen>
       <Search setSearch= {setSearch}/>
       <div> 
      {error && <ErrorMessage children = {error}/> }
      {loading && <Loading/>}
      <Row xs={1} md={3} className="g-4">
      {
        volunteers?.reverse().filter(filteredVolunteer => (
          filteredVolunteer.description.toLowerCase().includes(search.toLowerCase())
        )).map( volunteer => (
          <> 
          <Col> 
          <ViewCard
            title = {volunteer.title}
            description = {volunteer.description}
            commitment = { volunteer.commitment}
            email = {volunteer.email}
            time =  { volunteer.createdAt.substring(0,10)}
          /> 
          </Col>
          <br/>
          </>
        ))
      }
      </Row>
      </div>

    </MainScreen>
  )
}
