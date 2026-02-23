import { useState } from 'react';

export const useNavigation = (initialSection: string = 'info') => {
  const [activeSection, setActiveSection] = useState(initialSection);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return {
    activeSection,
    setActiveSection,
    scrollToSection,
  };
};