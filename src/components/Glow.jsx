import { useLocation } from 'react-router-dom';
import './Glow.css';

const GLOW_POSITIONS = {
  '/': 'top-right',
  '/sommaire': 'center-right',
  '/entreprise': 'bottom-right',
  '/stage': 'right-center',
  '/difficultes': 'bottom-right',
  '/recul': 'center-right',
  '/conclusion': 'top-right',
};

export default function Glow() {
  const location = useLocation();

  // Match exact path or prefix for nested routes
  let position = 'top-right';
  for (const [path, pos] of Object.entries(GLOW_POSITIONS)) {
    if (location.pathname === path || (path !== '/' && location.pathname.startsWith(path))) {
      position = pos;
    }
  }

  return (
    <div className="glow-container" data-position={position}>
      <div className="glow-square glow-square--1" />
      <div className="glow-square glow-square--2" />
      <div className="glow-square glow-square--3" />
      <div className="glow-square glow-square--4" />
    </div>
  );
}
