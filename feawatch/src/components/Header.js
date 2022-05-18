import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
export const Header = () => {
  return (
    <header>
      <div className="logo" id="logo">
        <Link to={'/'}>
          <img src={logo} alt="logo"></img>
        </Link>
      </div>
      <Link to={'/favorites'} className="header-link">
        Favorites
      </Link>
    </header>
  );
};
