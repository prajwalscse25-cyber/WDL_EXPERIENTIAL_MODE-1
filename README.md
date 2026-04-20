# reposetry
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>S.B. Jain Institute of Technology, Management & Research</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300&display=swap" rel="stylesheet">
<style>
  :root {
    --navy: #0a1628;
    --deep-blue: #0d2045;
    --royal: #1a3a6e;
    --gold: #c9993a;
    --gold-light: #e8b84b;
    --cream: #f8f4ed;
    --white: #ffffff;
    --gray-100: #f5f5f5;
    --gray-400: #9ca3af;
    --gray-600: #4b5563;
    --red-accent: #c0392b;
    --text-dark: #1a1a2e;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  html { scroll-behavior: smooth; }

  body {
    font-family: 'DM Sans', sans-serif;
    background: var(--white);
    color: var(--text-dark);
    overflow-x: hidden;
  }

  /* ── NAVBAR ── */
  nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
    background: rgba(10, 22, 40, 0.97);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(201,153,58,0.2);
    padding: 0 5%;
    display: flex; align-items: center; justify-content: space-between;
    height: 70px;
    transition: all 0.3s ease;
  }
  .nav-logo {
    display: flex; align-items: center; gap: 12px;
    text-decoration: none;
  }
  .nav-logo-icon {
    width: 46px; height: 46px;
    background: linear-gradient(135deg, var(--gold), var(--gold-light));
    border-radius: 8px;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Playfair Display', serif;
    font-weight: 900; font-size: 20px; color: var(--navy);
  }
  .nav-logo-text { display: flex; flex-direction: column; }
  .nav-logo-text .name { font-family: 'Playfair Display', serif; font-size: 15px; color: var(--white); font-weight: 700; line-height: 1.1; }
  .nav-logo-text .sub { font-size: 9px; color: var(--gold); letter-spacing: 1.5px; text-transform: uppercase; }

  .nav-links { display: flex; align-items: center; gap: 4px; }
  .nav-links a {
    color: rgba(255,255,255,0.85); text-decoration: none;
    font-size: 13px; font-weight: 500; letter-spacing: 0.5px;
    padding: 8px 14px; border-radius: 6px;
    transition: all 0.25s;
    text-transform: uppercase;
  }
  .nav-links a:hover { color: var(--gold); background: rgba(201,153,58,0.1); }
  .nav-cta {
    background: linear-gradient(135deg, var(--gold), var(--gold-light)) !important;
    color: var(--navy) !important; font-weight: 700 !important;
    padding: 9px 20px !important; border-radius: 6px !important;
  }
  .nav-cta:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(201,153,58,0.4) !important; }

  .hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; padding: 4px; }
  .hamburger span { width: 24px; height: 2px; background: var(--white); border-radius: 2px; transition: all 0.3s; }

  /* ── HERO ── */
  .hero {
    min-height: 100vh;
    background: var(--navy);
    position: relative;
    overflow: hidden;
    display: flex; align-items: center;
    padding-top: 70px;
  }
  .hero-bg {
    position: absolute; inset: 0;
    background: url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80') center/cover no-repeat;
    opacity: 0.18;
  }
  .hero-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(135deg, rgba(10,22,40,0.95) 0%, rgba(10,22,40,0.7) 60%, rgba(26,58,110,0.5) 100%);
  }
  .hero-grid-overlay {
    position: absolute; inset: 0;
    background-image: linear-gradient(rgba(201,153,58,0.04) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(201,153,58,0.04) 1px, transparent 1px);
    background-size: 60px 60px;
  }
  .hero-content {
    position: relative; z-index: 2;
    padding: 0 8%;
    max-width: 700px;
    animation: fadeUp 1s ease 0.2s both;
  }
  .hero-badge {
    display: inline-flex; align-items: center; gap: 8px;
    background: rgba(201,153,58,0.15); border: 1px solid rgba(201,153,58,0.35);
    border-radius: 30px; padding: 6px 16px;
    font-size: 11px; letter-spacing: 2px; color: var(--gold);
    text-transform: uppercase; font-weight: 600;
    margin-bottom: 28px;
  }
  .hero-badge::before { content: ''; width: 6px; height: 6px; background: var(--gold); border-radius: 50%; animation: pulse 2s infinite; }
  .hero h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(38px, 5.5vw, 72px);
    font-weight: 900; line-height: 1.08;
    color: var(--white);
    margin-bottom: 20px;
  }
  .hero h1 em { color: var(--gold); font-style: normal; }
  .hero p {
    font-size: 16px; color: rgba(255,255,255,0.72);
    line-height: 1.75; max-width: 520px;
    margin-bottom: 40px;
  }
  .hero-btns { display: flex; gap: 14px; flex-wrap: wrap; }
  .btn-primary {
    background: linear-gradient(135deg, var(--gold), var(--gold-light));
    color: var(--navy); font-weight: 700; font-size: 14px;
    padding: 14px 32px; border-radius: 8px; text-decoration: none;
    letter-spacing: 0.5px; text-transform: uppercase;
    transition: all 0.3s; border: none; cursor: pointer;
    box-shadow: 0 8px 30px rgba(201,153,58,0.35);
  }
  .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 14px 40px rgba(201,153,58,0.5); }
  .btn-outline {
    background: transparent; color: var(--white);
    border: 1.5px solid rgba(255,255,255,0.35);
    font-weight: 500; font-size: 14px;
    padding: 14px 32px; border-radius: 8px; text-decoration: none;
    letter-spacing: 0.5px; text-transform: uppercase;
    transition: all 0.3s;
  }
  .btn-outline:hover { border-color: var(--gold); color: var(--gold); background: rgba(201,153,58,0.08); }

  .hero-stats {
    position: absolute; bottom: 50px; right: 8%; z-index: 2;
    display: flex; gap: 2px;
    animation: fadeUp 1s ease 0.5s both;
  }
  .stat-card {
    background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
    backdrop-filter: blur(10px); border-radius: 12px;
    padding: 20px 24px; text-align: center; min-width: 110px;
  }
  .stat-card:first-child { border-radius: 12px 4px 4px 12px; }
  .stat-card:last-child { border-radius: 4px 12px 12px 4px; }
  .stat-num { font-family: 'Playfair Display', serif; font-size: 28px; font-weight: 700; color: var(--gold); }
  .stat-label { font-size: 11px; color: rgba(255,255,255,0.55); text-transform: uppercase; letter-spacing: 1px; margin-top: 2px; }

  /* ── TICKER ── */
  .ticker {
    background: var(--gold);
    padding: 10px 0; overflow: hidden;
    position: relative;
  }
  .ticker-inner {
    display: flex; align-items: center; gap: 60px;
    white-space: nowrap;
    animation: ticker 35s linear infinite;
    width: max-content;
  }
  .ticker-item { font-size: 13px; font-weight: 600; color: var(--navy); letter-spacing: 0.3px; display: flex; align-items: center; gap: 10px; }
  .ticker-dot { width: 5px; height: 5px; background: var(--navy); border-radius: 50%; opacity: 0.5; }

  /* ── SECTION SHARED ── */
  section { padding: 90px 8%; }
  .section-label {
    display: inline-flex; align-items: center; gap: 8px;
    font-size: 11px; letter-spacing: 3px; color: var(--gold);
    text-transform: uppercase; font-weight: 700;
    margin-bottom: 14px;
  }
  .section-label::before { content: ''; width: 30px; height: 2px; background: var(--gold); border-radius: 2px; }
  .section-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(30px, 3.5vw, 48px);
    font-weight: 700; line-height: 1.15;
    color: var(--text-dark);
  }
  .section-title.light { color: var(--white); }

  /* ── ABOUT ── */
  #about { background: var(--cream); }
  .about-grid {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 70px; align-items: center; margin-top: 60px;
  }
  .about-img-stack { position: relative; }
  .about-img-main {
    width: 100%; height: 420px;
    object-fit: cover; border-radius: 16px;
    box-shadow: 0 30px 80px rgba(0,0,0,0.18);
  }
  .about-img-secondary {
    position: absolute; bottom: -30px; right: -30px;
    width: 220px; height: 160px;
    object-fit: cover; border-radius: 12px;
    border: 4px solid var(--cream);
    box-shadow: 0 20px 50px rgba(0,0,0,0.15);
  }
  .about-badge-float {
    position: absolute; top: 30px; left: -20px;
    background: var(--gold); color: var(--navy);
    padding: 14px 18px; border-radius: 12px;
    font-family: 'Playfair Display', serif;
    font-size: 13px; font-weight: 700; text-align: center;
    box-shadow: 0 10px 30px rgba(201,153,58,0.4);
    line-height: 1.3;
  }
  .about-badge-float span { display: block; font-size: 26px; font-weight: 900; }

  .about-content { padding-left: 10px; }
  .about-content p {
    font-size: 15.5px; color: var(--gray-600); line-height: 1.85;
    margin-bottom: 18px;
  }
  .about-highlights { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 30px 0; }
  .highlight-item {
    background: var(--white); border-radius: 12px;
    padding: 18px; border-left: 3px solid var(--gold);
    box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  }
  .highlight-item h4 { font-size: 13px; font-weight: 700; color: var(--navy); margin-bottom: 4px; }
  .highlight-item p { font-size: 12.5px; color: var(--gray-600); margin: 0; line-height: 1.5; }

  .vision-mission { margin-top: 30px; display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .vm-card {
    background: var(--navy); color: var(--white);
    border-radius: 14px; padding: 24px;
  }
  .vm-card h3 { font-family: 'Playfair Display', serif; font-size: 20px; color: var(--gold); margin-bottom: 10px; }
  .vm-card p { font-size: 13px; color: rgba(255,255,255,0.72); line-height: 1.7; }

  /* ── PROGRAMS ── */
  #programs { background: var(--white); }
  .programs-grid {
    display: grid; grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
    gap: 24px; margin-top: 50px;
  }
  .program-card {
    background: var(--white); border: 1px solid #e8e8e8;
    border-radius: 16px; padding: 30px;
    transition: all 0.35s;
    position: relative; overflow: hidden;
    cursor: pointer;
  }
  .program-card::before {
    content: ''; position: absolute; bottom: 0; left: 0; right: 0;
    height: 3px; background: linear-gradient(90deg, var(--gold), var(--gold-light));
    transform: scaleX(0); transition: transform 0.35s;
  }
  .program-card:hover { transform: translateY(-6px); box-shadow: 0 25px 60px rgba(0,0,0,0.1); border-color: transparent; }
  .program-card:hover::before { transform: scaleX(1); }
  .prog-icon {
    width: 50px; height: 50px; border-radius: 12px;
    background: linear-gradient(135deg, rgba(201,153,58,0.12), rgba(201,153,58,0.06));
    display: flex; align-items: center; justify-content: center;
    font-size: 22px; margin-bottom: 18px;
    border: 1px solid rgba(201,153,58,0.2);
  }
  .program-card h3 { font-size: 16px; font-weight: 700; color: var(--navy); margin-bottom: 6px; }
  .program-card .level { font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: var(--gold); font-weight: 600; margin-bottom: 10px; }
  .program-card p { font-size: 13px; color: var(--gray-600); line-height: 1.65; }
  .prog-duration { display: inline-block; margin-top: 14px; font-size: 12px; color: var(--royal); font-weight: 600; background: rgba(26,58,110,0.08); padding: 4px 12px; border-radius: 20px; }

  /* ── CAMPUS LIFE ── */
  #campus { background: var(--navy); padding: 90px 8%; }
  .campus-header { text-align: center; margin-bottom: 60px; }
  .campus-gallery {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-rows: 280px 200px;
    gap: 16px;
  }
  .gallery-item {
    border-radius: 14px; overflow: hidden; position: relative;
    cursor: pointer;
  }
  .gallery-item:first-child { grid-row: 1 / 3; }
  .gallery-item img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
  .gallery-item:hover img { transform: scale(1.06); }
  .gallery-caption {
    position: absolute; bottom: 0; left: 0; right: 0;
    background: linear-gradient(transparent, rgba(10,22,40,0.85));
    padding: 20px 16px 14px;
    color: var(--white); font-size: 13px; font-weight: 600;
    letter-spacing: 0.3px; opacity: 0; transition: opacity 0.3s;
  }
  .gallery-item:hover .gallery-caption { opacity: 1; }

  /* ── NEWS & EVENTS ── */
  #news { background: var(--cream); }
  .news-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 40px; margin-top: 50px; }
  .news-main { display: flex; flex-direction: column; gap: 20px; }
  .news-card {
    background: var(--white); border-radius: 14px;
    padding: 24px 28px; display: flex; gap: 20px; align-items: flex-start;
    box-shadow: 0 4px 20px rgba(0,0,0,0.06);
    transition: all 0.3s; text-decoration: none; color: inherit;
  }
  .news-card:hover { transform: translateX(4px); box-shadow: 0 8px 35px rgba(0,0,0,0.1); }
  .news-date {
    background: var(--navy); color: var(--white);
    border-radius: 10px; padding: 12px; text-align: center;
    min-width: 56px; font-family: 'Playfair Display', serif;
  }
  .news-date .day { font-size: 24px; font-weight: 700; line-height: 1; }
  .news-date .mon { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: var(--gold); }
  .news-card h4 { font-size: 15px; font-weight: 700; color: var(--navy); margin-bottom: 6px; }
  .news-card p { font-size: 13px; color: var(--gray-600); line-height: 1.6; }
  .news-tag { display: inline-block; background: rgba(201,153,58,0.12); color: var(--gold); font-size: 10px; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 700; padding: 3px 10px; border-radius: 20px; margin-bottom: 6px; }

  .events-sidebar h3 { font-family: 'Playfair Display', serif; font-size: 22px; color: var(--navy); margin-bottom: 20px; }
  .event-item {
    background: var(--white); border-radius: 12px; padding: 18px;
    margin-bottom: 14px; border-left: 3px solid var(--gold);
    box-shadow: 0 3px 15px rgba(0,0,0,0.05);
    transition: all 0.3s; cursor: pointer;
  }
  .event-item:hover { transform: translateX(4px); }
  .event-item h4 { font-size: 14px; font-weight: 700; color: var(--navy); }
  .event-item p { font-size: 12px; color: var(--gray-400); margin-top: 3px; }

  /* ── ADMISSIONS ── */
  #admissions { background: var(--navy); padding: 90px 8%; }
  .admissions-inner {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 70px; align-items: center;
  }
  .admission-form {
    background: var(--white); border-radius: 20px; padding: 40px;
    box-shadow: 0 40px 100px rgba(0,0,0,0.3);
  }
  .admission-form h3 { font-family: 'Playfair Display', serif; font-size: 26px; color: var(--navy); margin-bottom: 8px; }
  .admission-form p { font-size: 13px; color: var(--gray-600); margin-bottom: 28px; }
  .form-group { margin-bottom: 18px; }
  .form-group label { display: block; font-size: 12px; font-weight: 700; color: var(--navy); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px; }
  .form-group input, .form-group select {
    width: 100%; padding: 12px 16px; border: 1.5px solid #e0e0e0;
    border-radius: 8px; font-size: 14px; font-family: inherit;
    color: var(--text-dark); outline: none; transition: border-color 0.25s;
    background: var(--white);
  }
  .form-group input:focus, .form-group select:focus { border-color: var(--gold); }
  .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }

  .admissions-info { color: var(--white); }
  .admissions-info h2 { font-family: 'Playfair Display', serif; font-size: 40px; color: var(--white); margin-bottom: 16px; line-height: 1.15; }
  .admissions-info h2 em { color: var(--gold); font-style: normal; }
  .admissions-info p { font-size: 15px; color: rgba(255,255,255,0.68); line-height: 1.8; margin-bottom: 30px; }
  .admission-steps { display: flex; flex-direction: column; gap: 16px; }
  .step {
    display: flex; gap: 16px; align-items: flex-start;
  }
  .step-num {
    width: 38px; height: 38px; border-radius: 50%;
    background: linear-gradient(135deg, var(--gold), var(--gold-light));
    color: var(--navy); font-weight: 700; font-size: 15px;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }
  .step-info h4 { font-size: 15px; font-weight: 700; color: var(--white); }
  .step-info p { font-size: 13px; color: rgba(255,255,255,0.55); margin-top: 2px; }

  /* ── PLACEMENTS ── */
  #placements { background: var(--white); }
  .placements-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 20px; margin-top: 50px; }
  .company-card {
    background: var(--gray-100); border-radius: 12px;
    padding: 24px 20px; text-align: center;
    font-weight: 700; font-size: 15px; color: var(--navy);
    border: 1px solid #e8e8e8; transition: all 0.3s;
    cursor: pointer;
  }
  .company-card:hover { background: var(--navy); color: var(--gold); transform: translateY(-4px); box-shadow: 0 15px 40px rgba(0,0,0,0.12); }
  .placement-stat-row { display: flex; gap: 24px; margin-top: 50px; flex-wrap: wrap; }
  .p-stat {
    flex: 1; min-width: 160px; background: var(--navy);
    border-radius: 16px; padding: 30px; text-align: center;
  }
  .p-stat .num { font-family: 'Playfair Display', serif; font-size: 38px; font-weight: 900; color: var(--gold); }
  .p-stat .label { font-size: 12px; color: rgba(255,255,255,0.6); text-transform: uppercase; letter-spacing: 1px; margin-top: 4px; }

  /* ── CONTACT ── */
  #contact { background: var(--cream); }
  .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; margin-top: 50px; }
  .contact-info h3 { font-family: 'Playfair Display', serif; font-size: 28px; color: var(--navy); margin-bottom: 20px; }
  .contact-item { display: flex; gap: 16px; align-items: flex-start; margin-bottom: 24px; }
  .contact-icon { width: 44px; height: 44px; background: var(--navy); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 18px; flex-shrink: 0; }
  .contact-item h4 { font-size: 14px; font-weight: 700; color: var(--navy); }
  .contact-item p { font-size: 13.5px; color: var(--gray-600); margin-top: 2px; line-height: 1.6; }
  .map-placeholder {
    width: 100%; height: 320px; border-radius: 16px;
    background: linear-gradient(135deg, var(--navy), var(--royal));
    display: flex; align-items: center; justify-content: center;
    position: relative; overflow: hidden;
    box-shadow: 0 20px 60px rgba(0,0,0,0.15);
  }
  .map-placeholder::before {
    content: ''; position: absolute; inset: 0;
    background: url('https://images.unsplash.com/photo-1524168272322-bf73616d9cb5?w=800&q=80') center/cover;
    opacity: 0.25;
  }
  .map-pin {
    position: relative; z-index: 1; text-align: center; color: var(--white);
  }
  .map-pin .pin { font-size: 48px; display: block; }
  .map-pin p { font-size: 14px; font-weight: 600; margin-top: 8px; color: var(--gold); }

  /* ── FOOTER ── */
  footer {
    background: var(--navy);
    padding: 60px 8% 30px;
    border-top: 1px solid rgba(201,153,58,0.2);
  }
  .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 50px; margin-bottom: 50px; }
  .footer-brand p { font-size: 13.5px; color: rgba(255,255,255,0.5); line-height: 1.8; margin-top: 14px; max-width: 280px; }
  footer h4 { font-size: 13px; font-weight: 700; color: var(--gold); text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 16px; }
  footer ul { list-style: none; }
  footer ul li { margin-bottom: 10px; }
  footer ul li a { color: rgba(255,255,255,0.55); text-decoration: none; font-size: 13.5px; transition: color 0.25s; }
  footer ul li a:hover { color: var(--gold); }
  .footer-bottom { border-top: 1px solid rgba(255,255,255,0.08); padding-top: 24px; display: flex; justify-content: space-between; align-items: center; }
  .footer-bottom p { font-size: 12.5px; color: rgba(255,255,255,0.35); }

  /* ── MOBILE MENU ── */
  .mobile-menu {
    display: none; position: fixed; top: 70px; left: 0; right: 0; bottom: 0;
    background: var(--navy); z-index: 999; padding: 30px 8%;
    overflow-y: auto; flex-direction: column; gap: 8px;
  }
  .mobile-menu.open { display: flex; }
  .mobile-menu a {
    color: var(--white); text-decoration: none; font-size: 16px;
    font-weight: 500; padding: 14px 0; border-bottom: 1px solid rgba(255,255,255,0.08);
    text-transform: uppercase; letter-spacing: 1px;
    transition: color 0.2s;
  }
  .mobile-menu a:hover { color: var(--gold); }

  /* ── ANIMATIONS ── */
  @keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
  @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }

  .fade-in { opacity: 0; transform: translateY(25px); transition: all 0.7s ease; }
  .fade-in.visible { opacity: 1; transform: translateY(0); }

  /* ── RESPONSIVE ── */
  @media (max-width: 900px) {
    .nav-links { display: none; }
    .hamburger { display: flex; }
    .about-grid, .admissions-inner, .contact-grid, .news-grid { grid-template-columns: 1fr; }
    .hero-stats { display: none; }
    .about-img-secondary { display: none; }
    .about-badge-float { left: 10px; }
    .campus-gallery { grid-template-columns: 1fr 1fr; grid-template-rows: auto; }
    .campus-gallery .gallery-item:first-child { grid-row: 1 / 2; grid-column: 1 / 3; height: 240px; }
    .footer-grid { grid-template-columns: 1fr 1fr; gap: 30px; }
    section { padding: 60px 6%; }
  }
  @media (max-width: 580px) {
    .programs-grid, .placements-grid { grid-template-columns: 1fr 1fr; }
    .about-highlights, .vision-mission { grid-template-columns: 1fr; }
    .form-row { grid-template-columns: 1fr; }
    .campus-gallery { grid-template-columns: 1fr; }
    .campus-gallery .gallery-item:first-child { grid-column: 1; }
    .footer-grid { grid-template-columns: 1fr; }
    .placement-stat-row { flex-direction: column; }
  }
