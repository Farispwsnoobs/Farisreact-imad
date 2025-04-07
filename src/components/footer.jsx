import React from "react";
import amazon from "../assets/amazon.svg";
import dribbble from "../assets/dribbble.svg";
import hubspot from "../assets/hubspot.svg";
import notion from "../assets/notion.svg";
import netflix from "../assets/netflix.svg";
import zoom from "../assets/zoom.svg";

function Footer() {
  return (
    <footer className="flex justify-center space-x-8 py-8 border-t">
      <img src={amazon} alt="Amazon" className="h-6" />
      <img src={dribbble} alt="Dribbble" className="h-6" />
      <img src={hubspot} alt="Hubspot" className="h-6" />
      <img src={notion} alt="Notion" className="h-6" />
      <img src={netflix} alt="Netflix" className="h-6" />
      <img src={zoom} alt="Zoom" className="h-6" />
    </footer>
  );
}

export default Footer;
