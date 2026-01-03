import React, { useState } from 'react';
import './hobbies.css';
import { Zap, TrendingUp, Cpu, Utensils, Coffee, Github, X, ChevronLeft, ChevronRight, Cat } from 'lucide-react';

const Modal = ({ isOpen, onClose, title, images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Reset index when modal opens with new images
  React.useEffect(() => {
    if (isOpen) setCurrentImageIndex(0);
  }, [isOpen]);

  // Keyboard Navigation
  React.useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentImageIndex, images]); // Dependencies for closure freshness

  if (!isOpen) return null;

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{title} Gallery</h3>
          <button onClick={onClose} className="modal-close-btn" aria-label="Close">
            <X size={24} />
          </button>
        </div>

        <div className="modal-body">
          <div className="modal-image-wrapper">
            <img
              src={images[currentImageIndex].url}
              alt={images[currentImageIndex].caption}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/800x600/6b7280/ffffff?text=Image+Unavailable";
              }}
            />
          </div>

          {images.length > 1 && (
            <>
              <button onClick={prevImage} className="modal-nav-btn modal-nav-prev" aria-label="Previous image">
                <ChevronLeft size={30} strokeWidth={2.5} />
              </button>
              <button onClick={nextImage} className="modal-nav-btn modal-nav-next" aria-label="Next image">
                <ChevronRight size={30} strokeWidth={2.5} />
              </button>
            </>
          )}
        </div>

        <div className="modal-footer">
          <p className="modal-caption">
            {images[currentImageIndex].caption}
          </p>

          {images.length > 1 && (
            <div className="modal-thumbnails">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  className={`thumbnail ${idx === currentImageIndex ? 'active' : ''}`}
                  onClick={() => handleThumbnailClick(idx)}
                >
                  <img src={img.url} alt={`Thumbnail ${idx + 1}`} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Data
// Pet Images
import kira from '../../images/images_pets/kira.jpeg';
import kira2 from '../../images/images_pets/kira_2.jpeg';
import mishina from '../../images/images_pets/mishina.jpeg';
import mishina3 from '../../images/images_pets/mishina_3.jpeg';
import miu from '../../images/images_pets/miu.jpeg';
import miu2 from '../../images/images_pets/miu_2.jpeg';
import pepe from '../../images/images_pets/pepe.jpeg';
import pepe2 from '../../images/images_pets/pepe_2.jpeg';
import mius from '../../images/images_pets/mius.jpeg';
import kira4 from '../../images/images_pets/kira_4.jpeg';

// Triathlon Images
import banyoles from '../../images/banyoles.jpeg';
import fontromeu from '../../images/fontromeu.jpeg';
import castelldefels from '../../images/castelldefels.jpeg';
import peniscolaRun from '../../images/peñiscola_run.jpeg';
import peniscola from '../../images/peñiscola.jpeg';
import banyoles2 from '../../images/banyoles_2.jpeg';

const triathlonImages = [
  { url: banyoles, caption: 'The challenging open water swim start.' },
  { url: fontromeu, caption: 'Last meters of Font Romeu Olympic Triathlon' },
  { url: castelldefels, caption: 'Focused on speed during the cycling segment.' },
  { url: peniscolaRun, caption: 'Crossing the finish line after a long race.' },
  { url: peniscola, caption: 'Crossing the finish line after a long race.' },
  { url: banyoles2, caption: 'Crossing the finish line of my first Olympic Triathlon' },
];

const petsImages = [
  { url: miu, caption: 'Miu' },
  { url: kira, caption: 'Kira' },
  { url: mius, caption: 'Mius' },
  { url: mishina, caption: 'Mishina' },
  { url: pepe, caption: 'Pepe' },
  { url: miu2, caption: 'Miu' },
  { url: kira2, caption: 'Kira' },
  { url: pepe2, caption: 'Pepe' },
  { url: mishina3, caption: 'Mishina' },
  { url: kira4, caption: 'Kira' },
];

const interestsData = [
  { name: "Triathlon & Endurance", icon: Zap, description: "Dedicated pursuit of long-term goals and consistent effort...", color: "#ef4444", images: triathlonImages },
  { name: "Web Creation & Apps", icon: Cpu, description: "Hands-on experience in full-stack development...", color: "#3b82f6", link: "https://github.com/rruizosm", images: null },
  { name: "Investing & Strategy", icon: TrendingUp, description: "Analytical mindset applied to market research...", color: "#10b981", images: null },
  { name: "Gourmet Cooking", icon: Utensils, description: "A passion for complex recipes...", color: "#f59e0b" },
  { name: "Specialty Coffee", icon: Coffee, description: "A study in precision and quality control...", color: "#0ea5e9", images: null },
  { name: "Pets", icon: Cat, description: "My faithful companions: Miu, Kira, Mishina & Pepe. They bring joy to my every day.", color: "#dfb258ff", images: petsImages },
];

const Hobbies = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', images: [] });

  const openModal = (item) => {
    if (item.images?.length > 0) {
      setModalContent({ title: item.name, images: item.images });
      setShowModal(true);
    }
  };

  return (
    <section className="hobbies-section">
      <div className="container">
        <header className="section-header">
          <h1>Passions & <span className="highlight">Applied Skills</span></h1>
          <p className="subtitle">Beyond the desk: where discipline, creativity, and strategy intersect.</p>
        </header>

        <div className="interests-grid">
          {interestsData.map((item, index) => (
            <article
              key={index}
              className={`interest-card ${item.images ? 'has-gallery' : ''}`}
            >
              <div className="card-content">
                <div className="card-header">
                  <div className="icon-wrapper" style={{ backgroundColor: `${item.color}20` }}>
                    <item.icon size={28} color={item.color} />
                  </div>
                  <h3>{item.name}</h3>
                </div>
                <p className="description">{item.description}</p>

                {(item.link || item.images) && (
                  <div className="card-footer">
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-link github"
                        aria-label="View on GitHub"
                      >
                        <Github size={18} />
                        <span>Code</span>
                      </a>
                    )}

                    {item.images && (
                      <button
                        className="action-button gallery-trigger"
                        onClick={() => openModal(item)}
                      >
                        <Zap size={16} />
                        <span>View Gallery</span>
                      </button>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="summary">
          <div className="summary-card">
            <p>
              My diverse interests reflect my commitment to <strong className="highlight">continuous improvement</strong>, <strong className="highlight">analytical thinking</strong>, and delivering <strong className="highlight">high-quality results</strong>.
            </p>
          </div>
        </div>
      </div>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={modalContent.title}
        images={modalContent.images}
      />
    </section>
  );
};

export default Hobbies;