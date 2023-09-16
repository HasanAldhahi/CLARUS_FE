
import Button from "./Components/Button"
import clarus from "./imgs/clarus_blue.png"


function App() {

  return (
    <div className="App">
      <div className="container">
        <div class="grid grid-rows-4 grid-flow-col gap-4 bg-blue-500 my-4">
          <img className="wd-20 h-20 row-span-4 " src={clarus} />
        </div>
        <div className="navbar">
          <nav class="bg-blue-500 p-4">
            <div class="container mx-auto">
              <div class="flex items-center justify-between">
                <div class="hidden md:flex space-x-4">
                  <a href="#" class="text-white hover:text-gray-300">Home</a>
                  <a href="#" class="text-white hover:text-gray-300">About</a>
                  <a href="#" class="text-white hover:text-gray-300">Services</a>
                  <a href="#" class="text-white hover:text-gray-300">Contact</a>
                </div>
                <div class="md:hidden">
                  {/* <!-- Hamburger menu icon (for mobile) --> */}
                  <button class="text-white hover:text-gray-300 menu-toggle">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>

  );
}

export default App;
