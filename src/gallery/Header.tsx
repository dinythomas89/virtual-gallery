import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <div>Virtual Gallery</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favourites">Favourites</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
