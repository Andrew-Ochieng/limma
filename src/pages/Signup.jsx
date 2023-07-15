import { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [county, setCounty] = useState('');
  const [ward, setWard] = useState('');
  const [location, setLocation] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'name':
        setName(value);
        break;
      case 'county':
        setCounty(value);
        break;
      case 'ward':
        setWard(value);
        break;
      case 'location':
        setLocation(value);
        break;
      default:
        break;
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
      try {
        const response = await fetch('your-signup-api-url', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email, password, name, address, county, ward, location
          }),
        });

        // Handle the response from the signup API
        response.ok ? console.log('Sign up successful') : console.log('Sign up failed')

      } catch (error) {
        console.log('Sign up error:', error);
        // Handle signup error, display error message, etc.
      }
    } 

  return (
    <div className='flex flex-col items-center md:my-16 my-8'>
      <h2 className='container-title'>Sign Up</h2>
      <form onSubmit={handleFormSubmit}>
          <div>
            <div>
              <label className='label'>
                Name:
              </label>
              <input 
                type="text" 
                name="name" 
                value={name} 
                className='form-input'
                onChange={handleInputChange} 
                required 
              />
            </div>
            <div>
              <label className='label'>
                Email:
              </label>
              <input 
                type="email" 
                name="email" 
                value={email} 
                className='form-input'
                onChange={handleInputChange} 
                required 
              />
            </div>
            <div>
              <label className='label'>
                County:
              </label>
              <input 
                type="text" 
                name="county" 
                value={county} 
                className='form-input'
                onChange={handleInputChange} 
                required 
              />
            </div>
            <div>
              <label className='label'>
                Ward:
              </label>
              <input 
                type="text" 
                name="ward" 
                value={ward} 
                className='form-input'
                onChange={handleInputChange} 
                required 
              />
            </div>
            <div>
              <label className='label'>
                Location:
              </label>
              <input 
                type="text" 
                name="location" 
                value={location} 
                className='form-input'
                onChange={handleInputChange} 
                required 
              />
            </div>
          </div>

        <button 
          type="submit"
          className='btn btn-success mt-4 w-full'
          >
            Signup
          </button>
      </form>
      <p  
        className=' mt-4'
        >
          Already have an account?
          <Link to='/signup' className='ml-1 text-red-500 font-medium'>
            Signup
          </Link>
      </p>
    </div>
  );
};

export default Signup;