</style>
</head>
<body>

<!-- NAVBAR -->
<nav id="navbar">
  <a class="nav-logo" href="#">
    <div class="nav-logo-icon">SBJ</div>
    <div class="nav-logo-text">
      <span class="name">S.B. Jain Institute</span>
      <span class="sub">of Technology, Management & Research</span>
    </div>
  </a>
  <div class="nav-links">
    <a href="#">Home</a>
    <a href="#about">About</a>
    <a href="#programs">Programs</a>
    <a href="#campus">Campus</a>
    <a href="#placements">Placements</a>
    <a href="#news">News</a>
    <a href="#contact">Contact</a>
    <a href="#admissions" class="nav-cta">Apply Now</a>
  </div>
  <div class="hamburger" onclick="toggleMenu()">
    <span></span><span></span><span></span>
  </div>
</nav>

<!-- MOBILE MENU -->
<div class="mobile-menu" id="mobileMenu">
  <a href="#" onclick="toggleMenu()">Home</a>
  <a href="#about" onclick="toggleMenu()">About</a>
  <a href="#programs" onclick="toggleMenu()">Programs</a>
  <a href="#campus" onclick="toggleMenu()">Campus Life</a>
  <a href="#placements" onclick="toggleMenu()">Placements</a>
  <a href="#news" onclick="toggleMenu()">News & Events</a>
  <a href="#contact" onclick="toggleMenu()">Contact</a>
  <a href="#admissions" onclick="toggleMenu()" style="color: var(--gold); font-weight: 700;">Apply Now →</a>
