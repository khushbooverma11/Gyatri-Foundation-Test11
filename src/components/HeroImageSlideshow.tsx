import { useState, useEffect } from 'react';

// --- 1. Add your image imports here ---
// TODO: Make sure these image files exist in your `src/assets` folder.
import image1 from '@/assets/hero-education.jpg';
import image2 from '@/assets/hero-education2.jpg';
import image3 from '@/assets/hero-education3.jpg';
import image4 from '@/assets/hero-education4.jpg';

// --- 2. Define the data structure for teachers ---
interface TeacherInfo {
  image: string;
  name: string;
  qualification: string;
}

// --- 3. Create the array of teachers with their info ---
// TODO: Update with your actual teacher names and qualifications
const teachers: TeacherInfo[] = [
  { image: image2, name: 'Er Khushboo verma', qualification: 'BTech in Computer Science from NIT Allahabad' },
  { image: image3, name: 'Er Sandeep Singh', qualification: 'BTech in Electronics and Communication from NIT Allahabad' },
  { image: image4, name: 'Saurabh Singh', qualification: 'M.Tech in Computer Science' },
  { image: image1, name: 'Dr. Anjali Sharma', qualification: 'Ph.D. in Mathematics' },
  
];

const slideDuration = 4000; // 4 seconds per slide

const HeroImageSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teachers.length);
    }, slideDuration);

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-2xl shadow-2xl group">
      {/* This container holds the sliding images and text */}
      {teachers.map((teacher, index) => (
        <div
          key={index}
          className="absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out"
          style={{
            opacity: index === currentIndex ? 1 : 0,
          }}
        >
          <img src={teacher.image} alt={teacher.name} className="w-full h-full object-cover" />
          {/* Darker gradient for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          
          {/* Teacher's information */}
          <div className="absolute bottom-0 left-0 p-8 text-white">
            <h3 className="text-2xl font-bold tracking-tight">{teacher.name}</h3>
            <p className="text-lg text-white/90">{teacher.qualification}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroImageSlideshow;
