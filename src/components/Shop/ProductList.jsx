import { Link } from "react-router-dom";

const ProductList = ({filteredProducts}) => {
    return ( 
        <>
            <div className='card-container'>
                {filteredProducts.map(product => (
                    <Link to={`/products/${product.id}`} key={product.id} className='bg-white shadow-md rounded-2xl p-4 flex flex-col items-center justify-center'>
                        <img src={product.image} alt={product.title} className='rounded-md md:h-48 h-64' />
                        <div className='mt-4'>
                            <h1 className='text-lg uppercase font-bold'>{product.title}</h1>
                            <p className='mt-2 text-green-600 text-sm'>{product.description.slice(0, 40)}...</p>
                            <p className='mt-2 text-green-600'>Ksh {product.price * 100}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </>
     );
}
 
export default ProductList;