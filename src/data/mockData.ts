import { User, Student, Lesson } from '../types';

export const USERS: User[] = [
  { userId: '1', name: 'Sarah Johnson', role: 'parent', email: 'parent@test.com', password: '123456' },
  { userId: '2', name: 'Alex Smith', role: 'student', email: 'student@test.com', password: '123456' },
  { userId: '3', name: 'Dr. Emily Clarke', role: 'mentor', email: 'mentor@test.com', password: '123456' },
];

// Mutable students array — acts as in-memory DB
export let STUDENTS: Student[] = [
  { id: 's1', name: 'Tom Johnson', email: 'tom@test.com', password: '', dateOfBirth: '2012-05-14', parentId: '1', mentorId: '3' },
  { id: 's2', name: 'Lisa Johnson', email: 'lisa@test.com', password: '', dateOfBirth: '2014-08-22', parentId: '1', mentorId: '3' },
  { id: 's3', name: 'Alex Smith', email: 'student@test.com', password: '', dateOfBirth: '2010-03-10', parentId: '1', mentorId: '3' },
];

export const addStudent = (student: Student) => {
  STUDENTS = [...STUDENTS, student];
};

export const getStudents = () => STUDENTS;

export const LESSONS: Lesson[] = [
  {
    id: 'l1',
    title: 'Mathematics',
    subject: 'math',
    sessions: [
      { id: 'ss1', topic: 'Algebra Basics', date: 'March 15, 2025', summary: 'Introduction to variables, expressions, and simple equations. Students learned to solve for x in linear equations.' },
      { id: 'ss2', topic: 'Geometry Fundamentals', date: 'March 22, 2025', summary: 'Covered basic shapes, area and perimeter calculations for squares, rectangles, and triangles.' },
      { id: 'ss3', topic: 'Fractions & Decimals', date: 'March 29, 2025', summary: 'Deep dive into converting between fractions and decimals, plus addition and subtraction of fractions.' },
    ],
  },
  {
    id: 'l2',
    title: 'Physics',
    subject: 'physics',
    sessions: [
      { id: 'ss4', topic: "Newton's Laws", date: 'April 1, 2025', summary: "Explored all three of Newton's laws of motion with real-world examples and simple experiments." },
      { id: 'ss5', topic: 'Energy & Work', date: 'April 8, 2025', summary: 'Understanding kinetic and potential energy, work done by forces, and conservation of energy.' },
    ],
  },
  {
    id: 'l3',
    title: 'English',
    subject: 'english',
    sessions: [
      { id: 'ss6', topic: 'Essay Writing', date: 'April 3, 2025', summary: 'Structure of a well-formed essay: introduction, body paragraphs, and conclusion. Practice writing thesis statements.' },
      { id: 'ss7', topic: 'Grammar & Punctuation', date: 'April 10, 2025', summary: 'Common grammar mistakes, correct use of commas, semicolons, and apostrophes.' },
      { id: 'ss8', topic: 'Reading Comprehension', date: 'April 17, 2025', summary: 'Strategies for analyzing text, identifying main ideas, and drawing inferences from passages.' },
    ],
  },
];