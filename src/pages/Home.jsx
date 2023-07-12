import Hero from "../components/Home/Hero";
import HomeProducts from "../components/Home/HomeProducts";

const Home = ({products}) => {
    return ( 
        <>
            <Hero />
            <HomeProducts products={products} />
        </>
     );
}
 
export default Home;