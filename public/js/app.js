// Sample data
const timetableData = {
    first: {
        A: {
            monday: [
                { time: "8:00 - 9:00", subject: "Mathematics", teacher: "-", room: "-" },
                { time: "9:00 - 10:00", subject: "English", teacher: "-", room: "-" },
                { time: "10:00 - 10:30", subject: "Break", teacher: "", room: "" },
                { time: "10:30 - 11:30", subject: "Science", teacher: "-", room: "-" },
                { time: "11:30 - 12:30", subject: "History", teacher: "-", room: "-" },
                { time: "12:30 - 1:30", subject: "Lunch", teacher: "", room: "" },
                { time: "1:30 - 2:30", subject: "Physical Education", teacher: "-", room: "-" }
            ],
            tuesday: [
                { time: "8:00 - 9:00", subject: "English", teacher: "-", room: "-" },
                { time: "9:00 - 10:00", subject: "Mathematics", teacher: "-", room: "-" },
                { time: "10:00 - 10:30", subject: "Break", teacher: "", room: "" },
                { time: "10:30 - 11:30", subject: "Geography", teacher: "-", room: "-" },
                { time: "11:30 - 12:30", subject: "Science", teacher: "-", room: "-" },
                { time: "12:30 - 1:30", subject: "Lunch", teacher: "", room: "" },
                { time: "1:30 - 2:30", subject: "Art", teacher: "-", room: "-" }
            ],
            wednesday: [
                { time: "8:00 - 9:00", subject: "Science", teacher: "-", room: "-" },
                { time: "9:00 - 10:00", subject: "Geography", teacher: "-", room: "-" },
                { time: "10:00 - 10:30", subject: "Break", teacher: "", room: "" },
                { time: "10:30 - 11:30", subject: "Mathematics", teacher: "-", room: "-" },
                { time: "11:30 - 12:30", subject: "English", teacher: "-", room: "-" },
                { time: "12:30 - 1:30", subject: "Lunch", teacher: "", room: "" },
                { time: "1:30 - 2:30", subject: "Computer Science", teacher: "-", room: "-" }
            ],
            thursday: [
                { time: "8:00 - 9:00", subject: "History", teacher: "-", room: "-" },
                { time: "9:00 - 10:00", subject: "Science", teacher: "-", room: "-" },
                { time: "10:00 - 10:30", subject: "Break", teacher: "", room: "" },
                { time: "10:30 - 11:30", subject: "English", teacher: "-", room: "-" },
                { time: "11:30 - 12:30", subject: "Mathematics", teacher: "-", room: "-" },
                { time: "12:30 - 1:30", subject: "Lunch", teacher: "", room: "" },
                { time: "1:30 - 2:30", subject: "Geography", teacher: "-", room: "-" }
            ],
            friday: [
                { time: "8:00 - 9:00", subject: "Physical Education", teacher: "-", room: "-" },
                { time: "9:00 - 10:00", subject: "Art", teacher: "-", room: "-"},
                { time: "10:00 - 10:30", subject: "Break", teacher: "", room: "" },
                { time: "10:30 - 11:30", subject: "Music", teacher: "-", room: "-" },
                { time: "11:30 - 12:30", subject: "Science", teacher: "-", room: "-" },
                { time: "12:30 - 1:30", subject: "Lunch", teacher: "", room: "" },
                { time: "1:30 - 2:30", subject: "Mathematics", teacher: "-", room: "-" }
            ],
            saturday: [
                { time: "8:00 - 9:00", subject: "English", teacher: "-", room: "-" },
                { time: "9:00 - 10:00", subject: "Mathematics", teacher: "-", room: "-" },
                { time: "10:00 - 10:30", subject: "Break", teacher: "", room: "" },
                { time: "10:30 - 11:30", subject: "Science", teacher: "-", room: "-" },
                { time: "11:30 - 12:30", subject: "History", teacher: "-", room: "-" }
            ]
        },
        B: {
            monday: [
                  { time: "8:00 - 9:00", subject: "English", teacher: "-", room: "-" },
                { time: "9:00 - 10:00", subject: "Mathematics", teacher: "-", room: "-" },
                { time: "10:00 - 10:30", subject: "Break", teacher: "", room: "" },
                { time: "10:30 - 11:30", subject: "Science", teacher: "-", room: "-" },
                { time: "11:30 - 12:30", subject: "History", teacher: "-", room: "-" }
            ],
            // Other days for First Year Div B...
        }
    },
    second: {
        A: {
            monday: [
                 { time: "8:00 - 9:00", subject: "English", teacher: "-", room: "-" },
                { time: "9:00 - 10:00", subject: "Mathematics", teacher: "-", room: "-" },
                { time: "10:00 - 10:30", subject: "Break", teacher: "", room: "" },
                { time: "10:30 - 11:30", subject: "Science", teacher: "-", room: "-" },
                { time: "11:30 - 12:30", subject: "History", teacher: "-", room: "-" }
            ],
            tuesday: [
                  { time: "8:00 - 9:00", subject: "English", teacher: "-", room: "-" },
                { time: "9:00 - 10:00", subject: "Mathematics", teacher: "-", room: "-" },
                { time: "10:00 - 10:30", subject: "Break", teacher: "", room: "" },
                { time: "10:30 - 11:30", subject: "Science", teacher: "-", room: "-" },
                { time: "11:30 - 12:30", subject: "History", teacher: "-", room: "-" }
            ],
            wednesday: [
                 { time: "8:00 - 9:00", subject: "English", teacher: "-", room: "-" },
                { time: "9:00 - 10:00", subject: "Mathematics", teacher: "-", room: "-" },
                { time: "10:00 - 10:30", subject: "Break", teacher: "", room: "" },
                { time: "10:30 - 11:30", subject: "Science", teacher: "-", room: "-" },
                { time: "11:30 - 12:30", subject: "History", teacher: "-", room: "-" }
            ],
            thursday: [
                 { time: "8:00 - 9:00", subject: "English", teacher: "-", room: "-" },
                { time: "9:00 - 10:00", subject: "Mathematics", teacher: "-", room: "-" },
                { time: "10:00 - 10:30", subject: "Break", teacher: "", room: "" },
                { time: "10:30 - 11:30", subject: "Science", teacher: "-", room: "-" },
                { time: "11:30 - 12:30", subject: "History", teacher: "-", room: "-" }
            ],
            friday: [
                  { time: "8:00 - 9:00", subject: "English", teacher: "-", room: "-" },
                { time: "9:00 - 10:00", subject: "Mathematics", teacher: "-", room: "-" },
                { time: "10:00 - 10:30", subject: "Break", teacher: "", room: "" },
                { time: "10:30 - 11:30", subject: "Science", teacher: "-", room: "-" },
                { time: "11:30 - 12:30", subject: "History", teacher: "-", room: "-" }
            ],
            saturday: [
                  { time: "8:00 - 9:00", subject: "English", teacher: "-", room: "-" },
                { time: "9:00 - 10:00", subject: "Mathematics", teacher: "-", room: "-" },
                { time: "10:00 - 10:30", subject: "Break", teacher: "", room: "" },
                { time: "10:30 - 11:30", subject: "Science", teacher: "-", room: "-" },
                { time: "11:30 - 12:30", subject: "History", teacher: "-", room: "-" }
            ]
        },
        B: {
            monday: [
                  { time: "8:00 - 9:00", subject: "English", teacher: "-", room: "-" },
                { time: "9:00 - 10:00", subject: "Mathematics", teacher: "-", room: "-" },
                { time: "10:00 - 10:30", subject: "Break", teacher: "", room: "" },
                { time: "10:30 - 11:30", subject: "Science", teacher: "-", room: "-" },
                { time: "11:30 - 12:30", subject: "History", teacher: "-", room: "-" }
            ],
            tuesday: [
                  { time: "8:00 - 9:00", subject: "English", teacher: "-", room: "-" },
                { time: "9:00 - 10:00", subject: "Mathematics", teacher: "-", room: "-" },
                { time: "10:00 - 10:30", subject: "Break", teacher: "", room: "" },
                { time: "10:30 - 11:30", subject: "Science", teacher: "-", room: "-" },
                { time: "11:30 - 12:30", subject: "History", teacher: "-", room: "-" }
            ],
            wednesday: [
                  { time: "8:00 - 9:00", subject: "English", teacher: "-", room: "-" },
                { time: "9:00 - 10:00", subject: "Mathematics", teacher: "-", room: "-" },
                { time: "10:00 - 10:30", subject: "Break", teacher: "", room: "" },
                { time: "10:30 - 11:30", subject: "Science", teacher: "-", room: "-" },
                { time: "11:30 - 12:30", subject: "History", teacher: "-", room: "-" }
            ],
            thursday: [
                  { time: "8:00 - 9:00", subject: "English", teacher: "-", room: "-" },
                { time: "9:00 - 10:00", subject: "Mathematics", teacher: "-", room: "-" },
                { time: "10:00 - 10:30", subject: "Break", teacher: "", room: "" },
                { time: "10:30 - 11:30", subject: "Science", teacher: "-", room: "-" },
                { time: "11:30 - 12:30", subject: "History", teacher: "-", room: "-" }
            ],
            friday: [
                  { time: "8:00 - 9:00", subject: "English", teacher: "-", room: "-" },
                { time: "9:00 - 10:00", subject: "Mathematics", teacher: "-", room: "-" },
                { time: "10:00 - 10:30", subject: "Break", teacher: "", room: "" },
                { time: "10:30 - 11:30", subject: "Science", teacher: "-", room: "-" },
                { time: "11:30 - 12:30", subject: "History", teacher: "-", room: "-" }
            ],
            saturday: [
                 { time: "8:00 - 9:00", subject: "English", teacher: "-", room: "-" },
                { time: "9:00 - 10:00", subject: "Mathematics", teacher: "-", room: "-" },
                { time: "10:00 - 10:30", subject: "Break", teacher: "", room: "" },
                { time: "10:30 - 11:30", subject: "Science", teacher: "-", room: "-" },
                { time: "11:30 - 12:30", subject: "History", teacher: "-", room: "-" }
            ]
        }
    },
    third: {
        A: {
            monday: [
                { time: "8:30 - 9:20", subject: "Blockchain", teacher: "RHK", room: "-" },
                { time: "9:20 - 10:10", subject: "Blockchain", teacher: "RHK", room: "-" },
                { time: "10:10 - 10:30", subject: "<b style='color:black;'>Break</b>", teacher: "", room: "" },
                { time: "10:30 - 11:20", subject: "Python", teacher: "NRB", room: "-" },
                { time: "11:20 - 12:10", subject: "JAVA-I", teacher: "NSB", room: "-" },
                
            ],
            tuesday: [
                { time: "8:30 - 9:20", subject: "OS-I", teacher: "GRJ", room: "-" },
                { time: "9:20 - 10:10", subject: "OS-I", teacher: "GRJ", room: "-" },
                { time: "10:10 - 10:30", subject: "<b style='color:black;'>Break</b>", teacher: "", room: "" },
                { time: "10:30 - 11:20", subject: "Data.Sci", teacher: "SSC", room: "-" },
                { time: "11:20 - 12:10", subject: "WT-I", teacher: "SSC", room: "-" },
            ],
            wednesday: [
                { time: "8:30 - 9:20", subject: "Python", teacher: "NRB", room: "-" },
                { time: "9:20 - 10:10", subject: "Python", teacher: "NRB", room: "-" },
                { time: "10:10 - 10:30", subject: "<b style='color:black;'>Break</b>", teacher: "", room: "" },
                { time: "10:30 - 11:20", subject: "Data.Sci", teacher: "SSC", room: "-" },
                { time: "11:20 - 12:10", subject: "Data.Sci", teacher: "SSC", room: "-" },
            ],
            thursday: [
                { time: "8:30 - 9:20", subject: "JAVA-I", teacher: "NSB", room: "-" },
                { time: "9:20 - 10:10", subject: "JAVA-I", teacher: "NSB", room: "-" },
                { time: "10:10 - 10:30", subject: "<b style='color:black;'>Break</b>", teacher: "", room: "" },
                { time: "10:30 - 11:20", subject: "OS-I", teacher: "GRJ", room: "-" },
                { time: "11:20 - 12:10", subject: "CN-II", teacher: "SRK", room: "-" },
            ],
            friday: [
                { time: "8:30 - 9:20", subject: "TCS", teacher: "DRS", room: "-" },
                { time: "9:20 - 10:10", subject: "TCS", teacher: "DRS", room: "-" },
                { time: "10:10 - 10:30", subject: "<b style='color:black;'>Break</b>", teacher: "", room: "" },
                { time: "10:30 - 11:20", subject: "WT-I", teacher: "SAK", room: "-" },
                { time: "11:20 - 12:10", subject: "WT-I", teacher: "SAK", room: "-" },
            ],
            saturday: [
               { time: "8:30 - 9:20", subject: "CN-II", teacher: "SRK", room: "-" },
                { time: "9:20 - 10:10", subject: "CN-II", teacher: "SRK", room: "-" },
                { time: "10:10 - 10:30", subject: "<b style='color:black;'>Break</b>", teacher: "", room: "" },
                { time: "10:30 - 11:20", subject: "Blockchain", teacher: "RHK", room: "-" },
                { time: "11:20 - 12:10", subject: "TCS", teacher: "DRS", room: "-" },
            ]
        },
        B: {
            monday: [
                { time: "8:30 - 9:20", subject: "Blockchain", teacher: "RHK", room: "-" },
                { time: "9:20 - 10:10", subject: "Blockchain", teacher: "RHK", room: "-" },
                { time: "10:10 - 10:30", subject: "<b style='color:black;'>Break</b>", teacher: "", room: "" },
                { time: "10:30 - 11:20", subject: "Python", teacher: "NRB", room: "-" },
                { time: "11:20 - 12:10", subject: "JAVA-I", teacher: "NSB", room: "-" },
            ],
            tuesday: [
                { time: "8:30 - 9:20", subject: "Blockchain", teacher: "RHK", room: "-" },
                { time: "9:20 - 10:10", subject: "Blockchain", teacher: "RHK", room: "-" },
               { time: "10:10 - 10:30", subject: "<b style='color:black;'>Break</b>", teacher: "", room: "" },
                { time: "10:30 - 11:20", subject: "Python", teacher: "NRB", room: "-" },
                { time: "11:20 - 12:10", subject: "JAVA-I", teacher: "NSB", room: "-" },
            ],
            wednesday: [
               { time: "8:30 - 9:20", subject: "Blockchain", teacher: "RHK", room: "-" },
                { time: "9:20 - 10:10", subject: "Blockchain", teacher: "RHK", room: "-" },
               { time: "10:10 - 10:30", subject: "<b style='color:black;'>Break</b>", teacher: "", room: "" },
                { time: "10:30 - 11:20", subject: "Python", teacher: "NRB", room: "-" },
                { time: "11:20 - 12:10", subject: "JAVA-I", teacher: "NSB", room: "-" },
            ],
            thursday: [
                { time: "8:30 - 9:20", subject: "Blockchain", teacher: "RHK", room: "-" },
                { time: "9:20 - 10:10", subject: "Blockchain", teacher: "RHK", room: "-" },
               { time: "10:10 - 10:30", subject: "<b style='color:black;'>Break</b>", teacher: "", room: "" },
                { time: "10:30 - 11:20", subject: "Python", teacher: "NRB", room: "-" },
                { time: "11:20 - 12:10", subject: "JAVA-I", teacher: "NSB", room: "-" },
            ],
            friday: [
                { time: "8:30 - 9:20", subject: "Blockchain", teacher: "RHK", room: "-" },
                { time: "9:20 - 10:10", subject: "Blockchain", teacher: "RHK", room: "-" },
               { time: "10:10 - 10:30", subject: "<b style='color:black;'>Break</b>", teacher: "", room: "" },
                { time: "10:30 - 11:20", subject: "Python", teacher: "NRB", room: "-" },
                { time: "11:20 - 12:10", subject: "JAVA-I", teacher: "NSB", room: "-" },
            ],
            saturday: [
                { time: "8:30 - 9:20", subject: "Blockchain", teacher: "RHK", room: "-" },
                { time: "9:20 - 10:10", subject: "Blockchain", teacher: "RHK", room: "-" },
                { time: "10:10 - 10:30", subject: "<b style='color:black;'>Break</b>", teacher: "", room: "" },
                { time: "10:30 - 11:20", subject: "Python", teacher: "NRB", room: "-" },
                { time: "11:20 - 12:10", subject: "JAVA-I", teacher: "NSB", room: "-" },
            ]
        }
    }
};

