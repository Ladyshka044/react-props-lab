import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: '20px', background: '#f0f0f0', marginBottom: '20px' }}>
      <ul style={{ display: 'flex', gap: '20px', listStyle: 'none' }}>
        <li><Link to="/">Головна</Link></li>
        <li><Link to="/about">Про нас</Link></li>
        <li><Link to="/contact">Контакти</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;