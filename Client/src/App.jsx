import AddUsers from "./Components/AddUsers";
import Home from "./Components/Home"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import UpdateUser from "./Components/UpdateUser";

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="AddUsers" element={<AddUsers/>}/>
          <Route path="/UpdateUser/:id" element={<UpdateUser />} />

        </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App
