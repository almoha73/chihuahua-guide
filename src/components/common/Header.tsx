import React from 'react';
import { Heart } from "lucide-react";

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  const navigationItems = [
    { id: 'info', label: 'À propos' },
    { id: 'varietes', label: 'Variétés' },
    { id: 'photos', label: 'Photos' },
    { id: 'soins', label: 'Soins' },
    { id: 'sante', label: 'Santé' }
  ];

  return (
    <header className="header">
      <div className="header-content">
        <h1>
          <Heart size={28} fill="currentColor" />
          Guide du Chihuahua
        </h1>
        <nav className="nav">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              className={activeSection === item.id ? 'btn-primary' : 'btn-ghost'}
              onClick={() => onNavigate(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};