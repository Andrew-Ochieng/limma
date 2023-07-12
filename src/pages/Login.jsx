import { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic with formData
    console.log(formData);
    // Reset form
    setFormData({
      email: '',
      password: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className='form-container'>
        <div>
            <label className='label'>
                Email:
            </label>
            <input
                type="email"
                name="email"
                className='input input-success'
                value={formData.email}
                onChange={handleChange}
                />
        </div>
        <div>
            <label className='label'>
                Password:
            </label>
            <input
                    className='input input-success'
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
        </div>
        <button
            className='btn btn-success ' 
            type="submit"
            >
                Log In
        </button>
    </form>
  );
};

export default Login;
