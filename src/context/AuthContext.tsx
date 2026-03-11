import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { User, Student } from '../types';
import { USERS, getStudents, addStudent } from '../data/mockData';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  students: Student[];
  createStudent: (student: Student) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const STUDENTS_KEY = 'mentora_students';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [students, setStudents] = useState<Student[]>(getStudents());

  // On app start — load persisted user and any saved students
  useEffect(() => {
    const restore = async () => {
      try {
        const savedUser = await AsyncStorage.getItem('user');
        if (savedUser) setUser(JSON.parse(savedUser));

        const savedStudents = await AsyncStorage.getItem(STUDENTS_KEY);
        if (savedStudents) {
          const parsed: Student[] = JSON.parse(savedStudents);
          // Merge saved students into mockData without duplicates
          parsed.forEach(s => {
            const exists = getStudents().find(ms => ms.id === s.id);
            if (!exists) addStudent(s);
          });
          setStudents(getStudents());
        }
      } catch (e) {
        console.log('Restore error:', e);
      }
    };
    restore();
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    const found = USERS.find(
      u => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );
    if (found) {
      setUser(found);
      await AsyncStorage.setItem('user', JSON.stringify(found));
      return true;
    }
    return false;
  };

  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem('user');
  };

  const createStudent = async (student: Student) => {
    addStudent(student);
    const updated = getStudents();
    setStudents([...updated]);
    await AsyncStorage.setItem(STUDENTS_KEY, JSON.stringify(updated));
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, students, createStudent }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};