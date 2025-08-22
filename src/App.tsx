import React, { useState, useEffect } from 'react';
import { Download, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

// Floating Math Symbols Component
const FloatingSymbols: React.FC = () => {
  const symbols = ['π', '∞', '√', 'Σ', '∫'];
  const [symbolPositions, setSymbolPositions] = useState<Array<{ x: number; y: number; symbol: string; speed: number; direction: { x: number; y: number } }>>([]);

  useEffect(() => {
    // Initialize symbol positions
    const initialPositions = Array.from({ length: 15 }, (_, i) => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
      speed: 0.2 + Math.random() * 0.3,
      direction: {
        x: (Math.random() - 0.5) * 2,
        y: (Math.random() - 0.5) * 2
      }
    }));
    setSymbolPositions(initialPositions);

    // Animation loop
    const animate = () => {
      setSymbolPositions(positions => 
        positions.map(pos => {
          let newX = pos.x + pos.direction.x * pos.speed;
          let newY = pos.y + pos.direction.y * pos.speed;
          let newDirectionX = pos.direction.x;
          let newDirectionY = pos.direction.y;

          // Bounce off edges
          if (newX <= 0 || newX >= window.innerWidth - 50) {
            newDirectionX = -pos.direction.x;
            newX = Math.max(0, Math.min(window.innerWidth - 50, newX));
          }
          if (newY <= 0 || newY >= window.innerHeight - 50) {
            newDirectionY = -pos.direction.y;
            newY = Math.max(0, Math.min(window.innerHeight - 50, newY));
          }

          return {
            ...pos,
            x: newX,
            y: newY,
            direction: { x: newDirectionX, y: newDirectionY }
          };
        })
      );
    };

    const interval = setInterval(animate, 16); // ~60fps
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {symbolPositions.map((pos, index) => (
        <div
          key={index}
          className="absolute text-4xl text-white opacity-30 transition-all duration-100"
          style={{
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            fontFamily: 'Times New Roman, serif'
          }}
        >
          {pos.symbol}
        </div>
      ))}
    </div>
  );
};

// Navigation Component
const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'events', label: 'Events' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'forms', label: 'Forms' },
    { id: 'join', label: 'Join' },
    { id: 'about', label: 'About' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <>
      {/* Logo in top left corner */}
      <div className="fixed top-4 left-4 z-50">
        <img
          src="./images/mathLogo.jpeg"
          alt="Math Club Logo"
          className="w-16 h-16 rounded-full border-2 border-white border-opacity-30 hover:border-opacity-100 transition-all duration-300 cursor-pointer"
          onClick={() => scrollToSection('home')}
        />
      </div>

      {/* Main navigation */}
      <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 bg-black bg-opacity-90 backdrop-blur-md px-8 py-4 rounded-b-lg border-b border-white border-opacity-20">
        <div className="flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-white hover:shadow-white hover:shadow-sm transition-all duration-300 font-serif text-lg px-3 py-1 hover:underline hover:decoration-white hover:decoration-2 hover:underline-offset-4"
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
};

// Hero Section
const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="text-center z-10">
        <h1 className="text-6xl md:text-8xl font-serif text-white mb-4 animate-fadeIn">
          Math Club @ ULM
        </h1>
        <p className="text-2xl md:text-3xl text-white mb-8 font-serif opacity-90 animate-fadeIn delay-300">
          Where numbers meet creativity.
        </p>
        <button className="bg-white text-black px-8 py-4 text-xl font-serif rounded-lg hover:shadow-white hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fadeIn delay-500">
          Join Now
        </button>
      </div>
    </section>
  );
};

