import React, { useState } from 'react';

const FarmHistory = () => {
  const [crops, setCrops] = useState([]);
  const [cropName, setCropName] = useState('');
  const [plantingDate, setPlantingDate] = useState('');

  const handleCropNameChange = (e) => {
    setCropName(e.target.value);
  };

  const handlePlantingDateChange = (e) => {
    setPlantingDate(e.target.value);
  };

  const handleAddCrop = () => {
    if (cropName && plantingDate) {
      const newCrop = {
        name: cropName,
        date: plantingDate
      };
      setCrops((prevCrops) => [...prevCrops, newCrop]);
      setCropName('');
      setPlantingDate('');
    }
  };

  return (
    <div>
      <h2>My Farming History</h2>
      <div>
        <label>
          Crop Name:
          <input type="text" value={cropName} onChange={handleCropNameChange} />
        </label>
        <label>
          Planting Date:
          <input
            type="date"
            value={plantingDate}
            onChange={handlePlantingDateChange}
          />
        </label>
        <button onClick={handleAddCrop}>Add Crop</button>
      </div>
      <div>
        {crops.length === 0 ? (
          <p>No crops planted yet</p>
        ) : (
          <ul>
            {crops.map((crop, index) => (
              <li key={index}>
                Crop: {crop.name}, Planting Date: {crop.date}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FarmHistory;
