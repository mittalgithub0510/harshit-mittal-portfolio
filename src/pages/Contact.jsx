import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Mail, UserCircle, Code2, Phone, CheckCircle, Download } from 'lucide-react';
import jsPDF from 'jspdf';
import { profile } from '../data/profile';
import './Contact.css';

const Contact = () => {
  const location = useLocation();
  const [reason, setReason] = useState('general');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: 'general',
    projectType: '',
    budget: '',
    message: ''
  });

  useEffect(() => {
    if (location.state?.reason) {
      const intent = location.state.reason;
      if (intent === 'project') setReason('project');
      else if (intent === 'collab') setReason('collab');
      else if (intent === 'internship') setReason('internship');
      
      setFormData(prev => ({ ...prev, reason: intent === 'collab' ? 'collab' : (intent === 'project' ? 'project' : (intent === 'internship' ? 'internship' : 'general')) }));
    }
  }, [location]);

  const handleQuickAction = (action) => {
    setReason(action);
    setFormData(prev => ({ ...prev, reason: action }));
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if(e.target.name === 'reason') setReason(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!profile.contact.formspreeId || profile.contact.formspreeId === "YOUR_FORMSPREE_ID") {
      alert("Formspree ID is not configured! Please register at formspree.io and add your ID to profile.js");
      return;
    }

    try {
      const response = await fetch(`https://formspree.io/f/${profile.contact.formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        localStorage.setItem('lastContactSubmission', JSON.stringify({
          ...formData,
          date: new Date().toLocaleString()
        }));
      } else {
        alert("There was a problem sending your message. Please try again or email directly.");
      }
    } catch (error) {
      alert("Network error. Please try again or use the direct email link.");
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    const subDate = new Date().toLocaleString();
    
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.setTextColor(59, 130, 246);
    doc.text(`Contact Details - ${profile.name}`, 20, 20);
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    
    doc.text(`Date of Submission: ${subDate}`, 20, 30);
    doc.text("---------------------------------------------------------", 20, 35);
    
    let yPos = 45;
    const addLine = (label, value) => {
      doc.setFont("helvetica", "bold");
      doc.text(`${label}:`, 20, yPos);
      doc.setFont("helvetica", "normal");
      
      // Handle multiline text like message
      const splitText = doc.splitTextToSize(value || 'N/A', 140);
      doc.text(splitText, 60, yPos);
      yPos += 10 + (splitText.length - 1) * 7;
    };
    
    addLine("Name", formData.name);
    addLine("Email", formData.email);
    addLine("Phone", formData.phone);
    addLine("Reason", formData.reason);
    if(formData.projectType) addLine("Project Type", formData.projectType);
    if(formData.budget) addLine("Budget", formData.budget);
    addLine("Message", formData.message);

    doc.save(`contact-details-${formData.name.replace(/\s+/g, '-').toLowerCase()}-${new Date().getTime()}.pdf`);
  };

  return (
    <div className="contact-page fade-in">
      {/* Heading Section */}
      <section className="contact-header section">
        <div className="container">
          <div className="contact-title-wrapper">
            <span className="badge mb-4 d-inline-block">Open to Internship Opportunities</span>
            <h1 className="page-title">Let’s Build Something Amazing Together</h1>
            <p className="contact-subtitle">
              I’m always open to discussing internship opportunities, freelance projects, collaborations, and creative ideas. Feel free to connect with me anytime.
            </p>
            <p className="response-note mt-2">I usually respond within 24 hours.</p>
          </div>
        </div>
      </section>

      {!isSubmitted ? (
        <>
          <section className="section pt-0">
            <div className="container">
              <div className="quick-actions glass-card">
                <h3>What would you like to discuss?</h3>
                <div className="quick-action-buttons">
                  <button className={`btn ${reason === 'internship' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => handleQuickAction('internship')}>Internship Opportunity</button>
                  <button className={`btn ${reason === 'project' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => handleQuickAction('project')}>Project Discussion</button>
                  <button className={`btn ${reason === 'collab' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => handleQuickAction('collab')}>Collaboration</button>
                  <button className={`btn ${reason === 'general' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => handleQuickAction('general')}>General Query</button>
                </div>
              </div>
            </div>
          </section>

          <section className="section bg-alt" id="contact-form">
            <div className="container contact-container">
              <div className="contact-sidebar">
                <div className="contact-cards">
                  <a href={`mailto:${profile.email}`} className="contact-card glass-card">
                    <div className="cc-icon"><Mail /></div>
                    <div className="cc-content">
                      <h4>Email</h4>
                      <p>Drop me an email directly</p>
                    </div>
                  </a>
                  <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="contact-card glass-card">
                    <div className="cc-icon"><UserCircle /></div>
                    <div className="cc-content">
                      <h4>LinkedIn</h4>
                      <p>Let's connect professionally</p>
                    </div>
                  </a>
                  <a href={profile.socials.github} target="_blank" rel="noreferrer" className="contact-card glass-card">
                    <div className="cc-icon"><Code2 /></div>
                    <div className="cc-content">
                      <h4>GitHub</h4>
                      <p>Check out my repos</p>
                    </div>
                  </a>
                  <a href={`tel:${profile.phone}`} className="contact-card glass-card">
                    <div className="cc-icon"><Phone /></div>
                    <div className="cc-content">
                      <h4>Call Me</h4>
                      <p>Start a conversation</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="contact-form-wrapper glass-card">
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" />
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label>Email Address *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" />
                    </div>
                    <div className="form-group">
                      <label>Phone Number *</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+1 234 567 8900" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Reason for Contact *</label>
                    <select name="reason" value={formData.reason} onChange={handleChange} required>
                      <option value="internship">Internship Opportunity</option>
                      <option value="project">Project Discussion</option>
                      <option value="collab">Collaboration</option>
                      <option value="general">General Query</option>
                    </select>
                  </div>

                  {(reason === 'project' || reason === 'collab') && (
                    <div className="form-row">
                      <div className="form-group">
                        <label>Project Type</label>
                        <input type="text" name="projectType" value={formData.projectType || ''} onChange={handleChange} placeholder="e.g. E-commerce Website" />
                      </div>
                      <div className="form-group">
                        <label>Budget (Optional)</label>
                        <input type="text" name="budget" value={formData.budget || ''} onChange={handleChange} placeholder="e.g. $1000 - $3000" />
                      </div>
                    </div>
                  )}

                  <div className="form-group">
                    <label>Message *</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required rows="5" placeholder="Tell me about your requirements..."></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary submit-btn">
                    Send Message
                  </button>
                  <p className="form-note">Your details will be emailed securely using Formspree/EmailJS.</p>
                </form>
              </div>
            </div>
          </section>
        </>
      ) : (
        <section className="section submission-success">
          <div className="container">
            <div className="success-wrapper glass-card">
              <CheckCircle size={64} className="success-icon" />
              <h2>Message Sent Successfully!</h2>
              <p>Thank you for reaching out, {formData.name}. I have received your details and will get back to you within 24 hours.</p>
              
              <div className="summary-card">
                <h4>Submission Summary</h4>
                <ul>
                  <li><strong>Reason:</strong> {formData.reason}</li>
                  <li><strong>Email:</strong> {formData.email}</li>
                  <li><strong>Phone:</strong> {formData.phone}</li>
                  {formData.projectType && <li><strong>Project Type:</strong> {formData.projectType}</li>}
                </ul>
              </div>

              <div className="success-actions">
                <button className="btn btn-primary" onClick={generatePDF}>
                  Download PDF Summary <Download size={18} />
                </button>
                <button className="btn btn-secondary" onClick={() => setIsSubmitted(false)}>
                  Send Another Message
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Contact;
