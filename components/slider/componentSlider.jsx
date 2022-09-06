// import { useState } from 'react';
// import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
// export default function ComponentSlider({ slides }) {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const goToPrevious = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };
//   const goToNext = () => {
//     const isLastSlide = currentIndex === slides.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };
//   const goToSlide = (index) => {
//     setCurrentIndex(index);
//   };
//   return (
//     <div className="h-full relative">
//       <div
//         onClick={goToPrevious}
//         className="absolute top-[50%] transform translate-x-0 translate-y-[50%] left-[32px] text-white z-20 cursor-pointer"
//       >
//         <BiLeftArrow />
//       </div>
//       <div
//         onClick={goToNext}
//         className="absolute top-[50%] transform translate-x-0 translate-y-[50%] right-[32px] text-white z-20 cursor-pointer"
//       >
//         <BiRightArrow />
//       </div>
//       <div
//         style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
//         className="w-full h-full flex bg-center bg-cover bg-[#94949487] bg-blend-multiply"
//       >
//         <h1></h1>
//       </div>
//       <div className="flex justify-center mt-3">
//         {slides.map((slide, slideIndex) => (
//           <div
//             className={slideIndex === currentIndex ? 'active dot' : 'dot'}
//             key={slideIndex}
//             onClick={() => goToSlide(slideIndex)}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// }
