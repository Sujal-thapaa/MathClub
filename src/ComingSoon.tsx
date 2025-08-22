import React from 'react';
import { ArrowLeft, Calendar, Clock, MapPin } from 'lucide-react';

interface ComingSoonProps {
  eventTitle: string;
  eventDate: string;
  eventDescription: string;
  onBack: () => void;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ eventTitle, eventDate, eventDescription, onBack }) => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Background Math Symbols */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 text-6xl text-white opacity-10 animate-pulse">π</div>
        <div className="absolute top-20 right-20 text-5xl text-white opacity-10 animate-pulse delay-300">∞</div>
        <div className="absolute bottom-20 left-20 text-7xl text-white opacity-10 animate-pulse delay-500">√</div>
        <div className="absolute bottom-10 right-10 text-6xl text-white opacity-10 animate-pulse delay-700">Σ</div>
        <div className="absolute top-1/2 left-1/4 text-5xl text-white opacity-10 animate-pulse delay-1000">∫</div>
        <div className="absolute top-1/3 right-1/3 text-4xl text-white opacity-10 animate-pulse delay-1200">∆</div>
      </div>

      {/* Back Button */}
      <button
        onClick={onBack}
        className="fixed top-4 left-20 z-50 flex items-center space-x-2 text-white hover:text-gray-300 transition-colors duration-300 bg-black bg-opacity-50 px-4 py-2 rounded-lg backdrop-blur-md border border-white border-opacity-20"
      >
        <ArrowLeft size={20} />
        <span className="font-serif">Back to Events</span>
      </button>

      {/* Main Content */}
      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        {/* Coming Soon Badge */}
        <div className="inline-block mb-8">
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white px-6 py-2 rounded-full text-lg font-serif font-bold shadow-lg">
            Coming Soon
          </span>
        </div>

        {/* Event Title */}
        <h1 className="text-6xl md:text-8xl font-serif text-white mb-6 animate-fadeIn">
          {eventTitle}
        </h1>

        {/* Event Details */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-center space-x-3 text-white text-xl font-serif">
            <Calendar size={24} className="text-blue-400" />
            <span>{eventDate}</span>
          </div>
          <div className="flex items-center justify-center space-x-3 text-white text-xl font-serif">
            <Clock size={24} className="text-green-400" />
            <span>Time: TBA</span>
          </div>
          <div className="flex items-center justify-center space-x-3 text-white text-xl font-serif">
            <MapPin size={24} className="text-red-400" />
            <span>Location: TBA</span>
          </div>
        </div>

        {/* Event Description */}
        <p className="text-xl md:text-2xl text-white opacity-90 font-serif leading-relaxed mb-12 max-w-3xl mx-auto">
          {eventDescription}
        </p>

        {/* Animated Loading Dots */}
        <div className="flex justify-center space-x-2 mb-8">
          <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce delay-100"></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce delay-200"></div>
        </div>

        {/* Additional Info */}
        <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-8 border border-white border-opacity-20">
          <h3 className="text-2xl font-serif text-white mb-4">Stay Tuned!</h3>
          <p className="text-white opacity-80 font-serif text-lg">
            We're working hard to bring you an amazing mathematical experience. 
            More details about registration, schedule, and special activities will be announced soon.
          </p>
          <div className="mt-6">
            <p className="text-white opacity-70 font-serif">
              Follow us on social media for the latest updates!
            </p>
          </div>
        </div>

        {/* Mathematical Animation */}
        <div className="mt-12">
          <div className="text-4xl text-white opacity-30 font-serif animate-pulse">
            ∑(excitement) = ∞
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
