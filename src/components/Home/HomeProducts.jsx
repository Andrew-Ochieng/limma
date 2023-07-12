import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";
import '@splidejs/react-splide/css/sea-green';

const HomeProducts = ({products}) => {

    return ( 
        <>
            <div className="md:mx-4 md:my-16 my-8">
                <Splide
                    className="w-full h-[300px] md:h-[300px] "
                    options={{
                    perPage: 5,
                    perMove: 1,
                    autoplay: true,
                    interval: 3000,
                    pauseOnHover: false,
                    pauseOnFocus: false,
                    arrows: true,
                    pagination: false,
                    drag: true,
                    breakpoints: {
                        340: {
                            perPage: 1,
                            perMove: 1,
                            },
                        640: {
                        perPage: 2,
                        perMove: 1,
                        },
                        720: {
                        perPage: 3,
                        perMove: 1,
                        },
                        1024: {
                        perPage: 3,
                        perMove: 3,
                        },
                    },
                    }}
                >
                        {products.map((product) => (
                            <SplideSlide>
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
                            </SplideSlide>
                        ))} 
                </Splide>
            </div>
        </>
     );
}
 
export default HomeProducts;