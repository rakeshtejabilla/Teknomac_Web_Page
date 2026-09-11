import React from 'react';
import { Icon, Link } from '../components/Shared';

const industries = [
  { name: 'Mining & Minerals', icon: '⛏', text: 'Drive, braking, pumping and separation solutions for demanding mineral processing environments.' },
  { name: 'Cement & Aggregates', icon: '◈', text: 'Reliable power transmission for crushers, mills, conveyors, bucket elevators and kilns.' },
  { name: 'Bulk Material Handling', icon: '⇢', text: 'Engineered conveyor drives, backstops, couplings and braking systems for continuous flow.' },
  { name: 'Manufacturing', icon: '⚙', text: 'Compact drive and transmission packages for production lines, mixers and process equipment.' }
];

export default function Industries() {
  return (
    <div className="industries-page">
      <section className="section industries">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow"><span /> INDUSTRIES WE SERVE</div>
              <h2>One engineering partner.<br /><em>Many tough environments.</em></h2>
            </div>
            <p>From raw material extraction to finished product movement, Teknomac solutions are designed around uptime, safety and serviceability.</p>
          </div>
          <div className="industry-grid">
            {industries.map((x, i) => (
              <article key={x.name} className="industry-card">
                <div className="industry-number">0{i + 1}</div>
                <div className="industry-icon">{x.icon}</div>
                <h3>{x.name}</h3>
                <p>{x.text}</p>
                <Link to="/#contact" className="circle-btn"><Icon name="arrow" size={17} /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
