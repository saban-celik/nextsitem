// src/components/admin/AdminSidebar.tsx
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FaChartBar, FaChartLine, FaCog, FaComment, FaFilm, FaFolder, FaHome, FaSignOutAlt, FaUsers, FaAngleDown, FaAngleUp } from 'react-icons/fa';

interface AdminSidebarProps {
  isOpen: boolean;
}

const AdminSidebar = ({ isOpen }: AdminSidebarProps) => {
  const router = useRouter();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const sidebarItems = [
    { icon: <FaHome />, label: 'Dashboard', path: '/admin' },
    { icon: <FaUsers />, label: 'Kullanıcılar', path: '/admin/users' },
    { icon: <FaFilm />, label: 'Filmler', path: '/admin/movies' },
    { icon: <FaFolder />, label: 'Film Kategorileri', path: '/admin/categories' },
    { icon: <FaComment />, label: 'Yorumlar', path: '/admin/comments' },
    { icon: <FaChartLine />, label: 'Grafik Verileri', path: '/admin/analytics' },
    { icon: <FaChartBar />, label: 'İstatistikler', path: '/admin/statistics' },
  ];

  const settingsSubItems = [
    { label: 'Profil Düzenle', path: '/admin/settings/profile' },
    { label: 'Şifre Değiştir', path: '/admin/settings/password' },
    { label: 'Bildirim Tercihleri', path: '/admin/settings/notifications' },
    { label: 'Hesabı Sil', path: '/admin/settings/delete-account' },
  ];

  return (
    <div className={`admin-sidebar ${isOpen ? 'open' : ''}`}>
      <nav className="admin-sidebar__nav">
        {sidebarItems.map((item, index) => (
          <a
            key={index}
            href={item.path}
            className={`admin-sidebar__link ${router.pathname === item.path ? 'active' : ''}`}
          >
            {item.icon}
            <span>{item.label}</span>
          </a>
        ))}
        {/* Settings Dropdown */}
        <div>
          <button
            className={`admin-sidebar__link ${router.pathname.startsWith('/admin/settings') ? 'active' : ''}`}
            onClick={() => setIsSettingsOpen(!isSettingsOpen)}
          >
            <FaCog />
            <span>Ayarlar</span>
            {isSettingsOpen ? <FaAngleUp /> : <FaAngleDown />}
          </button>
          {isSettingsOpen && (
            <div className="admin-sidebar__submenu">
              {settingsSubItems.map((subItem, index) => (
                <a
                  key={index}
                  href={subItem.path}
                  className={`admin-sidebar__link ${router.pathname === subItem.path ? 'active' : ''}`}
                >
                  <span>{subItem.label}</span>
                </a>
              ))}
            </div>
          )}
        </div>
        {/* Logout */}
        <a
          href="/admin/logout"
          className={`admin-sidebar__link ${router.pathname === '/admin/logout' ? 'active' : ''}`}
        >
          <FaSignOutAlt />
          <span>Çıkış Yap</span>
        </a>
      </nav>
    </div>
  );
};

export default AdminSidebar;