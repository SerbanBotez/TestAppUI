import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function LoginPage() {

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const body = {
      username: 'Test',
      password: 'Test2',
    };

    axios.post(`https://localhost:44332/api/Login/login`, body)
      .then(res => {
        switch (res.status) {
          case 200:
            navigate('/home');
            return;
        }
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  const navigate = useNavigate();

  function navigateToRegisterPage() {
    navigate('/register');
  }


  return (<div>
    <form onSubmit={handleSubmit}>
      <label> Username </label>
      <input />
      <label> Password </label>
      <input />
      <button type='submit'>Login</button>
    </form>
    <button onClick={navigateToRegisterPage}>Register</button>
  </div>);
}