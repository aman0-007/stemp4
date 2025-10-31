import { useState, useEffect } from 'react';
import { Play, X, CircleAlert as AlertCircle } from 'lucide-react';
import './VideoSection.css';

function VideoSection() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const videos = [
    {
      id: 1,
      url: 'https://www.youtube.com/watch?v=x6_JXMj2Dpo',
      title: 'Featured Video 1',
      description: 'Watch this inspiring content from our organization',
      thumbnail: `https://img.youtube.com/vi/x6_JXMj2Dpo/maxresdefault.jpg`,
      thumbnailFallback: `https://img.youtube.com/vi/x6_JXMj2Dpo/hqdefault.jpg`
    },
    {
      id: 2,
      url: 'https://www.youtube.com/watch?v=xX5g6GiyQRw',
      title: 'Featured Video 2',
      description: 'Watch this inspiring content from our organization',
      thumbnail: `https://img.youtube.com/vi/xX5g6GiyQRw/maxresdefault.jpg`,
      thumbnailFallback: `https://img.youtube.com/vi/xX5g6GiyQRw/hqdefault.jpg`
    }
  ];

  const getVideoId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const openVideo = (video) => {
    setSelectedVideo(video);
    setIsLoading(true);
    setHasError(false);
    document.body.style.overflow = 'hidden';
    // Video will load automatically via iframe
    setTimeout(() => setIsLoading(false), 500);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
    setIsLoading(false);
    setHasError(false);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedVideo) {
        closeVideo();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [selectedVideo]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <section className="video-section section">
      <div className="container">
        <h2 className="section-title">Featured Videos</h2>
        <p className="section-subtitle">Watch inspiring content and highlights from our activities</p>

        <div className="videos-grid">
          {videos.map((video) => (
            <div
              key={video.id}
              className="video-card"
              onClick={() => openVideo(video)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openVideo(video);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`Play video: ${video.title}`}
            >
              <div className="video-thumbnail">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  loading="eager"
                  onError={(e) => {
                    if (e.target.src !== video.thumbnailFallback) {
                      e.target.src = video.thumbnailFallback;
                    } else {
                      // If fallback also fails, try SD thumbnail
                      const videoId = getVideoId(video.url);
                      if (videoId) {
                        e.target.src = `https://img.youtube.com/vi/${videoId}/sddefault.jpg`;
                      }
                    }
                  }}
                  onLoad={(e) => {
                    e.target.style.opacity = '1';
                  }}
                  style={{ opacity: 0, transition: 'opacity 0.3s ease' }}
                />
                <div className="video-play-overlay">
                  <div className="play-button" aria-hidden="true">
                    <Play />
                  </div>
                </div>
              </div>
              <div className="video-info">
                <h3 className="video-title">{video.title}</h3>
                <p className="video-description">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedVideo && (
        <div
          className="video-modal"
          onClick={closeVideo}
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-modal-title"
        >
          <div
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="video-modal-close"
              onClick={closeVideo}
              aria-label="Close video"
              autoFocus
            >
              <X size={24} />
            </button>
            <div className="video-player-wrapper">
              {isLoading && (
                <div className="video-loading">
                  <div className="video-spinner" aria-label="Loading video"></div>
                </div>
              )}
              {selectedVideo && (
                <iframe
                  src={`https://www.youtube.com/embed/${getVideoId(selectedVideo.url)}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="youtube-iframe"
                  onLoad={() => setIsLoading(false)}
                  onError={() => {
                    setIsLoading(false);
                    setHasError(true);
                  }}
                />
              )}
              {hasError && (
                <div className="video-error">
                  <AlertCircle className="video-error-icon" />
                  <h3 className="video-error-title">Unable to Load Video</h3>
                  <p className="video-error-message">
                    Please check your internet connection or try again later.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default VideoSection;
