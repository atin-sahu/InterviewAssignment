import { Box } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Login } from "./pages/Login"
import { ProductList } from "./pages/ProductList"
import { Register } from "./pages/Register"

function App() {
 

  return (
    <Box>
      <Navbar></Navbar>
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/productList" element={<ProductList></ProductList>}></Route>
      </Routes>
    </Box>
  )
}

export default App
