import Restaurant from "./component/basics/Restaurants";
import Navbar from "./component/routing/Navbar";
import Home from "./component/routing/Home";
import About from "./component/routing/About";
import Error from "./component/routing/Error";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/about" Component={About}></Route>
        <Route path="/restaurant" Component={Restaurant}></Route>
        <Route path="*" Component={Error} ></Route>
      </Routes>
    </>
  );
};

export default App;
