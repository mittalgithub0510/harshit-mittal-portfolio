import { FaPhoneAlt } from 'react-icons/fa';
import { profile } from '../data/profile';
import './CallIconButton.css';

const CallIconButton = () => {
  return (
    <a href={`tel:${profile.phone}`} className="call-fab pulse-animation" title="Call Me" aria-label={`Call ${profile.name}`}>
      <FaPhoneAlt size={24} />
    </a>
  );
};

export default CallIconButton;
