import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function RegisterPage() {

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const body = {
      username: 'Test22',
      password: 'Test33',
      email: 'test@test.com2',
    };

    axios.post(`https://localhost:44332/api/User/register`, body)
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

  return (<div>
    <form onSubmit={handleSubmit}>
      <label> Username </label>
      <input />
      <label> Password </label>
      <input />
      <label> Email </label>
      <input />
      <button type='submit'>Create Account</button>
    </form>
  </div>);
}