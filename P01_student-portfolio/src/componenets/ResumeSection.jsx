import React from 'react';
import { Download, ExternalLink, FileText } from 'lucide-react';

function ResumeSection() {
  return (
    <section id="resume" style={{ padding: '2rem 0 4rem' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        
        {/* Top Header Bar with Download Button */}
        <div 
          className="glass-card" 
          style={{ 
            padding: '1.25rem 2rem', 
            marginBottom: '2rem', 
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
                2-Page PDF Resume Document
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            {/* Primary Download Button */}
            <a 
              href="/keyur_resume.pdf" 
              download="Keyur_Rana_Resume.pdf" 
              className="btn btn-primary"
              style={{ padding: '0.75rem 1.5rem', fontSize: '0.95rem' }}
            >
              <Download size={18} /> Download PDF Resume
            </a>

            {/* Open PDF in New Tab */}
            <a 
              href="/keyur_resume.pdf" 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-secondary"
              style={{ padding: '0.75rem 1.25rem', fontSize: '0.95rem' }}
            >
              <ExternalLink size={18} /> Open Fullscreen
            </a>
          </div>
        </div>

        {/* Full 2-Page Resume PDF Viewer Display */}
        <div 
          className="glass-card" 
          style={{ 
            padding: '0.5rem', 
            borderRadius: 'var(--radius-lg)', 
            boxShadow: 'var(--shadow-lg)',
            background: '#1e293b' 
          }}
        >
          <iframe 
            src="/keyur_resume.pdf#toolbar=1&view=FitH" 
            title="Keyur Rakeshbhai Rana Resume PDF (Page 1 & 2)"
            width="100%" 
            height="1150px" 
            style={{ 
              border: 'none', 
              borderRadius: 'var(--radius-md)',
              background: '#ffffff'
            }}
          >
            <p style={{ padding: '2rem', textAlign: 'center', color: '#ffffff' }}>
              Your browser does not support inline PDF viewing. 
              <a href="/keyur_resume.pdf" download="Keyur_Rana_Resume.pdf" style={{ color: 'var(--accent-cyan)', marginLeft: '0.5rem' }}>
                Download Keyur's 2-Page Resume PDF
              </a>.
            </p>
          </iframe>
        </div>

      </div>
    </section>
  );
}

export default ResumeSection;
