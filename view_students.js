document.addEventListener('DOMContentLoaded', () => {
    const studentListDiv = document.getElementById('studentList');
    const students = JSON.parse(localStorage.getItem('students')) || [];

    if (students.length === 0) {
        studentListDiv.innerHTML = '<p>No students registered yet.</p>';
    } else {
        // Loop through students and display them
        const studentListHTML = students.map((student, index) => `
            <tr>
                <td>${student.name}</td>
                <td>${student.email}</td>
                <td>${student.course}</td>
                <td><a href="edit_student.html?index=${index}">Edit</a>
                 <button onclick="deleteStudent(${index})">Delete</button> </td>
            </tr>
        `).join('');

        studentListDiv.innerHTML = studentListHTML;
    }
});
    function deleteStudent(index) {
        const students = JSON.parse(localStorage.getItem('students')) || [];
    
        if (index >= 0 && index < students.length) {
            // Remove the student at the specified index
            students.splice(index, 1);
    
            // Update localStorage with the modified student list
            localStorage.setItem('students', JSON.stringify(students));
    
            // Reload the page to reflect the changes
            window.location.reload();
        }
    }
    document.addEventListener('DOMContentLoaded', () => {
        // ... (previous code)
    
        const studentListHTML = students.map((student, index) => `
            <div class="student">
                <h2>${student.name}</h2>
                <p>Email: ${student.email}</p>
                <p>Course: ${student.course}</p>
                <button onclick="editStudent(${index})">Edit</button>
                <button onclick="deleteStudent(${index})">Delete</button>
            </div>
        `).join('');
    
        studentListDiv.innerHTML = studentListHTML;
    });
    
    function deleteStudent(index) {
        const students = JSON.parse(localStorage.getItem('students')) || [];
    
        if (index >= 0 && index < students.length) {
            // Get the student to delete
            const deletedStudent = students.splice(index, 1)[0];
    
            // Update localStorage with the modified student list
            localStorage.setItem('students', JSON.stringify(students));
    
            // Move the deleted student to the "Trash"
            const trash = JSON.parse(localStorage.getItem('trash')) || [];
            trash.push(deletedStudent);
            localStorage.setItem('trash', JSON.stringify(trash));
    
            // Reload the page to reflect the changes
            window.location.reload();
        }
    }
    
    
    
    // Implement edit student functionality (in edit_student.html and edit_student.js)

