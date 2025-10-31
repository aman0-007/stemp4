import { useState } from 'react';
import { FileText, Image, FileSpreadsheet, Download, Eye, X } from 'lucide-react';
import './ResourceGallery.css';

function ResourceGallery() {
  const [previewItem, setPreviewItem] = useState(null);

  const resources = [
    {
      id: 1,
      title: 'Annual Report 2024',
      type: 'pdf',
      description: 'Comprehensive overview of our activities and achievements',
      icon: <FileText />,
      thumbnail: 'document',
      size: '2.4 MB'
    },
    {
      id: 2,
      title: 'Seva Activities Gallery',
      type: 'image',
      description: 'Photos from recent community service events',
      icon: <Image />,
      thumbnail: 'image',
      size: '15.8 MB'
    },
    {
      id: 3,
      title: 'Event Schedule 2024',
      type: 'spreadsheet',
      description: 'Complete calendar of upcoming programs and events',
      icon: <FileSpreadsheet />,
      thumbnail: 'spreadsheet',
      size: '1.2 MB'
    },
    {
      id: 4,
      title: 'Bhajan Lyrics Collection',
      type: 'pdf',
      description: 'Comprehensive collection of devotional songs',
      icon: <FileText />,
      thumbnail: 'document',
      size: '3.6 MB'
    },
    {
      id: 5,
      title: 'Workshop Presentation',
      type: 'ppt',
      description: 'Materials from recent spiritual workshop',
      icon: <FileText />,
      thumbnail: 'presentation',
      size: '8.9 MB'
    },
    {
      id: 6,
      title: 'Community Photos',
      type: 'image',
      description: 'Moments captured during group activities',
      icon: <Image />,
      thumbnail: 'image',
      size: '12.3 MB'
    }
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'pdf':
        return '#ff6b35';
      case 'image':
        return '#f7931e';
      case 'spreadsheet':
        return '#22c55e';
      case 'ppt':
        return '#004e89';
      default:
        return '#666';
    }
  };

  const handlePreview = (item) => {
    setPreviewItem(item);
  };

  const handleDownload = (item) => {
    alert(`Downloading: ${item.title}`);
  };

  const closePreview = () => {
    setPreviewItem(null);
  };

  return (
    <section className="resource-gallery section">
      <div className="container">
        <h2 className="section-title">Resources & Downloads</h2>
        <p className="section-subtitle">Access our collection of documents, presentations, and media</p>

        <div className="resources-grid">
          {resources.map((resource) => (
            <div key={resource.id} className="resource-card">
              <div
                className="resource-thumbnail"
                style={{ background: `${getTypeColor(resource.type)}15` }}
              >
                <div className="resource-icon" style={{ color: getTypeColor(resource.type) }}>
                  {resource.icon}
                </div>
                <div className="resource-type-badge" style={{ background: getTypeColor(resource.type) }}>
                  {resource.type.toUpperCase()}
                </div>
              </div>

              <div className="resource-info">
                <h3 className="resource-title">{resource.title}</h3>
                <p className="resource-description">{resource.description}</p>
                <p className="resource-size">{resource.size}</p>
              </div>

              <div className="resource-actions">
                <button
                  className="action-btn preview-btn"
                  onClick={() => handlePreview(resource)}
                  title="Preview"
                >
                  <Eye size={18} />
                  <span>Preview</span>
                </button>
                <button
                  className="action-btn download-btn"
                  onClick={() => handleDownload(resource)}
                  title="Download"
                >
                  <Download size={18} />
                  <span>Download</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {previewItem && (
        <div className="preview-modal" onClick={closePreview}>
          <div className="preview-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-preview" onClick={closePreview}>
              <X size={24} />
            </button>
            <div className="preview-header">
              <div className="preview-icon" style={{ color: getTypeColor(previewItem.type) }}>
                {previewItem.icon}
              </div>
              <div>
                <h3>{previewItem.title}</h3>
                <p>{previewItem.description}</p>
              </div>
            </div>
            <div className="preview-body">
              <div className="preview-placeholder">
                <p>Preview functionality will be implemented with actual file URLs</p>
                <p className="preview-note">File Type: {previewItem.type.toUpperCase()} | Size: {previewItem.size}</p>
              </div>
            </div>
            <div className="preview-footer">
              <button
                className="preview-download-btn"
                onClick={() => handleDownload(previewItem)}
              >
                <Download size={20} />
                Download File
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ResourceGallery;
