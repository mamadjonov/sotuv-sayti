import { NavLink } from "react-router-dom";
import { FaShoppingCart, FaBoxOpen } from "react-icons/fa";
import { useContext } from "react";
import { AppContext } from "./AppContext";

const Navbar = () => {
  const { cartItems } = useContext(AppContext);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center items-center">
        <div className="flex gap-10 text-lg items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-bold flex items-center gap-2"
                : "text-gray-600 hover:text-blue-600 flex items-center gap-2"
            }
          >
            <FaBoxOpen /> Mahsulotlar
          </NavLink>

          <NavLink
            to="/savat"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-bold flex items-center gap-2 relative"
                : "text-gray-600 hover:text-blue-600 flex items-center gap-2 relative"
            }
          >
            <FaShoppingCart /> Savat
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
