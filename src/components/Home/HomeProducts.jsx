import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";
import '@splidejs/react-splide/css/sea-green';
import { homeCarousel } from "../../utils/homeCarousel";

const HomeProducts = ({products}) => {
    console.log(products.slice(-10, products.length))

    return ( 
        <>
            <div className="md:mx-4 md:my-16 my-8">
                <div className="flex justify-between items-center md:mb-8 mb-4 md:mx-24 mx-4">
                    <h3 className="sub-title">Latest Products</h3>
                    <Link className="sub-title text-green-600  hover:underline" to='/shop'>
                        View All
                    </Link>
                </div>
                <Splide
                    className="w-full h-[300px] md:h-[300px] z-[-100]"
                    options={homeCarousel}
                >
                {products.slice(-10, products.length).map((product) => (
                    <SplideSlide>
                        <div key={product.id} className='bg-white shadow-md rounded-2xl p-4 md:mx-4 '>
                            <div className="flex flex-col items-center justify-center">
                                <img src={product.image} alt={product.title} className='card-image' />
                                <Link to={`/products/${product.id}`} className='mt-4'>
                                    <h1 className='card-content-title'>{product.title.slice(0,20)}</h1>
                                    <p className='mt-1 card-content-details'>{product.description.slice(0, 40)}...</p>
                                    <p className='mt-1 card-content-price '>Ksh {product.price * 100}</p>
                                </Link>
                            </div>
                            <button className="card-btn">
                                Add to cart 
                            </button>
                        </div>
                    </SplideSlide>
                ))} 
                </Splide>
            </div>
        </>
     );
}
 
export default HomeProducts;