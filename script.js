// 1. Select all necessary elements
const teacherBtn = document.getElementById('teacher-toggle-btn');
const dateInput = document.getElementById('routine-date');
const dayDisplay = document.querySelector('#day-info span');
const routineWrapper = document.getElementById('routine-wrapper');
const holidayMsg = document.getElementById('holiday-msg');
const checkbox = document.getElementById('checkbox');

// 2. Logic to Show/Hide Teacher Names
if(teacherBtn) {
    teacherBtn.addEventListener('click', () => {
        // Toggle class on body
        document.body.classList.toggle('show-teachers');

        // Change button text and color
        if (document.body.classList.contains('show-teachers')) {
            teacherBtn.textContent = 'Hide Teacher Names';
            teacherBtn.style.backgroundColor = '#d63031'; // Red color
        } else {
            teacherBtn.textContent = 'Show Teacher Names';
            teacherBtn.style.backgroundColor = ''; // Default color
        }
    });
}

// 3. Date and Holiday Logic
const today = new Date();
dateInput.value = today.toISOString().split('T')[0];

function checkRoutine() {
    const selectedDate = new Date(dateInput.value);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayName = days[selectedDate.getDay()];
    
    // Update day name display
    if(dayDisplay) dayDisplay.textContent = dayName;

    // Remove previous highlights
    document.querySelectorAll('.active-day').forEach(el => el.classList.remove('active-day'));

    // Check for Friday or Saturday (Weekend)
    if (dayName === 'Friday' || dayName === 'Saturday') {
        routineWrapper.style.display = 'none';
        holidayMsg.style.display = 'block';
        if(teacherBtn) teacherBtn.style.display = 'none'; // Hide button on holidays
    } else {
        routineWrapper.style.display = 'block';
        holidayMsg.style.display = 'none';
        if(teacherBtn) teacherBtn.style.display = 'block'; // Show button on class days

        // Highlight column and specific cells
        const shortDay = dayName.substring(0, 3); // Sun, Mon, etc.
        const header = document.getElementById(shortDay);
        
        if (header) {
            header.classList.add('active-day');
            // Highlight all cells for that day
            document.querySelectorAll(`td[data-day="${dayName}"]`).forEach(cell => {
                cell.classList.add('active-day');
            });
        }
    }
}

// Add event listeners
dateInput.addEventListener('change', checkRoutine);
window.onload = checkRoutine;

// 4. Dark Mode Logic
checkbox.addEventListener('change', () => {
    document.documentElement.setAttribute('data-theme', checkbox.checked ? 'dark' : 'light');
});