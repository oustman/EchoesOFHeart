import { useState } from 'react';

function Login({ onLoginSuccess }) {
  const [formData, setFormData] = useState({ userName: '', password: '' });
  const [error, setError] = useState('');

  // 🔐 Your credentials
  const VALID_USERNAME = 'TheAbsolute';
  const VALID_PASSWORD = 'TheWorld@260998';

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (formData.userName === VALID_USERNAME && formData.password === VALID_PASSWORD) {
      console.log('✅ Login successful!');
      
      // Save user info
      localStorage.setItem('loverUser', formData.userName);
      
      // Call the navigation function
      if (onLoginSuccess && typeof onLoginSuccess === 'function') {
        onLoginSuccess();
      }
    } else {
      setError('❌ Invalid username or password');
    }
  };

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
        maxWidth: '400px',
        width: '100%',
        boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
        backdropFilter: 'blur(10px)'
      }}>
        <h2 style={{ 
          textAlign: 'center', 
          color: '#ff6b6b', 
          marginBottom: '30px',
          fontSize: '2rem'
        }}>
          💕 Welcome My Love 💕
        </h2>
        
        {error && (
          <div style={{
            backgroundColor: '#ffe0e0',
            color: '#cc0000',
            padding: '12px',
            borderRadius: '8px',
            marginBottom: '20px',
            textAlign: 'center',
            fontSize: '0.9rem'
          }}>
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '8px', 
              color: '#374151',
              fontWeight: '600'
            }}>
              Username
            </label>
            <input
              type="text"
              value={formData.userName}
              onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '2px solid #e5e7eb',
                fontSize: '1rem',
                outline: 'none',
                transition: 'border-color 0.3s',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => e.target.style.borderColor = '#ff6b6b'}
              onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              required
            />
          </div>
          
          <div style={{ marginBottom: '25px' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '8px', 
              color: '#374151',
              fontWeight: '600'
            }}>
              Password
            </label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '2px solid #e5e7eb',
                fontSize: '1rem',
                outline: 'none',
                transition: 'border-color 0.3s',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => e.target.style.borderColor = '#ff6b6b'}
              onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              required
            />
          </div>
          
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '14px',
              fontSize: '1.1rem',
              fontWeight: '600',
              backgroundColor: '#ff6b6b',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              transition: 'all 0.3s',
              boxShadow: '0 4px 12px rgba(255,107,107,0.3)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#ff5252';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#ff6b6b';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Welcome My Beloved, Raksha aka TheAbsolute ❤️
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;