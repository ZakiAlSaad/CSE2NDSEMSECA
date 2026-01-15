// 1. Elements Selection
const teacherBtn = document.getElementById('teacher-toggle-btn');
const dateInput = document.getElementById('routine-date');
const dayDisplay = document.querySelector('#day-info span');
const routineWrapper = document.getElementById('routine-wrapper');
const mobileView = document.getElementById('mobile-view');
const holidayMsg = document.getElementById('holiday-msg');
const checkbox = document.getElementById('checkbox');
const sectionSelect = document.getElementById('section-select');
const headerTitle = document.getElementById('header-title');

// ==============================================================
//  FULL ROUTINE DATA (EXTRACTED FROM YOUR FILE)
// ==============================================================

const mobileData = {
    "A": {
        "Sunday": [{ time: "02:00 PM", sub: "BAN 0001", room: "106", teacher: "Most. Afshara Tasnim Ritu" }],
        "Monday": [
            { time: "09:00 AM", sub: "EEE 1232", room: "130 DSCAL", teacher: "Ipshita Tasnim Raha" },
            { time: "10:30 AM", sub: "MAT 1241", room: "311", teacher: "Md. Mizanur Rahman" },
            { time: "02:00 PM", sub: "CSE 1201", room: "512", teacher: "Md. Muktar Hossain" }
        ],
        "Tuesday": [
            { time: "10:30 AM", sub: "EEE 1231", room: "314", teacher: "Ipshita Tasnim Raha" },
            { time: "03:30 PM", sub: "CSE 1203", room: "1013", teacher: "Sanjoy Kumar Chakravarty" }
        ],
        "Wednesday": [
            { time: "09:00-12:00", sub: "CSE 1202 (Lab)", room: "129 SEL", teacher: "A.S.M Delwar & Md. Muktar" },
            { time: "02:00 PM", sub: "CSE 1201", room: "511", teacher: "Md. Muktar Hossain" },
            { time: "03:30 PM", sub: "EEE 1231", room: "812", teacher: "Ipshita Tasnim Raha" }
        ],
        "Thursday": [
            { time: "10:30 AM", sub: "MAT 1241", room: "313", teacher: "Md. Mizanur Rahman" },
            { time: "12:00 PM", sub: "BAN 0001", room: "106", teacher: "Most. Afshara Tasnim Ritu" },
            { time: "03:30 PM", sub: "CSE 1203", room: "1008", teacher: "Sanjoy Kumar Chakravarty" }
        ]
    },
    "B": {
        "Sunday": [
            { time: "09:00-12:00", sub: "CSE 1202 (Lab)", room: "128 BCL", teacher: "Md. Muktar & Tanver Ahmed" },
            { time: "02:00 PM", sub: "BAN 0001", room: "106", teacher: "Most. Afshara Tasnim Ritu" },
            { time: "03:30 PM", sub: "CSE 1203", room: "408", teacher: "Umme Rumman" }
        ],
        "Monday": [
            { time: "12:00 PM", sub: "CSE 1201", room: "411", teacher: "Md. Muktar Hossain" }
        ],
        "Tuesday": [
            { time: "10:30 AM", sub: "EEE 1231", room: "313", teacher: "Dr. Sinthia Shabnam Mou" },
            { time: "03:30 PM", sub: "CSE 1203", room: "814", teacher: "Umme Rumman" }
        ],
        "Wednesday": [
            { time: "10:30 AM", sub: "MAT 1241", room: "413", teacher: "Md. Mizanur Rahman" },
            { time: "12:00 PM", sub: "EEE 1232", room: "127 EEL", teacher: "Md. Adnan Sami & Pappu" },
            { time: "03:30 PM", sub: "EEE 1231", room: "514", teacher: "Dr. Sinthia Shabnam Mou" }
        ],
        "Thursday": [
            { time: "09:00 AM", sub: "MAT 1241", room: "311", teacher: "Md. Mizanur Rahman" },
            { time: "12:00 PM", sub: "BAN 0001", room: "106", teacher: "Most. Afshara Tasnim Ritu" },
            { time: "02:00 PM", sub: "CSE 1201", room: "1012", teacher: "Md. Muktar Hossain" }
        ]
    },
    "C": {
        "Sunday": [
            { time: "09:00 AM", sub: "EEE 1232", room: "127 EEL", teacher: "Ipshita Tasnim & Pappu" },
            { time: "12:00 PM", sub: "MAT 1241", room: "314", teacher: "Md. Mizanur Rahman" }
        ],
        "Monday": [
            { time: "09:00 AM", sub: "CSE 1201", room: "408", teacher: "Md. Muktar Hossain" },
            { time: "12:00 PM", sub: "MAT 1241", room: "413", teacher: "Md. Mizanur Rahman" },
            { time: "03:30 PM", sub: "BAN 0001", room: "106", teacher: "Most. Afshara Tasnim Ritu" }
        ],
        "Tuesday": [
            { time: "09:00 AM", sub: "BAN 0001", room: "106", teacher: "Most. Afshara Tasnim Ritu" },
            { time: "10:30 AM", sub: "CSE 1201", room: "512", teacher: "Md. Muktar Hossain" },
            { time: "02:00-05:00", sub: "CSE 1202 (Lab)", room: "128 BCL", teacher: "Mohammad Kasedullah & Muktar" }
        ],
        "Wednesday": [
            { time: "09:00 AM", sub: "EEE 1231", room: "414", teacher: "Ipshita Tasnim Raha" },
            { time: "10:30 PM", sub: "CSE 1203", room: "414", teacher: "Umme Rumman" }
        ],
        "Thursday": [
            { time: "09:00 AM", sub: "EEE 1231", room: "314", teacher: "Ipshita Tasnim Raha" },
            { time: "03:30 PM", sub: "CSE 1203", room: "414", teacher: "Umme Rumman" }
        ]
    },
    "D": {
        "Sunday": [
            { time: "09:00 AM", sub: "MAT 1241", room: "509", teacher: "Md. Mizanur Rahman" },
            { time: "02:00 PM", sub: "CSE 1201", room: "412", teacher: "Tanver Ahmed" },
            { time: "03:30 PM", sub: "EEE 1231", room: "413", teacher: "Ipshita Tasnim Raha" }
        ],
        "Monday": [
            { time: "09:00 AM", sub: "CSE 1203", room: "414", teacher: "Umme Rumman" },
            { time: "12:00 PM", sub: "CSE 1201", room: "314", teacher: "Tanver Ahmed" },
            { time: "03:30 PM", sub: "BAN 0001", room: "106", teacher: "Most. Afshara Tasnim Ritu" }
        ],
        "Tuesday": [
            { time: "09:00 AM", sub: "BAN 0001", room: "106", teacher: "Most. Afshara Tasnim Ritu" },
            { time: "12:00 PM", sub: "CSE 1203", room: "313", teacher: "Umme Rumman" },
            { time: "02:00 PM", sub: "EEE 1231", room: "412", teacher: "Ipshita Tasnim Raha" }
        ],
        "Wednesday": [
            { time: "10:30 AM", sub: "EEE 1232", room: "130 DSCAL", teacher: "Ipshita Tasnim & Pappu" }
        ],
        "Thursday": [
            { time: "09:00-12:00", sub: "CSE 1202 (Lab)", room: "128 BCL", teacher: "Md. Muktar & Tanver Ahmed" },
            { time: "02:00 PM", sub: "MAT 1241", room: "1011", teacher: "Md. Mizanur Rahman" }
        ]
    },
    "E": {
        "Sunday": [
            { time: "09:00 AM", sub: "MAT 1241", room: "408", teacher: "Anupoma Barman Shetu" },
            { time: "10:30 AM", sub: "BAN 0001", room: "106", teacher: "Most. Afshara Tasnim Ritu" }
        ],
        "Monday": [
            { time: "09:00 AM", sub: "CSE 1201", room: "509", teacher: "Tanver Ahmed" },
            { time: "12:00 PM", sub: "CSE 1203", room: "313", teacher: "Mst. Jannatul Ferdous" },
            { time: "02:00 PM", sub: "EEE 1231", room: "309", teacher: "Md. Adnan Sami" }
        ],
        "Tuesday": [
            { time: "10:30 AM", sub: "EEE 1231", room: "311", teacher: "Md. Adnan Sami" },
            { time: "03:30 PM", sub: "CSE 1203", room: "413", teacher: "Mst. Jannatul Ferdous" }
        ],
        "Wednesday": [
            { time: "09:00 AM", sub: "BAN 0001", room: "106", teacher: "Most. Afshara Tasnim Ritu" },
            { time: "10:30 AM", sub: "EEE 1232", room: "127 EEL", teacher: "Md. Adnan Sami & New Teacher" },
            { time: "02:00-05:00", sub: "CSE 1202 (Lab)", room: "106 DSAL", teacher: "Mohammad Kasedullah & Tanver" }
        ],
        "Thursday": [
            { time: "09:00 AM", sub: "BAN 0001", room: "106", teacher: "Most. Afshara Tasnim Ritu" },
            { time: "10:30 AM", sub: "MAT 1241", room: "509", teacher: "Anupoma Barman Shetu" }
        ]
    },
    "F": {
        "Sunday": [
            { time: "10:30 AM", sub: "BAN 0001", room: "106", teacher: "Most. Afshara Tasnim Ritu" },
            { time: "02:00 PM", sub: "MAT 1241", room: "1011", teacher: "Anupoma Barman Shetu" }
        ],
        "Monday": [
            { time: "09:00 AM", sub: "MAT 1241", room: "1013", teacher: "Anupoma Barman Shetu" },
            { time: "03:30 PM", sub: "CSE 1203", room: "511", teacher: "Mst. Jannatul Ferdous" }
        ],
        "Tuesday": [
            { time: "09:00 AM", sub: "EEE 1231", room: "313", teacher: "Md. Adnan Sami" },
            { time: "10:30 AM", sub: "CSE 1203", room: "412", teacher: "Mst. Jannatul Ferdous" },
            { time: "02:00 PM", sub: "EEE 1232", room: "130 DSCAL", teacher: "Md. Adnan Sami & New Teacher" },
            { time: "03:30 PM", sub: "CSE 1201", room: "408", teacher: "D. M. Asadijjaman" }
        ],
        "Wednesday": [
            { time: "03:30 PM", sub: "EEE 1231", room: "414", teacher: "Md. Adnan Sami" }
        ],
        "Thursday": [
            { time: "09:00 AM", sub: "BAN 0001", room: "106", teacher: "Most. Afshara Tasnim Ritu" },
            { time: "10:30 PM", sub: "CSE 1201", room: "411", teacher: "D. M. Asadijjaman" },
            { time: "02:00-05:00", sub: "CSE 1202 (Lab)", room: "129 SEL", teacher: "Tanver Ahmed & Kasedullah" }
        ]
    },
    "G": {
        "Sunday": [
            { time: "10:30 AM", sub: "MAT 1241", room: "1011", teacher: "Anupoma Barman Shetu" },
            { time: "12:00 PM", sub: "CSE 1203", room: "411", teacher: "Mst. Jannatul Ferdous" },
            { time: "03:30 PM", sub: "BAN 0001", room: "106", teacher: "Most. Afshara Tasnim Ritu" }
        ],
        "Monday": [
            { time: "09:00 AM", sub: "CSE 1201", room: "812", teacher: "MST. NAFIA ISLAM SHISHIR" },
            { time: "12:00 PM", sub: "EEE 1232", room: "127 EEL", teacher: "Zannatul Mifta & Adnan Sami" },
            { time: "02:00 PM", sub: "MAT 1241", room: "408", teacher: "Anupoma Barman Shetu" }
        ],
        "Tuesday": [
            { time: "10:30 AM", sub: "CSE 1201", room: "414", teacher: "MST. NAFIA ISLAM SHISHIR" },
            { time: "03:30 PM", sub: "EEE 1231", room: "412", teacher: "Zannatul Mifta" }
        ],
        "Wednesday": [
            { time: "09:00-12:00", sub: "CSE 1202 (Lab)", room: "128 BCL", teacher: "Md. Nour Nabi & Nafia Islam" },
            { time: "02:00 PM", sub: "EEE 1231", room: "411", teacher: "Zannatul Mifta" }
        ],
        "Thursday": [
            { time: "10:30 AM", sub: "CSE 1203", room: "314", teacher: "Mst. Jannatul Ferdous" },
            { time: "03:30 PM", sub: "BAN 0001", room: "106", teacher: "Most. Afshara Tasnim Ritu" }
        ]
    }
};

