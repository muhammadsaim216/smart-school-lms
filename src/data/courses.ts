export interface Course {
  id: string;
  title: string;
  instructor: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  duration: string;
  students: number;
  rating: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  description: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  type: "video" | "text" | "quiz";
  completed: boolean;
}

export const courses: Course[] = [
  {
    id: "1",
    title: "Complete Business Strategy Masterclass",
    instructor: "Dr. Sarah Mitchell",
    category: "Business",
    price: 89,
    originalPrice: 149,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=60",
    duration: "24h",
    students: 12540,
    rating: 4.9,
    level: "Advanced",
    description: "Master the fundamentals of business strategy with real-world case studies.",
    lessons: [
      { id: "1-1", title: "Introduction to Strategy", duration: "15:00", type: "video", completed: true },
      { id: "1-2", title: "Market Analysis Framework", duration: "28:00", type: "video", completed: true },
      { id: "1-3", title: "Competitive Positioning", duration: "32:00", type: "video", completed: false },
      { id: "1-4", title: "Strategy Implementation", duration: "25:00", type: "video", completed: false },
      { id: "1-5", title: "Case Study: Tech Giants", duration: "45:00", type: "video", completed: false },
      { id: "1-6", title: "Module Quiz", duration: "20:00", type: "quiz", completed: false },
    ],
  },
  {
    id: "2",
    title: "Data Science Fundamentals with Python",
    instructor: "Prof. James Chen",
    category: "Technology",
    price: 79,
    originalPrice: 129,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
    duration: "32h",
    students: 8920,
    rating: 4.8,
    level: "Beginner",
    description: "Learn data science from scratch using Python and popular libraries.",
    lessons: [
      { id: "2-1", title: "Python Basics", duration: "20:00", type: "video", completed: false },
      { id: "2-2", title: "NumPy Fundamentals", duration: "35:00", type: "video", completed: false },
      { id: "2-3", title: "Pandas for Data Analysis", duration: "40:00", type: "video", completed: false },
      { id: "2-4", title: "Data Visualization", duration: "30:00", type: "video", completed: false },
    ],
  },
  {
    id: "3",
    title: "Digital Marketing Excellence",
    instructor: "Emma Rodriguez",
    category: "Marketing",
    price: 69,
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c1d5?w=800&auto=format&fit=crop&q=60",
    duration: "18h",
    students: 15230,
    rating: 4.7,
    level: "Intermediate",
    description: "Master digital marketing strategies for the modern business landscape.",
    lessons: [
      { id: "3-1", title: "Digital Marketing Overview", duration: "18:00", type: "video", completed: false },
      { id: "3-2", title: "SEO Fundamentals", duration: "42:00", type: "video", completed: false },
      { id: "3-3", title: "Social Media Strategy", duration: "35:00", type: "video", completed: false },
    ],
  },
  {
    id: "4",
    title: "Leadership & Management Essentials",
    instructor: "Michael Thompson",
    category: "Leadership",
    price: 99,
    originalPrice: 179,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=60",
    duration: "20h",
    students: 6780,
    rating: 4.9,
    level: "Intermediate",
    description: "Develop essential leadership skills for managing high-performing teams.",
    lessons: [
      { id: "4-1", title: "Leadership Foundations", duration: "22:00", type: "video", completed: false },
      { id: "4-2", title: "Team Dynamics", duration: "28:00", type: "video", completed: false },
    ],
  },
  {
    id: "5",
    title: "Financial Analysis & Modeling",
    instructor: "Dr. Robert Kim",
    category: "Finance",
    price: 119,
    originalPrice: 199,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop&q=60",
    duration: "28h",
    students: 4560,
    rating: 4.8,
    level: "Advanced",
    description: "Master financial modeling techniques used by top investment banks.",
    lessons: [
      { id: "5-1", title: "Financial Statement Analysis", duration: "35:00", type: "video", completed: false },
      { id: "5-2", title: "Valuation Methods", duration: "45:00", type: "video", completed: false },
    ],
  },
  {
    id: "6",
    title: "UX Design Principles",
    instructor: "Lisa Park",
    category: "Design",
    price: 59,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=60",
    duration: "16h",
    students: 9870,
    rating: 4.6,
    level: "Beginner",
    description: "Learn user experience design from industry experts at top tech companies.",
    lessons: [
      { id: "6-1", title: "UX Foundations", duration: "25:00", type: "video", completed: false },
      { id: "6-2", title: "User Research", duration: "30:00", type: "video", completed: false },
    ],
  },
];

export const enrolledCourses = [
  {
    ...courses[0],
    progress: 45,
    completedLessons: 2,
    totalLessons: 6,
    nextLesson: "Competitive Positioning",
  },
  {
    ...courses[1],
    progress: 0,
    completedLessons: 0,
    totalLessons: 4,
    nextLesson: "Python Basics",
  },
];

export const categories = [
  "All",
  "Business",
  "Technology",
  "Marketing",
  "Leadership",
  "Finance",
  "Design",
];
