import { LogIn } from 'lucide-react';

const LOGO_SRC = '/WhatsApp_Image_2026-08-09_at_11.21.55_PM.jpeg';

function Navbar() {
  return (
    <nav className="madar-navbar">
      <div className="container-lg d-flex align-items-center justify-content-between" style={{ height: '64px' }}>
        <div className="d-flex align-items-center gap-2">
          <div className="madar-logo">
            <img src={LOGO_SRC} alt="شعار مدار" />
          </div>
          <span className="madar-brand">مدار | MADAR</span>
        </div>

        <div className="d-none d-md-flex align-items-center gap-4">
          <a href="#" className="madar-nav-link active">الرئيسية</a>
          <a href="#" className="madar-nav-link">المسارات الدراسية</a>
          <a href="#" className="madar-nav-link">معمل التجارب</a>
          <a href="#" className="madar-nav-link">اختبارات التقييم</a>
        </div>

        <button type="button" className="btn-madar-outline d-flex align-items-center gap-2">
          <LogIn size={16} />
          تسجيل الدخول
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
