// GlobalContext.js

import axios from 'axios';
import React, { createContext, useContext, useState } from 'react';

const BASE_URL = "http://192.168.1.127:5000/PSG-WALLET/";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [error, setError] = useState(null);

  const validateStudent = async (id) => {
    try {
      console.log(id)
      const response = await axios.get(`${BASE_URL}validateStudent`, {
        params: { id: id }
      });
      console.log(response.data.success)
      // console.log(response.data.success);
      if (response.data.success) {
        return true;
      } else {
        return false;
      }

    } catch (error) {
      console.error('Network Error:', error);
      setError('There was a network error. Please try again later.');
      return false;
    }
  };

  const sendEmail = async (id) => {
    try {
      // console.log("id from axios func", id);
      await axios.get(`${BASE_URL}sendEmail`, {
        params: { id: id }
      });
    } catch (error) {
      console.error('Network Error:', error);
      setError('There was a network error. Please try again later.');
      return false;
    }
  }

  return (
    <GlobalContext.Provider value={{
        validateStudent,
        sendEmail,
        error
    }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
