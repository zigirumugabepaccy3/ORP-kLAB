document.addEventListener('DOMContentLoaded', () => {
    const deletedListDiv = document.getElementById('deletedList');
    const trash = JSON.parse(localStorage.getItem('trash')) || [];

    if (trash.length === 0) {
        deletedListDiv.innerHTML = '<p>No deleted students found.</p>';
    } else {
        // Loop through deleted students and display them
        const deletedListHTML = trash.map((student, index) => `
            <div class="student">
                <h2>${student.name}</h2>
                <p>Email: ${student.email}</p>
                <p>Course: ${student.course}</p>
            </div>
        `).join('');

        deletedListDiv.innerHTML = deletedListHTML;
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const deletedListDiv = document.getElementById('deletedList');
    const trash = JSON.parse(localStorage.getItem('trash')) || [];

    if (trash.length === 0) {
        deletedListDiv.innerHTML = '<p>No deleted students found.</p>';
    } else {
        // Loop through deleted students and display them with a "Restore" button
        const deletedListHTML = trash.map((student, index) => `
            <div class="student">
                <h2>${student.name}</h2>
                <p>Email: ${student.email}</p>
                <p>Course: ${student.course}</p>
                <button onclick="restoreStudent(${index})">Restore</button>
            </div>
        `).join('');

        deletedListDiv.innerHTML = deletedListHTML;
    }
});

function restoreStudent(index) {
    const trash = JSON.parse(localStorage.getItem('trash')) || [];

    if (index >= 0 && index < trash.length) {
        // Get the student to restore
        const restoredStudent = trash.splice(index, 1)[0];

        // Update localStorage with the modified trash
        localStorage.setItem('trash', JSON.stringify(trash));

        // Move the restored student back to the list of registered students
        const students = JSON.parse(localStorage.getItem('students')) || [];
        students.push(restoredStudent);
        localStorage.setItem('students', JSON.stringify(students));

        // Reload the page to reflect the changes
        window.location.reload();
    }
}
const deletedPermanent = document.getElementById('permanentDelete');
deletedPermanent.addEventListener('click',()=>{
    localStorage.clear();
    alert("successfully deleted");
    window.reload();
    
})

