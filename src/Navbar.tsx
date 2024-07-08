import { BiCart, BiSearch } from "react-icons/bi"

const Navbar = () => {
  return (
    <div className="text-main-black">
        {/* Main content */}
        <div className="py-5 px-10 flex justify-between mt-6">
            {/* Logo */}
            <button className="text-2xl font-extrabold">
                SOLESPHERE
            </button>
            {/* Navigation */}
            <div className="flex gap-20">
                <a href="" className="hover:font-semibold hover:text-discount-offer">Home</a>
                <a href="" className="hover:font-semibold hover:text-discount-offer">Shop</a>
                <a href="" className="hover:font-semibold hover:text-discount-offer">Products</a>
                <a href="" className="hover:font-semibold hover:text-discount-offer">Contact Us</a>
            </div>
            {/* Cart */}
            <div className="flex gap-4">
                <button><BiSearch className="w-8 h-8 outline rounded-full outline-gray-300/30 outline-2 p-1" title="search"/></button>
                <button><BiCart className="w-8 h-8 outline rounded-full outline-gray-300/30 outline-2 p-1" title="cart"/></button>
            </div>
        </div>
        {/* Ad */}
        <div className="bg-discount-offer text-white font-thin text-sm flex justify-center p-2 mb-10">Get 10% off on buisness sign up</div>
    </div>
  )
}

export default Navbar
