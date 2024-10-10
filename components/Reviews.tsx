"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

interface Review {
  id: number;
  content: string;
  author: string;
  socialMedia: string;
  image: string;
}

const reviews: Review[] = [
  {
    id: 1,
    content: "Then I decided to start the FightClub boxing classes program, my only experience with throwing punches was during karate classes many years ago. But karate is much different than boxing. Also, I'd never taken kickboxing classes at the gym. I'd always stuck with step classes.",
    author: "TOM HASOULLAH",
    socialMedia: "@tomhasoullah",
    image: "/sisi.jpeg"
  },
  {
    id: 2,
    content: "The FightClub program has completely transformed my fitness journey. The intensity of the workouts and the supportive community have pushed me beyond my limits. I've never felt stronger or more confident.",
    author: "SARAH JOHNSON",
    socialMedia: "@sarahj_fitness",
    image: "/review2.jpg"
  },
  {
    id: 3,
    content: "As a complete beginner to boxing, I was intimidated at first. But the trainers at FightClub made me feel welcome and guided me every step of the way. Now, I can't imagine my life without these classes!",
    author: "MIKE PETERSON",
    socialMedia: "@mike_fights_fit",
    image: "/review3.jpg"
  },
  {
    id: 4,
    content: "The combination of cardio and strength training in these boxing classes is unparalleled. I've seen more progress in my fitness level in three months here than I did in a year at my old gym.",
    author: "EMILY CHANG",
    socialMedia: "@emilycfitness",
    image: "/review4.jpg"
  }
];

export default function Reviews() {
  const [currentReview, setCurrentReview] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

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

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section ref={sectionRef} className="py-12 md:py-20 bg-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-start">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="relative h-[300px] md:h-[500px] w-full">
              <Image
                src={reviews[currentReview].image}
                alt={`Reviewer ${reviews[currentReview].author}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                quality={100}
                priority={currentReview === 0}
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 md:pl-12 flex flex-col justify-between md:h-[500px]">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">
                <span className="text-white">WINNING</span>
                <span className="text-red-600"> REVIEWS</span>
              </h2>
              <p className="text-gray-300 text-base md:text-lg mb-4 md:mb-6">
                {reviews[currentReview].content}
              </p>
              <p className="text-white font-bold">{reviews[currentReview].author}</p>
              <p className="text-gray-400">{reviews[currentReview].socialMedia}</p>
            </div>
            <div className="flex justify-between items-center mt-6 md:mt-8">
              <div className="flex space-x-2">
                {reviews.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === currentReview ? 'bg-red-600' : 'bg-gray-600'
                    }`}
                  ></div>
                ))}
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={prevReview}
                  className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors duration-300"
                >
                  <ChevronLeftIcon className="w-5 h-5 md:w-6 md:h-6" />
                </button>
                <button
                  onClick={nextReview}
                  className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors duration-300"
                >
                  <ChevronRightIcon className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}