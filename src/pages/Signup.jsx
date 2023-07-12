import { useState } from 'react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [county, setCounty] = useState('');
  const [ward, setWard] = useState('');
  const [location, setLocation] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

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
      case 'address':
        setAddress(value);
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
    if (isSignUp) {
      try {
        const response = await fetch('your-signup-api-url', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
            name,
            address,
            county,
            ward,
            location,
          }),
        });

        // Handle the response from the signup API

        if (response.ok) {
          console.log('Sign up successful');
          // Redirect or perform other actions after successful signup
        } else {
          console.log('Sign up failed');
          // Handle signup failure, display error message, etc.
        }
      } catch (error) {
        console.log('Sign up error:', error);
        // Handle signup error, display error message, etc.
      }
    } else {
      try {
        const response = await fetch('your-login-api-url', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });

        // Handle the response from the login API

        if (response.ok) {
          console.log('Login successful');
          // Redirect or perform other actions after successful login
        } else {
          console.log('Login failed');
          // Handle login failure, display error message, etc.
        }
      } catch (error) {
        console.log('Login error:', error);
        // Handle login error, display error message, etc.
      }
    }

    // Reset form
    setEmail('');
    setPassword('');
    setName('');
    setAddress('');
    setCounty('');
    setWard('');
    setLocation('');
  };

  const toggleForm = () => {
    setIsSignUp((prevSignUp) => !prevSignUp);
  };

  return (
    <div>
      <h2 className='container-title'>{isSignUp ? 'Sign Up' : 'Login'}</h2>
      <form onSubmit={handleFormSubmit}>
        {isSignUp && (
          <div>
            <div>
              <label className='label'>
                Name:
              </label>
              <input 
                type="text" 
                name="name" 
                value={name} 
                className='input input-success'
                onChange={handleInputChange} 
                required 
              />
            </div>
            <div>
              <label className='label'>
                Address:
              </label>
              <input 
                type="text" 
                name="address" 
                value={address} 
                className='input input-success'
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
                className='input input-success'
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
                className='input input-success'
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
                className='input input-success'
                onChange={handleInputChange} 
                required 
              />
            </div>
          </div>
        )}
          <div>
              <label className='label'>
                  Email:
              </label>
              <input
                  type="email"
                  name="email"
                  className='input input-success'
                  value={email}
                  onChange={handleInputChange}
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
                      value={password}
                      onChange={handleInputChange}
                  />
          </div>

        <button 
          type="submit"
          className='btn btn-success mt-4'
          >
            {isSignUp ? 'Sign Up' : 'Login'}
          </button>
      </form>
      <p  
        className='md:text-lg font-semibold'
        >
        {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
        <button 
          onClick={toggleForm}
          className='btn btn-error text-white'
          >
            {isSignUp ? 'Login' : 'Sign Up'}
        </button>
      </p>
    </div>
  );
};

export default Signup;
