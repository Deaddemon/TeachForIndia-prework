import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector , useDispatch} from 'react-redux';

import { MainScreen } from '../mainScreen.js'
import {ViewCard}  from './cardView/card'
import { listVolunteers } from '../../actions/volunteersActions.js';
import { Search } from './searchList/search.jsx';


export const View = () => {

  const dispatch = useDispatch();
  const volunteerList =  useSelector( state => state.volunteerList);
  const { loading , volunteers , errors } = volunteerList;

  const [search , setSearch ] = useState("");
  //console.log(search);
   
 
  useEffect( ()=> {
  dispatch(listVolunteers());

  }, [dispatch])

  return (

    <MainScreen>
       <Search setSearch= {setSearch}/>
       <div> 
      {
        volunteers?.reverse().filter(filteredVolunteer => (
          filteredVolunteer.description.toLowerCase().includes(search.toLowerCase())
        )).map( volunteer => (
          <> 
          <ViewCard
            title = {volunteer.title}
            description = {volunteer.description}
            commitment = { volunteer.commitment}
            email = {volunteer.email}
            time =  { volunteer.createdAt.substring(0,10)}
          /> 
          <br/>
          </>
        ))
      }
      </div>

    </MainScreen>
  )
}
