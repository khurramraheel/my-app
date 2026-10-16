'use client';

import './login.css';
import {useForm} from 'react-hook-form';
import users from '@/data';
import { useDispatch } from 'react-redux';
import { setUser } from '@/store/userReducer';
import axios from 'axios';
import { toast } from 'react-toastify';



// hook = piece of funcionality


export default function Login(){

     let dispatch = useDispatch();
    
    let {register, handleSubmit, formState:{errors}} =  useForm();

    async function loginKaro(meraData){

          meraData.type = 'login';


            let abc = await axios.post('/api/auth', meraData);
      

              // let userMilgya = users.find(function(user){

              //   if(user.email == meraData.email && user.password == meraData.password){
              //     return true;
              //   }

              // });


                  
              if(abc.data){

                localStorage.setItem('ckey', abc.data.token);

                dispatch( setUser(abc.data.user) );

              }else{
                toast.error("Invalid credentials");
              }


    }


    return <div className="login-container">
  {/* Pills navs */}
  <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
    <li className="nav-item" role="presentation">
      <a
        className="nav-link active"
        id="tab-login"
        data-mdb-pill-init=""
        href="#pills-login"
        role="tab"
        aria-controls="pills-login"
        aria-selected="true"
      >
        Login
      </a>
    </li>
    <li className="nav-item" role="presentation">
      <a
        className="nav-link"
        id="tab-register"
        data-mdb-pill-init=""
        href="#pills-register"
        role="tab"
        aria-controls="pills-register"
        aria-selected="false"
      >
        Register
      </a>
    </li>
  </ul>
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
          <p>Sign in with:</p>
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
        {/* Email input */}
        <div data-mdb-input-init="" className="form-outline mb-4">
          
          <input {...register('email', {required:true})} type="text" id="loginName" className="form-control" />
         {errors.email ? <div style={{color:'red'}}>This field is required</div> : null }

          <label className="form-label" htmlFor="loginName">
            Email or username
          </label>
        </div>
        {/* Password input */}
        <div data-mdb-input-init="" className="form-outline mb-4">
          <input {...register('password', {required:true})} type="password" id="loginPassword" className="form-control" />
          
          {errors.password?.type == 'required' ? <div class='text-danger'>Required field</div> : null}
          {/* {errors.password?.type == 'minLength' ? <div class='text-danger'>min 8 lettes rqreuiqr</div> : null}
          {errors.password?.type == 'maxLength' ? <div class='text-danger'>max 8 lettes rqreuiqr</div> : null} */}
            


          {/* {errors.loginPassword ? <div className='text-danger'>Required field</div> : null} */}


          <label className="form-label" htmlFor="loginPassword">
            Password
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
        {/* Submit button */}
        <button
          type="submit"
          data-mdb-button-init=""
          data-mdb-ripple-init=""
          className="btn btn-primary btn-block mb-4"
        >
          Sign in
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
          <p>Sign up with:</p>
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