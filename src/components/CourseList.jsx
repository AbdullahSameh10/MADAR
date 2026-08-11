import { BookOpen, Code2, Sigma } from 'lucide-react';

const courses = [
  {
    title: 'الرياضيات - الجبر والهندسة',
    subtitle: 'الدرس 3: حل معادلات الدرجة الثانية',
    icon: Sigma,
    iconColor: '#818cf8',
    iconBg: 'rgba(99, 102, 241, 0.12)',
    question: 'اشرح لي درس معادلات الدرجة الثانية',
  },
  {
    title: 'أساسيات البرمجة والتفكير المنطقي',
    subtitle: 'الدرس 1: المتغيرات والدوال',
    icon: Code2,
    iconColor: '#2dd4bf',
    iconBg: 'rgba(45, 212, 191, 0.12)',
    question: 'يعني إيه متغيرات ودوال في البرمجة؟',
  },
];

function CourseList({ onAskAI }) {
  return (
    <div className="d-flex flex-column gap-3">
      <h2 className="section-title">
        <BookOpen size={20} color="#34d399" /> المواد الدراسية الحالية
      </h2>

      {courses.map((course) => (
        <div className="course-card d-flex align-items-center justify-content-between" key={course.title}>
          <div className="d-flex align-items-center gap-3">
            <div className="course-icon" style={{ backgroundColor: course.iconBg, color: course.iconColor }}>
              <course.icon size={22} />
            </div>
            <div>
              <h3 className="course-title">{course.title}</h3>
              <p className="course-subtitle mb-0">{course.subtitle}</p>
            </div>
          </div>
          <button type="button" className="btn-ask-ai" onClick={() => onAskAI(course.question)}>
            اسأل الذكاء الاصطناعي
          </button>
        </div>
      ))}
    </div>
  );
}

export default CourseList;
