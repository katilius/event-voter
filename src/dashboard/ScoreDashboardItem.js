import React from 'react';
import RemoveIcon from '@material-ui/icons/Remove';
import ScoreIcon from '../components/ScoreIcon';
import './ScoreDashboardItem.css';

export default function ScoreDashboardItem({ likes, dislikes, onLikeClick, onDislikeClick}) {
  return (
    <div className="dashboard-score">
      <div className="dashboard-score__box">
        <h4 className="dashboard-score__scoreboard-item">{likes || 0}</h4>
        <ScoreIcon score={1} onClick={onLikeClick}/>
      </div>
      <div className="dashboard-score__scoreboard-item">
        <RemoveIcon />
      </div>
      <div className="dashboard-score__box">
        <ScoreIcon score={-1} onClick={onDislikeClick} />
        <h4 className="dashboard-score__scoreboard-item">{dislikes || 0}</h4>
      </div>
    </div>
  );
}