const teachersData = {
    math: [
        { name: "Ms.G.R.Jadhav", subject: "Operating System-I", email: "xyz@school.edu" },
        { name: "Mrs.S.R.Khadse", subject: "Computer Network-II", email: "xyz@school.edu" },
        { name: "Ms.S.A.Kadam", subject: "Web Technology-I", email: "xyz@school.edu" },
        { name: "Ms.N.S.Bagale", subject: "JAVA-I", email: "xyz@school.edu" },
        { name: "Ms.D.R.Shinde", subject: "TCS", email: "xyz@school.edu" },
        { name: "Ms.N.R.Barbhai", subject: "Python", email: "xyz@school.edu" },
        { name: "Ms.R.H.Kadam", subject: "Blockchain", email: "xyz@school.edu" },
    ],
    science: [
        { name: "Mr. Brown", subject: "Physics", email: "brown@school.edu" },
        { name: "Ms. White", subject: "Chemistry", email: "white@school.edu" },
        { name: "Mr. Black", subject: "Biology", email: "black@school.edu" }
    ],
    humanities: [
        { name: "Ms. Davis", subject: "English", email: "davis@school.edu" },
        { name: "Mr. Wilson", subject: "History", email: "wilson@school.edu" },
        { name: "Mrs. Adams", subject: "Geography", email: "adams@school.edu" }
    ]
};

