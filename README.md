# Mentora App

A mobile-first platform connecting students, parents, and mentors through structured lessons and learning sessions.

##  How to Run

### Prerequisites
- Node.js 18+
- Expo Go app on your phone (SDK 54)

### Steps

git clone https://github.com/Aman0-3-0Dixit/mentora_demo.git
cd mentora
npm install
npx expo start

Scan the QR code with your phone camera to open in Expo Go.


### Another easy alternative to run the app if you dont want to go through the steps mentioned above :- I have attached a qr of the app in the mail which is self hosted on my account. Just download expo go app in the mobile (if not installed) and then scan the qr provided in the mail and you will be able to run the app through expo go. Expo go is a sandbox environment for expo and react native projects to run and test apps while developing.


## Test Credentials

| Role    | Email               | Password |
| Parent  | parent@test.com     | 123456   |
| Student | student@test.com    | 123456   |
| Mentor  | mentor@test.com     | 123456   |

## Project Structure

src/
├── components/       # Reusable UI: Button, Input, Card
├── screens/
│   ├── auth/         # LoginScreen
│   ├── parent/       # ParentDashboard, CreateStudent
│   ├── student/      # StudentDashboard
│   ├── mentor/       # MentorDashboard
│   └── shared/       # LessonsList, LessonDetail, SessionDetail
├── navigation/       # Role-based navigators
├── data/             # Mock data (users, lessons, sessions)
├── types/            # TypeScript interfaces
└── context/          # AuthContext for global auth state


## Architecture Decisions

- **Role-based navigation**: Each role gets its own navigator stack, keeping flows isolated and scalable
- **Shared screens**: Lessons/Sessions screens are shared across Parent, Student and Mentor roles to avoid duplication
- **Mock data**: Local JSON used instead of an API to keep setup simple and focused on UI/UX
- **AuthContext**: Global auth state using React Context + AsyncStorage for session persistence
- **Reusable components**: Button, Input, Card components used consistently across all screens

## Features

- Login with role-based redirect
- Parent Dashboard — view and create students
- Student Dashboard — view subjects and sessions
- Mentor Dashboard — view assigned students
- Lessons → Sessions → Session Detail flow
- Loading states, empty states, error handling