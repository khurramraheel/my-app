'use client';

import './login.css';
import {useForm} from 'react-hook-form';
import users from '@/data';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, setUser } from '@/store/userReducer';
import { toast } from 'react-toastify';
import axios from 'axios';
import {v4} from 'uuid';




// hook = piece of funcionality


export default function Login(){

     let dispatch = useDispatch();

     let user = useSelector(function(store){
      return store.userData.user;
     })
    
    let {register, handleSubmit, formState:{errors}} =  useForm();

   async function loginKaro(meraData){

            meraData.type = 'createProduct';
            meraData.createdBy = user._id;

           let resp =  await axios.post('/api/product', meraData);
          toast.success("Product has been created")
        
      
    }


    return <div className="login-container">
  {/* Pills navs */}
  {/* Pills navs */}
  {/* Pills content */}
  <div className="tab-content">
    <div
      className="tab-pane fade show active"
      id="pills-login"
      role="tabpanel"
      aria-labelledby="tab-login"
    >

        {/* handleSubmit ka kaam,
        registered field ko validate keda
        registered fields ka data pick krne aapke function ko param m pass bhi kardega
        */}
      

      <form onSubmit={handleSubmit(loginKaro)}>
        <div className="text-center mb-3">
          <p>Signup Form</p>
          <button
            type="button"
            data-mdb-button-init=""
            data-mdb-ripple-init=""
            className="btn btn-link btn-floating mx-1"
          >
            <i className="fab fa-facebook-f" />
          </button>
          <button
            type="button"
            data-mdb-button-init=""
            data-mdb-ripple-init=""
            className="btn btn-link btn-floating mx-1"
          >
            <i className="fab fa-google" />
          </button>
          <button
            type="button"
            data-mdb-button-init=""
            data-mdb-ripple-init=""
            className="btn btn-link btn-floating mx-1"
          >
            <i className="fab fa-twitter" />
          </button>
          <button
            type="button"
            data-mdb-button-init=""
            data-mdb-ripple-init=""
            className="btn btn-link btn-floating mx-1"
          >
            <i className="fab fa-github" />
          </button>
        </div>
        <p className="text-center">or:</p>

             <div data-mdb-input-init="" className="form-outline mb-4">
          
          <input {...register('title', {required:true})} type="text" id="loginName" className="form-control" />
         {errors.title ? <div style={{color:'red'}}>This field is required</div> : null }

          <label className="form-label" htmlFor="loginName">
            Title
          </label>
        </div>

        {/* Email input */}
        <div data-mdb-input-init="" className="form-outline mb-4">
          
          <input {...register('price', {required:true})} type="number" id="loginName" className="form-control" />
         {errors.price ? <div style={{color:'red'}}>This field is required</div> : null }

          <label className="form-label" htmlFor="loginName">
            Price
          </label>
        </div>


        {/* Password input */}
        <div data-mdb-input-init="" className="form-outline mb-4">
          <input {...register('description', {required:true})}className="form-control" />
          


          {/* {errors.loginPassword ? <div className='text-danger'>Required field</div> : null} */}


          <label className="form-label" htmlFor="loginPassword">
            Description
          </label>
        </div>
        {/* 2 column grid layout */}
        <div className="row mb-4">
          <div className="col-md-6 d-flex justify-content-center">
            {/* Checkbox */}
            <div className="form-check mb-3 mb-md-0">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue=""
                id="loginCheck"
                defaultChecked=""
              />
              <label className="form-check-label" htmlFor="loginCheck">
                {" "}
                Remember me{" "}
              </label>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            {/* Simple link */}
            <a href="#!">Forgot password?</a>
          </div>
        </div>
        {/* <div>
            <select {...register('city', {validate: function(value){

                if(value == 'Select City'){
                    return false;
                }else{
                    return true;
                }

            }})} className='form-control'>
                <option>Select City</option>
                <option>Faisalabad</option>
                <option>Gojra</option>
                <option>Toba</option>
                <option>Jaranawala</option>
            </select>
          {errors.city?.type == 'validate' ? <div class='text-danger'>Select a city please</div> : null}

        </div> */}
        {/* Submit button */}
        <button
          type="submit"
          data-mdb-button-init=""
          data-mdb-ripple-init=""
          className="btn btn-primary btn-block mb-4"
        >
         Create Product
        </button>
        {/* Register buttons */}
        <div className="text-center">
          <p>
            Not a member? <a href="#!">Register</a>
          </p>
        </div>
      </form>
    </div>
    <div
      className="tab-pane fade"
      id="pills-register"
      role="tabpanel"
      aria-labelledby="tab-register"
    >
      <form>
        <div className="text-center mb-3">
          <p>Create Product page</p>
          <button
            type="button"
            data-mdb-button-init=""
            data-mdb-ripple-init=""
            className="btn btn-link btn-floating mx-1"
          >
            <i className="fab fa-facebook-f" />
          </button>
          <button
            type="button"
            data-mdb-button-init=""
            data-mdb-ripple-init=""
            className="btn btn-link btn-floating mx-1"
          >
            <i className="fab fa-google" />
          </button>
          <button
            type="button"
            data-mdb-button-init=""
            data-mdb-ripple-init=""
            className="btn btn-link btn-floating mx-1"
          >
            <i className="fab fa-twitter" />
          </button>
          <button
            type="button"
            data-mdb-button-init=""
            data-mdb-ripple-init=""
            className="btn btn-link btn-floating mx-1"
          >
            <i className="fab fa-github" />
          </button>
        </div>
        <p className="text-center">or:</p>
        {/* Name input */}
        <div data-mdb-input-init="" className="form-outline mb-4">
          <input type="text" id="registerName" className="form-control" />
          <label className="form-label" htmlFor="registerName">
            Name
          </label>
        </div>
        {/* Username input */}
        <div data-mdb-input-init="" className="form-outline mb-4">
          <input type="text" id="registerUsername" className="form-control" />
          <label className="form-label" htmlFor="registerUsername">
            Username
          </label>
        </div>
        {/* Email input */}
        <div data-mdb-input-init="" className="form-outline mb-4">
          <input type="email" id="registerEmail" className="form-control" />
          <label className="form-label" htmlFor="registerEmail">
            Email
          </label>
        </div>
        {/* Password input */}
        <div data-mdb-input-init="" className="form-outline mb-4">
          <input
            type="password"
            id="registerPassword"
            className="form-control"
          />
          <label className="form-label" htmlFor="registerPassword">
            Password
          </label>
        </div>
        {/* Repeat Password input */}
        <div data-mdb-input-init="" className="form-outline mb-4">
          <input
            type="password"
            id="registerRepeatPassword"
            className="form-control"
          />
          <label className="form-label" htmlFor="registerRepeatPassword">
            Repeat password
          </label>
        </div>
        {/* Checkbox */}
        <div className="form-check d-flex justify-content-center mb-4">
          <input
            className="form-check-input me-2"
            type="checkbox"
            defaultValue=""
            id="registerCheck"
            defaultChecked=""
            aria-describedby="registerCheckHelpText"
          />
          <label className="form-check-label" htmlFor="registerCheck">
            I have read and agree to the terms
          </label>
        </div>
        {/* Submit button */}
        <button
          type="submit"
          data-mdb-button-init=""
          data-mdb-ripple-init=""
          className="btn btn-primary btn-block mb-3"
        >
          Sign in
        </button>
      </form>
    </div>
  </div>
</div>

}