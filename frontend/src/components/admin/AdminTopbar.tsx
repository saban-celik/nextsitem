//src\components\admin\AdminTopbar.tsx
import { FaBars, FaTimes } from 'react-icons/fa';

interface AdminTopbarProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const AdminTopbar = ({ toggleSidebar, isSidebarOpen }: AdminTopbarProps) => {
  return (
    <div className="admin-topbar">
      <div className="admin-topbar__container">
        <button className="admin-topbar__toggle-btn" onClick={toggleSidebar}>
          {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        <span className="admin-topbar__title">Admin Paneli</span>
        <span className="admin-topbar__welcome">Hoş geldiniz, Admin</span>
      </div>
    </div>
  );
};

export default AdminTopbar;