import React from 'react'
import { Form , Button , FormControl} from 'react-bootstrap';
import '../searchList/search.css';

export const Search = ({setSearch}) => {


  return (
    
     <div className='search-form'> 
      <Form inline >
        <FormControl
           
          type="text"
          placeholder="Search Keywords"
          className="mr-sm-2 search-form-control"
          onChange={(e) => setSearch(e.target.value)}
           
        />
      </Form>
      </div>
    
  
     
  )
}
