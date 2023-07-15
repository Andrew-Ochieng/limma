import { useState } from 'react';

const AddProducts = ({ addProduct }) => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productImage, setProductImage] = useState(null);

  const handleProductImageChange = (event) => {
    const imageFile = event.target.files[0];
    const imageURL = URL.createObjectURL(imageFile);
    setProductImage(imageURL);
  };

  const handlePostProduct = (e) => {
    e.preventDefault();
    if (productName && productPrice && productImage) {
      const newProduct = {
        name: productName,
        price: Number(productPrice),
        description: productDescription,
        image: productImage,
      };
      addProduct(newProduct);
      setProductName('');
      setProductPrice('');
      setProductImage(null);
    }
  };

  return (
    <div className='md:p-16 py-8 px-4'>
      <h2 className='container-title md:text-center md:mb-8 mb-4'>Sell Your Farm Produce</h2>
      <form className='form-container' onSubmit={handlePostProduct}>
        <div>
          <label className="label">
            Product Name:
          </label>
          <input 
              type="text" 
              value={productName} 
              onChange={(e) => setProductName(e.target.value)} 
              required 
              className='form-input'
            />
        </div>
        <div>
          <label className="label">
            Product Price:
          </label>
          <input 
              type="number" 
              value={productPrice} 
              onChange={(e) => setProductPrice(e.target.value)} 
              required 
              className='form-input'
          />
        </div>
        <div>
          <label className="label">
            Product Description:
          </label>
          <input 
              type="text" 
              value={productDescription} 
              onChange={(e) => setProductDescription(e.target.value)} 
              required 
              className='form-input w-auto'
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
              className='form-input'
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