// Events Section
const EventsSection: React.FC = () => {
  const events = [
    {
      title: "Pi Day Celebration",
      date: "March 14, 2025",
      description: "Join us for a day filled with pi-themed activities, competitions, and delicious pie!"
    },
    {
      title: "Math Olympics Training",
      date: "May 5, 2025",
      description: "Prepare for regional math competitions with practice problems and strategy sessions."
    },
    {
      title: "Senior Thesis Presentations",
      date: "May 15, 2025",
      description: "Our graduating seniors present their capstone research projects to the club community."
    },
    {
      title: "End of Year Social",
      date: "May 28, 2025",
      description: "Celebrate the year with food, games, and networking with fellow math enthusiasts."
    }
  ];

  return (
    <section id="events" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-serif text-white text-center mb-16">Upcoming Events</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div 
              key={index} 
              className="panel-rainbow-hover p-6"
            >
              <h3 className="text-2xl font-serif text-white mb-2">
                {event.title}
              </h3>
              <p className="text-white opacity-80 mb-3 font-serif text-lg">
                {event.date}
              </p>
              <p className="text-white opacity-90 font-serif">
                {event.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Gallery Section
const GallerySection: React.FC = () => {
  const images = Array.from({ length: 8 }, (_, i) => `https://images.pexels.com/photos/${[
    '3850749', '5212345', '5905709', '6238050', '7014284', '8348099', '8474873', '9034783'
  ][i]}/pexels-photo-${[
    '3850749', '5212345', '5905709', '6238050', '7014284', '8348099', '8474873', '9034783'
  ][i]}.jpeg?auto=compress&cs=tinysrgb&w=400`);

  return (
    <section id="gallery" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-serif text-white text-center mb-16">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div key={index} className="aspect-square overflow-hidden rounded-lg group cursor-pointer">
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:shadow-white group-hover:shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Forms Section
const FormsSection: React.FC = () => {
  const forms = [
    { name: "Membership Form", filename: "membership-form.pdf" },
    { name: "Event Registration", filename: "event-registration.pdf" },
    { name: "Constitution", filename: "club-constitution.pdf" }
  ];

  return (
    <section id="forms" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-serif text-white mb-16">Club Forms</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {forms.map((form, index) => (
            <div 
              key={index} 
              className="panel-rainbow-hover p-8"
            >
              <h3 className="text-2xl font-serif text-white mb-6">
                {form.name}
              </h3>
              <button className="bg-white text-black px-6 py-3 font-serif rounded-lg hover:shadow-white hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto">
                <Download className="mr-2" size={20} />
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Join Section
const JoinSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', major: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you soon.');
    setFormData({ name: '', email: '', major: '' });
  };

  return (
    <section id="join" className="py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-5xl font-serif text-white mb-4">Be part of the equation.</h2>
        <p className="text-xl text-white opacity-90 font-serif mb-12">Join our community of mathematical minds</p>
        
        <form 
          onSubmit={handleSubmit} 
          className="panel-rainbow-hover p-8"
        >
          <div className="space-y-6">
            <input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
              className="w-full px-4 py-3 bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-70 rounded-lg border border-white border-opacity-30 focus:outline-none focus:shadow-white focus:shadow-md font-serif text-lg"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
              className="w-full px-4 py-3 bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-70 rounded-lg border border-white border-opacity-30 focus:outline-none focus:shadow-white focus:shadow-md font-serif text-lg"
            />
            <input
              type="text"
              placeholder="Major"
              value={formData.major}
              onChange={(e) => setFormData({...formData, major: e.target.value})}
              required
              className="w-full px-4 py-3 bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-70 rounded-lg border border-white border-opacity-30 focus:outline-none focus:shadow-white focus:shadow-md font-serif text-lg"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-8 bg-white text-black px-8 py-4 text-xl font-serif rounded-lg hover:shadow-white hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Join the Club
          </button>
        </form>
      </div>
    </section>
  );
};

// About Section
const AboutSection: React.FC = () => {
  const leadership = [
    { name: "Nirjara (NJ) KC", role: "President", image: "./images/dog.jpeg" },
    { name: "XX", role: "Vice President", image: "" },
    { name: "XX", role: "Secretary", image: "" },
    { name: "XX", role: "Treasurer", image: "" }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-serif text-white text-center mb-16">About Us</h2>
        
        <div className="mb-16">
          <p className="text-xl text-white font-serif leading-relaxed text-center max-w-4xl mx-auto opacity-90">
            The University of Louisiana Monroe Math Club is dedicated to fostering a love for mathematics 
            among students of all backgrounds. We provide a supportive community where mathematical minds 
            can explore, learn, and grow together. Through engaging events, competitions, guest lectures, 
            and social activities, we aim to demonstrate that mathematics is not just a subject to study, 
            but a beautiful art form that connects to every aspect of our world. Whether you're a math 
            major or simply curious about numbers, you'll find a welcoming home in our club.
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-serif text-white text-center mb-12">Leadership Team</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {leadership.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white border-opacity-30 hover:border-opacity-100 transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-serif text-white mb-1">{member.name}</h4>
                <p className="text-white opacity-80 font-serif">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white border-opacity-20 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-xl font-serif text-white mb-4">Contact</h4>
            <div className="space-y-2 text-white opacity-80">
              <div className="flex items-center font-serif">
                <Mail size={16} className="mr-2" />
                mathclub@ulm.edu
              </div>
              <div className="flex items-center font-serif">
                <Phone size={16} className="mr-2" />
                (318) 342-1000
              </div>
              <div className="flex items-center font-serif">
                <MapPin size={16} className="mr-2" />
                Walker Hall, ULM Campus
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-serif text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Facebook size={24} className="text-white opacity-80 hover:opacity-100 cursor-pointer transition-opacity duration-300" />
              <Instagram size={24} className="text-white opacity-80 hover:opacity-100 cursor-pointer transition-opacity duration-300" />
              <Twitter size={24} className="text-white opacity-80 hover:opacity-100 cursor-pointer transition-opacity duration-300" />
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-serif text-white mb-4">Links</h4>
            <div className="space-y-2">
              <a href="#" className="block text-white opacity-80 hover:opacity-100 font-serif transition-opacity duration-300">University Site</a>
              <a href="#" className="block text-white opacity-80 hover:opacity-100 font-serif transition-opacity duration-300">Math Department</a>
              <a href="#" className="block text-white opacity-80 hover:opacity-100 font-serif transition-opacity duration-300">Student Organizations</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white border-opacity-20 pt-8 text-center">
          <p className="text-white opacity-70 font-serif">
            © 2025 Math Club – University of Louisiana Monroe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  return (
    <div className="bg-black min-h-screen" style={{ fontFamily: 'Times New Roman, serif' }}>
      <FloatingSymbols />
      <Navigation />
      <HeroSection />
      <EventsSection />
      <GallerySection />
      <FormsSection />
      <JoinSection />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default App;