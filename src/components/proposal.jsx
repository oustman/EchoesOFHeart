import { useState } from 'react';

function Proposal() {
  const [showDateOptions, setShowDateOptions] = useState(false);

  const handleYes = () => {
    setShowDateOptions(true);
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
      {!showDateOptions ? (
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ 
            fontSize: 'clamp(2rem, 5vw, 3rem)', 
            marginBottom: '40px', 
            color: '#fff',
            textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
          }}>
            ✨ Will you go on a date with me? ✨
          </h1>
          
          <div style={{ 
            display: 'flex', 
            gap: '20px', 
            justifyContent: 'center', 
            flexWrap: 'wrap' 
          }}>
            <button
              onClick={handleYes}
              style={{
                padding: '15px 50px',
                fontSize: '1.5rem',
                backgroundColor: '#51cf66',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                transition: 'transform 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              ✅ Yes!
            </button>
            
            <button
              onMouseEnter={(e) => {
                const x = Math.random() * 200 - 100;
                const y = Math.random() * 200 - 100;
                e.target.style.transform = `translate(${x}px, ${y}px)`;
              }}
              onClick={handleYes}
              style={{
                padding: '15px 50px',
                fontSize: '1.5rem',
                backgroundColor: '#ff6b6b',
                color: 'white',
                border: '2px solid #fff',
                borderRadius: '10px',
                cursor: 'pointer',
                position: 'relative',
                transition: 'transform 0.2s',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
              }}
            >
              ❌ No
            </button>
          </div>
          
          <p style={{ 
            marginTop: '30px', 
            color: '#fff', 
            fontSize: '0.9rem',
            textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
          }}>
            * Psst... "No" isn't really an option 😉
          </p>
        </div>
      ) : (
        <DateOptions />
      )}
    </div>
  );
}

function DateOptions() {
  const [selected, setSelected] = useState(null);

  const options = [
    { emoji: '🍝', title: 'Romantic Dinner', desc: 'Candlelit Italian restaurant' },
    { emoji: '🎬', title: 'Movie Night', desc: 'Your favorite films + popcorn' },
    { emoji: '🌅', title: 'Sunset Walk', desc: 'Beach or park stroll' },
    { emoji: '☕', title: 'Coffee Date', desc: 'Cozy café chat' },
  ];

  const handleShare = () => {
    const userName = localStorage.getItem('loverUser') || 'My Love';
    const message = `Hey ${userName}! I picked: ${selected.emoji} ${selected.title} 💕`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div style={{ textAlign: 'center', maxWidth: '600px' }}>
      <h1 style={{ 
        fontSize: 'clamp(2rem, 5vw, 3rem)', 
        marginBottom: '20px', 
        color: '#51cf66',
        textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
      }}>
        🎉 DATE UNLOCKED! 🎉
      </h1>
      <p style={{ 
        fontSize: '1.2rem', 
        marginBottom: '40px', 
        color: '#fff',
        textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
      }}>
        Yay! Pick your adventure:
      </p>
      
      {!selected ? (
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '20px' 
        }}>
          {options.map((opt, i) => (
            <button
              key={i}
              onClick={() => setSelected(opt)}
              style={{
                padding: '30px',
                backgroundColor: 'white',
                border: '3px solid #ff6b6b',
                borderRadius: '15px',
                cursor: 'pointer',
                transition: 'transform 0.2s',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <div style={{ fontSize: '4rem', marginBottom: '10px' }}>{opt.emoji}</div>
              <h3 style={{ marginBottom: '5px', color: '#333' }}>{opt.title}</h3>
              <p style={{ color: '#666', margin: 0, fontSize: '0.9rem' }}>{opt.desc}</p>
            </button>
          ))}
        </div>
      ) : (
        <div style={{
          backgroundColor: 'white',
          padding: '40px',
          borderRadius: '20px',
          boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
        }}>
          <div style={{ fontSize: '6rem', marginBottom: '20px' }}>{selected.emoji}</div>
          <h2 style={{ color: '#ff6b6b', marginBottom: '10px' }}>{selected.title}</h2>
          <p style={{ color: '#666', marginBottom: '30px' }}>{selected.desc}</p>
          
          <button
            onClick={handleShare}
            style={{
              padding: '15px 40px',
              fontSize: '1.2rem',
              backgroundColor: '#25D366',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              transition: 'transform 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            💬 Tell them your choice!
          </button>
        </div>
      )}
    </div>
  );
}

export default Proposal;