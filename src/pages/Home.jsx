import React, { useState } from 'react';
import { Icon, MachineArt, Link } from '../components/Shared';

const industriesList = [
  { name: 'Agriculture Industries', icon: '🌾' },
  { name: 'Food Processing', icon: '🏭' },
  { name: 'Metal Production', icon: '⚙️' },
  { name: 'Pharmaceutical', icon: '💊' },
  { name: 'Bio Pharma & Life Sciences', icon: '🔬' },
  { name: 'Chemical Industries', icon: '⚗️' },
  { name: 'Textile Industries', icon: '🧵' },
  { name: 'Cement Industries', icon: '◈' },
  { name: 'Power Industries', icon: '⚡' },
  { name: 'Rubber & Plastics', icon: '🔩' },
  { name: 'Cranes & Material Handling', icon: '🏗️' },
  { name: 'Construction & Mining', icon: '⛏️' },
  { name: 'Pulp & Paper', icon: '📄' },
  { name: 'Defense & Minerals', icon: '🛡️' },
];

const strengths = [
  { num: '01', title: 'Application Engineering', desc: 'Specialized expertise in application engineering and solution-based selling — we start with your requirement, not a catalogue.' },
  { num: '02', title: '30+ Years Leadership', desc: 'Led by technocrats with over 30 years of rich experience in industrial sales, marketing, and project management across India.' },
  { num: '03', title: 'In-House Service', desc: 'In-house service capabilities supported by trusted service partner networks, ensuring rapid on-site response across regions.' },
];

const team = [
  {
    name: 'M.A. Choudary',
    role: 'Founder & Director — Technical',
    exp: '31+ Years',
    bio: 'Senior Mechanical Engineer with over 31 years of experience in design, production, project management, and global business expansion. Previously served as Head of Engineering – Asia Pacific and Country Head at leading American and European companies.',
    phone: '+91-9441204774',
    email: 'mac@teknomac.in',
  },
  {
    name: 'B.R. Viswanath',
    role: 'Co-Founder — Sales & Marketing',
    exp: '29+ Years',
    bio: 'Mechanical Engineer with 29 years of experience. Held leadership roles at Georg Fischer Disa, NORD Drivesystems, and MGM Varvel. As a founding member of NORD India, grew the company to €15 million in turnover managing India, Sri Lanka, and Bangladesh.',
    phone: '9100930177',
    email: 'info@teknomac.in',
  },
];

