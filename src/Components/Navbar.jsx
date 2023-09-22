import React from 'react'

function Navbar() {
  return (
             <nav class="bg-blue-500 p-4">
            <div class="flex items-center justify-between">
              <div class=" space-x-4">
                {/* Button Components  */}
                <a href="#" class="text-white hover:text-gray-300  focus:bg-white-700  ">Home</a>
                <a href="#" class="text-white hover:text-gray-300">Select Data</a>
                <a href="#" class="text-white hover:text-gray-300">Interact</a>
              </div>
            </div>
          </nav>
  )
}

export default Navbar