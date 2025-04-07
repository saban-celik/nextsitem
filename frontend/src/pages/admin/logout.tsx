import Head from 'next/head';
import { useRouter } from 'next/router';
import AdminLayout from '../../components/admin/AdminLayout';

const LogoutPage = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('adminAuthenticated');
    router.push('/admin');
  };

  return (
    <>
      <Head>
        <title>Çıkış Yap - Admin Paneli</title>
      </Head>
      <AdminLayout>
        <div className="logout-page">
          <h2 className="dashboard__title">Çıkış Yap</h2>
          <p className="logout__message">Çıkış yapmak istediğinizden emin misiniz?</p>
          <button className="quick-action__btn" onClick={handleLogout}>Evet, Çıkış Yap</button>
        </div>
      </AdminLayout>
    </>
  );
};

export default LogoutPage;