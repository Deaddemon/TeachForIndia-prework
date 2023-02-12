import React, {useState} from "react";
import { Container, Row } from "react-bootstrap";
import {useDispatch , useSelector  } from 'react-redux';


import "./form.css";
import { createVolunteer } from "../../../actions/volunteersActions";

export const VolunteerForm = (props) => {

  const [title , setTitle] = useState("");
  const [description , setDescription]  = useState("");
  const [commitment , setCommitment] = useState("");
  const [email , setEmail] = useState("");
  const [address , setAddress] = useState("");
  const [city , setCity] = useState("");
  const [country , setCountry] = useState("");

  const resetHandler = () => {
    setTitle("");
    setDescription("");
    setCommitment("");
    setEmail("");
    setAddress("");
    setCity("");
    setCountry("");
  };
  
 
  
   
  const dispatch = useDispatch();

  const volunteerCreate = useSelector( (state) => state.volunteerCreate);
  const { loading , error , volunteer} = volunteerCreate;

 
  const submitHandler = (e) => {
    e.preventDefault();
     
    if( !title || !description || !commitment || !email ) {
      alert("Fill the entries before submitting!")
      console.log(title);
      console.log(description);
      console.log(commitment);
      console.log(email);
      return ;
    }
    dispatch( createVolunteer( title , description,commitment , email));
    alert("Opportunity is posted!")
    resetHandler();
    
  }

  return (
    <>
      <Container>
        <Row className="text-center">
          <h1>Post A volunteer Opportunity</h1>
          <p>
            Posting job opportunities is an important task for a company and it
            can be approached mindfully to ensure that it is done in a
            responsible and ethical manner. Before posting, take time to
            carefully review the job description, requirements, and duties to
            ensure that it accurately represents the position being offered.
            Consider the language used and make sure it is inclusive and
            non-discriminatory. When posting the opportunity, aim to create a
            clear and concise description that accurately reflects the position
            and the company culture. By approaching this task mindfully, you can
            help to attract the right candidates and foster a positive and
            inclusive workplace.
          </p>
          <br />
        </Row>
      </Container>
      <form onSubmit={submitHandler}>
        <ul role="list">
          <li>
            <label for="title">Title</label>
            <input type="text" id="title" value={title}  onChange={(e) => setTitle(e.target.value)}></input>
          </li>

          <li>
            <label for="descrition">Descrition</label>
            <textarea id="descrition" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          </li>

          <li>
            <label for="commitment">No of hours/day </label>
            <input type="Number" id="commitment" value={commitment} onChange={(e)=> setCommitment(e.target.value)}></input>
          </li>

          <li>
            <label for="email">Email address</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
          </li>

          <li col-1>
            <label for="address">Street address</label>
            <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)}></input>
          </li>

          <li>
            <label for="city">City</label>
            <input type="text" id="city" value={city} onChange={(e)=> setCity(e.target.value) }></input>
          </li>

          <li>
            <label for="country">Country</label>
            <input type="text" id="country" value={country} onChange={(e)=> setCountry(e.target.value)}></input>
          </li>

          <li>
            <label for="area">Area of expertise</label>
            <select id="area">
              <option value="undefined">--</option>
              <option value="design">Design</option>
              <option value="development">Development</option>
              <option value="management">Management</option>
              <option value="quality-assurannce">Quality assurance</option>
            </select>
          </li>

          <li>
            <button  >Submit</button>
          </li>
        </ul>
      </form>
    </>
  );
};
