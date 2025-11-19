import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";

const Navbar = ({ toggle }: { toggle: () => void }) => {
  return (
    <>
      <div className="w-full h-20 bg-black sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
{/*             
            <Logo />
 */}

<a href="/" className="inline-flex items-center text-indigo-700 text-2xl md:text-3xl font-bold gap-2.5" aria-label="logo">
        <svg width="95" height="94" viewBox="0 0 95 94" className="w-6 h-auto text-indigo-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M96 0V47L48 94H0V47L48 0H96Z" />
        </svg>

        MSL
      </a>



            <button
              type="button"
              className="inline-flex items-center md:hidden"
              onClick={toggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                />
              </svg>

            </button>



            <ul className="hidden md:flex gap-x-6 text-white ">
              <li>
                <Link href="/Features">
                  <p>事業分野</p>
                </Link>
              </li>
              <li>
                <Link href="/Philosophy">
                  <p>企業理念</p>
                </Link>
              </li>
              <li>
                <Link href="/Environment">
                  <p>環境活動</p>
                </Link>
              </li>
              <li>
                <Link href="/Service">
                  <p>サービス</p>
                </Link>
              </li>
            </ul>
            
            <div className="hidden md:block">
     
{/*      
              <Button />
 */}

              <a href="/Contact" className="hidden lg:inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">お問い合わせ</a>



            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;