# Student Management System

An object oriented console-based Java application for managing student records, course information, and course enrollments.

## Features

### Student Management
- View all student records
- View individual student details
- Add new students (with name and date of birth)
- Update existing student information
- Delete student records

### Course Management
- View all course records
- View individual course details
- Add new courses
- Update course information
- Delete course records

### Enrollment Management
- Enroll students in courses
- Withdraw students from courses
- View all courses a student is enrolled in
- View all students enrolled in a course

## Project Structure

```
oop-student-management-system/
├── Main.java                    # Application entry point
├── app/
│   └── StudentManagementSystem.java  # Core application logic
├── models/
│   ├── BaseRecord.java          # Base class for records
│   ├── Student.java             # Student model
│   ├── Course.java              # Course model
│   └── Date.java                # Date utility class
├── database/
│   ├── StudentDatabase.java     # Student data persistence
│   └── CourseDatabase.java      # Course data persistence
├── ui/
│   └── ConsoleUI.java           # Console user interface
└── data/
    ├── students.txt             # Student data file
    └── courses.txt              # Course data file
```

## How to Run

1. Compile all Java files:
   ```
   javac Main.java
   ```

2. Run the application:
   ```
   java Main
   ```

## Data Persistence

Student and course data are stored in text files located in the `data/` directory. Changes made through the application are automatically saved to these files.
