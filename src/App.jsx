import { useState } from 'react';
import Navbar from '@/components/Navbar';
import WelcomeBanner from '@/components/WelcomeBanner';
import StatsGrid from '@/components/StatsGrid';
import CourseList from '@/components/CourseList';
import ChatPanel from '@/components/ChatPanel';

function App() {
  const [presetQuestion, setPresetQuestion] = useState(null);

  return (
    <div className="app-shell">
      <Navbar />

      <main className="container-lg flex-grow-1 py-4">
        <div className="row g-4">
          <section className="col-lg-7 d-flex flex-column gap-4">
            <WelcomeBanner />
            <StatsGrid />
            <CourseList onAskAI={setPresetQuestion} />
          </section>

          <section className="col-lg-5">
            <ChatPanel presetQuestion={presetQuestion} onPresetHandled={() => setPresetQuestion(null)} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
