import React, { useState } from 'react';
import { Icon, MachineArt, Link } from '../components/Shared';

const industriesList = [
  { name: 'Industrial Gears & Motors', icon: '⚙️' },
  { name: 'Sugar Industry', icon: '🎋' },
  { name: 'Off Road Vehicles & Earthmovers', icon: '🚜' },
  { name: 'Stone & Marble Industry', icon: '🪨' },
  { name: 'Environment & Recycling', icon: '♻️' },
  { name: 'Robotics & Automation', icon: '🤖' },
  { name: 'Aerospace Technology', icon: '✈️' },
  { name: 'Defense & Security', icon: '🛡️' },
  { name: 'AGV & Autonomous Vehicles', icon: '🚙' },
  { name: 'Medical Technology', icon: '🏥' },
  { name: 'Semiconductor Systems', icon: '🔬' },
  { name: 'Mining & Mineral', icon: '⛏️' },
  { name: 'Harbour & Industrial Cranes', icon: '🏗️' },
  { name: 'Steel & Metal Plants', icon: '🏭' },
  { name: 'Cement Plants', icon: '◈' },
  { name: 'Material Handling & Logistics', icon: '📦' },
  { name: 'Energy & Wind Power', icon: '⚡' },
  { name: 'Measuring & Metrology', icon: '📐' },
  { name: 'Woodworking Machinery', icon: '🪵' },
  { name: 'Marine & Offshore', icon: '⚓' },
  { name: 'E-Bike Drives', icon: '🚲' },
  { name: 'Mobile Hybrid & E-Mobility', icon: '🔌' },
  { name: 'Pulp & Paper', icon: '📄' },
  { name: 'Food & Packaging Machines', icon: '🥫' },
  { name: 'Machine Tools & CNC', icon: '🔧' },
  { name: 'General Machine Building', icon: '🔩' },
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
              <div><strong>55+</strong><span>Industries<br />Served</span></div>
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
          <div><strong>55+</strong><span>Industries<br />We Serve</span></div>
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
            <p>From heavy mining, sugar mills, and earthmovers to robotics, semiconductor systems, and medical technologies, we serve 55+ key sectors across India with precision-engineered solutions and trusted global brands.</p>
          </div>
          <div className="industries-tag-grid">
            {industriesList.map((ind) => (
              <Link key={ind.name} to="/industries" className="industry-tag">
                <span>{ind.icon}</span>
                <strong>{ind.name}</strong>
              </Link>
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

            <div className="contact-why">
              <div className="contact-why-item">
                <div className="cwy-icon">⚡</div>
                <div>
                  <strong>Fast Response</strong>
                  <span>We respond to all technical and commercial enquiries within one business day.</span>
                </div>
              </div>
              <div className="contact-why-item">
                <div className="cwy-icon">🔧</div>
                <div>
                  <strong>29+ Years of Expertise</strong>
                  <span>Hands-on experience in power transmission, automation, and industrial control systems.</span>
                </div>
              </div>
              <div className="contact-why-item">
                <div className="cwy-icon">🏭</div>
                <div>
                  <strong>PAN India Support</strong>
                  <span>Serving OEM, EU and MRO markets across India with on-site and remote support.</span>
                </div>
              </div>
              <div className="contact-why-item">
                <div className="cwy-icon">🎯</div>
                <div>
                  <strong>Tailored Solutions</strong>
                  <span>Standard catalogue products to fully customised systems — designed for your exact requirement.</span>
                </div>
              </div>
            </div>

            <div className="contact-hours">
              <div className="contact-hours-header">
                <span>🕐</span>
                <strong>Business Hours</strong>
              </div>
              <div className="contact-hours-row"><span>Monday – Saturday</span><strong>9:00 AM – 6:00 PM IST</strong></div>
              <div className="contact-hours-row"><span>Sunday</span><strong>Closed</strong></div>
              <p className="contact-hours-note">For urgent requirements, reach our technical director directly on <a href="tel:+919441204774">+91-94412 04774</a>.</p>
            </div>

          </div>
          <div className="contact-info-panel">
            <div className="cip-header">
              <span className="cip-badge">GET IN TOUCH</span>
              <h3>Reach out to us directly</h3>
              <p>Our engineering and sales team are ready to assist you with product specifications, application sizing, and commercial quotes. Contact us through any of the channels below.</p>
            </div>

            <div className="cip-cards">
              <div className="cip-card">
                <div className="cip-card-icon"><Icon name="phone" size={22} /></div>
                <div className="cip-card-body">
                  <small>TECHNICAL DIRECTOR</small>
                  <strong>M.A. Choudary</strong>
                  <span>Founder &amp; Director – Technical</span>
                  <a href="tel:+919441204774" className="cip-link">+91-94412 04774</a>
                </div>
              </div>

              <div className="cip-card">
                <div className="cip-card-icon"><Icon name="phone" size={22} /></div>
                <div className="cip-card-body">
                  <small>OFFICE &amp; SALES</small>
                  <strong>Sales &amp; Support Team</strong>
                  <span>Mon–Sat, 9 AM – 6 PM IST</span>
                  <a href="tel:+919100930177" className="cip-link">+91-91009 30177</a>
                  <a href="tel:+917989084748" className="cip-link">+91-79890 84748</a>
                </div>
              </div>

              <div className="cip-card">
                <div className="cip-card-icon"><Icon name="mail" size={22} /></div>
                <div className="cip-card-body">
                  <small>EMAIL US</small>
                  <strong>General &amp; Business Enquiries</strong>
                  <span>We reply within one business day</span>
                  <a href="mailto:info@teknomac.in" className="cip-link">info@teknomac.in</a>
                  <a href="mailto:mac@teknomac.in" className="cip-link">mac@teknomac.in</a>
                </div>
              </div>

              <div className="cip-card">
                <div className="cip-card-icon" style={{ fontSize: '22px', lineHeight: 1 }}>⌖</div>
                <div className="cip-card-body">
                  <small>HEAD OFFICE</small>
                  <strong>Teknomac Engineers</strong>
                  <span>#1-3-79, F.No. 17, 2nd Floor, Jaya Nagar,<br />St. No. 6, Habsiguda, Hyderabad – 500 007,<br />Telangana, India.</span>
                </div>
              </div>
            </div>

            <div className="cip-footer">
              <span>🕐</span>
              <p>For urgent requirements or on-site support, call our technical director directly. For product catalogues and application queries, email us at <a href="mailto:info@teknomac.in">info@teknomac.in</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