// ==============================================================
//  DYNAMIC RENDER LOGIC
// ==============================================================

// 3. Section Switch Logic
sectionSelect.addEventListener('change', (e) => {
    const section = e.target.value;
    headerTitle.textContent = `CSE 2nd Semester (Sec-${section})`;
    renderDesktopTable(section);
    checkRoutine();
});

// 4. Teacher Toggle Logic
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

// 5. Main Routine Function
const today = new Date();
dateInput.value = today.toISOString().split('T')[0];

function checkRoutine() {
    const selectedDate = new Date(dateInput.value);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayName = days[selectedDate.getDay()];
    const currentSec = sectionSelect.value;
    
    if(dayDisplay) dayDisplay.textContent = dayName;

    document.querySelectorAll('.active-day').forEach(el => el.classList.remove('active-day'));

    if (dayName === 'Friday' || dayName === 'Saturday') {
        routineWrapper.style.display = 'none';
        mobileView.style.display = 'none';
        holidayMsg.style.display = 'block';
        if(teacherBtn) teacherBtn.style.display = 'none';
    } else {
        holidayMsg.style.display = 'none';
        if(teacherBtn) teacherBtn.style.display = 'block';

        if (window.innerWidth > 576) {
            routineWrapper.style.display = 'block';
            mobileView.style.display = 'none';
            
            const shortDay = dayName.substring(0, 3);
            const header = document.getElementById(shortDay);
            if (header) {
                header.classList.add('active-day');
                const visibleBody = document.getElementById('routine-body-content');
                if(visibleBody) {
                    visibleBody.querySelectorAll(`td[data-day="${dayName}"]`).forEach(cell => {
                        cell.classList.add('active-day');
                    });
                }
            }
        } else {
            routineWrapper.style.display = 'none';
            mobileView.style.display = 'block';
            renderMobileRoutine(currentSec, dayName);
        }
    }
}