</div>

<!-- HERO -->
<section class="hero">
  <div class="hero-bg"></div>
  <div class="hero-overlay"></div>
  <div class="hero-grid-overlay"></div>
  <div class="hero-content">
    <div class="hero-badge">🎓 Autonomous Institute — NAAC Accredited</div>
    <h1>Shape Your Future at <em>S.B. Jain</em> Institute</h1>
    <p>Empowering students with quality education, industry-ready skills, and a vibrant campus experience. Join Nagpur's premier engineering & management institution.</p>
    <div class="hero-btns">
      <a href="#admissions" class="btn-primary">Apply for 2026–27</a>
      <a href="#about" class="btn-outline">Explore Institute</a>
    </div>
  </div>
  <div class="hero-stats">
    <div class="stat-card"><div class="stat-num">25+</div><div class="stat-label">Years Legacy</div></div>
    <div class="stat-card"><div class="stat-num">5000+</div><div class="stat-label">Alumni Network</div></div>
    <div class="stat-card"><div class="stat-num">95%</div><div class="stat-label">Placements</div></div>
    <div class="stat-card"><div class="stat-num">12</div><div class="stat-label">Programs</div></div>
  </div>
</section>

<!-- TICKER -->
<div class="ticker">
  <div class="ticker-inner">
    <span class="ticker-item"><span class="ticker-dot"></span>International Conference ICASTM-2026 — Registration Open</span>
    <span class="ticker-item"><span class="ticker-dot"></span>NVIDIA's Jensen Huang Speaks to Mukesh Ambani on AI</span>
    <span class="ticker-item"><span class="ticker-dot"></span>NEP Compliant Institute From 2023–24 Onwards</span>
    <span class="ticker-item"><span class="ticker-dot"></span>Technotsav 2K26 — Annual Technical Fest — Register Now</span>
    <span class="ticker-item"><span class="ticker-dot"></span>Application Form Open: Assistant Professor & Associate Professor Positions</span>
    <span class="ticker-item"><span class="ticker-dot"></span>Garbotsav Event — Cultural Extravaganza 2026</span>
    <span class="ticker-item"><span class="ticker-dot"></span>International Conference ICASTM-2026 — Registration Open</span>
    <span class="ticker-item"><span class="ticker-dot"></span>NVIDIA's Jensen Huang Speaks to Mukesh Ambani on AI</span>
    <span class="ticker-item"><span class="ticker-dot"></span>NEP Compliant Institute From 2023–24 Onwards</span>
    <span class="ticker-item"><span class="ticker-dot"></span>Technotsav 2K26 — Annual Technical Fest — Register Now</span>
    <span class="ticker-item"><span class="ticker-dot"></span>Application Form Open: Assistant Professor & Associate Professor Positions</span>
    <span class="ticker-item"><span class="ticker-dot"></span>Garbotsav Event — Cultural Extravaganza 2026</span>
  </div>
