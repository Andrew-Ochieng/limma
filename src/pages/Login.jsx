import { useState } from 'react';
import { Link } from 'react-router-dom';

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
    <div className='flex flex-col justify-center items-center md:my-16'>
      <h3 className='section-title text-green-600'>Welcome Back</h3>
      <form onSubmit={handleSubmit} className='form-container'>
        <div>
            <label className='label'>
                Email:
            </label>
            <input
                type="email"
                name="email"
                className='form-input'
                value={formData.email}
                onChange={handleChange}
                />
        </div>
        <div>
            <label className='label'>
                Password:
            </label>
            <input
                    className='form-input'
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
        </div>
        <button
            className='btn btn-success w-full' 
            type="submit"
            >
                Log In
        </button>
        <p>
          Not yet registed? 
          <Link to='/signup' className='ml-1 text-red-500 font-medium'>
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
