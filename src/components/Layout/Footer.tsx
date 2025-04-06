export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Navigation Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Navigation</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="/" className="text-base text-gray-500 hover:text-gray-900">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-base text-gray-500 hover:text-gray-900">
                  About Us
                </a>
              </li>
              <li>
                <a href="/faq" className="text-base text-gray-500 hover:text-gray-900">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Contact Us</h3>
            <ul className="mt-4 space-y-4">
              <li className="text-base text-gray-500">
                Email: 1721372121@qq.com
              </li>
              <li className="text-base text-gray-500">
                Phone: +86 158 2032 5487
              </li>
            </ul>
          </div>

          {/* Disclaimer */}
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Disclaimer</h3>
            <p className="mt-4 text-base text-gray-500">
              All calculations provided by this calculator are for reference only. Actual loan terms and interest rates may vary depending on the bank, region, and other factors. Please refer to the information provided by your actual lending institution.
            </p>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()} Land Loan Calculator. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 