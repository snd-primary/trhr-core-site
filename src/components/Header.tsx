import { mainMenuItems } from "@/data/menuItems";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";

import { useState } from "react";

export const Header = () => {
  const [isShow, setIsShow] = useState<boolean>(false);

  const mobileMenuHandler = () => {
    setIsShow((prev) => !prev);
  };

  return (
    <>
      <header className="shadow-sm sticky top-0 left-0 z-10 bg-amber-400 w-full h-auto">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <a href="/" className="text-xl font-bold">
              Tech Blog
            </a>

            <ul className="hidden md:flex gap-4 items-center justify-center">
              {mainMenuItems.map((item) => (
                <li key={item.id}>
                  <a href={item.href}>{item.text}</a>
                </li>
              ))}
            </ul>

            {/* mobilemenu openbutton */}
            <button
              className="md:hidden"
              type="button"
              onClick={mobileMenuHandler}
            >
              <HamburgerMenuIcon />
            </button>
          </nav>
        </div>
      </header>

      {/* mobilemenu content */}
      <div
        className={`${isShow ? "grid" : "hidden"} fixed top-0 right-0 w-10/12 bg-foreground h-full z-50 text-background items-start justify-items-center
				grid-cols-[1fr_50px]
				`}
      >
        <ul>
          {mainMenuItems.map((item) => (
            <li key={item.id}>
              <a href={item.href}>{item.text}</a>
            </li>
          ))}
        </ul>
        <button type="button" onClick={mobileMenuHandler}>
          <Cross1Icon />
        </button>
      </div>
    </>
  );
};
