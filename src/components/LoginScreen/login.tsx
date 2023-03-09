import React, { useState } from 'react';
import "./login.scss";
import axios from 'axios';

export default function Login() {

  const [uniqueKey] = useState('')
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
  const [name,setUserName] = useState('')
	async function submit(e:any){
		e.preventDefault();

		try{
			await axios.post("http://localhost:3000/user/api/login",{uniqueKey,name,email,password})
		}
		catch{console.log(e);
		}
		
	}

  return (
    <div className="logindesign">
      <div className="main">
        <input type="CheckBox" id="chk" aria-hidden="true" />

        <div className="signup">
          <form>
            <label className="labels" htmlFor="chk" aria-hidden="true">
              Sign up
            </label>
            <input
              className="inputfield"
              type="text"
              name="txt"
              placeholder="User name"
              onChange={(e)=>{setUserName(e.target.value)}}
            />
            <input
              className="inputfield"
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e)=>{setEmail(e.target.value)}}
            />
            <input
              className="inputfield"
              type="password"
              name="pswd"
              placeholder="Password"
              onChange={(e)=>{setPassword(e.target.value)}}
            />
            <button className="buttonPress"  onClick={submit}>Sign up</button>
          </form>
        </div>

        <div className="login">
          <form>
            <label className="labels" htmlFor="chk" aria-hidden="true">
              Login
            </label>
            <input
              className="inputfield"
              type="email"
              name="email"
              placeholder="Email"
			  
            />
            <input
              className="inputfield"
              type="password"
              name="pswd"
              placeholder="Password"
			  onChange={(e)=>{setPassword(e.target.value)}}
            />
            <button className="buttonPress">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
