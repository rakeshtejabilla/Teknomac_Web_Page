import React, { useState } from 'react';
import { Icon, MachineArt, Link } from '../components/Shared';

const industries = [
  { name: 'Mining & Minerals', icon: '⛏', text: 'Drive, braking, pumping and separation solutions for demanding mineral processing environments.' },
  { name: 'Cement & Aggregates', icon: '◈', text: 'Reliable power transmission for crushers, mills, conveyors, bucket elevators and kilns.' },
  { name: 'Bulk Material Handling', icon: '⇢', text: 'Engineered conveyor drives, backstops, couplings and braking systems for continuous flow.' },
  { name: 'Manufacturing', icon: '⚙', text: 'Compact drive and transmission packages for production lines, mixers and process equipment.' }
];

export default function Home() {
  const [sent, setSent] = useState(false);
  
  return (
    <>
      <section id="home" className="hero">
        <div className="hero-grid" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="eyebrow"><span /> ENGINEERING • POWER TRANSMISSION • PROCESS</div>
            <h1>Machinery that <em>moves</em> industry forward.</h1>
            <p>Teknomac delivers dependable industrial machinery and engineered drive solutions for mining, material handling, cement, manufacturing and process industries.</p>
            <div className="hero-actions">
              <Link to="/products" className="btn primary">Explore Solutions <Icon name="arrow" size={18} /></Link>
              <a href="#about" className="btn ghost">Why Teknomac</a>
            </div>
            <div className="hero-proof">
              <div><strong>25+</strong><span>Engineered<br />Solutions</span></div>
              <div><strong>4</strong><span>Core<br />Industries</span></div>
              <div><strong>24/7</strong><span>Critical Support<br />Ready</span></div>
            </div>
          </div>
          <div className="hero-machine">
            <div className="machine-ring ring1" /><div className="machine-ring ring2" />
            <div className="hero-tag">PRECISION<br /><b>ENGINEERED</b></div>
            <MachineArt type="gearbox" />
            <div className="hero-spec">
              <span>TMX MAXDRIVE</span><strong>Heavy-duty gear unit</strong>
              <small>15,000 Nm · IP66 · Modular</small>
            </div>
          </div>
        </div>
      </section>

      <section className="trust">
        <div className="container trust-inner">
          <span>APPLICATION-DRIVEN ENGINEERING</span><i /> <span>POWER TRANSMISSION</span><i /> <span>MATERIAL HANDLING</span><i /> <span>PROCESS EQUIPMENT</span>
        </div>
      </section>

      <section className="stats">
        <div className="container stats-grid">
          <div><strong>100+</strong><span>Industrial<br />Applications</span></div>
          <div><strong>15+</strong><span>Years of<br />Engineering Focus</span></div>
          <div><strong>99.2%</strong><span>Targeted<br />Equipment Uptime</span></div>
          <div><strong>48h</strong><span>Typical<br />Response Window</span></div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container about-grid">
          <div className="about-visual">
            <div className="about-panel">
              <span>TM</span><strong>ENGINEERED<br />IN INDIA</strong><small>Concept • Supply • Support</small>
            </div>
            <div className="about-stat"><b>01</b><span>Understand<br />the application</span></div>
            <div className="about-stat s2"><b>02</b><span>Engineer the<br />right solution</span></div>
            <div className="about-stat s3"><b>03</b><span>Support for<br />the long run</span></div>
          </div>
          <div className="about-copy">
            <div className="eyebrow"><span /> THE TEKNOMAC APPROACH</div>
            <h2>Industrial reliability, without the <em>industrial complexity.</em></h2>
            <p>Teknomac is a demo brand created for this website concept. Our approach combines application understanding with practical machinery selection, technical support and lifecycle thinking.</p>
            <div className="feature-list">
              <div><b>01</b><div><strong>Application-first design</strong><span>We start with load, speed, environment and duty cycle—not a catalogue number.</span></div></div>
              <div><b>02</b><div><strong>Practical serviceability</strong><span>Accessible designs, modular components and clear maintenance planning.</span></div></div>
              <div><b>03</b><div><strong>Performance you can measure</strong><span>Focus on efficiency, uptime, safety and total cost of ownership.</span></div></div>
            </div>
            <a href="#contact" className="btn primary">Talk to an Engineer <Icon name="arrow" size={18} /></a>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container cta-inner">
          <div>
            <div className="eyebrow light"><span /> HAVE A MACHINERY CHALLENGE?</div>
            <h2>Let's engineer a <em>better way forward.</em></h2>
            <p>Share your application, duty and performance requirements. We'll shape a practical demo proposal around them.</p>
          </div>
          <a href="#contact" className="btn white">Start an enquiry <Icon name="arrow" size={18} /></a>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="container contact-grid">
          <div className="contact-copy">
            <div className="eyebrow"><span /> CONTACT TEKNOMAC</div>
            <h2>Tell us what you need to <em>move.</em></h2>
            <p>Use the form for a demo enquiry. Replace the contact details below with your real company information when the site goes live.</p>
            <div className="contact-items">
              <div><span className="ci"><Icon name="phone" size={18} /></span><div><small>CALL</small><strong>+91 90000 12345</strong></div></div>
              <div><span className="ci"><Icon name="mail" size={18} /></span><div><small>EMAIL</small><strong>hello@teknomac.in</strong></div></div>
              <div><span className="ci">⌖</span><div><small>OFFICE</small><strong>Industrial Estate, Hyderabad, India</strong></div></div>
            </div>
          </div>
          <form className="contact-form" onSubmit={e => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 4500) }}>
            <div className="form-title">
              <span>01</span>
              <div><strong>Request a consultation</strong><small>Typical response within one business day.</small></div>
            </div>
            <div className="form-row">
              <label>Full name<input required placeholder="Your name" /></label>
              <label>Company<input placeholder="Company name" /></label>
            </div>
            <div className="form-row">
              <label>Email<input type="email" required placeholder="you@company.com" /></label>
              <label>Phone<input placeholder="+91 ..." /></label>
            </div>
            <label>What are you looking for?
              <select defaultValue="">
                <option value="" disabled>Select a solution</option>
                <option>Gear units / geared motors</option>
                <option>Couplings / brakes / backstops</option>
                <option>Conveyor drives / motorized pulleys</option>
                <option>Slurry pumps / hydrocyclones</option>
                <option>Custom machinery requirement</option>
              </select>
            </label>
            <label>Application details<textarea rows="4" placeholder="Tell us about load, speed, material, duty cycle or any known specifications..." /></label>
            <button className="btn primary full" type="submit">{sent ? 'Enquiry sent ✓' : 'Send enquiry'} <Icon name="arrow" size={18} /></button>
            {sent && <div className="success">Thanks! This demo form is working. Connect it to your backend/email service for production use.</div>}
          </form>
        </div>
      </section>
    </>
  );
}
