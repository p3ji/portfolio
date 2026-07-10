import { useState, useEffect } from 'react';

export default function TimelineEditor() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [status, setStatus] = useState('');

  // Form state
  const [formData, setFormData] = useState({
    date: '',
    type: 'study',
    title: '',
    description: '',
    tags: '',
    links: ''
  });

  const existingTags = Array.from(new Set(entries.flatMap(e => e.tags || []))).sort();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch('http://localhost:3001/api/data/timeline');
      const data = await res.json();
      setEntries(data);
    } catch (error) {
      console.error(error);
      setStatus('Failed to load timeline data.');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (updatedEntries) => {
    setStatus('Saving...');
    try {
      const res = await fetch('http://localhost:3001/api/data/timeline', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedEntries)
      });
      if (res.ok) {
        setEntries(updatedEntries);
        setStatus('Saved successfully!');
        setEditingIndex(-1);
        setTimeout(() => setStatus(''), 3000);
      } else {
        setStatus('Failed to save.');
      }
    } catch (error) {
      console.error(error);
      setStatus('Failed to save.');
    }
  };

  const handleEdit = (index) => {
    const entry = entries[index];
    setFormData({
      date: entry.date || '',
      type: entry.type || 'study',
      title: entry.title || '',
      description: entry.description || '',
      details: entry.details || '',
      url: entry.url || '',
      tags: entry.tags ? entry.tags.join(', ') : '',
      links: entry.links ? JSON.stringify(entry.links) : ''
    });
    setEditingIndex(index);
  };

  const handleAddNew = () => {
    setFormData({
      date: '',
      type: 'study',
      title: '',
      description: '',
      details: '',
      url: '',
      tags: '',
      links: ''
    });
    setEditingIndex(entries.length); // new item at end
  };

  const handleDelete = (index) => {
    if (confirm('Are you sure you want to delete this entry?')) {
      const newEntries = [...entries];
      newEntries.splice(index, 1);
      handleSave(newEntries);
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    
    // Parse tags and links
    const tagsArray = formData.tags.split(',').map(t => t.trim()).filter(t => t);
    let linksArray = [];
    if (formData.links) {
      try {
        linksArray = JSON.parse(formData.links);
      } catch (e) {
        alert('Invalid JSON in Links field');
        return;
      }
    }

    const newEntry = {
      ...formData,
      details: formData.details.trim() ? formData.details.trim() : undefined,
      url: formData.url.trim() ? formData.url.trim() : undefined,
      tags: tagsArray.length > 0 ? tagsArray : undefined,
      links: linksArray.length > 0 ? linksArray : undefined
    };

    const newEntries = [...entries];
    if (editingIndex >= entries.length) {
      newEntries.push(newEntry);
    } else {
      newEntries[editingIndex] = newEntry;
    }

    handleSave(newEntries);
  };

  if (loading) return <div>Loading timeline data...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2>Timeline Entries</h2>
        <button className="btn" onClick={handleAddNew}>+ Add New Entry</button>
      </div>

      {status && <div className="status-msg">{status}</div>}

      {editingIndex !== -1 ? (
        <div className="card">
          <h3>{editingIndex >= entries.length ? 'New Entry' : 'Edit Entry'}</h3>
          <form onSubmit={submitForm}>
            <div className="form-group">
              <label>Title</label>
              <input value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} required />
            </div>
            <div className="flex gap-4">
              <div className="form-group flex-1" style={{flex: 1}}>
                <label>Date</label>
                <input value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} required />
              </div>
              <div className="form-group flex-1" style={{flex: 1}}>
                <label>Type</label>
                <select value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})}>
                  <option value="study">Study</option>
                  <option value="milestone">Milestone</option>
                  <option value="prototype">Prototype</option>
                  <option value="concept">Concept</option>
                  <option value="blog">Blog</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label>Description (always visible, markdown supported)</label>
              <textarea rows={3} value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} required />
            </div>
            <div className="form-group">
              <label>Details (optional, collapsible section, markdown supported)</label>
              <textarea rows={4} value={formData.details} onChange={e => setFormData({...formData, details: e.target.value})} />
            </div>
            <div className="form-group">
              <label>URL (optional, "Read more" link to Reflection/Substack)</label>
              <input value={formData.url} onChange={e => setFormData({...formData, url: e.target.value})} />
            </div>
            <div className="form-group">
              <label>Tags (comma separated)</label>
              <input value={formData.tags} onChange={e => setFormData({...formData, tags: e.target.value})} />
              <div style={{ marginTop: '0.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {existingTags.map(tag => {
                  const currentTags = formData.tags ? formData.tags.split(',').map(t => t.trim()) : [];
                  const isSelected = currentTags.includes(tag);
                  return (
                    <span 
                      key={tag} 
                      className="badge" 
                      style={{ cursor: 'pointer', opacity: isSelected ? 0.5 : 1, transition: 'opacity 0.2s' }}
                      onClick={() => {
                        if (!isSelected) {
                          const newTags = formData.tags ? formData.tags + ', ' + tag : tag;
                          setFormData({...formData, tags: newTags});
                        }
                      }}
                      title="Click to add tag"
                    >
                      + {tag}
                    </span>
                  );
                })}
              </div>
            </div>
            <div className="form-group">
              <label>Links (JSON format e.g. {'[{"label":"Live","href":"..."}]'})</label>
              <textarea rows={3} value={formData.links} onChange={e => setFormData({...formData, links: e.target.value})} />
            </div>
            <div className="flex gap-4 mt-4">
              <button type="submit" className="btn">Save Locally</button>
              <button type="button" className="btn btn-secondary" onClick={() => setEditingIndex(-1)}>Cancel</button>
            </div>
          </form>
        </div>
      ) : (
        <div className="timeline-list">
          {entries.map((entry, idx) => (
            <div key={idx} className="card">
              <div className="flex justify-between">
                <div>
                  <h3 className="mb-4">{entry.title} <span className="text-sm text-secondary" style={{fontWeight: 'normal', marginLeft: '0.5rem'}}>{entry.date}</span></h3>
                  <div className="mb-4">
                    <span className="badge">{entry.type}</span>
                    {entry.tags && entry.tags.map(tag => <span key={tag} className="badge">{tag}</span>)}
                  </div>
                  <p className="text-secondary">{entry.description}</p>
                </div>
                <div className="flex gap-4" style={{alignItems: 'flex-start'}}>
                  <button className="btn btn-secondary" onClick={() => handleEdit(idx)}>Edit</button>
                  <button className="btn btn-danger" onClick={() => handleDelete(idx)}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
