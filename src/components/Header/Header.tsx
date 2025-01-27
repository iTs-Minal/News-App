import { FaUser } from "react-icons/fa";
import ToggleButton from "../ToggleBtn/ToggleBtn";

function Header() {
  return (
    <div className="w-full bg-slate-900 text-white p-4 flex justify-between items-center">
      <div className="flex items-center mx-[3rem]">
        <h1 className="text-4xl font-bold ">News.app</h1>
      </div>

      <div className="flex space-x-10 gap-4 items-center mx-[2rem]">
        <div className="flex items-center gap-2">
          <ToggleButton />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-2xl">
            <FaUser />
          </span>
          <h1 className="text-2xl font-semibold">Login</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