// DOM Elements
const navItems = document.querySelectorAll('.nav-item');
const pages = document.querySelectorAll('.app-content');
const dayTabs = document.querySelectorAll('.day-tab');
const timetableContent = document.getElementById('timetable-content').querySelector('tbody');
const yearSelect = document.getElementById('year-select');
const divisionSelect = document.getElementById('division-select');
const mathTeachersList = document.getElementById('math-teachers-list');
const scienceTeachersList = document.getElementById('science-teachers-list');
const humanitiesTeachersList = document.getElementById('humanities-teachers-list');

// Modals
const feedbackModal = document.getElementById('feedback-modal');
const suggestionModal = document.getElementById('suggestion-modal');
const viewSuggestionsModal = document.getElementById('view-suggestions-modal');
const closeModalBtns = document.querySelectorAll('.close-modal');

// Buttons
const feedbackBtn = document.getElementById('give-feedback');
const makeSuggestionBtn = document.getElementById('make-suggestion');
const viewSuggestionsBtn = document.getElementById('view-suggestions');
const profileSettingsBtn = document.getElementById('profile-settings');
const notificationsBtn = document.getElementById('notifications');
const logoutBtn = document.getElementById('logout');

// Form elements
const anonymousCheckbox = document.getElementById('anonymous-checkbox');
const nameField = document.getElementById('name-field');
const suggestionAnonymousCheckbox = document.getElementById('suggestion-anonymous-checkbox');
const suggestionNameField = document.getElementById('suggestion-name-field');

