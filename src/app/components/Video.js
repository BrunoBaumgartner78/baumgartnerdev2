import React, { useState } from "react";
import '../styles/Video.css';

const VideoPreview = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  // Vorschau ausblenden
  const handleHidePreview = () => {
    setIsHidden(true);
  };

  // Vollbild-Video anzeigen
  const handlePlayVideo = () => {
    setIsFullScreen(true);
  };

  // Vollbild schließen
  const handleCloseFullScreen = () => {
    setIsFullScreen(false);
  };

  return (
    <>
      {/* Video-Vorschau */}
      {!isHidden && (
        <div className="video-preview-container">
          <button className="close-button" onClick={handleHidePreview}>
            -
          </button>
          <video
            className="video-preview"
            src="./assets/tiny.mp4" // Video-URL hier einfügen
            muted
            loop
            autoPlay
            onClick={handlePlayVideo}
          />
          <div className="video-preview-text">Hast du eine Minute Zeit?</div>
        </div>
      )}

      {/* Vollbild-Video */}
      {isFullScreen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={handleCloseFullScreen}
        >
          <video
            src="./assets/tiny.mp4" // Gleiche Video-URL
            controls
            autoPlay
            style={{ width: "80%", height: "80%" }}
          />
        </div>
      )}
    </>
  );
};

export default VideoPreview;