</div>

<!-- ABOUT -->
<section id="about">
  <div class="about-grid fade-in">
    <div class="about-img-stack">
      <img class="about-img-main" src="https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80" alt="S.B. Jain Campus">
      <img class="about-img-secondary" src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&q=80" alt="Students">
      <div class="about-badge-float"><span>2000</span>Est. Year<br>Nagpur, MH</div>
    </div>
    <div class="about-content">
      <div class="section-label">Our Story</div>
      <h2 class="section-title">About S.B. Jain Institute of Technology, Management & Research</h2>
      <br>
      <p>S.B. Jain Institute of Technology, Management & Research (SBJITMR), located in Nagpur, Maharashtra, was established in 2000 under the S.B. Jain Educational Trust. Affiliated with Rashtrasant Tukadoji Maharaj Nagpur University (RTMNU) and approved by AICTE, the institute has been a center of excellence in technical and management education for over two decades.</p>
      <p>Recognized as an <strong>Autonomous Institute</strong> by RTMNU and accredited by NAAC, SBJITMR offers a stimulating academic environment that blends theoretical knowledge with practical industry exposure. The institute is committed to nurturing competent, innovative, and ethical professionals who are ready to make a meaningful difference in society.</p>

      <div class="about-highlights">
        <div class="highlight-item"><h4>🏛️ NAAC Accredited</h4><p>Nationally recognized academic quality and standards</p></div>
        <div class="highlight-item"><h4>🔬 Research Focus</h4><p>International conference ICASTM & research publications</p></div>
        <div class="highlight-item"><h4>🤝 Industry Tie-ups</h4><p>MoUs with leading tech companies & corporates</p></div>
        <div class="highlight-item"><h4>🌐 NEP 2020 Ready</h4><p>NEP-compliant curriculum from 2023–24 onwards</p></div>
      </div>

      <div class="vision-mission">
        <div class="vm-card">
          <h3>Vision</h3>
          <p>Emerge as a leading Institute for developing competent and creative Professionals who contribute to society and the nation.</p>
        </div>
        <div class="vm-card">
          <h3>Mission</h3>
          <p>Provide quality infrastructure, experienced faculty, and align with industries for knowledge sharing, research & development.</p>
        </div>
      </div>
      <br>
      <a href="#programs" class="btn-primary">Explore Our Programs →</a>
    </div>
  </div>
