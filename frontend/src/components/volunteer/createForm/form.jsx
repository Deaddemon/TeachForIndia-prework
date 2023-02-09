import React from "react";
import { Container, Row } from "react-bootstrap";

import "./form.css";

export const VolunteerForm = (props) => {
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
      <form onSubmit={props.onSubmit}>
        <ul role="list">
          <li>
            <label for="title">Title</label>
            <input type="text" id="title" value={props.title}  onChange={props.handleTitleChange}></input>
          </li>

          <li>
            <label for="descrition">Descrition</label>
            <textarea id="descrition" value={props.description} onChange={props.handleDescriptionChange}></textarea>
          </li>

          <li>
            <label for="commitment">No of hours/day </label>
            <input type="Number" id="commitment" value={props.commitment} onChange={props.handleCommitmentChange}></input>
          </li>

          <li>
            <label for="email">Email address</label>
            <input type="email" id="email" value={props.email} onChange={props.handleEmailChange}></input>
          </li>

          <li col-1>
            <label for="address">Street address</label>
            <input type="text" id="address" value={props.address} onChange={props.handleAddressChange}></input>
          </li>

          <li>
            <label for="city">City</label>
            <input type="text" id="city" value={props.city} onChange={props.handleCityChange}></input>
          </li>

          <li>
            <label for="country">Country</label>
            <input type="text" id="country" value={props.country} onChange={props.handleCountryChange}></input>
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
            <button onClick={props.resetHandler}>Submit</button>
          </li>
        </ul>
      </form>
    </>
  );
};
