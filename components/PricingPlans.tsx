"use client";

import { useEffect, useRef, useState } from "react";

const plans = [
  { name: "Basic", features: ["2 classes per week", "Access to gym", "Nutrition guide"] },
  { name: "Pro", features: ["Unlimited classes", "Personal trainer", "Nutrition consultation"] },
  { name: "Elite", features: ["All Pro features", "Private sessions", "Performance tracking"] },
];

export default function PricingPlans() {
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
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className={`text-5xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>Membership Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-gray-800 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-500 hover:shadow-2xl border border-gray-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-white">{plan.name}</h3>
              <ul className="mb-8 space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-3 rounded-full font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}