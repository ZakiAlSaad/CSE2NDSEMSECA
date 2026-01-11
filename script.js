// ১. সব প্রয়োজনীয় এলিমেন্ট সিলেক্ট করা
const teacherBtn = document.getElementById('teacher-toggle-btn');
const dateInput = document.getElementById('routine-date');
const dayDisplay = document.querySelector('#day-info span');
const routineWrapper = document.getElementById('routine-wrapper');
const holidayMsg = document.getElementById('holiday-msg');
const checkbox = document.getElementById('checkbox');

// ২. টিচার নাম শো/হাইড করার লজিক
if(teacherBtn) { // বাটনটি যদি HTML এ থাকে তবেই কাজ করবে
    teacherBtn.addEventListener('click', () => {
        // বডি ট্যাগে ক্লাস যোগ/রিমুভ করা
        document.body.classList.toggle('show-teachers');

        // বাটনের লেখা এবং কালার পরিবর্তন করা
        if (document.body.classList.contains('show-teachers')) {
            teacherBtn.textContent = 'Hide Teacher Names';
            teacherBtn.style.backgroundColor = '#d63031'; // লাল রঙ
        } else {
            teacherBtn.textContent = 'Show Teacher Names';
            teacherBtn.style.backgroundColor = ''; // ডিফল্ট কালার
        }
    });
}

// ৩. তারিখ এবং হলিডে লজিক
const today = new Date();
dateInput.value = today.toISOString().split('T')[0];

function checkRoutine() {
    const selectedDate = new Date(dateInput.value);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayName = days[selectedDate.getDay()];
    
    // দিনের নাম আপডেট করা
    if(dayDisplay) dayDisplay.textContent = dayName;

    // আগের হাইলাইট রিমুভ করা
    document.querySelectorAll('.active-day').forEach(el => el.classList.remove('active-day'));

    // শুক্রবার বা শনিবার চেক (ছুটির দিন)
    if (dayName === 'Friday' || dayName === 'Saturday') {
        routineWrapper.style.display = 'none';
        holidayMsg.style.display = 'block';
        if(teacherBtn) teacherBtn.style.display = 'none'; // ছুটির দিনে বাটন লুকিয়ে রাখা
    } else {
        routineWrapper.style.display = 'block';
        holidayMsg.style.display = 'none';
        if(teacherBtn) teacherBtn.style.display = 'block'; // ক্লাস ডে-তে বাটন দেখানো

        // কলাম এবং সেল হাইলাইট করা
        const shortDay = dayName.substring(0, 3); // Sun, Mon, etc.
        const header = document.getElementById(shortDay);
        
        if (header) {
            header.classList.add('active-day');
            // ওই দিনের সব ক্লাস সেল হাইলাইট করা
            document.querySelectorAll(`td[data-day="${dayName}"]`).forEach(cell => {
                cell.classList.add('active-day');
            });
        }
    }
}

// ইভেন্ট লিসেনার যোগ করা
dateInput.addEventListener('change', checkRoutine);
window.onload = checkRoutine; // পেজ লোড হলে চেক করবে

// ৪. ডার্ক মোড লজিক
checkbox.addEventListener('change', () => {
    document.documentElement.setAttribute('data-theme', checkbox.checked ? 'dark' : 'light');
});