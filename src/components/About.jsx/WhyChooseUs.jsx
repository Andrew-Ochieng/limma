import { choices } from "../../data/aboutus";

const WhyChooseUs = () => {
    return ( 
        <>
            <div className="bg-gray-100 lg:p-32 md:p-28 sm:p-16 my-16 p-8">
                <div className="text-center md:mb-16 mb-8">
                    <h2 className="container-title md:text-4xl text-2xl mb-2">Why Choose Us</h2>
                    <p className="md:text-base text-sm"> Completely network impactful users whereas next-generation applications engage out thinking via tactical action. </p>
                </div>
                <div className="grid md:grid-cols-3 md:gap-16 gap-8">
                    {choices.map((item) => (
                        <div className="bg-white md:p-8 p-6 rounded-xl border-2 border-white hover:border-2 hover:border-red-500 duration-300 ease-in-out space-y-4">
                            <div className="flex items-center justify-start">
                                <div className="p-2 border-2 rounded-full border-red-500">
                                    <img className="w-6 h-6 " src={item.icon} alt="" />
                                </div>
                                <h3 className="md:ml-4 ml-2 md:text-2xl text-lg font-bold text-gray-700">{item.name}</h3>
                            </div>
                            <p className="text-gray-600">{item.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
     );
}
 
export default WhyChooseUs;