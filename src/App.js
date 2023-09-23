
// import Button from "./Components/Button"
import { QueryClient, QueryClientProvider } from "react-query"


import Header from "./Components/Header";
// import Form from "./Components/Form";
import Navbar from "./Components/Navbar";
import Session from './Components/Session';

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>

      <div className="App">
        <div className="container mx-auto">
          {/* adding the following components to the page  */}
          <Header />
          <Navbar />
          {/* <Form /> */}
          <Session />
          <div className="grid grid-rows-4 grid-flow-col gap-4">
            <div className="row-span-4  ">
            </div>
          </div>
        </div>
      </div>

    </QueryClientProvider>
  );
}

export default App;
