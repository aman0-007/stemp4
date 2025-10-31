import { useState } from 'react';
import { FileText, Download, Eye, X } from 'lucide-react';
import './ResourceGallery.css';

function ResourceGallery() {
  const [previewItem, setPreviewItem] = useState(null);

  const resources = [
    {
      id: 1,
      title: 'annual report 2024 2025',
      type: 'pdf',
      description: 'Annual report for the year 2024–2025',
      icon: <FileText />,
      thumbnail: 'document',
      url: '/MHW1_Annual Report 2024-2025.pdf'
    },
    {
      id: 2,
      title: 'Seva Brochure',
      type: 'pdf',
      description: 'Overview of seva activities and initiatives',
      icon: <FileText />,
      thumbnail: 'document',
      url: '/Seva Brochure.pdf'
    },
    {
      id: 3,
      title: 'SSSSO Brochure',
      type: 'pdf',
      description: 'Sri Sathya Sai Seva Organisation information brochure',
      icon: <FileText />,
      thumbnail: 'document',
      url: '/SSSSO - Brochure.pdf'
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
    if (item.url) {
      const link = document.createElement('a');
      link.href = item.url;
      link.setAttribute('download', '');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
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
                {/* size removed */}
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
                <a
                  className="action-btn download-btn"
                  href={resource.url}
                  download
                  title="Download"
                >
                  <Download size={18} />
                  <span>Download</span>
                </a>
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
                <p className="preview-note">File Type: {previewItem.type.toUpperCase()}</p>
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