// Current timetable view
let currentYear = '';
let currentDivision = '';
let currentDay = 'monday';

// Initialize the app
function initApp() {
    // Load teachers lists
    loadTeachers();
    
    // Set up event listeners
    setupEventListeners();
    
    // Initialize anonymous checkbox behavior
    toggleNameFieldVisibility();
    toggleSuggestionNameFieldVisibility();
}

// Load timetable based on current selections
function loadTimetable() {
    if (!currentYear || !currentDivision) {
        timetableContent.innerHTML = '<tr><td colspan="4" style="text-align: center; padding: 20px;">Please select year and division to view timetable</td></tr>';
        return;
    }

    const dayData = timetableData[currentYear][currentDivision][currentDay];
    let html = '';
    
    if (dayData && dayData.length > 0) {
        dayData.forEach(item => {
            html += `
                <tr>
                    <td class="time">${item.time}</td>
                    <td>${item.subject}</td>
                    <td>${item.teacher || '-'}</td>
                    <td>${item.room || '-'}</td>
                </tr>
            `;
        });
    } else {
        html = '<tr><td colspan="4" style="text-align: center; padding: 20px;">No classes scheduled for this day</td></tr>';
    }
    
    timetableContent.innerHTML = html;
}

// Load teachers lists
function loadTeachers() {
    let mathHtml = '';
    let scienceHtml = '';
    let humanitiesHtml = '';
    
    teachersData.math.forEach(teacher => {
        const initials = teacher.name.split(' ').map(n => n[0]).join('');
        
        mathHtml += `
            <div class="teacher-card">
                <div class="teacher-avatar">${initials}</div>
                <div class="teacher-info">
                    <div class="teacher-name">${teacher.name}</div>
                    <div class="teacher-subject">${teacher.subject}</div>
                    <div class="teacher-email">${teacher.email}</div>
                </div>
            </div>
        `;
    });
    
    teachersData.science.forEach(teacher => {
        const initials = teacher.name.split(' ').map(n => n[0]).join('');
        
        scienceHtml += `
            <div class="teacher-card">
                <div class="teacher-avatar">${initials}</div>
                <div class="teacher-info">
                    <div class="teacher-name">${teacher.name}</div>
                    <div class="teacher-subject">${teacher.subject}</div>
                    <div class="teacher-email">${teacher.email}</div>
                </div>
            </div>
        `;
    });
    
    teachersData.humanities.forEach(teacher => {
        const initials = teacher.name.split(' ').map(n => n[0]).join('');
        
        humanitiesHtml += `
            <div class="teacher-card">
                <div class="teacher-avatar">${initials}</div>
                <div class="teacher-info">
                    <div class="teacher-name">${teacher.name}</div>
                    <div class="teacher-subject">${teacher.subject}</div>
                    <div class="teacher-email">${teacher.email}</div>
                </div>
            </div>
        `;
    });
    
    mathTeachersList.innerHTML = mathHtml;
    scienceTeachersList.innerHTML = scienceHtml;
    humanitiesTeachersList.innerHTML = humanitiesHtml;
}

