import React from "react";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

const LoginForm = () => {
  //   const [cookie, setCookie] = useCookies["user"];
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      const response = await yourLoginFunction(username); //handle API call to sign in here.
      const data = response.data;

      setCookie("user", JSON.stringify(data), {
        path: "/",
        maxAge: 7200, // Expires after 1hr
        sameSite: true,
      });
    } catch (err) {
      console.log(err);
    }
  };
  // get functions to build form with useForm() hook

  async function onSubmit({ username, password }) {
    console.log("hello");
    await fetch(`https://binibin-server.herokuapp.com/auth/login`, {
      method: "POST",
      body: JSON.stringify({ username: username, password: password }),
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
      console.log(response);
    });
    // get return url from query parameters or default to '/'
    // const returnUrl = router.query.returnUrl || "/";
    // router.push(returnUrl);
  }

  return (
    <form onSubmit={onSubmit} method="post">
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
