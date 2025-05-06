class StudentRecord {
  constructor() {
    this.studentName = '';
    this.studentRollNumber = 0;
    this.studentMarks = 0.0;
  }

  inputStudentData() {
    this.studentName = prompt("Enter student's full name:");
    this.studentRollNumber = parseInt(prompt("Enter student's roll number:"), 10);
    this.studentMarks = parseFloat(prompt("Enter student's marks (out of 100):"));
  }

  showStudentDetails() {
    console.log(`Name: ${this.studentName}, Roll No.: ${this.studentRollNumber}, Score: ${this.studentMarks}/100`);
  }
}

// Main logic
console.log("Student Management System");
console.log("==========================");

const studentCount = parseInt(prompt("Enter total number of students to register:"), 10);
const studentList = [];

console.log("\nPlease provide student information:");
for (let i = 0; i < studentCount; i++) {
  console.log(`\nStudent ${i + 1} details:`);
  const student = new StudentRecord();
  student.inputStudentData();
  studentList.push(student);
}

console.log("\nRegistered Students Summary:");
studentList.forEach((student, index) => {
  console.log(`\nRecord ${index + 1}:`);
  student.showStudentDetails();
});

console.log("\nProgram execution completed successfully.");
