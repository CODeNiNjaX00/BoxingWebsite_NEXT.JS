"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  { title: "Kickboxing Classes", icon: "🥊", description: "Master the art of kickboxing with our expert trainers." },
  { title: "Strength & Conditioning", icon: "💪", description: "Build strength and endurance with our specialized programs." },
  { title: "Nutrition Coaching", icon: "🥗", description: "Get personalized nutrition advice to fuel your workouts and recovery." },
  { title: "One-on-One Training", icon: "👤", description: "Accelerate your progress with personalized coaching sessions." },
];

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <h2 className={`text-5xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-gray-800 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-500 hover:shadow-2xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}