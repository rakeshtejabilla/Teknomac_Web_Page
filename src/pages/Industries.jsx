import React from 'react';
import { Icon, Link } from '../components/Shared';

const industries = [
  { name: 'Agriculture Industries', icon: '🌾', text: 'Power transmission and drive solutions for irrigation systems, harvesters, and agro-processing equipment.' },
  { name: 'Food Processing', icon: '🏭', text: 'Hygienic drive systems, gearboxes, and coupling solutions for food & beverage processing and packaging lines.' },
  { name: 'Metal Production', icon: '⚙️', text: 'Robust gear units and braking systems for rolling mills, furnaces, continuous casting, and metal handling equipment.' },
  { name: 'Pharmaceutical', icon: '💊', text: 'Precision drive solutions for cleanroom environments, tablet presses, mixers, and pharmaceutical process equipment.' },
  { name: 'Bio Pharma & Life Sciences', icon: '🔬', text: 'Reliable automation and drive systems for bio-reactors, filling systems, and sensitive life-science applications.' },
  { name: 'Chemical Industries', icon: '⚗️', text: 'Corrosion-resistant drives, agitators, and pump solutions for demanding chemical processing environments.' },
  { name: 'Textile Industries', icon: '🧵', text: 'Precision speed control and drive systems for spinning, weaving, and textile finishing machinery.' },
  { name: 'Cement Industries', icon: '◈', text: 'High-torque gear units for crushers, mills, conveyors, bucket elevators, and rotary kilns in cement plants.' },
  { name: 'Power Industries', icon: '⚡', text: 'Heavy-duty drive and coupling solutions for turbines, generators, coal handling, and power plant equipment.' },
  { name: 'Rubber & Plastics', icon: '🔩', text: 'Extruder drives, mixer gearboxes, and coupling solutions for rubber and plastics processing machinery.' },
  { name: 'Cranes & Material Handling', icon: '🏗️', text: 'Brake systems, backstops, and drive solutions for overhead cranes, hoists, and material handling equipment.' },
  { name: 'Construction & Mining', icon: '⛏️', text: 'Heavy-duty drives, brakes, and pumping solutions for excavators, crushers, and mining conveyors.' },
  { name: 'Pulp & Paper', icon: '📄', text: 'Specialized gear units, couplings, and drive systems for paper machines, refiners, and pulping processes.' },
  { name: 'Defense & Minerals', icon: '🛡️', text: 'Ruggedized drive and transmission solutions for defense vehicles, mineral processing, and extraction systems.' },
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
                <div className="industry-number">{String(i + 1).padStart(2, '0')}</div>
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
