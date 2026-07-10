import { useState, useEffect } from 'react';
import TimelineEditor from './TimelineEditor';
import SectionsEditor from './SectionsEditor';
import ProjectsEditor from './ProjectsEditor';
import './index.css';

function App() {
  const [activeTab, setActiveTab] = useState('projects');
  const [publishStatus, setPublishStatus] = useState('');
  const [isPublishing, setIsPublishing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [changesList, setChangesList] = useState([]);

  const handlePublishClick = async () => {
    setIsPublishing(true);
    setPublishStatus('Analyzing changes...');
    try {
      const res = await fetch('http://localhost:3001/api/diff');
      const data = await res.json();
      
      if (!res.ok) throw new Error(data.error);
      
      if (data.changes && data.changes.length > 0) {
        setChangesList(data.changes);
        setShowModal(true);
        setPublishStatus('');
      } else {
        setPublishStatus('No changes to publish.');
        setIsPublishing(false);
        setTimeout(() => setPublishStatus(''), 4000);
      }
    } catch (err) {
      setPublishStatus('Failed to analyze changes.');
      setIsPublishing(false);
    }
  };

  const confirmPublish = async () => {
    setShowModal(false);
    setPublishStatus('Publishing to GitHub...');
    try {
      const res = await fetch('http://localhost:3001/api/publish', { method: 'POST' });
      const data = await res.json();
      if (res.ok) {
        setPublishStatus(data.message || 'Successfully published to live site!');
      } else {
        setPublishStatus('Publish failed: ' + (data.error || 'Unknown error'));
      }
    } catch (err) {
      setPublishStatus('Publish failed: Network error');
    }
    setIsPublishing(false);
    setTimeout(() => setPublishStatus(''), 5000);
  };

  return (
    <div className="container">
      <header>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div>
            <h1 style={{ marginBottom: '0.5rem' }}>Portfolio Editor</h1>
            <p className="text-secondary" style={{ margin: 0 }}>
              <strong>How to update:</strong> 1. Add or edit an entry &nbsp;&rarr;&nbsp; 2. Click Save Locally &nbsp;&rarr;&nbsp; 3. Click Publish to GitHub.
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <button 
              className="btn" 
              onClick={handlePublishClick} 
              disabled={isPublishing}
              style={{ backgroundColor: 'var(--accent-primary)', color: 'var(--bg-primary)', fontWeight: 'bold' }}
            >
              {isPublishing ? 'Publishing...' : 'Publish to GitHub'}
            </button>
            {publishStatus && <div style={{ fontSize: '0.875rem', marginTop: '0.5rem', color: publishStatus.includes('failed') ? '#ff4444' : 'var(--accent-primary)' }}>{publishStatus}</div>}
          </div>
        </div>
        <nav className="flex gap-4">
          <button 
            className={activeTab === 'projects' ? 'active' : ''} 
            onClick={() => setActiveTab('projects')}
          >
            Projects
          </button>
          <button 
            className={activeTab === 'timeline' ? 'active' : ''} 
            onClick={() => setActiveTab('timeline')}
          >
            Timeline
          </button>
          <button 
            className={activeTab === 'sections' ? 'active' : ''} 
            onClick={() => setActiveTab('sections')}
          >
            Sections
          </button>
        </nav>
      </header>

      <main>
        {activeTab === 'projects' && <ProjectsEditor />}
        {activeTab === 'timeline' && <TimelineEditor />}
        {activeTab === 'sections' && <SectionsEditor />}
      </main>

      {showModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div className="card" style={{ maxWidth: '500px', width: '100%', maxHeight: '80vh', overflowY: 'auto' }}>
            <h3 style={{ marginBottom: '1rem' }}>Confirm Publish</h3>
            <p className="text-secondary mb-4">The following changes will be pushed to GitHub:</p>
            <ul style={{ marginBottom: '2rem', paddingLeft: '1.5rem', lineHeight: '1.6' }}>
              {changesList.map((change, i) => <li key={i}>{change}</li>)}
            </ul>
            <div className="flex gap-4">
              <button className="btn" onClick={confirmPublish} style={{ backgroundColor: 'var(--accent-primary)', color: 'var(--bg-primary)' }}>Yes, Publish Now</button>
              <button className="btn btn-secondary" onClick={() => { setShowModal(false); setIsPublishing(false); }}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
