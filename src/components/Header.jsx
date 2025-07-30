import "../css/Header.css";

  export default function Header({ title, subtitle, actionButton, onActionClick, icon }) {
    return (
      <div className="header">
        <div>
          {icon && <div className="header-icon">{icon}</div>}
          <div className="header-text">
            <h1 className="header-title">{title}</h1>
            <p className="header-subtitle">{subtitle}</p>
          </div>
        </div>
        {actionButton && (
          <button 
            className="header-action-button"
            onClick={onActionClick}
          >
            {actionButton}
          </button>
        )}
      </div>
    );
  }
  