import {  Award, ExternalLink } from 'lucide-react';
import './CertificateCard.css';

const CertificateCard = ({ certificate }) => {
  return (
    <div className="certificate-card glass-card">
      <div className="cert-icon-wrapper">
        <Award size={32} />
      </div>
      <div className="cert-content">
        <span className="cert-issuer">{certificate.issuer} &bull; {certificate.category}</span>
        <h3 className="cert-title">{certificate.title}</h3>
        <p className="cert-desc">{certificate.description}</p>
        <a href={certificate.filePath} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm cert-btn">
          View Certificate <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
};

export default CertificateCard;
