import React from "react";

function Footer() {

  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} | Victor6993</p>
    </footer>
  );
}

export default Footer;