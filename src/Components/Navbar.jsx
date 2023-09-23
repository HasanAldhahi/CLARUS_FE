import React from 'react'

function Navbar() {
  return (
             <nav className="bg-blue-500 p-4">
            <div className ="flex items-center justify-between">
              <div class=" space-x-4">
                {/* Button Components  */}
                <a href="#" className ="text-white hover:text-gray-300  focus:bg-white-700  ">Home</a>
                <a href="#" className ="text-white hover:text-gray-300">Select Data</a>
                <a href="#" className ="text-white hover:text-gray-300">Interact</a>
              </div>
            </div>
          </nav>
  )
}

export default Navbar