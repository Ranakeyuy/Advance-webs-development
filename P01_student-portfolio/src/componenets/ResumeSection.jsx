import React from 'react';
import { Download, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';
import { resumeData } from '../data/resumeData';

function ResumeSection() {
  const info = resumeData.personalInfo;

  return (
    <section id="resume">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h2 className="section-title">
              <FileText size={26} color="var(--accent-cyan)" /> Official Resume
            </h2>
            <p className="section-subtitle" style={{ margin: 0 }}>
              View or download Keyur Rakeshbhai Rana's full PDF resume
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {/* Primary Direct PDF Download Button */}
            <a 
              href="/keyur_resume.pdf" 
              download="Keyur_Rana_Resume.pdf" 
              className="btn btn-primary"
              title="Download Keyur's Resume PDF"
            >
              <Download size={18} /> Download Resume (PDF)
            </a>

            {/* View PDF in New Tab Button */}
            <a 
              href="/keyur_resume.pdf" 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-secondary"
              title="Open Resume in New Tab"
            >
              <ExternalLink size={18} /> Open PDF
            </a>
          </div>
        </div>

        {/* Embedded Interactive PDF Viewer Container */}
        <div className="glass-card" style={{ padding: '1rem', overflow: 'hidden', borderRadius: 'var(--radius-lg)' }}>
          <div style={{ background: 'var(--bg-secondary)', padding: '0.75rem 1.25rem', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FileText size={16} color="var(--accent-cyan)" /> keyur_resume.pdf (110 KB)
            </span>
            <span className="badge" style={{ background: 'rgba(16, 185, 129, 0.15)', color: 'var(--accent-emerald)', borderColor: 'rgba(16, 185, 129, 0.3)' }}>
              <CheckCircle2 size={13} /> Official Document Verified
            </span>
          </div>

          <div style={{ width: '100%', height: '750px', background: '#ffffff', borderRadius: '0 0 var(--radius-md) var(--radius-md)' }}>
            <iframe 
              src="/keyur_resume.pdf#toolbar=1&navpanes=0" 
              title="Keyur Rakeshbhai Rana Resume PDF"
              width="100%" 
              height="100%" 
              style={{ border: 'none' }}
            >
              <p style={{ padding: '2rem', textAlign: 'center', color: '#000000' }}>
                Your browser does not support inline PDF viewing. 
                <a href="/keyur_resume.pdf" download="Keyur_Rana_Resume.pdf">Click here to download the PDF</a>.
              </p>
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResumeSection;
