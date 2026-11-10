import React from "react";

function VideoPlayer({ course, onClose }) {
  if (!course) return null;

  const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(course.searchTerm || course.title + " tutorial")}`;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" role="dialog" aria-modal="true" aria-label={course.title}
        onClick={(event) => event.stopPropagation()}>
        <div className="modal-header">
          <h2>{course.title}</h2>
          <button type="button" className="close-button" onClick={onClose} aria-label="Fechar vídeo">✕</button>
        </div>
        {course.videoId ? (
          <div className="video-container">
            <iframe
              src={`https://www.youtube.com/embed/${course.videoId}`}
              title={course.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="video-search">
            <p>Não há um vídeo específico indicado para este card no material da aula.</p>
            <a href={searchUrl} target="_blank" rel="noreferrer">Pesquisar aulas de {course.title} no YouTube ↗</a>
          </div>
        )}
        <p className="player-description">{course.description}</p>
      </div>
    </div>
  );
}
export default VideoPlayer;