import React, { useState } from 'react';
import "./login.scss";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {createOrEditUserAction, getUserAction} from "../../../store/actions/loginAction"


export default function Login() {
  const [userDetails, setUserDetails] = useState<any>({});
  
  const dispatch = useDispatch();
  const [onload, setOnload] = useState(
    {
        onload: false,
        // addOnload: false,
        // removeOnload: false,
        getOnload:false,
        saveOnload: false
    }
);


  // const [uniqueKey] = useState('')
	// const [email, setEmail] = useState('');
	// const [password, setPassword] = useState('');
  // const [name,setUserName] = useState('')
	// async function submit(e:any){
	// 	e.preventDefault();

	// 	try{
	// 		await axios.post("http://localhost:3000/user/api/login",{name,email,password}||{email,password})
	// 	}
	// 	catch{console.log(e);
	// 	}
		
	// }
  const setUserData = (e: any, key: any) => {
    setUserDetails({ ...userDetails, [key]: e.target.value})
}

  const saveUser = () => {
    let payload = {
      uniqueKey: userDetails?.uniqueKey,
      name: userDetails?.name,
      email:userDetails?.email,
      password:userDetails?.password
    }
    dispatch(createOrEditUserAction(payload));
    setOnload({ ...onload, saveOnload: true })
  }

  const getUser = () => {
    let payload = {
      email:userDetails?.email,
      password:userDetails?.password
    }
    dispatch(getUserAction(payload));
    setOnload({ ...onload, getOnload: true })
  }
  

  return (
    <div className="logindesign">
      <div className="main">
        <input type="CheckBox" id="chk" aria-hidden="true" />

        <div className="signup">
          {/* <form> */}
            <label className="labels" htmlFor="chk" aria-hidden="true">
              Sign up
            </label>
            <input
              className="inputfield"
              type="text"
              name="txt"
              autoComplete="off"
              placeholder="User name"
              onChange={(e: any) => setUserData(e, "name")}
            />
            <input
              className="inputfield"
              type="email"
              name="email"
              autoComplete="off"
              placeholder="Email"
              onChange={(e: any) => setUserData(e, "email")}
            />
            <input
              className="inputfield"
              type="password"
              name="pswd"
              autoComplete="off"
              placeholder="Password"
              onChange={(e: any) => setUserData(e, "password")}
            />
            <button className="buttonPress"  onClick={saveUser}>Sign up</button>
          {/* </form> */}
        </div>

        <div className="login">
          {/* <form> */}
            <label className="labels" htmlFor="chk" aria-hidden="true">
              Login
            </label>
            <input
              className="inputfield"
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e: any) => setUserData(e, "email")}
              // onChange={(e)=>{setEmail(e.target.value)}}
            />
            <input
              className="inputfield"
              type="password"
              name="pswd"
              placeholder="Password"
              onChange={(e: any) => setUserData(e, "password")}
			        // onChange={(e)=>{setPassword(e.target.value)}}
            />
            <button className="buttonPress" onClick={getUser}>Login</button>
          {/* </form> */}
        </div>
      </div>
    </div>
  );
}