// Toggle name field visibility based on anonymous checkbox
function toggleNameFieldVisibility() {
    if (anonymousCheckbox.checked) {
        nameField.style.display = 'none';
    } else {
        nameField.style.display = 'block';
    }
}

// Toggle suggestion name field visibility
function toggleSuggestionNameFieldVisibility() {
    if (suggestionAnonymousCheckbox.checked) {
        suggestionNameField.style.display = 'none';
    } else {
        suggestionNameField.style.display = 'block';
    }
}

// Show modal
function showModal(modal) {
    modal.style.display = 'flex';
}

// Hide modal
function hideModal(modal) {
    modal.style.display = 'none';
}

// Set up all event listeners
function setupEventListeners() {
    // Navigation
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all nav items and pages
            navItems.forEach(nav => nav.classList.remove('active'));
            pages.forEach(page => page.classList.remove('active'));
            
            // Add active class to clicked nav item
            item.classList.add('active');
            
            // Show corresponding page
            const pageId = item.getAttribute('data-page');
            document.getElementById(pageId).classList.add('active');
        });
    });
    
    // Year and division selection
    yearSelect.addEventListener('change', (e) => {
        currentYear = e.target.value;
        loadTimetable();
    });
    
    divisionSelect.addEventListener('change', (e) => {
        currentDivision = e.target.value;
        loadTimetable();
    });
    
    // Day tabs in timetable
    dayTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            dayTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            currentDay = tab.getAttribute('data-day');
            loadTimetable();
        });
    });
    
    // Feedback modal
    feedbackBtn.addEventListener('click', () => {
        showModal(feedbackModal);
    });
    
    // Suggestion modal
    makeSuggestionBtn.addEventListener('click', () => {
        showModal(suggestionModal);
    });
    
    // View suggestions modal
    viewSuggestionsBtn.addEventListener('click', () => {
        showModal(viewSuggestionsModal);
    });
    
    // Profile settings
    profileSettingsBtn.addEventListener('click', () => {
        alert('Profile settings feature coming soon!');
    });
    
    // Notifications
    notificationsBtn.addEventListener('click', () => {
        alert('Notification preferences feature coming soon!');
    });
    
    // Logout
   // Update the logout event listener to this:
logoutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (confirm('Are you sure you want to logout?')) {
        // Clear all authentication data
        localStorage.removeItem('isLoggedIn');
        sessionStorage.removeItem('currentUser');
        
        // Redirect to login page
        window.location.href = 'login.html';
    }
});
    
    // Close modal buttons
    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal');
            hideModal(modal);
        });
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            hideModal(e.target);
        }
    });
    
    // Anonymous checkbox behavior
    anonymousCheckbox.addEventListener('change', toggleNameFieldVisibility);
    suggestionAnonymousCheckbox.addEventListener('change', toggleSuggestionNameFieldVisibility);
    
    // Handle form submission
    document.getElementById('feedback-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your feedback!');
        hideModal(feedbackModal);
        e.target.reset();
    });
    
    document.getElementById('suggestion-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your suggestion!');
        hideModal(suggestionModal);
        e.target.reset();
    });
    
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);
 // Carousel functionality
        document.addEventListener('DOMContentLoaded', function() {
            const carousel = document.querySelector('.carousel');
            const slides = document.querySelectorAll('.carousel-slide');
            const indicators = document.querySelectorAll('.carousel-indicator');
            const prevBtn = document.querySelector('.carousel-btn.prev');
            const nextBtn = document.querySelector('.carousel-btn.next');
            
            let currentIndex = 0;
            const slideCount = slides.length;
            
            function updateCarousel() {
                carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
                
                // Update indicators
                indicators.forEach((indicator, index) => {
                    if (index === currentIndex) {
                        indicator.classList.add('active');
                    } else {
                        indicator.classList.remove('active');
                    }
                });
            }
            
            function nextSlide() {
                currentIndex = (currentIndex + 1) % slideCount;
                updateCarousel();
            }
            
            function prevSlide() {
                currentIndex = (currentIndex - 1 + slideCount) % slideCount;
                updateCarousel();
            }
            
            // Button events
            nextBtn.addEventListener('click', nextSlide);
            prevBtn.addEventListener('click', prevSlide);
            
            // Indicator events
            indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', () => {
                    currentIndex = index;
                    updateCarousel();
                });
            });
            
            // Auto-advance every 5 seconds
            setInterval(nextSlide, 5000);
        });
        // Dynamic notice addition example
    function addNotice(title, content, teacher, date, attachments = []) {
        const container = document.querySelector('.notice-items-container');
        const notice = document.createElement('div');
        notice.className = 'notice-item';
        notice.innerHTML = `
            <div class="notice-header">
                <h4 class="notice-title">${title}</h4>
                <span class="notice-date">${date}</span>
            </div>
            <div class="notice-teacher">
                <i class="fas fa-user-tie"></i> ${teacher}
            </div>
            <div class="notice-content">${content}</div>
            <div class="notice-attachments">
                ${attachments.map(a => `
                    <a href="#" class="attachment ${a.type}">
                        <i class="fas fa-file-${a.type === 'pdf' ? 'pdf' : 'archive'}"></i> ${a.name}
                    </a>
                `).join('')}
            </div>
        `;
        container.prepend(notice);
    }

    // Example usage:
    // addNotice(
    //     "New Assignment", 
    //     "Complete chapter 5 exercises",
    //     "Dr. S.S. Chowhan",
    //     "Due: June 30",
    //     [{type: "pdf", name: "Assignment.pdf"}]
    // );