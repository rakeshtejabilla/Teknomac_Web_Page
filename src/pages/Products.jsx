import React, { useState, useEffect } from 'react';
import { Icon, MachineArt, Link } from '../components/Shared';
import { productBrands } from '../data/productsData';

export default function Products() {
  const [modal, setModal] = useState(null);

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.slice(1);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  }, []);
  
  return (
    <div className="products-page">
      <section className="section page-header">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow"><span /> OUR PRODUCT RANGE</div>
              <h2>Built around your <em>application.</em></h2>
            </div>
            <p>Explore our products by brand, section, and type.</p>
          </div>
        </div>
      </section>

      {productBrands.map(brand => (
        <section 
          key={brand.brandName} 
          id={brand.brandName.toLowerCase().replace(/[^a-z0-9]+/g, '-')} 
          className="brand-section"
        >
          <div className="container">
            <h2 className="brand-title">{brand.brandName}</h2>
            {brand.sections.map(section => {
              const sectionId = `${brand.brandName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${section.sectionName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
              return (
                <div id={sectionId} key={section.sectionName} className="product-section">
                  <h3 className="section-title">{section.sectionName}</h3>
                <div className="product-grid">
                  {section.types.map((type, i) => (
                    <article className="product-card" key={type.name} style={{ '--delay': `${i * 45}ms`, cursor: 'pointer' }} onClick={() => setModal(type)}>
                      <div className="product-visual">
                        <span className="product-cat">{section.sectionName}</span>
                        {type.image && (type.image.startsWith('/') || type.image.startsWith('http')) ? (
                          <img src={type.image} alt={type.name} style={{width: '100%', height: '100%', objectFit: 'contain', padding: '20px'}} />
                        ) : (
                          <MachineArt type={type.image} />
                        )}
                      </div>
                      <div className="product-info">
                        <h3>{type.name}</h3>
                        {Array.isArray(type.description) ? (
                          <ul className="product-features" style={{ paddingLeft: '18px', fontSize: '13px', color: 'var(--muted)', margin: '0 0 16px', lineHeight: '1.5' }}>
                            {type.description.map((point, idx) => (
                              <li key={idx} style={{ marginBottom: '6px' }}>{point}</li>
                            ))}
                          </ul>
                        ) : (
                          <p>{type.description || type.desc}</p>
                        )}
                        <button className="text-btn" onClick={e => { e.stopPropagation(); setModal(type); }}>View details <Icon name="arrow" size={16} /></button>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
          </div>
        </section>
      ))}

      {modal && (
        <div className="modal-backdrop" onClick={() => setModal(null)}>
          {!modal.subTypes ? (
            <div className="modal" onClick={e => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setModal(null)}><Icon name="x" /></button>
              <div className="modal-visual">
                {modal.image && (modal.image.startsWith('/') || modal.image.startsWith('http')) ? (
                  <img src={modal.image} alt={modal.name} style={{width: '100%', height: '100%', objectFit: 'contain', padding: '30px'}} />
                ) : (
                  <MachineArt type={modal.image} />
                )}
              </div>
              <div className="modal-content">
                <h2>{modal.name}</h2>
                {Array.isArray(modal.description) ? (
                  <ul className="product-features" style={{ paddingLeft: '18px', fontSize: '14px', color: 'var(--muted)', margin: '0 0 16px', lineHeight: '1.6' }}>
                    {modal.description.map((point, idx) => (
                      <li key={idx} style={{ marginBottom: '6px' }}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{modal.description || modal.desc}</p>
                )}
                <button className="btn primary" onClick={() => { setModal(null); window.location.href='/#contact'; }}>
                  Request this solution <Icon name="arrow" size={18} />
                </button>
              </div>
            </div>
          ) : (
            <div className="modal modal-subtypes" onClick={e => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setModal(null)}><Icon name="x" /></button>
              <div className="modal-subtypes-header">
                <h2>{modal.name}</h2>
                <button className="btn primary" onClick={() => { setModal(null); window.location.href='/#contact'; }}>
                  Request this solution <Icon name="arrow" size={18} />
                </button>
              </div>
              <div className="modal-subtypes-grid">
                {modal.subTypes.map((subType, idx) => (
                  <div key={idx} className="subtype-card">
                    <div className="subtype-img">
                      {subType.image
                        ? <img src={subType.image} alt={subType.name} />
                        : <div className="subtype-img-placeholder" />
                      }
                    </div>
                    <div className="subtype-info">
                      <h4>{subType.name}</h4>
                      {subType.description && <p>{subType.description}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
