import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { Play, X, CircleAlert as AlertCircle } from 'lucide-react';
import './VideoSection.css';

function VideoSection() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const videos = [
    {
      id: 1,
      url: 'https://youtu.be/xX5g6GiyQRw',
      title: 'Sri Sathya Sai Baba Teachings',
      description: 'Inspirational discourse on love, service, and spiritual growth',
      thumbnail: `https://img.youtube.com/vi/xX5g6GiyQRw/maxresdefault.jpg`
    },
    {
      id: 2,
      url: 'https://youtu.be/x6_JXMj2Dpo',
      title: 'Community Seva Activities',
      description: 'Highlights from our recent community service initiatives',
      thumbnail: `https://img.youtube.com/vi/x6_JXMj2Dpo/maxresdefault.jpg`
    }
  ];

  const openVideo = (video) => {
    setSelectedVideo(video);
    setIsLoading(true);
    setHasError(false);
    document.body.style.overflow = 'hidden';
  };

  const closeVideo = () => {
    setSelectedVideo(null);
    setIsLoading(false);
    setHasError(false);
    document.body.style.overflow = 'auto';
  };

  const handleReady = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
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
                  loading="lazy"
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
              {hasError ? (
                <div className="video-error">
                  <AlertCircle className="video-error-icon" />
                  <h3 className="video-error-title">Unable to Load Video</h3>
                  <p className="video-error-message">
                    Please check your internet connection or try again later.
                  </p>
                </div>
              ) : (
                <ReactPlayer
                  url={selectedVideo.url}
                  width="100%"
                  height="100%"
                  playing={true}
                  controls={true}
                  onReady={handleReady}
                  onError={handleError}
                  config={{
                    youtube: {
                      playerVars: {
                        autoplay: 1,
                        modestbranding: 1,
                        rel: 0
                      }
                    }
                  }}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default VideoSection;
