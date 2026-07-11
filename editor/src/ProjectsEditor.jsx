import { useState, useEffect } from 'react';

export default function ProjectsEditor() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [status, setStatus] = useState('');

  // Form state
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    description: '',
    details: '',
    category: '',
    stage: 'concept',
    icon: 'fa-cube',
    image: '',
    featured: false,
    links: ''
  });

  const existingCategories = Array.from(new Set(entries.flatMap(e => e.category || []))).sort();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch('http://localhost:3001/api/data/projects');
      const data = await res.json();
      setEntries(data);
    } catch (error) {
      console.error(error);
      setStatus('Failed to load projects data.');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (updatedEntries) => {
    setStatus('Saving...');
    try {
      const res = await fetch('http://localhost:3001/api/data/projects', {
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
      id: entry.id || '',
      title: entry.title || '',
      description: entry.description || '',
      details: entry.details || '',
      category: entry.category ? entry.category.join(', ') : '',
      stage: entry.stage || 'concept',
      icon: entry.icon || 'fa-cube',
      image: entry.image || '',
      featured: !!entry.featured,
      links: entry.links ? JSON.stringify(entry.links) : ''
    });
    setEditingIndex(index);
  };

  const handleAddNew = () => {
    setFormData({
      id: '',
      title: '',
      description: '',
      details: '',
      category: '',
      stage: 'concept',
      icon: 'fa-cube',
      image: '',
      featured: false,
      links: ''
    });
    setEditingIndex(entries.length); // new item at end
  };

  const handleDelete = (index) => {
    if (confirm('Are you sure you want to delete this project?')) {
      const newEntries = [...entries];
      newEntries.splice(index, 1);
      handleSave(newEntries);
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    
    // Parse tags and links
    const catArray = formData.category.split(',').map(t => t.trim()).filter(t => t);
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
      image: formData.image.trim() ? formData.image.trim() : undefined,
      category: catArray.length > 0 ? catArray : [],
      links: linksArray.length > 0 ? linksArray : []
    };

    const newEntries = [...entries];
    if (editingIndex >= entries.length) {
      newEntries.push(newEntry);
    } else {
      newEntries[editingIndex] = newEntry;
    }

    handleSave(newEntries);
  };

  if (loading) return <div>Loading projects data...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2>Projects</h2>
        <button className="btn" onClick={handleAddNew}>+ Add New Project</button>
      </div>

      {status && <div className="status-msg">{status}</div>}

      {editingIndex !== -1 ? (
        <div className="card">
          <h3>{editingIndex >= entries.length ? 'New Project' : 'Edit Project'}</h3>
          <form onSubmit={submitForm}>
            <div className="flex gap-4">
              <div className="form-group flex-1" style={{flex: 1}}>
                <label>ID (unique string)</label>
                <input value={formData.id} onChange={e => setFormData({...formData, id: e.target.value})} required />
              </div>
              <div className="form-group flex-1" style={{flex: 1}}>
                <label>Title</label>
                <input value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} required />
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="form-group flex-1" style={{flex: 1}}>
                <label>Stage</label>
                <select value={formData.stage} onChange={e => setFormData({...formData, stage: e.target.value})}>
                  <option value="concept">Concept</option>
                  <option value="prototype">Prototype</option>
                  <option value="game">Game</option>
                </select>
              </div>
              <div className="form-group flex-1" style={{flex: 1}}>
                <label>Icon (FontAwesome class e.g. fa-brain)</label>
                <input value={formData.icon} onChange={e => setFormData({...formData, icon: e.target.value})} />
              </div>
            </div>

            <div className="form-group">
              <label>Description (short)</label>
              <textarea rows={2} value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} required />
            </div>
            <div className="form-group">
              <label>Details (collapsible long text, HTML allowed)</label>
              <textarea rows={4} value={formData.details} onChange={e => setFormData({...formData, details: e.target.value})} />
            </div>
            <div className="form-group">
              <label>Categories (comma separated: health, economy, personal-tools, work-tools, games)</label>
              <input value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} />
              <div style={{ marginTop: '0.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {existingCategories.map(cat => {
                  const currentCats = formData.category ? formData.category.split(',').map(t => t.trim()) : [];
                  const isSelected = currentCats.includes(cat);
                  return (
                    <span 
                      key={cat} 
                      className="badge" 
                      style={{ cursor: 'pointer', opacity: isSelected ? 0.5 : 1, transition: 'opacity 0.2s' }}
                      onClick={() => {
                        if (!isSelected) {
                          const newCats = formData.category ? formData.category + ', ' + cat : cat;
                          setFormData({...formData, category: newCats});
                        }
                      }}
                      title="Click to add category"
                    >
                      + {cat}
                    </span>
                  );
                })}
              </div>
            </div>
            
            <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <input type="checkbox" id="featuredCheck" checked={formData.featured} onChange={e => setFormData({...formData, featured: e.target.checked})} />
              <label htmlFor="featuredCheck" style={{ marginBottom: 0 }}>Featured Project (Shows in Carousel)</label>
            </div>

            {formData.featured && (
              <div className="form-group">
                <label>Image URL for Carousel (e.g. images/n-1.png)</label>
                <input value={formData.image} onChange={e => setFormData({...formData, image: e.target.value})} />
              </div>
            )}

            <div className="form-group">
              <label>Links (JSON format e.g. {'[{"label":"GitHub", "icon":"fa-github", "href":"..."}]'})</label>
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
                  <h3 className="mb-4">
                    {entry.featured && <span style={{color: 'var(--accent-primary)', marginRight: '0.5rem'}}>★</span>}
                    {entry.title}
                  </h3>
                  <div className="mb-4">
                    <span className="badge">{entry.stage}</span>
                    {entry.category && entry.category.map(cat => <span key={cat} className="badge">{cat}</span>)}
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
