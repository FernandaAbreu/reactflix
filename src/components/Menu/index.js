import React from 'react';
import Logo from '../../assets/feflix.png';
import './Menu.css';
import Button from '../Button';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img src={Logo} className="Logo" alt="feflix Logo" />
      </Link>
      <Button as={Link} to="/" className="ButtonLink">
        Novo vídeo
      </Button>
    </nav>

  );
}

export default Menu;
