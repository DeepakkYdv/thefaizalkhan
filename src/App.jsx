import { useEffect, useState } from "react";

const brands = ["HIKVISION", "DAHUA", "CP PLUS", "HONEYWELL", "AXIS"];

const cameraFeeds = [
  "CAM 01 · FRONT GATE",
  "CAM 02 · PARKING",
  "CAM 03 · LOBBY",
  "CAM 04 · REAR"
];

const services = [
  {
    icon: "bi-camera-video",
    title: "HD & IP Cameras",
    description:
      "Supply and installation of high-definition analog and IP cameras for homes, shops, offices, and industrial premises."
  },
  {
    icon: "bi-hdd-network",
    title: "DVR / NVR Setup",
    description:
      "Complete DVR and NVR configuration with remote viewing setup so you can monitor your premises from anywhere on your phone."
  },
  {
    icon: "bi-router",
    title: "WiFi & Networking",
    description:
      "WiFi network design and installation, LAN cabling, router configuration, and enterprise networking solutions."
  },
  {
    icon: "bi-laptop",
    title: "Computer & Laptop",
    description:
      "Repair, servicing, OS installation, hardware upgrades, and annual maintenance contracts for computers and laptops."
  },
  {
    icon: "bi-tools",
    title: "CCTV Service & Repair",
    description:
      "Annual maintenance, breakdown service, camera replacement, and upgrading of existing CCTV systems to modern HD standards."
  },
  {
    icon: "bi-house-door",
    title: "Free Site Survey",
    description:
      "Our expert visits your location, assesses security requirements, and recommends the optimal camera placement at zero cost."
  }
];