// 6. Helper: Get Slot Index from Time String
function getSlotIndex(timeStr) {
    if(timeStr.includes("09:00")) return 0;
    if(timeStr.includes("10:30")) return 1;
    if(timeStr.includes("12:00")) return 2;
    if(timeStr.includes("02:00")) return 3;
    if(timeStr.includes("03:30")) return 4;
    return -1;
}

// 7. Render Desktop Table Dynamically
function renderDesktopTable(section) {
    const tbody = document.getElementById('routine-body-content');
    tbody.innerHTML = ''; // Clear previous content

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'];
    const timeSlots = ["09:00 AM", "10:30 AM", "12:00 PM", "02:00 PM", "03:30 PM"];
    const sectionData = mobileData[section];

    // Create 5 rows for 5 time slots
    timeSlots.forEach((time, slotIndex) => {
        const tr = document.createElement('tr');
        
        // Time Column
        const timeTd = document.createElement('td');
        timeTd.className = 'time-slot';
        timeTd.textContent = time;
        tr.appendChild(timeTd);

        // Day Columns
        days.forEach(day => {
            const td = document.createElement('td');
            td.setAttribute('data-day', day);
            
            // Find class for this day and slot
            const daysClasses = sectionData[day];
            let classInfo = null;
            
            if(daysClasses) {
                classInfo = daysClasses.find(c => {
                    const cSlot = getSlotIndex(c.time);
                    // Special handling for Labs covering multiple slots
                    if (c.time.includes("-")) {
                        // Example: 09:00-12:00 covers slot 0 and 1
                        if (c.time.includes("09:00") && (slotIndex === 0 || slotIndex === 1)) return true;
                        if (c.time.includes("02:00") && (slotIndex === 3 || slotIndex === 4)) return true;
                    }
                    return cSlot === slotIndex;
                });
            }

            if (classInfo) {
                // Determine color class based on Subject
                let colorClass = 'subject-cell';
                if(classInfo.sub.includes("CSE")) colorClass += ' cse';
                if(classInfo.sub.includes("EEE")) colorClass += ' eee';
                if(classInfo.sub.includes("MAT")) colorClass += ' mat';
                if(classInfo.sub.includes("BAN")) colorClass += ' ban';
                if(classInfo.sub.includes("Lab")) colorClass += '-lab';

                // Handle Rowspan for Labs (Only insert cell for the first slot)
                if (classInfo.time.includes("-")) {
                    if (slotIndex === 0 || slotIndex === 3) {
                         td.rowSpan = 2; // Merge 2 rows
                         td.className = colorClass;
                         td.innerHTML = `${classInfo.sub} <br><small>Room: ${classInfo.room}</small><br><small class="teacher-name">${classInfo.teacher}</small>`;
                         tr.appendChild(td);
                    }
                    // If it's the second slot of a lab, don't append any td (merged)
                } else {
                    td.className = colorClass;
                    td.innerHTML = `${classInfo.sub} <br><small>Room: ${classInfo.room}</small><br><small class="teacher-name">${classInfo.teacher}</small>`;
                    tr.appendChild(td);
                }
            } else {
                td.textContent = "-";
                tr.appendChild(td);
            }
        });
        tbody.appendChild(tr);
    });
}

