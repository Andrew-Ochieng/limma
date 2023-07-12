import { useState } from 'react';

const FarmRecords = () => {
  const [fertilizerCost, setFertilizerCost] = useState(0);
  const [labourCost, setLabourCost] = useState(0);
  const [seedsCost, setSeedsCost] = useState(0);
  const [chemicalsCost, setChemicalsCost] = useState(0);

  const handleFertilizerCostChange = (event) => {
    setFertilizerCost(Number(event.target.value));
  };

  const handleLabourCostChange = (event) => {
    setLabourCost(Number(event.target.value));
  };

  const handleSeedsCostChange = (event) => {
    setSeedsCost(Number(event.target.value));
  };

  const handleChemicalsCostChange = (event) => {
    setChemicalsCost(Number(event.target.value));
  };

  const totalCost = fertilizerCost + labourCost + seedsCost + chemicalsCost;

  return (
    <div>
      <h2 className='container-title'>Production Cost</h2>
      <div>
        <label className='label'>
          Fertilizer Cost:
        </label>
        <input 
          type="number" 
          className='input input-success'
          value={fertilizerCost} 
          onChange={handleFertilizerCostChange} 
          />
      </div>
      <div>
        <label className='label'>
          Labour Cost:
        </label>
        <input 
          type="number" 
          className='input input-success'
          value={labourCost} 
          onChange={handleLabourCostChange} 
          />
      </div>
      <div>
        <label className='label'>
          Seeds Cost:
        </label>
        <input 
          type="number" 
          className='input input-success'
          value={seedsCost} 
          onChange={handleSeedsCostChange} 
          />
      </div>
      <div>
        <label className='label'>
          Chemicals Cost:
        </label>
        <input 
          type="number" 
          className='input input-success'
          value={chemicalsCost} 
          onChange={handleChemicalsCostChange} 
          />
      </div>
      
      <p className='content-title'>Total Cost: 
        <span className='ml-1 text-success'>{totalCost}</span>
      </p>
    </div>
  );
};

export default FarmRecords;

