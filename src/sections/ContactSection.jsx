import { useState } from 'react';
import jsPDF from 'jspdf';
import { profile } from '../data/profile';

const intents = [
  { id: 'internship', label: 'Internship' },
  { id: 'project', label: 'Project' },
  { id: 'collab', label: 'Collaboration' },
  { id: 'general', label: 'General' }
];

export default function ContactSection() {
  const [reason, setReason] = useState('general');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: 'general',
    projectType: '',
    budget: '',
    message: ''
  });

  const handleQuickAction = (action) => {
    setReason(action);
    setFormData((prev) => ({ ...prev, reason: action }));
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === 'reason') setReason(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!profile.contact.formspreeId || profile.contact.formspreeId === 'YOUR_FORMSPREE_ID') {
      alert('Formspree ID is not configured. Please add your ID to profile.js');
      return;
    }

    try {
      const response = await fetch(`https://formspree.io/f/${profile.contact.formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSubmitted(true);
        localStorage.setItem(
          'lastContactSubmission',
          JSON.stringify({ ...formData, date: new Date().toLocaleString() })
        );
      } else {
        alert('There was a problem sending your message. Please try again or email directly.');
      }
    } catch {
      alert('Network error. Please try again or use the direct email link.');
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    const subDate = new Date().toLocaleString();

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(22);
    doc.setTextColor(17, 17, 17);
    doc.text(`Contact Details - ${profile.name}`, 20, 20);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.text(`Date of Submission: ${subDate}`, 20, 30);
    doc.text('---------------------------------------------------------', 20, 35);

    let yPos = 45;
    const addLine = (label, value) => {
      doc.setFont('helvetica', 'bold');
      doc.text(`${label}:`, 20, yPos);
      doc.setFont('helvetica', 'normal');
      const splitText = doc.splitTextToSize(value || 'N/A', 140);
      doc.text(splitText, 60, yPos);
      yPos += 10 + (splitText.length - 1) * 7;
    };

    addLine('Name', formData.name);
    addLine('Email', formData.email);
    addLine('Reason', formData.reason);
    if (formData.projectType) addLine('Project Type', formData.projectType);
    if (formData.budget) addLine('Budget', formData.budget);
    addLine('Message', formData.message);

    doc.save(
      `contact-details-${formData.name.replace(/\s+/g, '-').toLowerCase()}-${Date.now()}.pdf`
    );
  };

  return (
    <section className="section section--inverse" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <p className="section__eyebrow">Let&apos;s connect</p>
        <h2 className="section__title" id="contact-title">
          Contact
        </h2>

        {isSubmitted ? (
          <div className="success-box">
            <h2>Message sent successfully</h2>
            <p>
              Thank you for reaching out, {formData.name}. I have received your details and will get
              back to you within 24 hours.
            </p>
            <ul className="summary-list">
              <li>
                <strong>Reason:</strong> {formData.reason}
              </li>
              <li>
                <strong>Email:</strong> {formData.email}
              </li>
              {formData.projectType ? (
                <li>
                  <strong>Project Type:</strong> {formData.projectType}
                </li>
              ) : null}
            </ul>
            <div className="btn-group" style={{ justifyContent: 'flex-start' }}>
              <button type="button" className="btn btn-primary" onClick={generatePDF}>
                Download PDF Summary
              </button>
              <button type="button" className="btn btn-secondary" onClick={() => setIsSubmitted(false)}>
                Send Another Message
              </button>
            </div>
          </div>
        ) : (
          <div className="contact-layout">
            <aside className="contact-aside">
              <p>
                Open for freelancing, internships, and new opportunities. I usually respond within 24
                hours.
              </p>
              <div className="contact-links">
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
                <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                <a href={profile.socials.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </aside>

            <div>
              <div className="intent-row" role="group" aria-label="Reason for contact">
                {intents.map((intent) => (
                  <button
                    key={intent.id}
                    type="button"
                    className={`intent-chip${reason === intent.id ? ' is-active' : ''}`}
                    onClick={() => handleQuickAction(intent.id)}
                  >
                    {intent.label}
                  </button>
                ))}
              </div>

              <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="reason">Reason *</label>
                  <select
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    required
                  >
                    <option value="internship">Internship Opportunity</option>
                    <option value="project">Project Discussion</option>
                    <option value="collab">Collaboration</option>
                    <option value="general">General Query</option>
                  </select>
                </div>

                {(reason === 'project' || reason === 'collab') && (
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="projectType">Project Type</label>
                      <input
                        id="projectType"
                        type="text"
                        name="projectType"
                        value={formData.projectType || ''}
                        onChange={handleChange}
                        placeholder="e.g. Web application"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="budget">Budget (Optional)</label>
                      <input
                        id="budget"
                        type="text"
                        name="budget"
                        value={formData.budget || ''}
                        onChange={handleChange}
                        placeholder="Optional"
                      />
                    </div>
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about the opportunity or project..."
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
                <p className="form-note">Messages are delivered securely via Formspree.</p>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
