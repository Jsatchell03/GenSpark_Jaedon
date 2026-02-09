# Student Information Management System (Mini Project)

>This is a small Java project that utilizes the `StudentInformationManager` class to manage the data of up to 100 students. The data is periodically updated in the `students.txt` file. There is a console interface where users can view, add, update, and delete student records.

### Console Interface
```
--- Student Information Management System Console ---
1. Add Student Record
2. View All Student Records
3. Search For A Student Record
4. Update A Student Record
5. Delete A Student Record
6. Exit
Enter your selection to continue: 
```

### Persistent Data Storage
Simple coma seperated text file that the program reads line by line. On each operation, the file is updated, and the file is read at the beginning of the project.

### `StudentInformationManager` Class Design Choices
- Method Overloading
- Input validation is handled on the frontend
- File updated after every operation.