//src\pages\admin\statistics.tsx
import Head from 'next/head';
import AdminLayout from '../../components/admin/AdminLayout';

const StatisticsPage = () => {
  const mockStats = [
    { title: 'Toplam Ziyaret', value: '12,345' },
    { title: 'Aktif Kullanıcılar', value: '890' },
    { title: 'Film İzlenme', value: '5,678' },
    { title: 'Ortalama Oturum Süresi', value: '15 dk' },
  ];

  return (
    <>
      <Head>
        <title>İstatistikler - Admin Paneli</title>
      </Head>
      <AdminLayout>
        <div className="statistics-page">
          <h2 className="dashboard__title">İstatistikler</h2>
          <div className="dashboard__stats-grid">
            {mockStats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-card__title">{stat.title}</div>
                <div className="stat-card__value">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default StatisticsPage;