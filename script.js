document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');

    registrationForm.addEventListener('submit', (e) => {
        e.preventDefault();

		alert("record added successful")

        // Get user input
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const course = document.getElementById('course').value;

        // Create a student object
        const student = {
            name,
            email,
            course,
        };

		console.log("here:"+student)
        // Store student data in localStorage
        const students = JSON.parse(localStorage.getItem('students')) || [];
        students.push(student);
		console.log(students)
        localStorage.setItem('students', JSON.stringify(students));

        // Clear form fields
        registrationForm.reset();
    });
});