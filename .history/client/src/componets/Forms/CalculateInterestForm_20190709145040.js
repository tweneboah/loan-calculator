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

   //On Amount Change
   const onChangeAmount = (e) => {
    setFormData({...formData, amount : e.target.value})
  }

  //on rate change
  const onChnageRate = (e) => {
     setFormData({...formData, rate: e.target.value})
  }

  //On duration Change
  const onChangeDuration = (e) => {
     setFormData({...formData, duration: e.target.value})
  }

  //Onsubmit
  const onFormSubmit = e => {
   // e.preventDefault();
    console.log(formData.rate)
    props.createLoan(formData);
  };


   const { register, handleSubmit, watch, errors } = useForm()


  return (
    <div className="App">
        <section className="container">
      <h5 className="large text-primary">Calculate your interest Rate</h5>

      <form className="form" onSubmit = {handleSubmit(onFormSubmit)}>

        <div className="form-group text-danger">

          <input
           type="text"
            placeholder="Amount" 
            name = "amount" 
            value = {formData.amount}
             onChange = {onChangeAmount} 
              ref = {register({required: true})} />
            {errors.amount && 'Amount  is required'}
        </div>
      

        <div className="form-group">
          <input
           type="text" 
           placeholder="Rate" 
           name="rate" 
           onChange = {onChnageRate} 
           value = {formData.rate} 
           ref = {register({required: true})}
          
           />
         
        </div>
        <small>
         Don't inclide the % sign we will take care of it 😀
      </small>
        <div className="form-group">
          <input
            type="text"
            placeholder="Duration"
            name="duration"
            onChange = {onChangeDuration}
            value = {formData.duration}
          />
        </div>

        <input type="submit" className="btn btn-primary" value="Calculate" />
      </form>
    </section>
    </div>



    // <form onSubmit = {handleSubmit(onSubmit)}>
    //      <input type="text" name="example" defaultValue="test" ref={register} />


    //      <input type="text" name="exampleRequired" ref={register({ required: true })} />
    //   {/* errors will return when field validation fails  */}
    //   {errors.example && '<span>This field is required</span>'}
    // <input type="submit" />
    // </form>
  );
}

export default connect(null, {createLoan}) (CalculateInterestForm)
