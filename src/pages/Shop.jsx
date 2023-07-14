import Products from "../components/Shop/Products";
import ShopHero from "../components/Shop/ShopHero";

const Shop = ({products, error, loading}) => {
    return ( 
        <>
           <ShopHero />
           <div className="md:m-20 mx-6">
               <Products products={products} error={error} loading={loading} />
           </div>
        </>
     );
}
 
export default Shop;