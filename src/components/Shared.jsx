import React from 'react';

export function Icon({ name, size = 20 }) {
  const p = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '1.8', strokeLinecap: 'round', strokeLinejoin: 'round' };
  const paths = {
    arrow: <><path d="M5 12h13" /><path d="m13 6 6 6-6 6" /></>,
    phone: <><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.7 19.7 0 0 1-8.6-3.1 19.3 19.3 0 0 1-6-6A19.7 19.7 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7A2 2 0 0 1 22 16.9Z" /></>,
    menu: <><path d="M4 6h16M4 12h16M4 18h16" /></>,
    x: <><path d="M6 6l12 12M18 6 6 18" /></>,
    check: <><path d="m5 12 4 4L19 6" /></>,
    play: <><path d="m8 5 11 7-11 7V5Z" /></>,
    mail: <><path d="M4 4h16v16H4z" /><path d="m4 7 8 6 8-6" /></>
  };
  return <svg {...p}>{paths[name]}</svg>;
}

export function MachineArt({ type }) {
  return (
    <div className={`machine-art art-${type}`} aria-hidden="true">
      <div className="art-glow" /><div className="machine-body" />
      <div className="art-detail d1" /><div className="art-detail d2" /><div className="art-detail d3" />
      <span className="art-bolt b1" /><span className="art-bolt b2" /><span className="art-bolt b3" /><span className="art-bolt b4" />
      <div className="art-label">TEKNOMAC</div>
    </div>
  );
}

export function Link({ to, children, className, onClick }) {
  return (
    <a 
      href={to} 
      className={className} 
      onClick={(e) => {
        if (to.startsWith('/#') || to.includes('#')) {
          const [path, hash] = to.split('#');
          
          if (window.location.pathname !== path && path !== '') {
            // Navigate to new page first
            e.preventDefault();
            window.history.pushState({}, '', path);
            window.dispatchEvent(new PopStateEvent('popstate'));
            
            // Wait for render, then scroll to hash
            setTimeout(() => {
              const el = document.getElementById(hash);
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          } else {
            // Already on the page, just scroll smoothly
            e.preventDefault();
            const el = document.getElementById(hash);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          e.preventDefault();
          window.history.pushState({}, '', to);
          window.dispatchEvent(new PopStateEvent('popstate'));
        }
        if (onClick) onClick();
      }}
    >
      {children}
    </a>
  );
}
