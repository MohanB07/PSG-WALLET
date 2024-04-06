import axios from 'axios';
import React, { createContext, useContext, useState } from 'react';

const BASE_URL = "http://192.168.54.81:5000/PSG-WALLET/";

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

      if (response.data.success) {
        return true;
      } else {
        return false;
      }

    } catch (error) {
      console.error('Network Error:', error);
      setError('There was a network error. Please try again later.');
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

  const verifyOTP = async (id, otp) => {
    try {
      otpData = {
        enteredOTP : otp,
        id : id
      };

      const response = await axios.post(`${BASE_URL}verifyOtp`, otpData)
      console.log( "from global context : " + response.data.success)

      if (response.data.success) {
        return true;
      } else {
        return false;
      }

    } catch (error) {
      console.error('Network Error:', error);
      setError('There was a network error. Please try again later.');
    }
  }

  return (
    <GlobalContext.Provider value={{
        validateStudent,
        sendEmail,
        verifyOTP,
        error
    }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