const whyChooseUs = [
  {
    title: "All Camera Brands Covered",
    description:
      "We install and service Hikvision, CP Plus, Dahua, and all other major brands."
  },
  {
    title: "Expert Technicians",
    description:
      "Trained professionals with hands-on installation experience in residential and commercial sites."
  },
  {
    title: "Quick Turnaround",
    description:
      "Fast installation and same-day breakdown service wherever possible in Hajipur and Vaishali."
  },
  {
    title: "Transparent Pricing",
    description:
      "No hidden costs. Clear quotes before we start any work on your premises."
  }
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => {
              entry.target.classList.add("visible");
            }, index * 60);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    reveals.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const goToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav>
        <div className="container-fluid px-4 py-3 px-md-5 d-flex align-items-center justify-content-between">
          <a
            className="logo"
            href="#top"
            onClick={(event) => {
              event.preventDefault();
              goToSection("top");
            }}
          >
            <div className="logo-icon" />
            <span className="logo-text">
              EYE <span>SPY</span> SECURITY
            </span>
          </a>

          <ul className="nav-links mb-0">
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#why">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>

          <button className="nav-cta" type="button" onClick={() => goToSection("contact")}>
            Free Site Visit
          </button>

          <button
            className="hamburger"
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label="Menu"
            aria-expanded={mobileMenuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <a
          href="#services"
          onClick={(event) => {
            event.preventDefault();
            goToSection("services");
          }}
        >
          Services
        </a>
        <a
          href="#why"
          onClick={(event) => {
            event.preventDefault();
            goToSection("why");
          }}
        >
          About
        </a>
        <a
          href="#contact"
          onClick={(event) => {
            event.preventDefault();
            goToSection("contact");
          }}
        >
          Contact
        </a>
        <button className="m-cta" type="button" onClick={() => goToSection("contact")}>
          Free Site Visit
        </button>
      </div>

      <section className="hero" id="top">
        <div className="container-fluid px-4 px-md-5">
          <div className="row align-items-center gy-5">
            <div className="col-12 col-md-6 order-2 order-md-1">
              <div className="hero-content">
                <div className="hero-badge">
                  <div className="badge-dot" />
                  <span>Live Monitoring & Installation</span>
                </div>
                <h1 className="hero-title">
                  EYE SPY
                  <br />
                  <span className="accent">SECURITY</span>
                </h1>
                <p className="hero-subtitle">CCTV · Networking · WiFi Solutions</p>
                <p className="hero-desc">
                  Professional security camera installation, DVR/NVR setup, networking
                  solutions, and computer services. Serving Hajipur, Vaishali and
                  surrounding areas.
                </p>
                <div className="hero-btns d-flex flex-wrap gap-3">
                  <button className="btn-primary" type="button" onClick={() => goToSection("contact")}>
                    Get Free Site Visit
                  </button>
                  <button className="btn-secondary" type="button" onClick={() => goToSection("services")}>
                    Our Services
                  </button>
                </div>
                <div className="hero-stats d-flex flex-wrap gap-4 gap-md-5">
                  <div className="stat">
                    <div className="stat-num">500+</div>
                    <div className="stat-label">Installations Done</div>
                  </div>
                  <div className="stat">
                    <div className="stat-num">24/7</div>
                    <div className="stat-label">Support Available</div>
                  </div>
                  <div className="stat">
                    <div className="stat-num">100%</div>
                    <div className="stat-label">Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 order-1 order-md-2">
              <div className="hero-visual d-flex align-items-center justify-content-center">
                <div className="cam-grid">
                  {cameraFeeds.map((label) => (
                    <div className="cam-feed" key={label}>
                      <div className="cam-feed-bg">
                        <div className="cam-crosshair" />
                        <div className="cam-label">{label}</div>
                        <div className="cam-rec">
                          <div className="rec-dot" />
                          <span className="rec-text">REC</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="brands-bar reveal">
        <div className="container-fluid px-4 px-md-5">
          <div className="d-flex align-items-center justify-content-center flex-wrap gap-4 gap-md-5">
            {brands.map((brand) => (
              <div className="brand-item" key={brand}>
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="section" id="services">
        <div className="container-fluid px-4 px-md-5">
          <div className="section-label">What We Do</div>
          <div className="section-title">
            Our <span>Services</span>
          </div>
          <div className="row g-3">
            {services.map((service) => (
              <div className="col-12 col-sm-6 col-xl-4" key={service.title}>
                <div className="service-card reveal h-100">
                  <div className="service-icon" aria-hidden="true">
                    <i className={service.icon} />
                  </div>
                  <div className="service-title">{service.title}</div>
                  <div className="service-desc">{service.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg2" id="why">
        <div className="container-fluid px-4 px-md-5">
          <div className="row align-items-center g-5">
            <div className="col-12 col-lg-6">
              <div>
                <div className="section-label">Why Choose Us</div>
                <div className="section-title">
                  Your Security is Our <span>Priority</span>
                </div>
                <div className="why-points d-flex flex-column gap-4 mt-4">
                  {whyChooseUs.map((point) => (
                    <div className="why-point reveal d-flex align-items-start gap-3" key={point.title}>
                      <div className="why-check">
                        <i className="bi bi-check-lg" />
                      </div>
                      <div className="why-point-text">
                        <h4>{point.title}</h4>
                        <p>{point.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="why-visual reveal" id="contact">
                <div className="prop-badge">
                  <span>PROPRIETOR</span>
                </div>
                <div className="prop-name">Faizal Khan</div>
                <div className="prop-title">Security Systems Expert · Eye Spy Security</div>
                <div className="contact-info d-flex flex-column gap-3">
                  <div className="contact-row d-flex align-items-center gap-3 flex-wrap">
                    <div className="contact-icon">
                      <i className="bi bi-telephone-fill" />
                    </div>
                    <a href="tel:6209373787">6209373787</a>
                  </div>
                  <div className="contact-row d-flex align-items-center gap-3 flex-wrap">
                    <div className="contact-icon">
                      <i className="bi bi-whatsapp" />
                    </div>
                    <a href="https://wa.me/916209373787" target="_blank" rel="noreferrer">
                      WhatsApp: 6209373787
                    </a>
                  </div>
                  <div className="contact-row d-flex align-items-center gap-3 flex-wrap">
                    <div className="contact-icon">
                      <i className="bi bi-geo-alt-fill" />
                    </div>
                    <span>Cinema Road, Yadav Chowk, Hajipur, Vaishali</span>
                  </div>
                  <div className="contact-row d-flex align-items-center gap-3 flex-wrap">
                    <div className="contact-icon">
                      <i className="bi bi-clock-fill" />
                    </div>
                    <span>Mon - Sat | 9:00 AM - 8:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="cta-banner reveal">
        <div className="container-fluid px-4 px-md-5">
          <div className="d-flex align-items-center justify-content-between gap-4 flex-wrap">
            <div className="cta-text">
              <h2>Ready to Secure Your Premises?</h2>
              <p>Call now for a free site visit and no-obligation quote.</p>
            </div>
            <div className="cta-phone d-flex align-items-center gap-3 flex-wrap">
              <div className="phone-num">6209373787</div>
              <a
                className="whatsapp-btn"
                href="https://wa.me/916209373787"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-whatsapp me-2" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="container-fluid px-4 px-md-5">
          <div className="row g-4 footer-grid">
            <div className="col-12 col-lg-6 footer-about">
              <a className="logo" href="#top">
                <div className="logo-icon" />
                <span className="logo-text">
                  EYE <span>SPY</span> SECURITY
                </span>
              </a>
              <p>
                Professional CCTV installation, networking, and computer services
                in Hajipur, Vaishali. End-to-end security solutions for homes and
                businesses.
              </p>
            </div>

            <div className="col-12 col-md-6 col-lg-3 footer-col">
              <h4>Services</h4>
              <ul>
                <li>
                  <a href="#services">HD & IP Cameras</a>
                </li>
                <li>
                  <a href="#services">DVR / NVR Setup</a>
                </li>
                <li>
                  <a href="#services">WiFi Solutions</a>
                </li>
                <li>
                  <a href="#services">Networking</a>
                </li>
                <li>
                  <a href="#services">Computer Repair</a>
                </li>
              </ul>
            </div>

            <div className="col-12 col-md-6 col-lg-3 footer-col">
              <h4>Contact</h4>
              <ul>
                <li>
                  <a href="#contact">Free Site Visit</a>
                </li>
                <li>
                  <a href="tel:6209373787">Call Now</a>
                </li>
                <li>
                  <a href="https://wa.me/916209373787" target="_blank" rel="noreferrer">
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom d-flex justify-content-between align-items-center flex-wrap gap-3">
            <p>© 2026 Eye Spy Security · Cinema Road, Yadav Chowk, Hajipur, Vaishali</p>
            <span className="footer-mono">SYS:ONLINE · ALL CAMERAS ACTIVE</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
