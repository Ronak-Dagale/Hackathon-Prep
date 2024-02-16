// Navbar.js
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/iotd">Idea Of the Day</Link>
        </li>
        <li>
          <Link href="/uyi">upload your idea</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
