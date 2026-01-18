
import React, { useState, useEffect } from 'react';
import { Team } from './types';
import LandingChoice from './components/LandingChoice';
import InvitationContent from './components/InvitationContent';

const App: React.FC = () => {
  const [selectedTeam, setSelectedTeam] = useState<Team>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSelectTeam = (team: 'groom' | 'bride') => {
    setSelectedTeam(team);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {!selectedTeam ? (
        <LandingChoice onSelect={handleSelectTeam} />
      ) : (
        <InvitationContent team={selectedTeam} onReset={() => setSelectedTeam(null)} />
      )}
    </div>
  );
};

export default App;
