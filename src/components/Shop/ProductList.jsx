import { Link } from "react-router-dom";
// import { CartContext } from "./Cart";

const ProductList = ({filteredProducts}) => {
    return ( 
        <>
            <div className='card-container'>
                {filteredProducts.map(product => (
                    <div key={product.id} className='card'>
                        <div className="flex flex-col items-center justify-center">
                            <img src={product.image} alt={product.title} className='card-image' />
                            <Link to={`/products/${product.id}`} className='mt-4'>
                                <h1 className='card-content-title'>{product.title.slice(0,20)}</h1>
                                <p className='mt-2 card-content-details'>{product.description.slice(0, 40)}...</p>
                                <p className='mt-2 card-content-price'>Ksh {product.price * 100}</p>
                            </Link>
                        </div>
                        <button className="card-btn mt-2">
                            Add to cart 
                        </button>
                    </div>
                ))}
            </div>
        </>
     );
}
 
export default ProductList;