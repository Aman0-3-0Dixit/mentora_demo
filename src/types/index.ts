export type Role = 'parent' | 'student' | 'mentor';

export interface User {
  userId: string;
  name: string;
  role: Role;
  email: string;
  password: string;
}

export interface Student {
  id: string;
  name: string;
  email: string;
  password: string;
  dateOfBirth: string;
  parentId: string;
  mentorId?: string;
}

export interface Session {
  id: string;
  topic: string;
  date: string;
  summary: string;
}

export interface Lesson {
  id: string;
  title: string;
  subject: string;
  sessions: Session[];
}