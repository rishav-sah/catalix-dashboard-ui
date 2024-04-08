import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faRocketchat } from "@fortawesome/free-brands-svg-icons";
import { faGear, faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const handleInputChange = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchValue);
  }
  return (
    <div className="container-lg mx-auto p-2 flex items-center justify-between">
      <div className="w-96">
        <form onSubmit={handleSubmit}>
          <div className="w-full">
            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " type="text" name="search" id="search" placeholder="Search by profile, setting, artifact etc..." value={searchValue} onChange={handleInputChange} />
          </div>
        </form>
      </div>
      <div className="w-52 flex justify-between text-[#125c72]">
        <div className="p-2 rounded-full bg-white shadow-md cursor-pointer">
          <FontAwesomeIcon size="xl" icon={faBell} />
        </div>
        <div className="p-2 rounded-full bg-white shadow-md cursor-pointer">
          <FontAwesomeIcon size="xl" icon={faRocketchat} />
        </div>
        <div className="p-2 rounded-full bg-white shadow-md cursor-pointer">
          <FontAwesomeIcon size="xl" icon={faGear} />
        </div>
        <div className="p-2 rounded-full bg-white shadow-md cursor-pointer">
          <FontAwesomeIcon size="xl" icon={faUser} />
        </div>
      </div>
    </div>
  );
};

export default Header;