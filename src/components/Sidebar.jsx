import { NavLink } from 'react-router-dom';
import { ClipboardList, Layers, Puzzle, FileSignature, Boxes } from 'lucide-react';
import './Sidebar.css';

const sidebarItems = [
  {
    icon: ClipboardList,
    label: 'Mission & Méthodologie',
    route: '/stage/mission',
  },
  {
    icon: Layers,
    label: 'Architecture technique',
    route: '/stage/architecture',
  },
  {
    icon: Puzzle,
    label: 'Form Builder',
    route: '/stage/formbuilder',
  },
  {
    icon: FileSignature,
    label: 'PDF & Signature',
    route: '/stage/pdf',
  },
  {
    icon: Boxes,
    label: 'Modules avancés',
    route: '/stage/modules',
  },
];

export default function Sidebar() {
  return (
    <nav className="sidebar">
      {sidebarItems.map(({ icon: Icon, label, route }) => (
        <NavLink
          key={route}
          to={route}
          title={label}
          className={({ isActive }) =>
            `sidebar__btn${isActive ? ' active' : ''}`
          }
        >
          <Icon />
        </NavLink>
      ))}
    </nav>
  );
}
