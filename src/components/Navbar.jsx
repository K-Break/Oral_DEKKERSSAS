import { NavLink, useLocation } from 'react-router-dom';
import { Home } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { to: '/entreprise', label: "L'entreprise" },
  { to: '/stage/mission', label: 'Le Stage', matchPrefix: '/stage' },
  { to: '/difficultes', label: 'Difficultés', matchPaths: ['/difficultes', '/recul'] },
  { to: '/conclusion', label: 'Conclusion' },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar__home" title="Sommaire">
        <Home />
      </NavLink>

      {navLinks.map(({ to, label, matchPrefix, matchPaths }) => {
        let isActive = false;
        if (matchPrefix) {
          isActive = location.pathname.startsWith(matchPrefix);
        } else if (matchPaths) {
          isActive = matchPaths.some(p => location.pathname === p);
        } else {
          isActive = location.pathname === to;
        }

        return (
          <NavLink
            key={to}
            to={to}
            className={`navbar__link${isActive ? ' active' : ''}`}
          >
            {label}
          </NavLink>
        );
      })}
    </nav>
  );
}
