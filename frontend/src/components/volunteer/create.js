import React, { useState,useEffect } from 'react';
import {useDispatch , useSelector  } from 'react-redux';

import { createVolunteer } from '../../actions/volunteersActions.js';
import { MainScreen } from '../mainScreen.js'
import { VolunteerForm } from './createForm/form.jsx';

export const Create = ( ) => {

  const [title , setTitle] = useState("");
  const [description , setDescription]  = useState("");
  const [commitment , setCommitment] = useState("");
  const [email , setEmail] = useState("");
  const [address , setAddress] = useState("");
  const [city , setCity] = useState("");
  const [country , setCountry] = useState("");
 
  const dispatch = useDispatch();

  const volunteerCreate = useSelector( (state) => state.volunteerCreate);
  const { loading , error , volunteer} = volunteerCreate;

  const resetHandler = () => {
    setTitle("");
    setDescription("");
    setCommitment("");
    setEmail("");
    setAddress("");
    setCity("");
    setCountry("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
     
    if( !title || !description || !commitment || !email ) {
      alert("Fill the entries before submitting!")
      return ;
    }
    dispatch( createVolunteer( title , description,commitment , email,address, city,country));
    alert("Opportunity is posted!")
    resetHandler();
    
  }
  useEffect(() => {}, []);

  const handleTitleChange = (e) =>{
    setTitle(e.target.value);
  }
  const handleDescriptionChange = (e) =>{
    setDescription(e.target.value);
  }
  const handleEmailChange = (e) =>{
    setEmail(e.target.value);
  }
  const handleCommitmentChange = (e) =>{
    setCommitment(e.target.value);
  }
  const handleAddressChange = (e) =>{
    setAddress(e.target.value);
  }
  const handleCityChange = (e) =>{
    setCity(e.target.value);
  }
  const handleCountryChange = (e) =>{
    setCountry(e.target.value);
  }
  

  return (
    <MainScreen>
      <VolunteerForm
      title = {title}
      handleTitleChange = {handleTitleChange}
      description={description}
      handleDescriptionChange = {handleDescriptionChange}
      commitment = {commitment}
      handleCommitmentChange = {handleCommitmentChange}
      email = {email}
      handleEmailChange = {handleEmailChange}
      address = {address}
      handleAddressChange = {handleAddressChange}
      city = {city}
      handleCityChange = {handleCityChange}
      country = {country}
      handleCountryChange = {handleCountryChange}
      onSubmit = {submitHandler}
      resetHandler = {resetHandler}


      />
    </MainScreen>
  )
};
