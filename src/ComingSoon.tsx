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
        className="fixed top-2 left-2 sm:top-4 sm:left-20 z-50 flex items-center space-x-1 sm:space-x-2 text-white hover:text-gray-300 transition-colors duration-300 bg-black bg-opacity-50 px-2 sm:px-4 py-1 sm:py-2 rounded-lg backdrop-blur-md border border-white border-opacity-20"
      >
        <ArrowLeft size={16} />
        <span className="font-serif text-sm sm:text-base">Back to Events</span>
      </button>

      {/* Main Content */}
      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        {/* Coming Soon Badge */}
        <div className="inline-block mb-6 sm:mb-8">
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white px-4 sm:px-6 py-1 sm:py-2 rounded-full text-base sm:text-lg font-serif font-bold shadow-lg">
            Coming Soon
          </span>
        </div>

        {/* Event Title */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-serif text-white mb-4 sm:mb-6 animate-fadeIn leading-tight">
          {eventTitle}
        </h1>

        {/* Event Details */}
        <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
          <div className="flex items-center justify-center space-x-2 sm:space-x-3 text-white text-base sm:text-xl font-serif">
            <Calendar size={20} className="text-blue-400 flex-shrink-0" />
            <span>{eventDate}</span>
          </div>
          <div className="flex items-center justify-center space-x-2 sm:space-x-3 text-white text-base sm:text-xl font-serif">
            <Clock size={20} className="text-green-400 flex-shrink-0" />
            <span>Time: TBA</span>
          </div>
          <div className="flex items-center justify-center space-x-2 sm:space-x-3 text-white text-base sm:text-xl font-serif">
            <MapPin size={20} className="text-red-400 flex-shrink-0" />
            <span>Location: TBA</span>
          </div>
        </div>

        {/* Event Description */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white opacity-90 font-serif leading-relaxed mb-8 sm:mb-12 max-w-3xl mx-auto">
          {eventDescription}
        </p>

        {/* Animated Loading Dots */}
        <div className="flex justify-center space-x-2 mb-6 sm:mb-8">
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full animate-bounce"></div>
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full animate-bounce delay-100"></div>
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full animate-bounce delay-200"></div>
        </div>

        {/* Additional Info */}
        <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-4 sm:p-8 border border-white border-opacity-20">
          <h3 className="text-xl sm:text-2xl font-serif text-white mb-3 sm:mb-4">Stay Tuned!</h3>
          <p className="text-white opacity-80 font-serif text-sm sm:text-base md:text-lg">
            We're working hard to bring you an amazing mathematical experience. 
            More details about registration, schedule, and special activities will be announced soon.
          </p>
          <div className="mt-4 sm:mt-6">
            <p className="text-white opacity-70 font-serif text-sm sm:text-base">
              Follow us on social media for the latest updates!
            </p>
          </div>
        </div>

        {/* Mathematical Animation */}
        <div className="mt-8 sm:mt-12">
          <div className="text-2xl sm:text-3xl md:text-4xl text-white opacity-30 font-serif animate-pulse">
            ∑(excitement) = ∞
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
