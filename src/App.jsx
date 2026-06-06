import { useState, useEffect } from 'react';
import Login from './components/Login';
import Apology from './components/Apology';
import Proposal from './components/Proposal';
import './styles/background.css';

function App() {
  const [currentPage, setCurrentPage] = useState('login');

  // Check login state on mount
  useEffect(() => {
    const flowState = localStorage.getItem('flowState');
    
    // If they've completed apology, go to proposal
    if (flowState === 'proposal') {
      setCurrentPage('proposal');
    }
    // If they've logged in but not seen apology, go to apology
    else if (flowState === 'apology') {
      setCurrentPage('apology');
    }
    // Otherwise stay on login
    else {
      setCurrentPage('login');
    }
  }, []);

  // Navigation handlers
  const handleLoginSuccess = () => {
    localStorage.setItem('flowState', 'apology');
    setCurrentPage('apology');
  };

  const handleApologyContinue = () => {
    localStorage.setItem('flowState', 'proposal');
    setCurrentPage('proposal');
  };

  // Reset flow (optional - for testing)
  const handleReset = () => {
    localStorage.clear();
    setCurrentPage('login');
  };

  return (
    <>
      {/* Background based on current page */}
      {currentPage === 'login' && <div className="page-bg bg-login" />}
      {currentPage === 'apology' && <div className="page-bg bg-apology" />}
      {currentPage === 'proposal' && <div className="page-bg bg-proposal" />}

      {/* Page content */}
      {currentPage === 'login' && (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
      
      {currentPage === 'apology' && (
        <Apology onContinue={handleApologyContinue} />
      )}
      
      {currentPage === 'proposal' && (
        <Proposal />
      )}

      {/* Reset button (bottom right corner) - for testing */}
      <button
        onClick={handleReset}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          padding: '10px 15px',
          backgroundColor: 'rgba(0,0,0,0.5)',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '0.8rem',
          zIndex: 1000
        }}
        title="Reset flow for testing"
      >
        🔄 Reset
      </button>
    </>
  );
}

export default App;