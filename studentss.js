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
            </tr>
        `).join('');

        studentListDiv.innerHTML = studentListHTML;
    }
});

function editStudent(index) {
    // Implement edit student functionality (in edit_student.html and edit_student.js)
}
