import { SelectedPage } from "../types";
import React from "react";
// import AnchorLink from "react-anchor-link-smooth-scroll";
import AnchorLink from 'react-anchor-link-smooth-scroll'

type propsType = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

export const Link: React.FC<propsType> = ({
  page,
  selectedPage,
  setSelectedPage,
}: propsType) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  return (
    <li className=" select-none">
      <AnchorLink
        href={`#${lowerCasePage}`}
        className={
          `transition-all duration-100 relative cursor-pointer before:w-0 before:absolute before:h-[3px] before:left-[50%] before:bg-primary before:bottom-0 before:translate-x-[-50%] before:transition-all brefore:duration-300
          ${selectedPage == lowerCasePage
          ? " text-foreground before:w-full "
          : "hover:text-foreground  hover:before:w-full"}
        `}
        onClick={() => setSelectedPage(lowerCasePage)}
      >
        {page}
      </AnchorLink>
    </li>
  );
};

export default Link;