</section>

<!-- PROGRAMS -->
<section id="programs">
  <div class="fade-in">
    <div class="section-label">Academics</div>
    <h2 class="section-title">Programs Offered</h2>
  </div>
  <div class="programs-grid fade-in">
    <div class="program-card">
      <div class="prog-icon">⚙️</div>
      <div class="level">Graduate · B.Tech</div>
      <h3>Mechanical Engineering</h3>
      <p>Design, manufacturing, thermodynamics, and modern industrial systems.</p>
      <span class="prog-duration">4 Years</span>
    </div>
    <div class="program-card">
      <div class="prog-icon">💻</div>
      <div class="level">Graduate · B.Tech</div>
      <h3>Computer Science & Engineering</h3>
      <p>Software development, algorithms, databases, and computer architecture.</p>
      <span class="prog-duration">4 Years</span>
    </div>
    <div class="program-card">
      <div class="prog-icon">🤖</div>
      <div class="level">Graduate · B.Tech</div>
      <h3>Artificial Intelligence & Machine Learning</h3>
      <p>Deep learning, neural networks, NLP, and AI-driven systems.</p>
      <span class="prog-duration">4 Years</span>
    </div>
    <div class="program-card">
      <div class="prog-icon">📊</div>
      <div class="level">Graduate · B.Tech</div>
      <h3>AI & Data Science</h3>
      <p>Big data analytics, visualization, statistical modeling, and prediction.</p>
      <span class="prog-duration">4 Years</span>
    </div>
    <div class="program-card">
      <div class="prog-icon">📡</div>
      <div class="level">Graduate · B.Tech</div>
      <h3>Electronics & Telecommunications</h3>
      <p>Embedded systems, VLSI, signal processing, and wireless communications.</p>
      <span class="prog-duration">4 Years</span>
    </div>
    <div class="program-card">
      <div class="prog-icon">⚡</div>
      <div class="level">Graduate · B.Tech</div>
      <h3>Electrical Engineering</h3>
      <p>Power systems, control theory, renewable energy, and smart grids.</p>
      <span class="prog-duration">4 Years</span>
    </div>
    <div class="program-card">
      <div class="prog-icon">🖥️</div>
      <div class="level">Graduate · BCA</div>
      <h3>Bachelor of Computer Applications</h3>
      <p>Programming, web development, software engineering, and database management.</p>
      <span class="prog-duration">3 Years</span>
    </div>
    <div class="program-card">
      <div class="prog-icon">📈</div>
      <div class="level">Post Graduate · MBA</div>
      <h3>Master of Business Administration</h3>
      <p>Leadership, finance, marketing, strategy, and entrepreneurship.</p>
      <span class="prog-duration">2 Years</span>
    </div>
    <div class="program-card">
      <div class="prog-icon">🔭</div>
      <div class="level">Post Graduate · M.Tech</div>
      <h3>Master of Technology</h3>
      <p>Advanced specializations in engineering with research orientation.</p>
      <span class="prog-duration">2 Years</span>
    </div>
    <div class="program-card">
      <div class="prog-icon">🧩</div>
      <div class="level">Post Graduate · MCA</div>
      <h3>Master of Computer Applications</h3>
      <p>Advanced computing, enterprise applications, and cloud technologies.</p>
      <span class="prog-duration">2 Years</span>
    </div>
  </div>
