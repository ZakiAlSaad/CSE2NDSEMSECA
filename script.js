const dateInput = document.getElementById('routine-date');
const dayDisplay = document.querySelector('#day-info span');
const routineWrapper = document.getElementById('routine-wrapper');
const holidayMsg = document.getElementById('holiday-msg');

// ডিফল্ট আজকের তারিখ সেট করা
const today = new Date();
dateInput.value = today.toISOString().split('T')[0];

function checkRoutine() {
    const selectedDate = new Date(dateInput.value);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayName = days[selectedDate.getDay()];
    
    dayDisplay.textContent = dayName;

    // আগের হাইলাইট ক্লিয়ার করা
    document.querySelectorAll('.active-day').forEach(el => el.classList.remove('active-day'));

    // শুক্রবার বা শনিবার হলে রুটিন হাইড করে হলিডে বক্স দেখানো
    if (dayName === 'Friday' || dayName === 'Saturday') {
        routineWrapper.style.display = 'none';
        holidayMsg.style.display = 'block';
    } else {
        routineWrapper.style.display = 'block';
        holidayMsg.style.display = 'none';

        // বর্তমান দিনের কলাম হাইলাইট করা
        const shortDay = dayName.substring(0, 3);
        const header = document.getElementById(shortDay);
        if (header) {
            header.classList.add('active-day');
            document.querySelectorAll(`td[data-day="${dayName}"]`).forEach(cell => {
                cell.classList.add('active-day');
            });
        }
    }
}

dateInput.addEventListener('change', checkRoutine);
window.onload = checkRoutine;

// Dark Mode
const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', () => {
    document.documentElement.setAttribute('data-theme', checkbox.checked ? 'dark' : 'light');
});