export default function Home() {
  const [sent, setSent] = useState(false);
  
  return (
    <>
      <section id="home" className="hero">
        <div className="hero-grid" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="eyebrow"><span /> TEKNOMAC ENGINEERS • YOUR TRUSTED PARTNER FOR STRATEGIC EXPANSION</div>
            <h1>World-class technology <em>at your service.</em></h1>
            <p>Established in 2019, Teknomac Engineers delivers high-quality, service-oriented power transmission and industrial automation solutions across PAN India — from OEM and EU to MRO markets, backed by 29+ years of team expertise.</p>
            <div className="hero-actions">
              <Link to="/products" className="btn primary">Explore Solutions <Icon name="arrow" size={18} /></Link>
              <a href="#about" className="btn ghost">Why Teknomac Engineers</a>
            </div>
            <div className="hero-proof">
              <div><strong>29+</strong><span>Years of Team<br />Expertise</span></div>
              <div><strong>14</strong><span>Industries<br />Served</span></div>
              <div><strong>PAN</strong><span>India<br />Coverage</span></div>
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
          <span>POWER TRANSMISSION</span><i /> <span>INDUSTRIAL AUTOMATION</span><i /> <span>OEM · EU · MRO MARKETS</span><i /> <span>PAN INDIA COVERAGE</span>
        </div>
      </section>

      <section className="stats">
        <div className="container stats-grid">
          <div><strong>2019</strong><span>Founded<br />Nov 15th</span></div>
          <div><strong>29+</strong><span>Years of<br />Team Expertise</span></div>
          <div><strong>14</strong><span>Industries<br />We Serve</span></div>
          <div><strong>€579K</strong><span>FY 2024–25<br />Target Turnover</span></div>
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
            <div className="eyebrow"><span /> THE TEKNOMAC ENGINEERS ADVANTAGE</div>
            <h2>Your trusted partner for <em>strategic expansion.</em></h2>
            <p>Established on 15th November 2019, Teknomac Engineers is committed to delivering high-quality, service-oriented technological solutions across PAN India. We specialize in supporting mature, legacy, and end-of-life products — ensuring customers receive reliable and tailored support throughout their equipment lifecycle.</p>
            <p style={{ marginTop: '12px', color: 'var(--ink-2)', fontSize: '15px' }}>We cater to OEM, EU, and MRO markets, offering both standard and customized solutions. Our team is backed by over 29 years of hands-on expertise, enabling us to design and implement automated control systems that enhance safety, productivity, and operational efficiency.</p>
            <div className="feature-list">
              {strengths.map(s => (
                <div key={s.num}><b>{s.num}</b><div><strong>{s.title}</strong><span>{s.desc}</span></div></div>
              ))}
            </div>
            <a href="#contact" className="btn primary">Talk to an Engineer <Icon name="arrow" size={18} /></a>
          </div>
        </div>
      </section>

      {/* ── MISSION ─────────────────────────────────────── */}
      <section className="mission-section">
        <div className="container mission-inner">
          <div className="mission-badge">OUR MISSION</div>
          <h2 className="mission-text">&ldquo;To build systems that benefit all stakeholders, grounded in <em>honesty, respect, and integrity.</em>&rdquo;</h2>
          <div className="mission-pillars">
            <div><span>🤝</span><strong>Honesty</strong></div>
            <div><span>🌟</span><strong>Respect</strong></div>
            <div><span>⚖️</span><strong>Integrity</strong></div>
            <div><span>🚀</span><strong>Innovation</strong></div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ──────────────────────────────────── */}
      <section className="industries-home">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow"><span /> INDUSTRIES WE SERVE</div>
              <h2>One partner. <em>Many tough environments.</em></h2>
            </div>
            <p>From Pharma to Power, we serve 14 key sectors across India with precision-engineered solutions and trusted global brands.</p>
          </div>
          <div className="industries-tag-grid">
            {industriesList.map((ind) => (
              <div key={ind.name} className="industry-tag">
                <span>{ind.icon}</span>
                <strong>{ind.name}</strong>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/industries" className="btn primary">View All Industries <Icon name="arrow" size={18} /></Link>
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ──────────────────────────────────── */}
      <section className="team-section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow"><span /> OUR LEADERSHIP</div>
              <h2>Experience that <em>drives results.</em></h2>
            </div>
            <p>Our leadership team brings a combined 60+ years of industrial expertise across India and global markets.</p>
          </div>
          <div className="team-grid">
            {team.map(m => (
              <div key={m.name} className="team-card">
                <div className="team-avatar">{m.name.split(' ').map(n => n[0]).join('')}</div>
                <div className="team-info">
                  <h3>{m.name}</h3>
                  <span className="team-role">{m.role}</span>
                  <span className="team-exp">{m.exp} Experience</span>
                  <p>{m.bio}</p>
                  <div className="team-contacts">
                    <span>📞 {m.phone}</span>
                    <span>✉ {m.email}</span>
                  </div>
                </div>
              </div>
            ))}
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
            <div className="eyebrow"><span /> CONTACT TEKNOMAC ENGINEERS</div>
            <h2>Tell us what you need to <em>move.</em></h2>
            <p>Experience the Power Transmission Solutions at its finest. Reach out directly to our engineering and technical team for product specifications, application sizing, and commercial quotes.</p>
            <div className="contact-items">
              <div>
                <span className="ci"><Icon name="phone" size={18} /></span>
                <div>
                  <small>TECHNICAL DIRECTOR</small>
                  <strong>M.A. Choudary</strong>
                  <span style={{ fontSize: '11px', color: 'var(--green)', fontWeight: '600', display: 'block' }}>Founder & Director - Technical</span>
                  <strong>+91-9441204774</strong>
                </div>
              </div>
              <div>
                <span className="ci"><Icon name="phone" size={18} /></span>
                <div>
                  <small>OFFICE & SALES</small>
                  <strong>9100930177, 7989084748</strong>
                </div>
              </div>
              <div>
                <span className="ci"><Icon name="mail" size={18} /></span>
                <div>
                  <small>EMAIL</small>
                  <strong>info@teknomac.in</strong>
                  <div style={{ marginTop: '2px' }}><strong>mac@teknomac.in</strong></div>
                </div>
              </div>
              <div>
                <span className="ci">⌖</span>
                <div>
                  <small>HEAD OFFICE</small>
                  <strong>#1-3-79, F.No. 17, 2nd Floor, Jaya Nagar, St. No. 6, Habsiguda, Hyderabad-500 007, Telangana, India.</strong>
                </div>
              </div>
              {/* <div>
                <span className="ci">🌐</span>
                <div>
                  <small>WEBSITE</small>
                  <strong>www.teknomac.in</strong>
                </div>
              </div> */}
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
                <option>Industrial automation systems</option>
                <option>Gearbox overhauling / repair</option>
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
