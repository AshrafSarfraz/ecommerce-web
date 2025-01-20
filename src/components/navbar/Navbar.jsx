import { Fragment, useContext, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { BsFillCloudSunFill } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import myContext from "../../context-api/MyContext";
import img1 from "../../assets/images/img1.jpg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const context = useContext(myContext);
  const { toggleMode, mode } = context || {};

  return (
    <div className="bg-white sticky top-0 z-50">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 lg:hidden"
          onClose={() => setOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="-translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel
                className={`relative flex w-full max-w-xs flex-col overflow-y-auto pb-12 shadow-xl ${
                  mode === "dark"
                    ? "bg-gray-800 text-white"
                    : "bg-white text-gray-900"
                }`}
              >
                <div className="flex px-4 pb-2 pt-28">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <RxCross2 />
                  </button>
                </div>
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <Link to="/order" className="block p-2 font-medium">
                    Order
                  </Link>
                  <div className="flow-root">
                    <button className="block p-2 font-medium">Logout</button>
                  </div>
                  <Link to="/" className="block p-2">
                    <img
                      className="inline-block w-10 h-10 rounded-full"
                      src={img1}
                      alt="Profile"
                    />
                  </Link>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Desktop menu */}
      <header className="bg-yellow">
        <p
          className={`flex h-10 items-center justify-center px-4 text-sm font-medium sm:px-6 lg:px-8 ${
            mode === "dark"
              ? "bg-gray-700 text-white"
              : "bg-yellow-600 text-white"
          }`}
        >
          Get free delivery on orders over 300 RS
        </p>
        <nav
          className={`bg-gray-100 px-4 sm:px-6 lg:px-8 shadow-xl ${
            mode === "dark" ? "bg-gray-900 text-white" : ""
          }`}
        >
          <div className="flex h-16 items-center">
            {/* Mobile menu button */}
            <button
              type="button"
              className="rounded-md p-2 lg:hidden"
              onClick={() => setOpen(true)}
            >
              <span className="sr-only">Open menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>

            {/* Logo */}
            <Link to="/" className="ml-4 flex lg:ml-0">
              <h1 className="text-2xl font-bold">Ecommerce-Pak</h1>
            </Link>

            {/* Desktop navigation buttons */}
            <div className="hidden lg:flex lg:ml-10 lg:space-x-8">
              <Link
                to="/"
                className={`text-sm font-medium ${
                  mode === "dark"
                    ? "text-white hover:text-yellow-400"
                    : "text-gray-900 hover:text-yellow-600"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`text-sm font-medium ${
                  mode === "dark"
                    ? "text-white hover:text-yellow-400"
                    : "text-gray-900 hover:text-yellow-600"
                }`}
              >
                About
              </Link>
              <Link
                to="/shop"
                className={`text-sm font-medium ${
                  mode === "dark"
                    ? "text-white hover:text-yellow-400"
                    : "text-gray-900 hover:text-yellow-600"
                }`}
              >
                Shop
              </Link>
              <Link
                to="/contact"
                className={`text-sm font-medium ${
                  mode === "dark"
                    ? "text-white hover:text-yellow-400"
                    : "text-gray-900 hover:text-yellow-600"
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Toggle Mode button */}
            <div className="ml-auto flex items-center">
              <button onClick={toggleMode}>
                {mode === "light" ? (
                  <FiSun size={30} />
                ) : (
                  <BsFillCloudSunFill size={30} />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
