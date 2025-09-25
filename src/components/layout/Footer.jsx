export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand / About */}
          <div>
            <h2 className="text-xl font-bold text-white">MyWebsite</h2>
            <p className="mt-3 text-sm text-gray-400">
              A simple responsive webpage built with React & Tailwind CSS.
              Explore our work, get inspired, and get involved!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-400 transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#our-work"
                  className="hover:text-indigo-400 transition"
                >
                  Our Work
                </a>
              </li>
              <li>
                <a
                  href="#quotes"
                  className="hover:text-indigo-400 transition"
                >
                  Quotes
                </a>
              </li>
              <li>
                <a
                  href="#get-involved"
                  className="hover:text-indigo-400 transition"
                >
                  Get Involved
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>Email: support@mywebsite.com</li>
              <li>Phone: +91 98765 43210</li>
              <li>Address: Kanpur, Uttar Pradesh</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
          <div className="flex space-x-4 mt-3 md:mt-0">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
