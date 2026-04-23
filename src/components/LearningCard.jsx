import { Play, TrendingUp } from 'lucide-react';
import './LearningCard.css';

const LearningCard = ({ topic, progress, description, playlistUrl }) => {
  return (
    <div className="learning-card glass-card">
      <div className="learning-thumb">
        <a href={playlistUrl || '#'} target="_blank" rel="noopener noreferrer" className="play-icon">
          <Play fill="currentColor" size={24} />
        </a>
      </div>
      <div className="learning-content">
        <h3 className="learning-title">{topic}</h3>
        <p className="learning-desc">{description}</p>
        <div className="learning-progress">
          <div className="progress-info">
            <span className="progress-label"><TrendingUp size={14} className="mr-1" /> Progress</span>
            <span className="progress-value">{progress}%</span>
          </div>
          <div className="progress-bar-bg">
            <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
          </div>
          </div>
          <div className="learning-actions">
            <a href={playlistUrl || '#'} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm action-btn">
              Watch Playlist
            </a>
          </div>
        </div>
      </div>
  );
};

export default LearningCard;
