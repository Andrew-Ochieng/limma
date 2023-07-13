import AboutDetails from "../components/About.jsx/AboutDetails";
import AboutHero from "../components/About.jsx/AboutHero"
import FAQ from "../components/About.jsx/FAQ";
import WhyChooseUs from "../components/About.jsx/WhyChooseUs";

const About = () => {
    return ( 
        <>
            <AboutHero />
            <div className="lg:m-32 md:m-28 sm:m-16 my-16 m-8">
                <AboutDetails />
            </div>
            <WhyChooseUs />
            <div className="lg:m-32 md:m-28 sm:m-16 my-16 m-8">
                <FAQ />
            </div>
        </>
     );
}
 
export default About;