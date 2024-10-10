"use client";

import { useState, useEffect, useRef, RefCallback } from "react";
import { ChevronRightIcon } from '@heroicons/react/24/solid';

interface Video {
  id: number;
  title: string;
  description: string;
  filename: string;
}

const videos: Video[] = [
  { id: 1, title: "Hitting with different extremities of the body", description: "Has existed throughout the world throughout human history.", filename: "1.mp4" },
  { id: 2, title: "Various types of boxing existed in ancient India", description: "The earliest references to musti-yuddha come from classical Vedic epics.", filename: "2.mp4" },
  { id: 3, title: "Records of boxing activity disappeared in the West", description: "After the fall of the Western Roman Empire.", filename: "3.mp4" },
  { id: 4, title: "Amateur boxing at the collegiate level", description: "Found at the Olympic Games and other venues.", filename: "4.mp4" },
];

export default function VideoGallery() {
  const [isVisible, setIsVisible] = useState(false);
  const [playingVideos, setPlayingVideos] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const setVideoRef: RefCallback<HTMLVideoElement> = (element: HTMLVideoElement | null) => {
    if (element) {
      const index = parseInt(element.dataset.index || '0', 10);
      videoRefs.current[index] = element;
    }
  };

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

  const togglePlay = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      if (video.paused) {
        video.play();
        setPlayingVideos(prev => [...prev, index]);
      } else {
        video.pause();
        setPlayingVideos(prev => prev.filter(i => i !== index));
      }
    }
  };

  return (
    <section ref={sectionRef} className="py-20 bg-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className={`flex justify-between items-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-white">VIEW <span className="text-red-600">THE ACTIONS</span></h2>
          <button className="bg-gray-800 text-white text-sm px-4 py-2 rounded-full flex items-center hover:bg-gray-700 transition-colors duration-300">
            LOAD MORE <ChevronRightIcon className="w-5 h-5 ml-2" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <div 
              key={video.id} 
              className={`bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative w-full h-64">
                <video
                  ref={setVideoRef}
                  data-index={index}
                  src={`/videos/${video.filename}`}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => togglePlay(index)}
                  poster={`/videos/${video.filename.replace('.mp4', '.jpg')}`}
                  onEnded={() => setPlayingVideos(prev => prev.filter(i => i !== index))}
                >
                  Your browser does not support the video tag.
                </video>
                <div 
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${playingVideos.includes(index) ? 'opacity-0' : 'opacity-100'}`} 
                  onClick={() => togglePlay(index)}
                >
                  <div className="bg-red-600 rounded-full p-3 cursor-pointer">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">{video.title}</h3>
                <p className="text-gray-400 text-sm">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={`mt-12 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 text-lg rounded-full transition-colors duration-300">
            FREE TRIAL
          </button>
        </div>
      </div>
    </section>
  );
}