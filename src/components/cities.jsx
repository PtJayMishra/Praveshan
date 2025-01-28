import React, { useState } from 'react';

const ExpandableMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const menuStyles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#f3f3f3',
    },
    button: {
      padding: '0.5rem 1rem',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
    dropdown: {
      marginTop: '1rem',
      display: 'flex',
      gap: '1rem',
    },
    section: {
      position: 'absolute',
      top: '100%',
      left: 0,
      marginTop: '0.5rem',
      width: '12rem',
      backgroundColor: '#fff',
      border: '1px solid #ddd',
      borderRadius: '5px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      padding: '1rem',
      zIndex: 10,
    },
  };

  return (
    <div style={menuStyles.container}>
      <button
        style={menuStyles.button}
        onClick={() => setShowMenu((prev) => !prev)}
      >
        Cities
      </button>

      {showMenu && (
        <div style={menuStyles.dropdown}>
          {['Section 1', 'Section 2', 'Section 3'].map((section, index) => (
            <div
              key={index}
              style={{ position: 'relative' }}
              onMouseEnter={() => setActiveSection(index)}
              onMouseLeave={() => setActiveSection(null)}
            >
              <button
                style={menuStyles.button}
                onMouseOver={(e) => (e.target.style.backgroundColor = menuStyles.buttonHover.backgroundColor)}
                onMouseOut={(e) => (e.target.style.backgroundColor = menuStyles.button.backgroundColor)}
              >
                {section}
              </button>
              {activeSection === index && (
                <div style={menuStyles.section}>
                  <p>Content for {section}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExpandableMenu;
