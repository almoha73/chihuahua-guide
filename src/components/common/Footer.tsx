import { Heart, Mail, MapPin, Phone, Instagram, Facebook, Star } from "lucide-react";

interface FooterProps {
  onNavigate: (section: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const sections = [
    { id: 'info', label: 'À propos' },
    { id: 'varietes', label: 'Variétés' },
    { id: 'photos', label: 'Photos' },
    { id: 'soins', label: 'Soins' },
    { id: 'sante', label: 'Santé' }
  ];

  return (
    <footer style={{ background: '#0f172a', color: '#94a3b8', padding: '6rem 0 3rem' }}>
      <div className="container">
        <div className="grid-3" style={{ marginBottom: '4rem', gap: '4rem' }}>
          <div>
            <h3 style={{ fontSize: '1.75rem', fontWeight: '900', color: 'white', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', letterSpacing: '-0.025em' }}>
              <Heart size={28} fill="var(--color-rose-600)" style={{ color: 'var(--color-rose-600)' }} />
              Guide du Chihuahua
            </h3>
            <p style={{ lineHeight: '1.7', marginBottom: '2rem', fontSize: '1rem' }}>
              Le portail de référence pour tout savoir sur le Chihuahua. Passion, santé et bien-être pour votre compagnon miniature.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" style={{ color: 'white', background: 'rgba(255,255,255,0.05)', padding: '0.75rem', borderRadius: '50%', transition: 'all 0.3s' }}>
                <Instagram size={20} />
              </a>
              <a href="#" style={{ color: 'white', background: 'rgba(255,255,255,0.05)', padding: '0.75rem', borderRadius: '50%', transition: 'all 0.3s' }}>
                <Facebook size={20} />
              </a>
              <a href="mailto:contact@chihuahua-guide.fr" style={{ color: 'white', background: 'rgba(255,255,255,0.05)', padding: '0.75rem', borderRadius: '50%', transition: 'all 0.3s' }}>
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 style={{ fontWeight: '800', color: 'white', marginBottom: '1.5rem', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em' }}>Navigation rapide</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', listStyle: 'none' }}>
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => onNavigate(section.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#94a3b8',
                      cursor: 'pointer',
                      fontSize: '1rem',
                      padding: 0,
                      transition: 'all 0.2s ease',
                      fontWeight: '500'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#94a3b8';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    {section.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontWeight: '800', color: 'white', marginBottom: '1.5rem', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em' }}>Contact & Infos</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', listStyle: 'none' }}>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <MapPin size={18} style={{ color: 'var(--color-rose-500)' }} />
                <span>Mentions légales & Confidentialité</span>
              </li>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <Phone size={18} style={{ color: 'var(--color-rose-500)' }} />
                <span>+33 (0)1 23 45 67 89</span>
              </li>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'center', color: 'var(--color-rose-400)', fontWeight: '600' }}>
                <Star size={18} fill="currentColor" />
                <span>Expertise Canine Certifiée</span>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '3rem', textAlign: 'center' }}>
          <p style={{ fontSize: '0.875rem', maxWidth: '600px', margin: '0 auto 1.5rem', lineHeight: '1.6' }}>
            © 2024 Guide du Chihuahua. Les informations présentes sur ce site sont données à titre indicatif et ne remplacent en aucun cas l'avis d'un professionnel de santé animale.
          </p>
          <p style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#475569' }}>
            DESIGNED WITH LOVE BY ANTIGRAVITY • POWERED BY AI
          </p>
        </div>
      </div>
    </footer>
  );
};