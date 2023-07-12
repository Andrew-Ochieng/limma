import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [profileData, setProfileData] = useState([]);

  const fetchProfileData = async () => {
    try {
      const response = await fetch('http://localhost:1337/api/users?populate=image'); // Replace 'API_ENDPOINT' with the actual API endpoint to fetch the data
      const data = await response.json();
      setProfileData(data);
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  if (!profileData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className='container-title'>Farmers Profile</h2>
      <div className='profile-container'>
        {profileData.map((user, index) => (
          <div key={index} className='profile-card'>
            <div className='profile-image'>
              <img className='avatar' src={`http://localhost:1337${user.image.url}`} />  
            </div>
            <div className='profile-content'>
              <p>{user.username}</p>
              <p>{user.county}</p>
              <p>{user.sub_county}</p>
              <p>{user.contact}</p>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default Profile;
