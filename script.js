// 1. Select Elements
const teacherBtn = document.getElementById('teacher-toggle-btn');
const dateInput = document.getElementById('routine-date');
const dayDisplay = document.querySelector('#day-info span');
const routineWrapper = document.getElementById('routine-wrapper');
const mobileView = document.getElementById('mobile-view');
const holidayMsg = document.getElementById('holiday-msg');
const checkbox = document.getElementById('checkbox');

// 2. Routine Database for Mobile View
const routineData = {
    "Sunday": [
        { time: "02:00 PM", sub: "BAN 0001", room: "Room: 106", teacher: "Most.Afshara Tasnim Ritu" }
    ],
    "Monday": [
        { time: "09:00 AM", sub: "EEE 1232 (Lab)", room: "Room: 130 DSCAL", teacher: "Ipshita Tasnim Raha" },
        { time: "10:30 AM", sub: "MAT 1241", room: "Room: 311", teacher: "Md.Mizanur Rahman" },
        { time: "02:00 PM", sub: "CSE 1201", room: "Room: 512", teacher: "Md.Muktar Hossain" }
    ],
    "Tuesday": [
        { time: "10:30 AM", sub: "EEE 1231", room: "Room: 314", teacher: "Ipshita Tasnim Raha" },
        { time: "03:30 PM", sub: "CSE 1203", room: "Room: 1013", teacher: "Sanjoy Kumar Chakravarty" }
    ],
    "Wednesday": [
        { time: "09:00 AM", sub: "CSE 1202 (Lab)", room: "Room: 129 SEL", teacher: "A.S.M Delwar Hossain & Md.Muktar Hossain" },
        { time: "02:00 PM", sub: "CSE 1201", room: "Room: 511", teacher: "Md.Muktar Hossain" },
        { time: "03:30 PM", sub: "EEE 1231", room: "Room: 812", teacher: "Ipshita Tasnim Raha" }
    ],
    "Thursday": [
        { time: "10:30 AM", sub: "MAT 1241", room: "Room: 313", teacher: "Md.Mizanur Rahman" },
        { time: "12:00 PM", sub: "BAN 0001", room: "Room: 106", teacher: "Most.Afshara Tasnim Ritu" },
        { time: "03:30 PM", sub: "CSE 1203", room: "Room: 1008", teacher: "Md.Muktar Hossain" }
    ]
};

// 3. Teacher Toggle Logic
if(teacherBtn) {
    teacherBtn.addEventListener('click', () => {
        document.body.classList.toggle('show-teachers');
        if (document.body.classList.contains('show-teachers')) {
            teacherBtn.textContent = 'Hide Teacher Names';
            teacherBtn.style.backgroundColor = '#d63031';
        } else {
            teacherBtn.textContent = 'Show Teacher Names';
            teacherBtn.style.backgroundColor = '';
        }
    });
}

// 4. Main Routine Function
const today = new Date();
dateInput.value = today.toISOString().split('T')[0];

function checkRoutine() {
    const selectedDate = new Date(dateInput.value);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayName = days[selectedDate.getDay()];
    
    if(dayDisplay) dayDisplay.textContent = dayName;

    // Reset Highlights
    document.querySelectorAll('.active-day').forEach(el => el.classList.remove('active-day'));

    // Holiday Check
    if (dayName === 'Friday' || dayName === 'Saturday') {
        routineWrapper.style.display = 'none';
        mobileView.style.display = 'none';
        holidayMsg.style.display = 'block';
        if(teacherBtn) teacherBtn.style.display = 'none';
    } else {
        holidayMsg.style.display = 'none';
        if(teacherBtn) teacherBtn.style.display = 'block';

        // Check Screen Size
        if (window.innerWidth > 576) {
            // DESKTOP VIEW
            routineWrapper.style.display = 'block';
            mobileView.style.display = 'none';
            
            const shortDay = dayName.substring(0, 3);
            const header = document.getElementById(shortDay);
            if (header) {
                header.classList.add('active-day');
                document.querySelectorAll(`td[data-day="${dayName}"]`).forEach(cell => {
                    cell.classList.add('active-day');
                });
            }
        } else {
            // MOBILE VIEW
            routineWrapper.style.display = 'none';
            mobileView.style.display = 'block';
            renderMobileRoutine(dayName);
        }
    }
}

// 5. Render Mobile Cards
function renderMobileRoutine(dayName) {
    mobileView.innerHTML = ''; 
    const classes = routineData[dayName];

    if (classes && classes.length > 0) {
        classes.forEach(item => {
            const card = document.createElement('div');
            card.className = 'class-card';
            card.innerHTML = `
                <span class="card-time">${item.time}</span>
                <div class="card-subject">${item.sub}</div>
                <div class="card-room">${item.room}</div>
                <div class="mobile-teacher">Teacher: ${item.teacher}</div>
            `;
            mobileView.appendChild(card);
        });
    } else {
        mobileView.innerHTML = '<p style="text-align:center; opacity:0.6;">No Classes Scheduled.</p>';
    }
}

// Event Listeners
dateInput.addEventListener('change', checkRoutine);
window.addEventListener('resize', checkRoutine); // Auto-switch on resize
window.onload = checkRoutine;

// Dark Mode
checkbox.addEventListener('change', () => {
    document.documentElement.setAttribute('data-theme', checkbox.checked ? 'dark' : 'light');
});