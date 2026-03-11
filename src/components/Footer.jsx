import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Empire Services</h2>
          <p className="text-gray-400">
            Professional repair services for TV, AC, Refrigerator, Washing
            Machine, Microwave and Sound Systems. Trusted service in Vasai-Virar
            area.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/contactus" className="hover:text-white">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/tv" className="hover:text-white">
                TV Repair
              </Link>
            </li>
            <li>
              <Link to="/ac" className="hover:text-white">
                AC Repair
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
            Services
          </h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link to="/washingmachine" className="hover:text-white">
                Washing Machine
              </Link>
            </li>
            <li>
              <Link to="/refrigrator" className="hover:text-white">
                Refrigerator
              </Link>
            </li>
            <li>
              <Link to="/microwave" className="hover:text-white">
                Microwave
              </Link>
            </li>
            <li>
              <Link to="/soundbar" className="hover:text-white">
                Sound Bar
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
            Contact
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li className="flex gap-2">
              <i className="fa-solid fa-phone mt-1"></i>
              <a href="tel:+918879552122" className="hover:text-white">
                +91 8879552122
              </a>
            </li>

            <li className="flex gap-2">
              <i className="fa-solid fa-location-dot mt-1"></i>
              <p>
                Sai Leela Apt, Vinay Complex Tapasya Road, Nallasopara (W),
                Vasai-Virar, Maharashtra
              </p>
            </li>

            <li className="flex gap-2">
              <i className="fa-solid fa-clock mt-1"></i>
              <p>Tue-Sun: 10am-8pm | Monday Closed</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar (like your image) */}
      <div className="border-t border-gray-700 py-4 px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>
          © 2026 Copyrights by{" "}
          <span className="text-white">Empire Services</span> All Rights
          Reserved
        </p>

        <p className="uppercase tracking-wider">
          Design And Developed By :{" "}
          <span className="text-white">Brijendra Tiwari</span>
        </p>
      </div>
    </footer>
  );
}
