import axios from 'axios';
import { VOLUNTEER_CREATE_FAIL, VOLUNTEER_CREATE_REQUEST, VOLUNTEER_CREATE_SUCCESS, VOLUNTEER_LIST_FAIL, VOLUNTEER_LIST_REQUEST, VOLUNTEER_LIST_SUCCESS } from '../constants/volunteersConstant.js';

export const listVolunteers = () => async (dispatch, getState) => {
    try {
      dispatch({
        type: VOLUNTEER_LIST_REQUEST,
      });
  
 
  
      const { data } = await axios.get(`/volunteer`);
  
      dispatch({
        type: VOLUNTEER_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: VOLUNTEER_LIST_FAIL,
        payload: message,
      });
    }
  };
  

export const createVolunteer= (title , description,commitment , email,address, city,country) => async (
    dispatch,
    getState
  ) => {
    try {
      dispatch({
        type: VOLUNTEER_CREATE_REQUEST,
      });
 
  
      const { data } = await axios.post(
        `/volunteer/create`,
        { title , description,commitment , email,address, city,country}
      );
  
      dispatch({
        type: VOLUNTEER_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: VOLUNTEER_CREATE_FAIL,
        payload: message,
      });
    }
  };