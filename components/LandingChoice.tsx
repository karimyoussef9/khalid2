
import React from 'react';
import { Stethoscope, Heart } from 'lucide-react';

interface LandingChoiceProps {
  onSelect: (team: 'groom' | 'bride') => void;
}

const LandingChoice: React.FC<LandingChoiceProps> = ({ onSelect }) => {
  return (
    <div className="relative h-screen w-full flex flex-col md:flex-row overflow-hidden bg-white">
      {/* Left side - Team Groom */}
      <div 
        className="group relative h-1/2 md:h-full md:w-1/2 bg-blue-50 cursor-pointer overflow-hidden transition-all duration-700 hover:md:w-[60%]"
        onClick={() => onSelect('groom')}
      >
        <img 
          src="https://picsum.photos/id/1027/1200/1800" 
          alt="Groom side" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-center p-8">
          <div className="bg-white/90 p-4 rounded-full mb-6 shadow-xl animate-float">
            <Stethoscope className="w-12 h-12 text-blue-800" />
          </div>
          <h2 className="font-serif text-5xl md:text-6xl text-blue-900 mb-4 tracking-tighter">Team Groom</h2>
          <p className="text-blue-800/80 uppercase tracking-[0.3em] text-sm font-semibold">The Doctor's Side</p>
        </div>
      </div>

      {/* Middle Divider */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center">
        <div className="bg-white rounded-full p-6 shadow-2xl border-4 border-amber-50">
          <Heart className="w-10 h-10 text-rose-500 fill-rose-500" />
        </div>
      </div>

      {/* Right side - Team Bride */}
      <div 
        className="group relative h-1/2 md:h-full md:w-1/2 bg-rose-50 cursor-pointer overflow-hidden transition-all duration-700 hover:md:w-[60%]"
        onClick={() => onSelect('bride')}
      >
        <img 
          src="https://picsum.photos/id/64/1200/1800" 
          alt="Bride side" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-rose-900/40 to-transparent"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-center p-8">
          <div className="bg-white/90 p-4 rounded-full mb-6 shadow-xl animate-float">
            <Heart className="w-12 h-12 text-rose-500" />
          </div>
          <h2 className="font-serif text-5xl md:text-6xl text-rose-900 mb-4 tracking-tighter">Team Bride</h2>
          <p className="text-rose-800/80 uppercase tracking-[0.3em] text-sm font-semibold">The Doctor's side</p>
        </div>
      </div>
    </div>
  );
};

export default LandingChoice;
