import { useState } from "react";
import { FaBible, FaMdb } from "react-icons/fa";
import ProductList from "./ProductList";

const Products = ({products}) => {
    const [search, setSearch] = useState('')

    const handleSearch = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
    }

    const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()))

    console.log(filteredProducts)

    return ( 
        <>
            <div>
                <div>
                    <div className="flex ">
                        <p className="p-3 bg-gray-200 rounded-md">
                            <FaBible  />
                        </p>
                        <p className="ml-4 p-3 bg-gray-200 rounded-md">
                            <FaMdb />
                        </p>
                    </div>
                </div>
                <div>
                    <form onSubmit={handleSearch} className='flex justify-center items-center md:my-12 my-8'>
                        <input 
                            type="search" 
                            value={search}
                            onChange={handleSearch}
                            className="border-2 p-2 rounded-lg outline-none focus-within:border-green-500 w-full" 
                            placeholder="Searching todo..." 
                        />
                    </form>
                </div>
                <div>
                    <ProductList products={products} />
                </div>
            </div>
        </>
     );
}
 
export default Products;