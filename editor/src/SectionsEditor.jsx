import { useState, useEffect } from 'react';

export default function SectionsEditor() {
  const [data, setData] = useState({ approach: '', workflow: '', heroTagline: '' });
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch('http://localhost:3001/api/data/sections');
      const json = await res.json();
      setData(json);
    } catch (error) {
      console.error(error);
      setStatus('Failed to load sections data.');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setStatus('Saving...');
    try {
      const res = await fetch('http://localhost:3001/api/data/sections', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        setStatus('Saved successfully!');
        setTimeout(() => setStatus(''), 3000);
      } else {
        setStatus('Failed to save.');
      }
    } catch (error) {
      console.error(error);
      setStatus('Failed to save.');
    }
  };

  if (loading) return <div>Loading sections data...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2>Content Sections</h2>
      </div>

      {status && <div className="status-msg">{status}</div>}

      <div className="card">
        <form onSubmit={handleSave}>
          <div className="form-group">
            <label>Hero Tagline</label>
            <textarea 
              rows={3} 
              value={data.heroTagline || ''} 
              onChange={e => setData({...data, heroTagline: e.target.value})} 
            />
          </div>
          
          <div className="form-group">
            <label>Approach (Markdown supported)</label>
            <textarea 
              rows={6} 
              value={data.approach || ''} 
              onChange={e => setData({...data, approach: e.target.value})} 
            />
          </div>

          <div className="form-group">
            <label>Workflow Description (Markdown supported)</label>
            <textarea 
              rows={4} 
              value={data.workflow || ''} 
              onChange={e => setData({...data, workflow: e.target.value})} 
            />
          </div>

          <div className="mt-4">
            <button type="submit" className="btn">Save Locally</button>
          </div>
        </form>
      </div>
    </div>
  );
}
