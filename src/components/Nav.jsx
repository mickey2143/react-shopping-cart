import SearchBox from "./SearchBox";
import Cart from "./Cart";
import logo from "../assets/shopit.png"
const Nav = ({ search}) => {
  return (
    <nav
      className="w-full shadow-md z-10 space-x-5 px-3 h-20 flex  bg-white sticky justify-between top-0 items-center 
    "
    >
      <div className="flex ">
       <img src={logo} alt="" className="w-24" />
      </div>
      <div className="flex space-x-5">
        <SearchBox search ={search} />
        <Cart />
      </div>
    </nav>
  );
};

export default Nav;
