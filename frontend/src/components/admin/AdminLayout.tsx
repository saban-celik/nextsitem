//src\components\admin\AdminLayout.tsx
import { ReactNode, useState } from 'react';
import '../../assets/styles/admin.css'; // CSS'i burada import ediyoruz
import AdminSidebar from './AdminSidebar';
import AdminTopbar from './AdminTopbar';

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`admin-wrapper d-flex flex-column min-vh-100 ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <AdminTopbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <div className="d-flex flex-grow-1">
        <AdminSidebar isOpen={isSidebarOpen} />
        <main className="flex-grow-1 p-3">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;