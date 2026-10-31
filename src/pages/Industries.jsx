import React, { useState } from 'react';
import { Icon, Link } from '../components/Shared';
import { industriesData } from '../data/industriesData';

export default function Industries() {
  const [selectedBrand, setSelectedBrand] = useState('ALL');

  const brands = ['ALL', ...new Set(industriesData.map(item => item.brand).filter(Boolean))];

  const filteredIndustries = selectedBrand === 'ALL'
    ? industriesData
    : industriesData.filter(x => x.brand === selectedBrand);

  return (
    <div className="industries-page">
      <section className="section industries">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow"><span /> INDUSTRIES WE SERVE</div>
              <h2>One engineering partner.<br /><em>Many tough environments.</em></h2>
            </div>
            <p>
              From heavy mining, earthmovers, and sugar mills to robotics, aerospace, semiconductor systems, and wind energy, Teknomac partners with world leaders like RINGSPANN, KENDRION, PITSON GEARS, and TOP GEAR to engineer uptime, safety, and operational excellence across India.
            </p>
          </div>

          <div className="filter-row" style={{ marginBottom: '35px' }}>
            {brands.map(b => {
              const count = b === 'ALL'
                ? industriesData.length
                : industriesData.filter(x => x.brand === b).length;
              return (
                <button
                  key={b}
                  type="button"
                  className={selectedBrand === b ? 'active' : ''}
                  onClick={() => setSelectedBrand(b)}
                >
                  {b === 'ALL' ? 'All Sectors' : b} ({count})
                </button>
              );
            })}
          </div>

          <div className="industry-grid">
            {filteredIndustries.map((item, index) => (
              <article key={item.id} className="industry-card">
                <div className="industry-card-visual">
                  <span className="industry-card-number">{String(index + 1).padStart(2, '0')}</span>
                  {item.brand && <span className="industry-card-brand">{item.brand}</span>}
                  <img
                    src={item.image}
                    alt={item.name}
                  />
                  <div className="industry-card-overlay" />
                </div>

                <div className="industry-card-body">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>

                  {item.applications && item.applications.length > 0 && (
                    <>
                      <div className="industry-apps-title">Key Applications</div>
                      <div className="industry-apps-list">
                        {item.applications.map((app, appIdx) => (
                          <span key={appIdx} className="industry-app-tag">
                            {app}
                          </span>
                        ))}
                      </div>
                    </>
                  )}

                  <div className="industry-card-footer">
                    <Link to="/#contact" className="industry-inquire-btn">
                      <span>Inquire Solutions</span>
                      <Icon name="arrow" size={14} />
                    </Link>
                    <Link to="/#contact" className="industry-circle-arrow" aria-label={`Inquire about ${item.name}`}>
                      <Icon name="arrow" size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
