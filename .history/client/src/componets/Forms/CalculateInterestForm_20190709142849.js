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
  const onChangeDuration = () => {
     
  }
  //Onsubmit
  const onFormSubmit = e => {
    e.preventDefault();
    console.log(formData)
    props.createLoan(formData);
  };


   const { register, handleSubmit, watch, errors} = useForm()


  return (
    <div className="App">
        <section className="container">
      <h3 className="large text-primary">Calculate your interest Rate</h3>
      <form className="form" onSubmit = {onFormSubmit}>
        <div className="form-group">
          <input type="text" placeholder="Amount" value = {formData.amount} onChange = {onChangeAmount}  />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Rate" name="rate" onChange = {e => onChange(e)} />
         
        </div>
        <small>
         Don't inclide the % sign we will take care of it 😀
      </small>
        <div className="form-group">
          <input
            type="text"
            placeholder="Duration"
            name="duration"
            onChange = {onChange}
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
