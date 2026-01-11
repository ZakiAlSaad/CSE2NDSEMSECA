const dateInput = document.getElementById('routine-date');
const dayDisplay = document.querySelector('#day-info span');

// ডিফল্ট আজকের তারিখ সেট করা
const today = new Date();
dateInput.value = today.toISOString().split('T')[0];

function updateHighlight() {
    const selectedDate = new Date(dateInput.value);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayName = days[selectedDate.getDay()];
    
    dayDisplay.textContent = dayName;

    // সব সেল থেকে আগের হাইলাইট রিমুভ করা
    document.querySelectorAll('.active-day').forEach(el => el.classList.remove('active-day'));

    // বর্তমান দিনের কলাম হাইলাইট করা
    const shortDay = dayName.substring(0, 3);
    const header = document.getElementById(shortDay);
    
    if (header) {
        header.classList.add('active-day');
        const cells = document.querySelectorAll(`td[data-day="${dayName}"]`);
        cells.forEach(cell => cell.classList.add('active-day'));
    }
}

dateInput.addEventListener('change', updateHighlight);
window.onload = updateHighlight;

// Dark Mode Toggle
const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', () => {
    document.documentElement.setAttribute('data-theme', checkbox.checked ? 'dark' : 'light');
});