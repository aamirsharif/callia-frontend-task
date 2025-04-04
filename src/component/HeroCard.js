const HeroCard = () => {
  return (
    <div className="absolute bottom-4 sm:bottom-6 border-2 border-white rounded-t-2xl w-[90%] sm:w-64 md:min-w-72 lg:w-[21rem] shadow-lg">
      <div className="h-32 sm:h-48 md:h-56 lg:h-44 xl:h-60"></div>
      <div className="bg-white/20 backdrop-blur-md p-3 sm:p-4">
        <h3 className="font-semibold text-center font-poppins text-gray-900 text-sm sm:text-base md:text-base opacity-0 animate-fadeIn delay-400">
          Florals that arrive as pictured online
        </h3>
        <p className="text-xs sm:text-sm font-quicksand md:text-sm text-gray-700 mt-1 sm:mt-2 opacity-0 animate-fadeIn delay-500">
          Suscipit congue tristique imperdiet, fermentum
          pellentesque viverra metus quam potenti leo.
        </p>
        <div className="flex justify-center">
          <button className="mt-2 sm:mt-3 w-full sm:w-auto flex flex-col items-center bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-md text-sm sm:text-base">
            Get Quote
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroCard;