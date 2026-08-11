const stats = [
  { label: 'الدروس المكتملة', value: '12 / 15', color: '#34d399' },
  { label: 'نسبة الاستيعاب', value: '88%', color: '#2dd4bf' },
  { label: 'الأسئلة المجابة', value: '145', color: '#22d3ee' },
];

function StatsGrid() {
  return (
    <div className="row g-3">
      {stats.map((stat) => (
        <div className="col-4" key={stat.label}>
          <div className="stat-card">
            <p className="stat-label mb-1">{stat.label}</p>
            <p className="stat-value mb-0" style={{ color: stat.color }}>
              {stat.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StatsGrid;