</section>

<!-- CAMPUS LIFE -->
<section id="campus" style="padding: 90px 8%;">
  <div class="campus-header fade-in">
    <div class="section-label" style="color: var(--gold); justify-content: center;">Campus Experience</div>
    <h2 class="section-title light" style="text-align:center;">Life at S.B. Jain</h2>
    <p style="color: rgba(255,255,255,0.6); text-align:center; max-width: 540px; margin: 14px auto 0; font-size: 15px; line-height: 1.7;">A vibrant campus with world-class facilities, cultural fests, sports, labs, and a strong community spirit.</p>
  </div>
  <div class="campus-gallery fade-in">
    <div class="gallery-item">
      <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80" alt="Campus Building">
      <div class="gallery-caption">📚 Main Academic Block — State-of-the-art infrastructure</div>
    </div>
    <div class="gallery-item">
      <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80" alt="Laboratory">
      <div class="gallery-caption">🔬 Advanced Research Labs</div>
    </div>
    <div class="gallery-item">
      <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" alt="Sports">
      <div class="gallery-caption">🏆 Sports & Recreation</div>
    </div>
    <div class="gallery-item">
      <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80" alt="Students">
      <div class="gallery-caption">🎓 Student Community</div>
    </div>
    <div class="gallery-item">
      <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80" alt="Library">
      <div class="gallery-caption">📖 Digital Library</div>
    </div>
  </div>
