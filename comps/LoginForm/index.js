import React from 'react';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import UserContext from '../../comps/UserContext';
import { loginUser } from '../../network';

const LoginForm = () => {
	const router = useRouter();
	const { signIn } = useContext(UserContext);

	async function onSubmit(e) {
		e.preventDefault();
		console.log(e.target.username.value);
		const result = await fetch(
			'https://binibin-server.herokuapp.com/auth/login',
			{
				credentials: 'include',
				method: 'POST',
				body: JSON.stringify({
					username: e.target.username.value,
					password: e.target.password.value,
				}),
				headers: { 'Content-Type': 'application/json' },
			}
		)
		// loginUser(e.target.username.value, e.target.password.value)
			.then((response) => {
				console.log('---------reponse obj----------------------');
				console.log(response);
				if (response.ok) {
					return response.json();
				}
			})
			.then((token) => {
				console.log('---------token obj----------------------');
				console.log(token);
				if (signIn(token)) {
					router.push('/dashboard');
				}
			});
	}

	return (
		<form onSubmit={onSubmit} method='post'>
			<div className='form-group'>
				<input name='username' type='text' placeholder='Username' />
			</div>
			<div className='form-group'>
				<input name='password' type='password' placeholder='Password' />
			</div>
			<button className='btn btn-primary loginBtn'>Login</button>
			<style jsx>{`
        form {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        input {
          width: 400px;
          height: 52px;
          color: black;
          font-size: 18px;
          border: 5px solid #0e73aa;
          border-radius: 10px;
          padding: 10px;
        }
        .loginBtn {
          background:#2C5489;
          color: #fff;
          height:60px;
          width:200px;
          cursor: pointer;
          margin-bottom: 0;
          border-radius: 10px;
          border-color: transparent;
          text-align: center;
          font-size:24px;
          font-family: font-family: 'Hind', sans-serif;
        }
        .form-group {
          padding: 10px;
        }
      `}</style>
		</form>
	);
};

export default LoginForm;
