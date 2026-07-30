import React from 'react';
import { Download, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';

function ResumeSection() {
  return (
    <section id="resume" style={{ padding: '2rem 0 4rem' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        
        {/* Header Control Bar with Download Button */}
        <div 
          className="glass-card" 
          style={{ 
            padding: '1.25rem 2rem', 
            marginBottom: '2.5rem', 
            display: 'flex', 
            justify: 'space-between', 
            alignItems: 'center', 
            flexWrap: 'wrap', 
            gap: '1rem',
            borderLeft: '4px solid var(--accent-cyan)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <FileText size={28} color="var(--accent-cyan)" />
            <div>
              <h2 style={{ fontSize: '1.4rem', fontWeight: '800', margin: 0 }}>
                Keyur Rakeshbhai Rana — Resume
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', margin: 0 }}>
                2-Page PDF Document View
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            {/* Download PDF Button */}
            <a 
              href="/keyur_resume.pdf" 
              download="Keyur_Rana_Resume.pdf" 
              className="btn btn-primary"
              style={{ padding: '0.75rem 1.5rem', fontSize: '0.95rem' }}
            >
              <Download size={18} /> Download Resume (PDF)
            </a>

            {/* View PDF Direct Link */}
            <a 
              href="/keyur_resume.pdf" 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-secondary"
              style={{ padding: '0.75rem 1.25rem', fontSize: '0.95rem' }}
            >
              <ExternalLink size={18} /> Open PDF
            </a>
          </div>
        </div>

        {/* Crisp Page 1 and Page 2 Resume Document Sheets */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', alignItems: 'center' }}>
          
          {/* Page 1 */}
          <div 
            className="glass-card" 
            style={{ 
              width: '100%', 
              maxWidth: '850px',
              padding: '0',
              overflow: 'hidden',
              borderRadius: 'var(--radius-md)',
              boxShadow: '0 12px 32px rgba(0, 0, 0, 0.5)'
            }}
          >
            <div style={{ background: 'var(--bg-secondary)', padding: '0.6rem 1.25rem', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600 }}>PAGE 1 OF 2</span>
              <span style={{ fontSize: '0.82rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>Keyur Rakeshbhai Rana</span>
            </div>
            <img 
              src="/resume_page_1.png" 
              alt="Keyur Rakeshbhai Rana Resume Page 1" 
              style={{ width: '100%', display: 'block', height: 'auto' }}
            />
          </div>

          {/* Page 2 */}
          <div 
            className="glass-card" 
            style={{ 
              width: '100%', 
              maxWidth: '850px',
              padding: '0',
              overflow: 'hidden',
              borderRadius: 'var(--radius-md)',
              boxShadow: '0 12px 32px rgba(0, 0, 0, 0.5)'
            }}
          >
            <div style={{ background: 'var(--bg-secondary)', padding: '0.6rem 1.25rem', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600 }}>PAGE 2 OF 2</span>
              <span style={{ fontSize: '0.82rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>Keyur Rakeshbhai Rana</span>
            </div>
            <img 
              src="/resume_page_2.png" 
              alt="Keyur Rakeshbhai Rana Resume Page 2" 
              style={{ width: '100%', display: 'block', height: 'auto' }}
            />
          </div>

        </div>

      </div>
    </section>
  );
}

export default ResumeSection;
