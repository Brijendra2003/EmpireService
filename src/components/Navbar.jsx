import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full shadow-md">
      {/* Top Bar */}
      <div className="bg-gray-900 text-white text-sm px-6 py-2 flex justify-between items-center">
        <p>Working hours: Tuesday-Sunday: 10am-8pm, Monday: Closed</p>

        <ul className="flex gap-6 items-center">
          <li className="flex items-center gap-2">
            <i className="fa-solid fa-phone"></i>
            <a href="tel:+918879552122" className="hover:text-yellow-400">
              +91 8879552122
            </a>
          </li>

          <li className="flex items-center gap-2">
            <i className="fa-solid fa-location-dot"></i>
            <a href="#" className="hover:text-yellow-400">
              Vasai-Virar, Maharashtra
            </a>
          </li>
        </ul>
      </div>

      {/* Main Navbar */}
      <div className="flex justify-around items-center px-6 py-4 bg-white">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-black fontSunsetHeaven">
          Empire Services
        </h1>

        <div className="flex gap-8">
          {/* Navigation Links */}
          <ul className="flex items-center gap-8 font-medium">
            <li>
              <Link to="/" className="hover:text-blue-600">
                Home
              </Link>
            </li>

            {/* Services Dropdown */}
            <li className="relative group">
              <button className="hover:text-blue-600">Services</button>

              <ul className="absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden">
                <li>
                  <Link to="/tv" className="block px-4 py-2 hover:bg-gray-100">
                    TV
                  </Link>
                </li>
                <li>
                  <Link to="/ac" className="block px-4 py-2 hover:bg-gray-100">
                    AC
                  </Link>
                </li>
                <li>
                  <Link
                    to="/microwave"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Microwave
                  </Link>
                </li>
                <li>
                  <Link
                    to="/refrigrator"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Refrigerator
                  </Link>
                </li>
                <li>
                  <Link
                    to="/soundbar"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Sound Bar
                  </Link>
                </li>
                <li>
                  <Link
                    to="/washingmachine"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Washing Machine
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/contactus" className="hover:text-blue-600">
                Contact Us
              </Link>
            </li>
          </ul>

          {/* CTA Button */}
          <button className="bg-black text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
            Book Technician
          </button>
        </div>
      </div>
    </nav>
  );
}
