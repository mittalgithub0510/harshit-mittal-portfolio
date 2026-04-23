import './SkillCard.css';

const SkillCard = ({ title, items, isProgress = false }) => {
  return (
    <div className="skill-section-block">
      <h3 className="skill-title">{title}</h3>
      <div className={`skill-grid-layout ${isProgress ? 'progress-layout' : ''}`}>
        {items.map((item, index) => {
          const itemName = typeof item === 'string' ? item : item.name;
          const IconComp = typeof item !== 'string' && item.icon ? item.icon : null;
          const level = typeof item !== 'string' ? item.level : 0;
          const color = typeof item !== 'string' && item.color ? item.color : 'var(--accent-color)';

          if (isProgress) {
            return (
              <div key={index} className="skill-progress-container hoverable-progress glass-card">
                <div className="skill-info">
                  <span className="skill-name">
                    {IconComp && <span className="skill-icon-small" style={{ color }}><IconComp /></span>}
                    {itemName}
                  </span>
                  <span className="skill-percent">{level}%</span>
                </div>
                <div className="progress-bar-bg">
                  <div className="progress-bar-fill" style={{ width: `${level}%`, backgroundColor: color }}></div>
                </div>
              </div>
            );
          }

          // Squircle Card layout mimicking user image
          return (
            <div key={index} className="skill-tile-card glass-card">
              <div className="skill-icon-wrapper" style={{ backgroundColor: `${color}15` }}>
                {IconComp ? (
                  <IconComp className="skill-icon-large" style={{ color: color }} />
                ) : (
                  <span className="skill-icon-placeholder" style={{ color: color }}>
                    {itemName.charAt(0)}
                  </span>
                )}
              </div>
              <span className="skill-tile-name">{itemName}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillCard;
