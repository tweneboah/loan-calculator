import React, { useState} from 'react';
import { connect } from 'react-redux';
import { createLoan} from '../../redux/actions/loanAction';
import useForm from 'react-hook-form';

const CalculateInterestForm = (props) => {
  const initialState = {
    amount: "",
    rate: "",
    duration: ""
    
  };

     const [formData, setFormData ] = useState(initialState)

   //Create on change methods
   //This method update the state values
   const onChange = (e) => {
     setFormData({...formData, [e.target.name]: e.target.value})
   }

  //Onsubmit
  const onFormSubmit = e => {
    e.preventDefault();
    props.createLoan(formData);
  };


  return (
   
    
    
  );
}

export default connect(null, {createLoan}) (CalculateInterestForm)