// 8. Mobile Render Function
function renderMobileRoutine(section, dayName) {
    mobileView.innerHTML = '';
    const sectionData = mobileData[section];
    
    if (!sectionData) {
        mobileView.innerHTML = '<p style="text-align:center;">No Data Available.</p>';
        return;
    }

    const classes = sectionData[dayName];
    if (classes && classes.length > 0) {
        classes.forEach(item => {
            const card = document.createElement('div');
            card.className = 'class-card';
            // Color strip
            if(item.sub.includes("Lab")) card.style.borderLeftColor = "#d35400"; 
            
            card.innerHTML = `
                <span class="card-time">Time: ${item.time}</span>
                <div class="card-subject">${item.sub}</div>
                <div class="card-room">Room: ${item.room}</div>
                <div class="mobile-teacher">Teacher: ${item.teacher}</div>
            `;
            mobileView.appendChild(card);
        });
    } else {
        mobileView.innerHTML = '<p style="text-align:center; padding:20px;">No Classes Found for Today!</p>';
    }
}

// Initial Load
renderDesktopTable("A"); // Default Load Section A
checkRoutine(); // Highlight & View Check

// Events
dateInput.addEventListener('change', checkRoutine);
window.addEventListener('resize', checkRoutine);

// Dark Mode
checkbox.addEventListener('change', () => {
    document.documentElement.setAttribute('data-theme', checkbox.checked ? 'dark' : 'light');
});