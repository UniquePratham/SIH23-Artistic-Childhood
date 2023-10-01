// components/Navbar.js

import React from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css"; // Import the styles for the component

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        {/* Replace 'path/to/your/3d-model-icon.png' with the actual path to your 3D model icon */}
        <Link href="/">
          
        </Link>
      </div>
      <div className={styles.links}>
        <Link href="/gameplay">
          Gameplay
        </Link>
        <Link href="/modules">
          Modules
        </Link>
        <Link href="/community">
          Community
        </Link>
        <Link href="/contact">
          Contact Page
        </Link>
      </div>
      <div className={styles.auth}>
        <Link href="/login">
          Login/Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;