</section>

<!-- NEWS & EVENTS -->
<section id="news">
  <div class="fade-in">
    <div class="section-label">Stay Updated</div>
    <h2 class="section-title">Latest News & Events</h2>
  </div>
  <div class="news-grid fade-in">
    <div class="news-main">
      <a class="news-card" href="#">
        <div class="news-date"><div class="day">15</div><div class="mon">Apr</div></div>
        <div>
          <span class="news-tag">Conference</span>
          <h4>International Conference ICASTM-2026 — Call for Papers</h4>
          <p>S.B. Jain Institute is hosting the International Conference on Advanced Science, Technology & Management (ICASTM) 2026. Submit your research papers before May 31, 2026.</p>
        </div>
      </a>
      <a class="news-card" href="#">
        <div class="news-date"><div class="day">10</div><div class="mon">Apr</div></div>
        <div>
          <span class="news-tag">Recruitment</span>
          <h4>Application Form Open: Professor & Associate Professor Positions</h4>
          <p>SBJITMR invites applications from qualified candidates for faculty positions across engineering and management departments.</p>
        </div>
      </a>
      <a class="news-card" href="#">
        <div class="news-date"><div class="day">05</div><div class="mon">Apr</div></div>
        <div>
          <span class="news-tag">Fest</span>
          <h4>Technotsav 2K26 — Annual Technical Festival Returns!</h4>
          <p>The biggest technical and cultural extravaganza at SBJITMR is back. Participate in hackathons, robotics competitions, coding challenges, and more.</p>
        </div>
      </a>
      <a class="news-card" href="#">
        <div class="news-date"><div class="day">01</div><div class="mon">Apr</div></div>
        <div>
          <span class="news-tag">Scholarship</span>
          <h4>Sir Shantilalji Badjate Memorial Scholarship 2024</h4>
          <p>Applications are open for meritorious and financially needy students. Eligibility: Students with above 75% in previous semester.</p>
        </div>
      </a>
    </div>
    <div class="events-sidebar">
      <h3>Upcoming Events</h3>
      <div class="event-item"><h4>🎓 Alumni Meet 2026</h4><p>May 5, 2026 · SBJITMR Auditorium</p></div>
      <div class="event-item"><h4>🤖 Garbotsav Cultural Event</h4><p>May 12, 2026 · Open Ground</p></div>
      <div class="event-item"><h4>📝 ESE Summer 2026</h4><p>June 1–20, 2026 · All Departments</p></div>
      <div class="event-item"><h4>🏐 Annual Sports Week</h4><p>June 25, 2026 · Sports Complex</p></div>
      <div class="event-item"><h4>💼 Campus Placement Drive</h4><p>July 10, 2026 · Placement Cell</p></div>
      <div class="event-item"><h4>🌐 NEP Orientation 2026</h4><p>August 1, 2026 · Conference Hall</p></div>
    </div>
  </div>
</section>

<!-- ADMISSIONS -->
<section id="admissions" style="background: var(--navy); padding: 90px 8%;">
  <div class="admissions-inner fade-in">
    <div class="admissions-info">
      <div class="section-label" style="color: var(--gold);">Admissions 2026–27</div>
      <h2>Start Your Journey at <em>S.B. Jain</em> Today</h2>
      <p>Applications are now open for the 2026–27 academic year. Join hundreds of students who choose SBJITMR for a transformative education experience.</p>
      <div class="admission-steps">
        <div class="step">
          <div class="step-num">1</div>
          <div class="step-info"><h4>Fill the Application Form</h4><p>Complete the online application with your details</p></div>
        </div>
        <div class="step">
          <div class="step-num">2</div>
          <div class="step-info"><h4>Submit Documents</h4><p>Upload 10th, 12th marksheets, and ID proof</p></div>
        </div>
        <div class="step">
          <div class="step-num">3</div>
          <div class="step-info"><h4>Entrance / Merit Assessment</h4><p>Appear for MHT-CET / JEE or merit-based selection</p></div>
        </div>
        <div class="step">
          <div class="step-num">4</div>
          <div class="step-info"><h4>Receive Offer Letter</h4><p>Get your admission confirmation and join the family!</p></div>
        </div>
      </div>
    </div>
    <div class="admission-form">
      <h3>Quick Enquiry</h3>
      <p>Our admissions team will contact you within 24 hours.</p>
      <div class="form-row">
        <div class="form-group"><label>First Name</label><input type="text" placeholder="Rahul"></div>
        <div class="form-group"><label>Last Name</label><input type="text" placeholder="Sharma"></div>
      </div>
      <div class="form-group"><label>Email Address</label><input type="email" placeholder="rahul@email.com"></div>
      <div class="form-group"><label>Phone Number</label><input type="tel" placeholder="+91 98765 43210"></div>
      <div class="form-group">
        <label>Program of Interest</label>
        <select>
          <option>Select a Program...</option>
          <option>B.Tech — Computer Science & Engineering</option>
          <option>B.Tech — AI & Machine Learning</option>
          <option>B.Tech — AI & Data Science</option>
          <option>B.Tech — Electronics & Telecomm</option>
          <option>B.Tech — Mechanical Engineering</option>
          <option>B.Tech — Electrical Engineering</option>
          <option>BCA</option>
          <option>MBA</option>
          <option>M.Tech</option>
          <option>MCA</option>
        </select>
      </div>
      <div class="form-group"><label>10th / 12th Percentage</label><input type="text" placeholder="e.g. 87%"></div>
      <button class="btn-primary" style="width: 100%; text-align: center;" onclick="alert('Thank you! Our admissions team will contact you soon.')">Submit Enquiry →</button>
    </div>
  </div>
