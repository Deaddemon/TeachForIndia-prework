import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createVolunteer } from '../../actions/volunteersActions.js';
import { MainScreen } from '../mainScreen.js'
import { VolunteerForm } from './createForm/form.jsx';
import ErrorMessage from '../volunteer/errorMessage.js';
import Loading  from '../volunteer/loading.js';

export const Create = () => {

  useEffect(() => { }, []);
  const volunteerCreate = useSelector( (state) => state.volunteerCreate);
  const { loading , error , volunteer} = volunteerCreate;



  return (
    <MainScreen>
      {error && <ErrorMessage children = {error}/> }
      {loading && <Loading/>}
      <VolunteerForm/>
    </MainScreen>
  )
};
