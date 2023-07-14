import { useState } from "react";
// import { FaBible, FaMdb } from "react-icons/fa";
import ProductList from "./ProductList";


const Products = ({products, error, loading}) => {
    const [search, setSearch] = useState('')

    const categories = ["all", "men's clothing", "women's clothing", "jewelery", "electronics"]
    const handleSearch = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
    }

    const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()))
    const categoryItems = filteredProducts.filter((item) => item.category == categories[0])
    console.log(categoryItems)



    console.log(filteredProducts)

    return ( 
        <>
            <div>
                <div className="grid md:grid-cols-2 md:mt-0 mt-8">
                    <div className="flex justify-start">
                        {categories.map((item) => (
                            <button className="category-btn capitalize">
                                {item}
                            </button>
                        ))}
                    </div>
                    <div>
                        <form onSubmit={handleSearch} className='flex justify-center items-center md:mt-0 mt-4'>
                            <input 
                                type="search" 
                                value={search}
                                onChange={handleSearch}
                                className="border-2 p-2 rounded-lg outline-none focus-within:border-green-500 w-full" 
                                placeholder="Searching todo..." 
                            />
                        </form>
                    </div>
                </div>
                <div>
                    {error && (<p>{error}</p>)}
                    {loading ? 
                        (<p>Loading products...</p>) : 
                        (<ProductList filteredProducts={filteredProducts}  />)
                    }
                    
                </div>
            </div>
        </>
     );
}
 
export default Products;