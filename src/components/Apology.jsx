import { useState } from 'react';

function Apology({ onContinue }) {
  const [acknowledged, setAcknowledged] = useState(false);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: "'Segoe UI', system-ui, sans-serif",
      position: 'relative',
      zIndex: 1
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '20px',
        padding: '40px',
        maxWidth: '600px',
        width: '100%',
        boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <span style={{ fontSize: '3rem' }}>🕊️</span>
          <h2 style={{ color: '#374151', margin: '10px 0 5px' }}>I Owe You This</h2>
          <p style={{ color: '#6B7280', fontSize: '0.9rem' }}>Please read this before anything else</p>
        </div>

        <div style={{
          background: '#FFFFFF',
          padding: '25px',
          borderRadius: '12px',
          lineHeight: '1.7',
          color: '#374151',
          fontSize: '1rem',
          marginBottom: '25px',
          borderLeft: '4px solid #6B9080'
        }}>
          <p style={{ marginBottom: '15px' }}>
            I know I messed up. There's no excuse for it, and I take full responsibility.
          </p>
          <p style={{ marginBottom: '15px' }}>
            I'm truly sorry for hurting you. You didn't deserve that, and I hate that I caused it.
          </p>
          <p style={{ marginBottom: '15px' }}>
            I've realized how important you are to me, and I'm committed to doing better.
          </p>
          <p>
            You mean everything to me. I hope you can give me the chance to show you, starting with this question...
          </p>
        </div>

        <label style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          cursor: 'pointer',
          marginBottom: '20px',
          color: '#4B5563',
          fontSize: '0.95rem'
        }}>
          <input
            type="checkbox"
            checked={acknowledged}
            onChange={(e) => setAcknowledged(e.target.checked)}
            style={{ width: '18px', height: '18px', accentColor: '#6B9080' }}
          />
          I've read this and understand
        </label>

        <button
          onClick={onContinue}
          disabled={!acknowledged}
          style={{
            width: '100%',
            padding: '14px',
            fontSize: '1.1rem',
            fontWeight: '600',
            backgroundColor: acknowledged ? '#6B9080' : '#9CA3AF',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            cursor: acknowledged ? 'pointer' : 'not-allowed',
            transition: 'all 0.3s ease',
            boxShadow: acknowledged ? '0 4px 12px rgba(107,144,128,0.3)' : 'none'
          }}
        >
          {acknowledged ? 'Continue to My Question →' : 'Please read & acknowledge first'}
        </button>
      </div>
    </div>
  );
}

export default Apology;