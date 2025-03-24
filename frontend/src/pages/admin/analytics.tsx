//src\pages\admin\analytics.tsx
import Head from 'next/head';
import AdminLayout from '../../components/admin/AdminLayout';

const AnalyticsPage = () => {
  const mockBarData = [
    { label: 'Pazartesi', value: 300 },
    { label: 'Salı', value: 450 },
    { label: 'Çarşamba', value: 600 },
    { label: 'Perşembe', value: 400 },
  ];

  const mockPieData = [
    { label: 'Aksiyon', value: 40, color: '#f59e0b' },
    { label: 'Komedi', value: 25, color: '#10b981' },
    { label: 'Dram', value: 20, color: '#ef4444' },
    { label: 'Bilim Kurgu', value: 15, color: '#3b82f6' },
  ];

  // Dairesel grafik için conic-gradient oluşturmak
  let cumulativePercentage = 0;
  const conicGradientStops = mockPieData
    .map((data) => {
      const start = cumulativePercentage;
      cumulativePercentage += data.value;
      return `${data.color} ${start}% ${cumulativePercentage}%`;
    })
    .join(', ');

  // Debugging için conicGradientStops'u konsola yazdır
  console.log('Conic Gradient Stops:', conicGradientStops);

  return (
    <>
      <Head>
        <title>Grafik Verileri - Admin Paneli</title>
      </Head>
      <AdminLayout>
        <div className="analytics-page">
          <h2 className="dashboard__title">Grafik Verileri</h2>

          {/* Sütun Grafiği */}
          <div className="bar-chart">
            <h3 className="recent-activity__title">Haftalık Ziyaretler (Sütun Grafiği)</h3>
            <div className="bar-chart__container">
              {mockBarData.map((data, index) => (
                <div key={index} className="bar-chart__bar" style={{ height: `${data.value / 10}px` }}>
                  <span className="bar-chart__label">{data.label}</span>
                  <span className="bar-chart__value">{data.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dairesel Grafik */}
          <div className="pie-chart">
            <h3 className="recent-activity__title">Kategori Dağılımı (Dairesel Grafik)</h3>
            <div className="pie-chart__container">
              {/* Tek bir daire içinde tüm segmentler */}
              <div
                className="pie-chart__segment"
                style={{
                  background: `conic-gradient(${conicGradientStops})`,
                }}
              />
              <div className="pie-chart__legend">
                {mockPieData.map((data, index) => (
                  <div key={index} className="pie-chart__legend-item">
                    <span className="pie-chart__legend-color" style={{ backgroundColor: data.color }}></span>
                    <span className="pie-chart__legend-label">
                      {data.label}: {data.value}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default AnalyticsPage;