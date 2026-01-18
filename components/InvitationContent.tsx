
import React from 'react';
import { Calendar, MapPin, Clock, ArrowLeft, Heart, Microscope, Stethoscope, Mail } from 'lucide-react';
import Countdown from './Countdown';
import { Team } from '../types';

interface InvitationContentProps {
  team: Team;
  onReset: () => void;
}

const InvitationContent: React.FC<InvitationContentProps> = ({ team, onReset }) => {
  const accentColor = team === 'groom' ? 'text-blue-900' : 'text-rose-900';
  const bgColor = team === 'groom' ? 'bg-blue-50' : 'bg-rose-50';
  const buttonColor = team === 'groom' ? 'bg-blue-900 hover:bg-blue-800' : 'bg-rose-900 hover:bg-rose-800';

  return (
    <div className={`min-h-screen ${bgColor} pb-20`}>
      {/* Navigation / Back Button */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center pointer-events-none">
        <button 
          onClick={onReset}
          className="pointer-events-auto flex items-center space-x-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all text-gray-700"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-xs font-semibold uppercase tracking-wider">Change Team</span>
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop" 
            className="w-full h-full object-cover brightness-50"
            alt="Background"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 px-4 max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <div className="flex justify-center items-center space-x-4 text-white/90">
             <Stethoscope className="w-8 h-8 opacity-70" />
             <div className="w-12 h-[1px] bg-white/50"></div>
             <Microscope className="w-8 h-8 opacity-70" />
          </div>

          <p className="text-white text-sm md:text-base uppercase tracking-[0.4em] font-light">The Doctors are Paging You</p>
          
          <h1 className="font-serif text-6xl md:text-9xl text-white italic">
            Dr. Omar <br /> <span className="font-cursive text-5xl md:text-8xl lowercase opacity-90">&</span> <br /> Dr. Layla
          </h1>

          <div className="pt-8">
            <Countdown />
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
          <p className="text-[10px] uppercase tracking-widest mb-2">Scroll to Open</p>
          <div className="w-[1px] h-10 bg-white/40 mx-auto"></div>
        </div>
      </section>

      {/* Details Section */}
      <section className="max-w-4xl mx-auto px-6 -mt-20 relative z-20">
        <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden p-8 md:p-16">
          <div className="text-center mb-16">
            <div className={`inline-block mb-6 p-4 rounded-full ${team === 'groom' ? 'bg-blue-50' : 'bg-rose-50'}`}>
               <Heart className={`w-8 h-8 ${accentColor} fill-current`} />
            </div>
            <h3 className="font-serif text-3xl md:text-4xl text-gray-800 mb-6">A Prescription for Everlasting Love</h3>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto text-lg italic">
              "Medicine is my profession, but you are my heart's vital sign. Please join us as we begin our residency together in life."
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 border-y border-gray-100 py-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 flex items-center justify-center bg-amber-50 rounded-full mb-4">
                <Calendar className="text-amber-600 w-6 h-6" />
              </div>
              <h4 className="font-bold text-gray-800 uppercase text-xs tracking-widest mb-2">When</h4>
              <p className="text-gray-600">February 1st, 2026</p>
              <p className="text-gray-600 font-semibold">Sunday Evening</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 flex items-center justify-center bg-rose-50 rounded-full mb-4">
                <Clock className="text-rose-600 w-6 h-6" />
              </div>
              <h4 className="font-bold text-gray-800 uppercase text-xs tracking-widest mb-2">Time</h4>
              <p className="text-gray-600">6:00 PM Reception</p>
              <p className="text-gray-600">7:00 PM Dinner</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-full mb-4">
                <MapPin className="text-blue-600 w-6 h-6" />
              </div>
              <h4 className="font-bold text-gray-800 uppercase text-xs tracking-widest mb-2">Where</h4>
              <p className="text-gray-600">Sky Venue Palace</p>
              <p className="text-gray-600">New Cairo, Egypt</p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              className={`inline-flex items-center space-x-2 ${buttonColor} text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest transition-all shadow-lg hover:shadow-xl`}
            >
              <MapPin className="w-5 h-5" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      </section>

      {/* Medical Notes / Theme Section */}
      <section className="max-w-4xl mx-auto px-6 mt-16 text-center">
        <div className="bg-white/50 backdrop-blur-sm border border-white/80 rounded-3xl p-8 shadow-inner">
           <h4 className={`font-serif text-2xl ${accentColor} mb-4`}>Special Diagnosis</h4>
           <p className="text-gray-600 text-sm md:text-base mb-8">
             Your presence is the only treatment we require. <br />
             No gifts please, just your joyful hearts and dancing shoes.
           </p>
           <div className="flex justify-center space-x-2">
             <div className="w-2 h-2 rounded-full bg-gray-300"></div>
             <div className="w-2 h-2 rounded-full bg-gray-300"></div>
             <div className="w-2 h-2 rounded-full bg-gray-300"></div>
           </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="max-w-xl mx-auto px-6 mt-16 text-center">
        <div className="space-y-6">
          <Mail className={`w-10 h-10 ${accentColor} mx-auto opacity-40`} />
          <h2 className="font-serif text-4xl text-gray-800 italic">R.S.V.P</h2>
          <p className="text-gray-500 font-light text-lg">Kindly respond by January 1st, 2026</p>
          <div className="pt-6">
             <button className={`w-full ${buttonColor} text-white py-5 rounded-2xl font-bold text-xl transition-all shadow-md`}>
                Count Me In!
             </button>
          </div>
        </div>
      </section>

      <footer className="mt-24 text-center text-gray-400 text-xs uppercase tracking-[0.5em] font-light">
        Dr. Omar & Dr. Layla • 2026
      </footer>
    </div>
  );
};

export default InvitationContent;
