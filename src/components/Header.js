import React from "react";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
      <header className="ui centered">
        <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
        <Link className='navLink' to={'/'}>Home</Link>
        <Link className='navLink' to={'/characterlist'}>
          Characters
        </Link>
      </header>
  );
}
