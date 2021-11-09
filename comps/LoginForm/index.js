import React from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const router = useRouter();

  // get functions to build form with useForm() hook

  function onSubmit({ username, password }) {
    fetch(`https://binibin-server.herokuapp.com/auth/login`, {
      method: "POST",
      body: JSON.stringify({ username: username, password: password }),
      headers: { "Content-Type": "application/json" },
    });
    // get return url from query parameters or default to '/'
    const returnUrl = router.query.returnUrl || "/";
    router.push(returnUrl);
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <input name="username" type="text" placeholder="Username" />
      </div>
      <div className="form-group">
        <input name="password" type="password" placeholder="Password" />
      </div>
      <button className="btn btn-primary loginBtn">Login</button>
      <style jsx>{`
        form {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        input {
          color: black;
          font-size: 18px;
          border: 5px solid #95afba;
          border-radius: 10px;
          padding: 10px;
          width: 400px;
          height: 52px;
        }
        .loginBtn {
          width: 150px;
          height: 50px;
          background-color: #598b2c;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 10px;
          box-shadow: 0px 4px 4px grey;
          border: none;
        }
        .form-group {
          padding: 10px;
        }
      `}</style>
    </form>
  );
};

export default LoginForm;
