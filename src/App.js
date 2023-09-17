
import Button from "./Components/Button"
import clarus from "./imgs/clarus_blue.png"


function App() {

  return (
    <div className="App">
      <div className="container mx-auto">

        <div class="grid grid-rows-4 grid-flow-col gap-4 bg-blue-500 my-4">
          <img className="wd-20 h-20 row-span-4 " src={clarus} />
        </div>
        <div className="navbar">
          <nav class="bg-blue-500 p-4">
            <div class="flex items-center justify-between">
              <div class=" space-x-4">
                <a href="#" class="text-white hover:text-gray-300">Home</a>
                <a href="#" class="text-white hover:text-gray-300">Select Data</a>
                <a href="#" class="text-white hover:text-gray-300">Interact</a>
              </div>
            </div>
          </nav>
        </div>

        grid


      </div>
    </div>

  );
}

export default App;
