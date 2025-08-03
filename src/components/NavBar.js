import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  
  const links1 = links.map((item) => {
    return <a key={item} href={`#${item}`}>{item}</a>;
  });

  return <nav>{links1}</nav>;
}

export default NavBar;

