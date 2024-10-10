"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const trainer = {
  name: "Ayman Hamouda",
  specialty: "Head Coach & Founder",
  image: "/trainer.png"
};

export default function Trainers() {
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
    <section ref={sectionRef} className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className={`text-5xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>Our Trainer</h2>
        <div className="flex justify-center">
          <div className={`bg-gray-900 rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl max-w-sm w-full ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="relative h-96">
              <Image
                src={trainer.image}
                alt={trainer.name}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-3xl font-semibold mb-2 text-white">{trainer.name}</h3>
              <p className="text-red-500 font-medium text-xl">{trainer.specialty}</p>
              <p className="mt-4 text-gray-300">With over 10 years of experience in kickboxing and fitness training, Ayman Hamouda leads our team with passion and expertise.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}