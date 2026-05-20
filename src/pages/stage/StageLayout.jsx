import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import './StageLayout.css';

export default function StageLayout() {
  return (
    <div className="stage-layout">
      <Sidebar />
      <div className="stage-layout__content">
        <Outlet />
      </div>
    </div>
  );
}
