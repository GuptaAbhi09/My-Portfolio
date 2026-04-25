"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import GlassCard from "@/components/GlassCard";
import styles from "./page.module.css";

// Standard Divider Component
const Divider = () => (
  <div style={{
    width: '100%',
    height: '1px', 
    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)',
    margin: '0 auto',
    maxWidth: '800px'
  }}/>
);

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [status, setStatus] = useState<"idle" | "pending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("pending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "735e678d-8f9d-4759-8f50-4d568267cc87",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  if (!isMounted) return null;

  return (
    <main>
      <Hero />
      <Divider />

      {/* EXPERIENCE */}
      <Section 
        id="experience" 
        title="Experience" 
        eyebrow="// 01 — Work History"
      >
        <GlassCard className={styles.experienceCardLarge}>
          <div className={styles.expHeader}>
            <div className={styles.expBrand}>
              <div className={styles.companyIcon}>
                <span style={{ fontSize: '22px' }}>💼</span>
              </div>
              <div>
                <h3 className={styles.companyName}>Altix Codeit Pvt Ltd</h3>
                <div className={styles.jobRole}>
                  <span className={styles.roleTitle}>Full Stack Developer Intern</span>
                  <span className={styles.roleDivider}>·</span>
                  <div className={styles.locationInfo}>
                    <span style={{ fontSize: '14px' }}>📍</span>
                    <span>Kalyani, West Bengal</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.periodBadgeLarge}>
              <span style={{ fontSize: '14px' }}>📅</span>
              <span>Sep 2025 – Present</span>
            </div>
          </div>
          
          <div className={styles.expContent}>
            <ul className={styles.premiumList}>
              <li>
                <div className={styles.listBullet}></div>
                <p>Built and deployed <strong>DesiAcres</strong> — a full-stack real estate app live on the Play Store (Expo), along with its dynamic marketing website and admin panel, all developed end-to-end.</p>
              </li>
              <li>
                <div className={styles.listBullet}></div>
                <p>Developed a <strong>personal client dashboard</strong> with data management, custom views, and secure backend integration using Supabase and PostgreSQL.</p>
              </li>
              <li>
                <div className={styles.listBullet}></div>
                <p>Currently building <strong>ConnectHub</strong>, a networking and collaboration app (Expo), independently handling architecture, UI, and backend.</p>
              </li>
            </ul>

            <div className={styles.skillCloud}>
              {["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Expo"].map(s => (
                <span key={s} className={styles.expMiniTag}>{s}</span>
              ))}
            </div>
          </div>
        </GlassCard>
      </Section>

      <Divider />

      {/* PROJECTS */}
      <Section 
        id="projects" 
        title="" 
        eyebrow="// 02 — Projects"
      >
        <div className="grid-2">
          {/* Flowlog */}
          <GlassCard style={{ borderTop: '2px solid rgba(56, 189, 248, 0.3)', boxShadow: 'inset 0 2px 20px rgba(56, 189, 248, 0.05)' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              fontFamily: 'var(--font-dm-mono)', fontSize: '11px',
              background: 'rgba(52,211,153,0.1)',
              border: '1px solid rgba(52,211,153,0.25)',
              color: '#34d399', borderRadius: '6px',
              padding: '4px 10px', marginBottom: '14px'
            }}>
              🚀 Live · Production
            </div>
            <h3 className={styles.projectTitle}>Flowlog</h3>
            <p style={{ marginBottom: '20px' }}>A production-grade project management dashboard with real-time collaboration features.</p>
            <div className={styles.stackRow}>
              <span className={styles.stackBadge}>Next.js</span>
              <span className={styles.stackBadge}>TypeScript</span>
              <span className={styles.stackBadge}>Supabase</span>
              <span className={styles.stackBadge}>PostgreSQL</span>
            </div>
            <div className={styles.projectLinks}>
              <a href="https://flowlog-website.vercel.app/daily" target="_blank" className={styles.demoBtn}>Live Demo</a>
              <a href="https://github.com/GuptaAbhi09/flowlog-website" target="_blank" className={styles.gitBtn}>GitHub</a>
            </div>
          </GlassCard>

          {/* TechHaven */}
          <GlassCard style={{ borderTop: '2px solid rgba(129, 140, 248, 0.3)', boxShadow: 'inset 0 2px 20px rgba(129, 140, 248, 0.05)' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              fontFamily: 'var(--font-dm-mono)', fontSize: '11px',
              background: 'rgba(129,140,248,0.1)',
              border: '1px solid rgba(129,140,248,0.25)',
              color: '#818cf8', borderRadius: '6px',
              padding: '4px 10px', marginBottom: '14px'
            }}>
              🛒 Live · E-commerce
            </div>
            <h3 className={styles.projectTitle}>TechHaven</h3>
            <p style={{ marginBottom: '20px' }}>Full-stack e-commerce platform with dynamic product filtering, shopping cart system, and secure user authentication.</p>
            <div className={styles.stackRow}>
              <span className={styles.stackBadge}>React.js</span>
              <span className={styles.stackBadge}>Supabase</span>
              <span className={styles.stackBadge}>PostgreSQL</span>
              <span className={styles.stackBadge}>Tailwind CSS</span>
            </div>
            <div className={styles.projectLinks}>
              <a href="https://ecommerce-website-react-chi.vercel.app/" target="_blank" className={styles.demoBtn}>Live Demo</a>
              <a href="https://github.com/GuptaAbhi09/Ecommerce_website_react" target="_blank" className={styles.gitBtn}>GitHub</a>
            </div>
          </GlassCard>
        </div>
      </Section>

      <Divider />

      {/* SKILLS */}
      <Section 
        id="skills" 
        title="" 
        eyebrow="// 03 — Skills"
      >
        <div className={styles.skillsGrid}>
          {[
            { cat: "Languages", items: ["C++", "JavaScript", "TypeScript", "SQL"] },
            { cat: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS", "HTML", "CSS", "Expo"] },
            { cat: "Backend", items: ["Supabase", "PostgreSQL", "Express.js", "MongoDB", "REST APIs"] },
            { cat: "Tools", items: ["Git", "Postman", "Figma", "Vercel"] },
            { cat: "Concepts", items: ["DSA", "OOP", "DBMS", "Operating Systems", "Computer Networks"] }
          ].map((skill, j) => (
            <GlassCard key={j} className={styles.skillCard}>
              <h4 className={styles.skillCardTitle}>{skill.cat}</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {skill.items.map(s => (
                  <span key={s} className={styles.skillTag}>{s}</span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Divider />

      {/* ACHIEVEMENTS */}
      <Section 
        id="highlights" 
        title="Key Highlights" 
        eyebrow="// 04 — Achievements"
      >
        <GlassCard>
          <div className={styles.achievementContainer}>
            <div className={styles.timelineLine}></div>
            {[
              { 
                icon: "🏆", 
                title: "Competitive Programming", 
                desc: "Solved 420+ DSA problems (338+ on LeetCode, 84+ on GFG); achieved a peak LeetCode contest rating of 1595 across 23+ rated contests." 
              },
              { 
                icon: "☁️", 
                title: "Oracle Certified AI Foundations Associate", 
                desc: "Earned the Oracle Cloud Infrastructure 2025 AI Foundations Associate certification — validated knowledge of AI/ML, Generative AI, and OCI cloud services." 
              },
              { 
                icon: "🥇", 
                title: "District Topper (2021)", 
                desc: "Achieved the highest CBSE Class XII score in the district — accomplishment featured in Amar Ujala newspaper, recognizing academic excellence." 
              }
            ].map((item, i) => (
              <div key={i} className={styles.achievementItem}>
                <div className={styles.achievementIconBox}>
                  <span>{item.icon}</span>
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: 'white', fontSize: '15px' }}>{item.title}</div>
                  <div style={{ color: '#94a3b8', fontSize: '13px', lineHeight: '1.6', marginTop: '4px' }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </Section>

      <Divider />

      {/* EDUCATION */}
      <Section 
        id="edu" 
        title="Educational Background" 
        eyebrow="// 05 — Education"
      >
        <div className="grid-2">
          <GlassCard style={{ borderTop: '2px solid var(--accent)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
              <h4 style={{ fontSize: '18px' }}>B.Tech in Information Technology</h4>
              <span style={{ fontFamily: 'var(--font-dm-mono)', color: 'var(--accent)', fontSize: '13px' }}>2022 – 2026</span>
            </div>
            <div style={{ color: 'var(--accent)', fontSize: '14px', marginBottom: '8px' }}>Dr. APJ Abdul Kalam Technical University</div>
            <div style={{ fontFamily: 'var(--font-dm-mono)', color: 'var(--accent3)', fontSize: '13px' }}>SGPA: 8.21 / 10.0</div>
          </GlassCard>
          
          <GlassCard style={{ borderTop: '2px solid var(--accent3)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
              <h4 style={{ fontSize: '18px' }}>Jawahar Navodaya Vidyalaya</h4>
              <span style={{ fontFamily: 'var(--font-dm-mono)', color: 'var(--accent)', fontSize: '13px' }}>2018 – 2021</span>
            </div>
            <div style={{ color: 'var(--accent)', fontSize: '14px', marginBottom: '8px' }}>CBSE Class XII (2021) — 94.0%</div>
            <div style={{ color: 'var(--accent)', fontSize: '14px' }}>CBSE Class X — 94.6%</div>
          </GlassCard>
        </div>
      </Section>

      <Divider />

      {/* CONTACT */}
      <Section 
        id="contact" 
        title="" 
        eyebrow="// 06 — Contact"
      >
        <div className={styles.contactTwoCol}>
          <div className={styles.contactLeft}>
            <h2 className={styles.contactHeading}>Let&apos;s Work Together</h2>
            <p className={styles.contactSubtext}>
              I&apos;m currently open to Full Stack and SDE opportunities. Feel free to reach out — I usually respond within 24 hours.
            </p>
            
            <div className={styles.contactRows}>
              <div className={styles.contactRow}>
                <span className={styles.contactRowIcon}>📧</span>
                <span className={styles.contactRowText}>abhishek31052003@gmail.com</span>
              </div>
              <div className={styles.contactRow}>
                <span className={styles.contactRowIcon}>📞</span>
                <span className={styles.contactRowText}>+91 8960958353</span>
              </div>
              <a href="https://www.linkedin.com/in/abhishek-gupta-953589253" target="_blank" className={styles.contactRowLink}>
                <span className={styles.contactRowIcon}>🔗</span>
                <span className={styles.contactRowText}>LinkedIn →</span>
              </a>
              <a href="https://github.com/GuptaAbhi09" target="_blank" className={styles.contactRowLink}>
                <span className={styles.contactRowIcon}>🐙</span>
                <span className={styles.contactRowText}>GitHub →</span>
              </a>
            </div>
          </div>

          <div className={styles.contactRight}>
            <GlassCard className={styles.formCard}>
              <form className={styles.contactForm} onSubmit={handleSubmit}>
                <input type="hidden" name="access_key" value="735e678d-8f9d-4759-8f50-4d568267cc87" />
                
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Your Name" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="your@email.com" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    placeholder="Your Message" 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className={styles.submitBtn}
                  disabled={status === "pending"}
                >
                  {status === "pending" ? "Sending..." : "Send Message"}
                </button>

                {status === "success" && (
                  <div className={styles.successMsg}>
                    Thanks for reaching out! I&apos;ll get back to you within 24 hours.
                  </div>
                )}
                {status === "error" && (
                  <div className={styles.errorMsg}>
                    Something went wrong. Please try emailing me directly at abhishek31052003@gmail.com
                  </div>
                )}
              </form>
            </GlassCard>
          </div>
        </div>

        <footer className={styles.footer}>
          <div className={styles.socialRow}>
            {['LC', 'GF'].map((s, i) => (
              <div key={i} className={styles.socialCircle}>{s}</div>
            ))}
          </div>
          <p className={styles.copyright}>© 2026 Abhishek Gupta · Designed & Built with Next.js & Vercel</p>
        </footer>
      </Section>
    </main>
  );
}
