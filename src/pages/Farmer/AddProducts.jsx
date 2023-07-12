import { useState } from 'react';

const AddProducts = ({ addProduct }) => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState(null);

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleProductPriceChange = (event) => {
    setProductPrice(event.target.value);
  };

  const handleProductImageChange = (event) => {
    const imageFile = event.target.files[0];
    const imageURL = URL.createObjectURL(imageFile);
    setProductImage(imageURL);
  };

  const handlePostProduct = (event) => {
    event.preventDefault();
    if (productName && productPrice && productImage) {
      const newProduct = {
        name: productName,
        price: Number(productPrice),
        image: productImage,
      };
      addProduct(newProduct);
      setProductName('');
      setProductPrice('');
      setProductImage(null);
    }
  };

  return (
    <div className='md:m-16 my-8 mx-4'>
      <h2 className='container-title md:text-center md:mb-8 mb-4'>Sell Your Farm Produce</h2>
      <form className='form-container' onSubmit={handlePostProduct}>
        <div>
          <label className="label">
            Product Name:
          </label>
          <input 
              type="text" 
              value={productName} 
              onChange={handleProductNameChange} 
              required 
              className='input input-success'
            />
        </div>
        <div>
          <label className="label">
            Product Price:
          </label>
          <input 
              type="number" 
              value={productPrice} 
              onChange={handleProductPriceChange} 
              required 
              className='input input-success'
          />
        </div>
        <div>
          <label className="label">
            Product Image:
          </label>
          <input 
              type="file" 
              accept="image/*" 
              onChange={handleProductImageChange} 
              required 
              className='input input-success'
          />
        </div>
        {productImage && <img src={productImage} alt="Product" width="150" />}
        <br />
        <button
          className='btn btn-success' 
          type="submit">
            Post Product
        </button>
      </form>
    </div>
  );
};

export default AddProducts;
