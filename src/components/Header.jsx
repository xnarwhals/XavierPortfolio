import React, { useState, useEffect } from 'react';
import { Award } from 'lucide-react';

// AI generated 

export default function FunAchievementsHeader() {
  const [glowIntensity, setGlowIntensity] = useState(0);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Pulsing glow effect
    const glowInterval = setInterval(() => {
      setGlowIntensity(prev => (prev + 1) % 100);
    }, 50);

    // Generate floating particles
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 2,
      size: 2 + Math.random() * 3
    }));
    setParticles(newParticles);

    return () => clearInterval(glowInterval);
  }, []);

  const glowOpacity = 0.3 + (Math.sin(glowIntensity / 10) * 0.2);

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-lg p-8 overflow-hidden border-2 border-yellow-500/30 shadow-2xl">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(234, 179, 8, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(234, 179, 8, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px',
          animation: 'gridScroll 20s linear infinite'
        }} />
      </div>

      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-yellow-400/60"
          style={{
            left: `${particle.left}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animation: `float ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
            bottom: '-10px'
          }}
        />
      ))}

      <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-yellow-500/50" />
      <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-yellow-500/50" />
      <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-yellow-500/50" />
      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-yellow-500/50" />

      <div 
        className="absolute top-4 right-8 w-32 h-32 rounded-full bg-yellow-500/20 blur-3xl"
        style={{ opacity: glowOpacity }}
      />
      <div 
        className="absolute bottom-4 left-8 w-32 h-32 rounded-full bg-blue-500/20 blur-3xl"
        style={{ opacity: glowOpacity * 0.8 }}
      />

      <div className="relative z-10">
        <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 tracking-tight flex items-center gap-3"
          style={{
            textShadow: `
              0 0 10px rgba(234, 179, 8, 0.5),
              0 0 20px rgba(234, 179, 8, 0.3),
              0 0 30px rgba(234, 179, 8, 0.2)
            `,
            filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5))'
          }}>
          <Award className="w-7 h-7 text-yellow-400 shrink-0" />
          <span>Achievements</span>
        </h2>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-600px) translateX(${Math.random() * 100 - 50}px);
            opacity: 0;
          }
        }

        @keyframes gridScroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(30px);
          }
        }
      `}</style>
    </div>
  );
}