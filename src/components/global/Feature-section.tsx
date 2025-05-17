"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import PlayButton from "../../../../public/global/play.png";

const tabs = [
  {
    label: "Automated Appointment Management",
    video: "/video/appointment-booking.mp4",
    thumbnail: "/thumbnil/thumbnail-1.png",
    description:
      "Streamline your clinic's operations with seamless appointment handling. Patients can book, reschedule, or cancel appointments instantly, reducing wait times and improving convenience. The feature integrates effortlessly with your clinic's scheduling and EHR systems, ensuring a smooth, error-free experience for both staff and patients.",
  },
  {
    label: "Patient Reminders",
    video: "/video/reminder.mp4",
    thumbnail: "/thumbnil/thumbnail-1.png",
    description:
      "Send automated reminders to patients for upcoming appointments. Reduce no-shows and boost patient engagement effortlessly.",
  },
  {
    label: "Customizable FAQs",
    video: "/video/faq.mp4",
    thumbnail: "/thumbnil/thumbnail-1.png",
    description:
      "Allow patients to ask and receive automated answers to frequently asked questions. Reduce the workload on your staff with intelligent self-service support.",
  },
  {
    label: "Triage and Escalation",
    video: "/video/triage.mp4",
    thumbnail: "/thumbnil/thumbnail-1.png",
    description:
      "Triage patients based on their needs and escalate urgent cases to human agents. Improve safety and response times with AI triage.",
  },
  {
    label: "Feedback",
    video: "/video/feedback.mp4",
    thumbnail: "/thumbnil/thumbnail-1.png",
    description:
      "Easily collect patient input with automated surveys and feedback forms. Gain insights to improve service quality and enhance patient satisfaction, while minimizing staff workload.",
  },
  {
    label: "Phone-based payments",
    video: "/video/payment.mp4",
    thumbnail: "/thumbnil/thumbnail-1.png",
    description:
      "Enable patients to make secure payments via phone. Improve collection rates and simplify billing.",
  },
];

export default function VoiceFeatureTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = tabs[activeIndex];
  const [hasPlayedBefore, setHasPlayedBefore] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch((error) => {
        console.error("Error playing video:", error);
      });
      setIsPlaying(true);
      setHasPlayedBefore(true);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      // Reset video state when changing tabs
      videoRef.current.currentTime = 0;

      if (hasPlayedBefore) {
        // Auto play if user has played a video before
        videoRef.current.play().catch((error) => {
          console.error("Error playing video:", error);
        });
        setIsPlaying(true);
      } else {
        // Show play button if user hasn't played any video yet
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  }, [activeIndex, hasPlayedBefore]);

  return (
    <section className="py-16 lg:py-[96px]" id="features">
      <div className="container">
        <div className="max-w-[664px] mx-auto mb-[34px]">
          <h2 className="text-center text-3xl md:text-[40px] text-[#261C53] font-Inter font-semibold md:leading-[48px] tracking-[-1px] mb-4">
            Enhance engagement with voice AI
          </h2>
          <p className="text-center text-base md:text-[20px] text-[#666666] font-Inter md:leading-7">
            Healfy&apos;s voice assistants offer patients quick, automated
            self-service options whenever they contact your healthcare practice.
          </p>
        </div>
        <div className="bg-white border rounded-[8px] overflow-hidden lg:flex">
          <div className="border-r w-full lg:max-w-[300px] xl:max-w-[417px]">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left px-4 md:px-7 py-4 lg:py-10 text-base md:text-[20px] font-Inter md:leading-7 border-b md:border-b-1 transition-colors ${
                  index === activeIndex
                    ? "bg-[#5F46CF] text-white"
                    : "bg-gray-50 text-gray-800 hover:bg-gray-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="lg:w-2/3 p-3 md:p-10 space-y-4">
            <div className="relative w-full">
              <video
                ref={videoRef}
                src={activeTab.video}
                poster={activeTab.thumbnail}
                width={799}
                height={448}
                controls={isPlaying}
                className="rounded-md w-full h-auto object-cover"
                onError={(e) => console.error("Video error:", e)}
                onEnded={() => setIsPlaying(false)}
              />
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={handlePlay}
                    className="bg-white/60 rounded-full p-2 backdrop-blur-md"
                  >
                    <Image
                      src={PlayButton.src}
                      width={100}
                      height={100}
                      alt={activeTab.label}
                    />
                  </button>
                </div>
              )}
            </div>
            <p className="text-base text-[#666666] font-Inter leading-6 mt-4">
              {activeTab.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
