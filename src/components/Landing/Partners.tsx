import React, { useState } from "react";

const partnersOne = [
  "zenith.png",
  "keystone.jpeg",
  "elingroup.jpeg",
  "pac.jpeg",
  "cybele.png",
];
const partnersTwo = [
  "pacregistras.jpeg",
  "afrilife.png",
  "chi.jpg",
  "firstspring.jpg",
];

const MarqueePartners = () => {
  const [isVertical, setIsVertical] = useState(false);

  const toggleDirection = () => {
    setIsVertical(!isVertical);
  };

  return (
    <div className="w-full mt-40">
      <h2 className="text-center mb-20 text-4xl font-semibold">WHO WE SERVE</h2>
      <div
        className={`wrapper ${
          isVertical ? "flex-row h-screen" : "flex flex-col"
        } mx-auto max-w-screen gap-4`}
      >
        <div
          className={`marquee ${isVertical ? "flex-col" : ""} ${
            isVertical ? "marquee--vertical" : ""
          } flex overflow-hidden select-none gap-4`}
        >
          <div
            className={`marquee__group ${
              isVertical ? "flex-col" : ""
            } flex-shrink-0 flex items-center justify-around gap-4 min-w-full`}
          >
            {partnersOne.map((partner, index) => (
              <div
                key={`partner-1-${index}`}
                className="grid place-items-center aspect-video w-40 md:w-56 lg:w-64"
              >
                <img
                  src={`/${partner}`}
                  alt={`Partner logo ${partner}`}
                  className="max-w-full max-h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div
            className={`marquee__group ${
              isVertical ? "flex-col" : ""
            } flex-shrink-0 flex items-center justify-around gap-4 min-w-full`}
          >
            {partnersOne.map((partner, index) => (
              <div
                key={`partner-2-${index}`}
                className="grid place-items-center aspect-video w-40 md:w-56 lg:w-64"
              >
                <img
                  src={`/${partner}`}
                  alt={`Partner logo ${partner}`}
                  className="max-w-full max-h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div
          className={`marquee marquee--reverse ${
            isVertical ? "flex-col" : ""
          } ${
            isVertical ? "marquee--vertical" : ""
          } flex overflow-hidden select-none gap-4`}
        >
          <div
            className={`marquee__group ${
              isVertical ? "flex-col" : ""
            } flex-shrink-0 flex items-center justify-around gap-4 min-w-full`}
          >
            {/* {[...partners].reverse().map((partner, index) => ( */}
            {partnersTwo.map((partner, index) => (
              <div
                key={`partner-reverse-1-${index}`}
                className="grid place-items-center aspect-video w-40 md:w-56 lg:w-64"
              >
                <img
                  src={`/${partner}`}
                  alt={`Partner logo ${partner}`}
                  className="max-w-full max-h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div
            className={`marquee__group ${
              isVertical ? "flex-col" : ""
            } flex-shrink-0 flex items-center justify-around gap-4 min-w-full`}
          >
            {/* {[...partners].reverse().map((partner, index) => ( */}
            {partnersTwo.map((partner, index) => (
              <div
                key={`partner-reverse-2-${index}`}
                className="grid place-items-center aspect-video w-40 md:w-56 lg:w-64"
              >
                <img
                  src={`/${partner}`}
                  alt={`Partner logo ${partner}`}
                  className="max-w-full max-h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS for animations and styles */}
      <style>{`
        :root {
          --gap: 1rem;
          --duration: 60s;
          --scroll-start: 0;
          --scroll-end: calc(-100% - var(--gap));
        }
        
        .marquee {
          mask-image: linear-gradient(
            var(--mask-direction, to right),
            hsl(0 0% 0% / 0),
            hsl(0 0% 0% / 1) 20%,
            hsl(0 0% 0% / 1) 80%,
            hsl(0 0% 0% / 0)
          );
        }
        
        .marquee__group {
          animation: scroll-x var(--duration) linear infinite;
        }
        
        .marquee--vertical {
          --mask-direction: to bottom;
        }
        
        .marquee--vertical .marquee__group {
          animation-name: scroll-y;
        }
        
        .marquee--reverse .marquee__group {
          animation-direction: reverse;
          animation-delay: -3s;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .marquee__group {
            animation-play-state: paused;
          }
        }
        
        @keyframes scroll-x {
          from {
            transform: translateX(var(--scroll-start));
          }
          to {
            transform: translateX(var(--scroll-end));
          }
        }
        
        @keyframes scroll-y {
          from {
            transform: translateY(var(--scroll-start));
          }
          to {
            transform: translateY(var(--scroll-end));
          }
        }
      `}</style>
    </div>
  );
};

export default MarqueePartners;
// import React, { useEffect, useRef } from "react";

// const partners = [
//   "zenith.png",
//   "keystone.jpeg",
//   "elingroup.jpeg",
//   "zenith.png",
//   "keystone.jpeg",
//   "elingroup.jpeg",
// ];

// const ImageMarquee = () => {
//   const trackRef = useRef<HTMLDivElement>(null);
//   const contentRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const updateDuration = () => {
//       if (!trackRef.current || !contentRef.current) return;

//       const contentWidth = contentRef.current.offsetWidth;
//       const baseSpeed = 40; // pixels per second - lower value for slower movement
//       const duration = contentWidth / baseSpeed;
//       const minDuration = 10;
//       const maxDuration = 40;
//       const finalDuration = Math.min(
//         Math.max(duration, minDuration),
//         maxDuration
//       );

//       // Adjustment factor for wider screens
//       const adjustmentFactor = window.innerWidth > 1400 ? 0.998 : 0.999;
//       trackRef.current.style.animationDuration = `${
//         finalDuration * adjustmentFactor
//       }s`;
//     };

//     // Update on mount
//     updateDuration();

//     // Update on resize and orientation change
//     window.addEventListener("resize", updateDuration);
//     window.addEventListener("orientationchange", updateDuration);

//     // Periodic updates to handle any dynamic content changes
//     const intervalId = setInterval(updateDuration, 5000);

//     // Cleanup
//     return () => {
//       window.removeEventListener("resize", updateDuration);
//       window.removeEventListener("orientationchange", updateDuration);
//       clearInterval(intervalId);
//     };
//   }, []);

//   // Create the image content
//   const createImageContent = () => {
//     return partners.map((partner, index) => (
//       <div
//         key={`partner-${index}`}
//         className="flex-shrink-0 w-32 h-24 mx-6 flex items-center justify-center bg-white rounded shadow"
//       >
//         <img
//           src={`/api/placeholder/100/80`}
//           alt={`Partner logo ${partner}`}
//           className="max-w-full max-h-full object-contain"
//         />
//         <span className="text-xs text-gray-500 absolute bottom-1">
//           {partner}
//         </span>
//       </div>
//     ));
//   };

//   return (
//     <div className="w-full">
//       {/* Marquee container */}
//       <div className="w-full h-24 overflow-hidden bg-white border-t border-b border-gray-200 relative">
//         {/* Track for animation */}
//         <div
//           ref={trackRef}
//           className="absolute flex h-full items-center"
//           style={{
//             animation: "marquee 20s linear infinite",
//             willChange: "transform",
//             transform: "translateX(0)",
//           }}
//         >
//           {/* First content section */}
//           <div ref={contentRef} className="flex h-full items-center">
//             {createImageContent()}
//           </div>

//           {/* Duplicate content section for seamless loop */}
//           <div className="flex h-full items-center">{createImageContent()}</div>
//         </div>
//       </div>

//       {/* CSS for animations */}
//       <style>{`
//         @keyframes marquee {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(calc(-50% - 2px));
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ImageMarquee;