</section>

<!-- PLACEMENTS -->
<section id="placements">
  <div class="fade-in">
    <div class="section-label">Career Success</div>
    <h2 class="section-title">Placements & Recruiters</h2>
    <p style="color: var(--gray-600); font-size: 15px; margin-top: 12px; max-width: 560px; line-height: 1.7;">Our dedicated Placement Cell works year-round to connect students with top recruiters across IT, core engineering, and management sectors.</p>
  </div>
  <div class="placement-stat-row fade-in">
    <div class="p-stat"><div class="num">95%</div><div class="label">Placement Rate</div></div>
    <div class="p-stat"><div class="num">₹12 LPA</div><div class="label">Highest Package</div></div>
    <div class="p-stat"><div class="num">200+</div><div class="label">Recruiting Companies</div></div>
    <div class="p-stat"><div class="num">₹4.5 LPA</div><div class="label">Average Package</div></div>
  </div>
  <div class="placements-grid fade-in">
    <div class="company-card">TCS</div>
    <div class="company-card">Infosys</div>
    <div class="company-card">Wipro</div>
    <div class="company-card">Cognizant</div>
    <div class="company-card">HCL Tech</div>
    <div class="company-card">Tech Mahindra</div>
    <div class="company-card">Capgemini</div>
    <div class="company-card">Accenture</div>
    <div class="company-card">L&T</div>
    <div class="company-card">Persistent</div>
    <div class="company-card">KPIT</div>
    <div class="company-card">Zensar</div>
  </div>
</section>

<!-- CONTACT -->
<section id="contact">
  <div class="fade-in">
    <div class="section-label">Get in Touch</div>
    <h2 class="section-title">Contact Us</h2>
  </div>
  <div class="contact-grid fade-in">
    <div class="contact-info">
      <h3>S.B. Jain Institute of Technology, Management & Research</h3>
      <div class="contact-item">
        <div class="contact-icon">📍</div>
        <div><h4>Address</h4><p>Vayusena Nagar, Digdoh Hills,<br>Hingna Road, Nagpur – 440 023,<br>Maharashtra, India</p></div>
      </div>
      <div class="contact-item">
        <div class="contact-icon">📞</div>
        <div><h4>Phone</h4><p>+91 712 2801500 / 2801400</p></div>
      </div>
      <div class="contact-item">
        <div class="contact-icon">✉️</div>
        <div><h4>Email</h4><p>info@sbjit.edu.in<br>admissions@sbjit.edu.in</p></div>
      </div>
      <div class="contact-item">
        <div class="contact-icon">🌐</div>
        <div><h4>Website</h4><p>www.sbjit.edu.in</p></div>
      </div>
    </div>
    <div>
      <div class="map-placeholder">
        <div class="map-pin">
          <span class="pin">📍</span>
          <p>S.B. Jain Institute<br>Nagpur, Maharashtra</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="footer-grid">
    <div class="footer-brand">
      <div style="display:flex; align-items:center; gap:12px;">
        <div style="width:46px;height:46px;background:linear-gradient(135deg,var(--gold),var(--gold-light));border-radius:8px;display:flex;align-items:center;justify-content:center;font-family:'Playfair Display',serif;font-weight:900;font-size:18px;color:var(--navy);">SBJ</div>
        <div>
          <div style="font-family:'Playfair Display',serif;font-size:14px;color:var(--white);font-weight:700;">S.B. Jain Institute</div>
          <div style="font-size:10px;color:var(--gold);letter-spacing:1px;">of Technology, Management & Research</div>
        </div>
      </div>
      <p>Shaping future professionals through quality education, research, and industry collaboration since 2000.</p>
    </div>
    <div>
      <h4>Quick Links</h4>
      <ul>
        <li><a href="#about">About SBJITMR</a></li>
        <li><a href="#programs">Programs</a></li>
        <li><a href="#admissions">Admissions</a></li>
        <li><a href="#placements">Placements</a></li>
        <li><a href="#campus">Campus Life</a></li>
      </ul>
    </div>
    <div>
      <h4>Academics</h4>
      <ul>
        <li><a href="#">Departments</a></li>
        <li><a href="#">Exam Cell</a></li>
        <li><a href="#">Results</a></li>
        <li><a href="#">Time Table</a></li>
        <li><a href="#">NAAC</a></li>
      </ul>
    </div>
    <div>
      <h4>Student Zone</h4>
      <ul>
        <li><a href="#">Student Affairs</a></li>
        <li><a href="#">Scholarships</a></li>
        <li><a href="#">Alumni</a></li>
        <li><a href="#">Fee Structure</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2026 S.B. Jain Institute of Technology, Management & Research, Nagpur. All rights reserved.</p>
    <p>AICTE Approved · NAAC Accredited · RTMNU Affiliated</p>
  </div>
</footer>

<script>
  // Mobile menu
  function toggleMenu() {
    const m = document.getElementById('mobileMenu');
    m.classList.toggle('open');
  }

  // Scroll fade-in
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 60) {
      nav.style.height = '62px';
      nav.style.boxShadow = '0 4px 30px rgba(0,0,0,0.4)';
    } else {
      nav.style.height = '70px';
      nav.style.boxShadow = 'none';
    }
  });
</script>
</body>
</html>
