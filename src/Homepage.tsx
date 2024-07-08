import pattern from "../src/assets/Hero-page background patterns.png"
import heroSneakers from "../src/assets/Hero sneakers.png"

const Homepage = () => {
  return (
    <div className="min-w-fit min-h-fit bg-hero-bg overflow-clip z-0 font-raleway">
        {/* Pattern i,age */}
        <img src={pattern} className="w-screen opacity-5 z-10 absolute" />
        <div className="z-30 relative flex">
            <div className="flex justify-between gap-20">
                {/* Write up */}
                <div className="text-white w-1/3 pl-16 mt-24">
                        <h1 className="font-bold text-4xl w-68 mb-6">Step Up Your Sneaker Game</h1>
                        <h2 className="text-xl font-semibold w-[440px] mb-8">Discover the latest and greatest in sneaker fashion. From exclusive releases to&nbsp; unbeatable deals, find your perfect pair today!</h2>
                        <button className="py-3 px-9 outline-none rounded-full bg-main-black text-lg font-semibold hover:shadow-lg">Explore Now</button>
                </div>
                {/* Image */}
                <div className="w-1/2 mr-8">
                    <img src={heroSneakers} alt="A pair of sneakers" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Homepage
