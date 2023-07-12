import { Link } from "react-router-dom";
import { CartContext } from "./Cart";

const ProductList = ({filteredProducts}) => {
    return ( 
        <>
            <div className='card-container'>
                {filteredProducts.map(product => (
                    <div key={product.id} className='bg-white shadow-md rounded-2xl p-4'>
                        <div className="flex flex-col items-center justify-center">
                            <img src={product.image} alt={product.title} className='card-image' />
                            <Link to={`/products/${product.id}`} className='mt-4'>
                                <h1 className='text-lg font-medium'>{product.title}</h1>
                                <p className='mt-2 text-green-600 '>{product.description.slice(0, 40)}...</p>
                                <p className='mt-2 text-green-800 font-medium'>Ksh {product.price * 100}</p>
                            </Link>
                        </div>
                        <button className="btn btn-error mt-2">
                            Add to cart 
                        </button>
                    </div>
                ))}
            </div>
        </>
     );
}
 
export default ProductList;