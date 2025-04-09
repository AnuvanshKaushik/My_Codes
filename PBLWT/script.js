// Sample doctor data (in a real app, this would come from a database)
const doctors = [
    {
        id: 1,
        name: 'Dr. Sarah Johnson',
        specialty: 'Cardiologist',
        experience: '15 years',
        rating: 4.8,
        image: 'https://randomuser.me/api/portraits/women/64.jpg',
        availableDays: ['Monday', 'Wednesday', 'Friday'],
        about: "Dr. Sarah Johnson is a board-certified cardiologist with over 15 years of experience in diagnosing and treating heart diseases. She specializes in preventive cardiology, heart failure management, and cardiac rehabilitation. Dr. Johnson is known for her patient-centered approach and commitment to providing comprehensive cardiac care.",
        education: [
            { year: '2008', degree: 'Cardiology Fellowship', institution: 'Harvard Medical School' },
            { year: '2005', degree: 'Internal Medicine Residency', institution: 'Johns Hopkins Hospital' },
            { year: '2002', degree: 'Doctor of Medicine', institution: 'Stanford University' }
        ],
        specializations: [
            { name: 'Preventive Cardiology', description: 'Heart disease prevention and risk assessment' },
            { name: 'Interventional Cardiology', description: 'Catheter-based treatments for heart conditions' },
            { name: 'Heart Failure Management', description: 'Treatment of advanced heart failure' }
        ],
        hours: [
            { day: 'Monday', time: '9:00 AM - 4:00 PM' },
            { day: 'Wednesday', time: '10:00 AM - 6:00 PM' },
            { day: 'Friday', time: '9:00 AM - 3:00 PM' }
        ],
        reviews: [
            { name: 'John D.', date: '2023-10-15', rating: 5, text: 'Dr. Johnson is incredibly thorough and caring. She took the time to explain my condition in detail and answered all my questions.' },
            { name: 'Emily T.', date: '2023-08-22', rating: 4, text: 'Very professional and knowledgeable. The wait time was a bit long but the quality of care was worth it.' }
        ]
    },
    {
        id: 2,
        name: 'Dr. Michael Chen',
        specialty: 'Neurologist',
        experience: '12 years',
        rating: 4.9,
        image: 'https://randomuser.me/api/portraits/men/32.jpg',
        availableDays: ['Tuesday', 'Thursday', 'Saturday'],
        about: "Dr. Michael Chen is a highly skilled neurologist specializing in the diagnosis and treatment of disorders of the nervous system. With 12 years of experience, he has expertise in treating headaches, epilepsy, stroke, and neurodegenerative diseases. He is committed to providing personalized neurological care using the latest evidence-based approaches.",
        education: [
            { year: '2011', degree: 'Neurology Fellowship', institution: 'Mayo Clinic' },
            { year: '2008', degree: 'Neurology Residency', institution: 'UCLA Medical Center' },
            { year: '2004', degree: 'Doctor of Medicine', institution: 'Yale School of Medicine' }
        ],
        specializations: [
            { name: 'Headache Medicine', description: 'Diagnosis and treatment of complex headache disorders' },
            { name: 'Epilepsy Management', description: 'Comprehensive epilepsy care and seizure control' },
            { name: 'Neurodegenerative Disorders', description: 'Treatment of Alzheimer\'s, Parkinson\'s and related conditions' }
        ],
        hours: [
            { day: 'Tuesday', time: '8:00 AM - 5:00 PM' },
            { day: 'Thursday', time: '9:00 AM - 6:00 PM' },
            { day: 'Saturday', time: '10:00 AM - 2:00 PM' }
        ],
        reviews: [
            { name: 'Lisa R.', date: '2023-11-05', rating: 5, text: 'Dr. Chen is excellent! He listens carefully to symptoms and concerns, and his diagnosis was spot on. Highly recommended.' },
            { name: 'Robert J.', date: '2023-09-18', rating: 5, text: 'The best neurologist I\'ve ever seen. He takes his time with patients and explains everything clearly.' }
        ]
    },
    {
        id: 3,
        name: 'Dr. Emily Wilson',
        specialty: 'Pediatrician',
        experience: '8 years',
        rating: 4.7,
        image: 'https://randomuser.me/api/portraits/women/45.jpg',
        availableDays: ['Monday', 'Wednesday', 'Friday'],
        about: "Dr. Emily Wilson is a compassionate pediatrician dedicated to the health and well-being of children from birth through adolescence. With 8 years of experience, she provides comprehensive pediatric care including well-child visits, immunizations, and treatment of acute and chronic conditions. Dr. Wilson is known for her gentle approach with children and clear communication with parents.",
        education: [
            { year: '2015', degree: 'Pediatric Residency', institution: 'Children\'s Hospital of Philadelphia' },
            { year: '2012', degree: 'Doctor of Medicine', institution: 'University of Michigan' },
            { year: '2008', degree: 'Bachelor of Science in Biology', institution: 'Duke University' }
        ],
        specializations: [
            { name: 'Developmental Pediatrics', description: 'Assessment and management of developmental issues' },
            { name: 'Adolescent Medicine', description: 'Healthcare for teenagers and young adults' },
            { name: 'Pediatric Asthma', description: 'Management of childhood asthma and respiratory conditions' }
        ],
        hours: [
            { day: 'Monday', time: '8:30 AM - 4:30 PM' },
            { day: 'Wednesday', time: '10:00 AM - 6:00 PM' },
            { day: 'Friday', time: '9:00 AM - 5:00 PM' }
        ],
        reviews: [
            { name: 'Sarah M.', date: '2023-10-28', rating: 5, text: 'Dr. Wilson is amazing with my children. She makes them feel comfortable and addresses all our concerns.' },
            { name: 'David L.', date: '2023-07-15', rating: 4, text: 'Great pediatrician. Very knowledgeable and patient. The office can get busy sometimes.' }
        ]
    },
    {
        id: 4,
        name: 'Dr. James Rodriguez',
        specialty: 'Orthopedic Surgeon',
        experience: '18 years',
        rating: 4.8,
        image: 'https://randomuser.me/api/portraits/men/54.jpg',
        availableDays: ['Monday', 'Tuesday', 'Thursday'],
        about: "Dr. James Rodriguez is an accomplished orthopedic surgeon with 18 years of experience specializing in sports medicine, joint replacements, and minimally invasive surgical techniques. He has helped countless patients overcome musculoskeletal injuries and conditions, restoring their mobility and improving their quality of life.",
        education: [
            { year: '2005', degree: 'Orthopedic Surgery Fellowship', institution: 'Hospital for Special Surgery, NY' },
            { year: '2002', degree: 'Orthopedic Surgery Residency', institution: 'Massachusetts General Hospital' },
            { year: '1998', degree: 'Doctor of Medicine', institution: 'Columbia University' }
        ],
        specializations: [
            { name: 'Sports Medicine', description: 'Treatment of athletic injuries and performance optimization' },
            { name: 'Joint Replacement', description: 'Hip and knee replacement surgery' },
            { name: 'Arthroscopic Surgery', description: 'Minimally invasive procedures for joint problems' }
        ],
        hours: [
            { day: 'Monday', time: '7:30 AM - 3:30 PM' },
            { day: 'Tuesday', time: '9:00 AM - 5:00 PM' },
            { day: 'Thursday', time: '8:00 AM - 4:00 PM' }
        ],
        reviews: [
            { name: 'Michael P.', date: '2023-11-10', rating: 5, text: 'After my knee replacement, I\'m back to hiking pain-free. Dr. Rodriguez and his team provided exceptional care.' },
            { name: 'Jennifer K.', date: '2023-08-05', rating: 4, text: 'Very skilled surgeon. My shoulder arthroscopy went perfectly and recovery was faster than expected.' }
        ]
    },
    {
        id: 5,
        name: 'Dr. Priya Patel',
        specialty: 'Dermatologist',
        experience: '10 years',
        rating: 4.9,
        image: 'https://randomuser.me/api/portraits/women/26.jpg',
        availableDays: ['Wednesday', 'Thursday', 'Friday'],
        about: "Dr. Priya Patel is a board-certified dermatologist with 10 years of experience in medical, surgical, and cosmetic dermatology. She provides comprehensive care for conditions affecting the skin, hair, and nails, with special interest in skin cancer prevention and treatment, acne management, and anti-aging procedures.",
        education: [
            { year: '2013', degree: 'Dermatology Residency', institution: 'University of California, San Francisco' },
            { year: '2010', degree: 'Doctor of Medicine', institution: 'Northwestern University' },
            { year: '2006', degree: 'Bachelor of Science in Biochemistry', institution: 'University of Illinois' }
        ],
        specializations: [
            { name: 'Medical Dermatology', description: 'Treatment of conditions like acne, psoriasis, and eczema' },
            { name: 'Skin Cancer Screening', description: 'Early detection and treatment of skin cancers' },
            { name: 'Cosmetic Procedures', description: 'Botox, fillers, and laser treatments' }
        ],
        hours: [
            { day: 'Wednesday', time: '9:00 AM - 5:00 PM' },
            { day: 'Thursday', time: '10:00 AM - 6:00 PM' },
            { day: 'Friday', time: '8:00 AM - 4:00 PM' }
        ],
        reviews: [
            { name: 'Amanda S.', date: '2023-10-20', rating: 5, text: 'Dr. Patel is wonderful! She correctly diagnosed my skin condition when two other dermatologists couldn\'t.' },
            { name: 'Thomas R.', date: '2023-09-12', rating: 5, text: 'Excellent dermatologist. Very thorough skin exam and takes time to explain everything.' }
        ]
    },
    {
        id: 6,
        name: 'Dr. Robert Williams',
        specialty: 'Psychiatrist',
        experience: '14 years',
        rating: 4.6,
        image: 'https://randomuser.me/api/portraits/men/76.jpg',
        availableDays: ['Tuesday', 'Wednesday', 'Friday'],
        about: "Dr. Robert Williams is a compassionate psychiatrist with 14 years of experience in treating various mental health conditions. He specializes in mood disorders, anxiety, PTSD, and addiction psychiatry. Dr. Williams takes a holistic approach to mental health, combining medication management with therapeutic strategies to help his patients achieve optimal wellness.",
        education: [
            { year: '2009', degree: 'Psychiatry Residency', institution: 'Johns Hopkins Hospital' },
            { year: '2005', degree: 'Doctor of Medicine', institution: 'University of Pennsylvania' },
            { year: '2001', degree: 'Bachelor of Arts in Psychology', institution: 'Cornell University' }
        ],
        specializations: [
            { name: 'Mood Disorders', description: 'Treatment of depression and bipolar disorder' },
            { name: 'Anxiety Disorders', description: 'Management of anxiety, OCD, and panic disorder' },
            { name: 'Addiction Psychiatry', description: 'Treatment of substance use disorders' }
        ],
        hours: [
            { day: 'Tuesday', time: '11:00 AM - 7:00 PM' },
            { day: 'Wednesday', time: '9:00 AM - 5:00 PM' },
            { day: 'Friday', time: '10:00 AM - 4:00 PM' }
        ],
        reviews: [
            { name: 'Anonymous', date: '2023-11-08', rating: 5, text: 'Dr. Williams has helped me tremendously with my anxiety. He listens well and the medication he prescribed has been life-changing.' },
            { name: 'Anonymous', date: '2023-08-30', rating: 4, text: 'Very professional and knowledgeable. Creates a comfortable environment to discuss mental health issues.' }
        ]
    }
];

// Mock email service
const emailService = {
    sendEmail: (to, subject, body) => {
        // In a real app, this would send an actual email
        console.log(`Email sent to: ${to}`);
        console.log(`Subject: ${subject}`);
        console.log(`Body: ${body}`);
        
        // Store email in localStorage for demonstration
        const emails = JSON.parse(localStorage.getItem('emails')) || [];
        emails.push({
            to,
            subject,
            body,
            timestamp: new Date().toISOString()
        });
        localStorage.setItem('emails', JSON.stringify(emails));
        
        return true;
    }
};

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Safely get DOM Elements
    const doctorsList = document.getElementById('doctorsList');
    const appointmentForm = document.getElementById('appointmentForm');
    const bookingForm = document.getElementById('bookingForm');
    const doctorSearch = document.getElementById('doctorSearch');
    const specialtyFilter = document.getElementById('specialtyFilter');
    const appointmentsList = document.getElementById('appointmentsList');
    const findDoctorsBtn = document.getElementById('findDoctorsBtn');
    
    // Profile elements
    const profileName = document.getElementById('profileName');
    const profileEmail = document.getElementById('profileEmail');
    const profileNameInput = document.getElementById('fullName');
    const profileEmailInput = document.getElementById('email');
    const profilePhoneInput = document.getElementById('phoneNumber');
    const profileAddressInput = document.getElementById('address');
    const profileDobInput = document.getElementById('dateOfBirth');
    const profileGenderInput = document.getElementById('gender');
    const profileCityInput = document.getElementById('city');
    const profileZipInput = document.getElementById('zipCode');
    const updateProfileBtn = document.getElementById('updateProfileBtn');
    
    // Profile tabs functionality
    const profileMenu = document.querySelectorAll('.profile-menu li a');
    const profileSections = document.querySelectorAll('.profile-section-content');
    
    // New function for profile navigation
    function setupProfileTabs() {
        if (profileMenu.length === 0 || profileSections.length === 0) return;
        
        // Set first tab as active by default
        profileMenu[0].closest('li').classList.add('active');
        profileSections[0].classList.add('active');
        
        profileMenu.forEach(menuItem => {
            menuItem.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Get the target section from href attribute
                const targetSection = this.getAttribute('href').substring(1);
                
                // Remove active class from all menu items and sections
                profileMenu.forEach(item => item.closest('li').classList.remove('active'));
                profileSections.forEach(section => section.classList.remove('active'));
                
                // Add active class to clicked menu item and corresponding section
                this.closest('li').classList.add('active');
                document.getElementById(targetSection).classList.add('active');
            });
        });
    }

    // Display doctors with filtering
    function displayDoctors(searchTerm = '', specialty = '') {
        if (!doctorsList) return;
        
        doctorsList.innerHTML = '';
        
        const filteredDoctors = doctors.filter(doctor => {
            const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesSpecialty = !specialty || doctor.specialty === specialty;
            return matchesSearch && matchesSpecialty;
        });
        
        filteredDoctors.forEach(doctor => {
            const doctorCard = document.createElement('div');
            doctorCard.className = 'doctor-card';
            
            // Create doctor card content
            doctorCard.innerHTML = `
                <img src="${doctor.image}" alt="${doctor.name}" class="doctor-image">
                <div class="doctor-info">
                    <h3>${doctor.name}</h3>
                    <p class="specialty">${doctor.specialty}</p>
                    <p class="experience">Experience: ${doctor.experience}</p>
                    <div class="rating">
                        ${'★'.repeat(Math.floor(doctor.rating))}${'☆'.repeat(5 - Math.floor(doctor.rating))}
                        <span>(${doctor.rating})</span>
                    </div>
                    <p class="available-days">Available: ${doctor.availableDays.join(', ')}</p>
                    <button class="btn book-btn" data-doctor-id="${doctor.id}">Book Appointment</button>
                </div>
            `;
            
            doctorsList.appendChild(doctorCard);
            
            // Add click event listener to the whole card (except the button)
            doctorCard.addEventListener('click', (e) => {
                // Prevent redirection if clicking on the book button
                if (!e.target.classList.contains('book-btn') && !e.target.closest('.book-btn')) {
                    window.location.href = `doctor-info.html?id=${doctor.id}`;
                }
            });
        });
        
        // Add event listeners to book buttons
        document.querySelectorAll('.book-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent triggering the card's click event
                const doctorId = parseInt(e.target.dataset.doctorId);
                showAppointmentForm(doctorId);
            });
        });
    }

    // Show appointment form
    function showAppointmentForm(doctorId) {
        if (!appointmentForm || !bookingForm) return;
        
        const doctor = doctors.find(d => d.id === doctorId);
        if (!doctor) return;
        
        // Set minimum date to today
        const today = new Date().toISOString().split('T')[0];
        const dateInput = document.getElementById('appointmentDate');
        if (dateInput) {
            dateInput.min = today;
        }
        
        appointmentForm.classList.remove('hidden');
        window.scrollTo({
            top: appointmentForm.offsetTop - 100,
            behavior: 'smooth'
        });
        
        // Store selected doctor ID in form
        bookingForm.dataset.doctorId = doctorId;
    }

    // Display appointments
    function displayAppointments() {
        if (!appointmentsList) return;
        
        const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
        if (!currentUser) return;
        
        const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
        const userAppointments = appointments.filter(apt => apt.userId === currentUser.id);
        
        appointmentsList.innerHTML = '';
        
        if (userAppointments.length === 0) {
            appointmentsList.innerHTML = `
                <div class="no-appointments">
                    <i class="fas fa-calendar-times"></i>
                    <p>You have no appointments yet.</p>
                    <a href="doctors.html" class="btn">Find Doctors</a>
                </div>
            `;
            return;
        }
        
        userAppointments.forEach(appointment => {
            const doctor = doctors.find(d => d.id === appointment.doctorId);
            if (!doctor) return;
            
            const appointmentCard = document.createElement('div');
            appointmentCard.className = 'appointment-card';
            appointmentCard.innerHTML = `
                <div class="appointment-info">
                    <h3>${doctor.name}</h3>
                    <p>Date: ${appointment.date}</p>
                    <p>Time: ${appointment.time}</p>
                    <p>Reason: ${appointment.reason}</p>
                    <p class="status ${appointment.status}">Status: ${appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}</p>
                </div>
                <div class="appointment-actions">
                    <button class="btn cancel-btn" data-appointment-id="${appointment.id}">Cancel</button>
                    <button class="btn reschedule-btn" data-appointment-id="${appointment.id}">Reschedule</button>
                </div>
            `;
            
            appointmentsList.appendChild(appointmentCard);
        });
        
        // Add event listeners to appointment action buttons
        document.querySelectorAll('.cancel-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const appointmentId = parseInt(e.target.dataset.appointmentId);
                cancelAppointment(appointmentId);
            });
        });
        
        document.querySelectorAll('.reschedule-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const appointmentId = parseInt(e.target.dataset.appointmentId);
                rescheduleAppointment(appointmentId);
            });
        });
    }

    // Load and display user profile
    function loadProfile() {
        // Basic profile elements
        const profileName = document.getElementById('profileName');
        const profileEmail = document.getElementById('profileEmail');
        const profileNameSidebar = document.getElementById('profileNameSidebar');
        const profileEmailSidebar = document.getElementById('profileEmailSidebar');
        
        // Profile form inputs
        const profileNameInput = document.getElementById('fullName');
        const profileEmailInput = document.getElementById('email');
        const profilePhoneInput = document.getElementById('phoneNumber');
        const profileAddressInput = document.getElementById('address');
        const profileDobInput = document.getElementById('dateOfBirth');
        const profileGenderInput = document.getElementById('gender');
        const profileCityInput = document.getElementById('city');
        const profileZipInput = document.getElementById('zipCode');
        
        // Profile image
        const profileImageDisplay = document.querySelector('.profile-image img');
        const changePhotoBtn = document.querySelector('.change-photo-btn');
        
        // Profile stats
        const appointmentsCountElement = document.getElementById('appointmentsCount');
        const completedCountElement = document.getElementById('completedCount');
        
        // Check if we're on the profile page
        if (!profileNameInput && !profileEmailInput) return;
        
        const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
        if (!currentUser) {
            // Redirect to login if not logged in
            window.location.href = 'index.html';
            return;
        }
        
        // Load basic user info
        if (profileName) profileName.textContent = currentUser.name;
        if (profileEmail) profileEmail.textContent = currentUser.email;
        if (profileNameSidebar) profileNameSidebar.textContent = currentUser.name;
        if (profileEmailSidebar) profileEmailSidebar.textContent = currentUser.email;
        
        // Load form inputs with current user data
        if (profileNameInput) profileNameInput.value = currentUser.name;
        if (profileEmailInput) profileEmailInput.value = currentUser.email;
        
        // Load user profile data from localStorage
        const userProfile = JSON.parse(localStorage.getItem(`profile_${currentUser.id}`)) || {};
        
        // Fill in the form fields if they exist with user-specific data
        if (profilePhoneInput) profilePhoneInput.value = userProfile.phone || '';
        if (profileAddressInput) profileAddressInput.value = userProfile.address || '';
        if (profileDobInput) profileDobInput.value = userProfile.dob || '';
        if (profileGenderInput && userProfile.gender) profileGenderInput.value = userProfile.gender;
        if (profileCityInput) profileCityInput.value = userProfile.city || '';
        if (profileZipInput) profileZipInput.value = userProfile.zipCode || '';
        
        // Set profile image if available
        if (profileImageDisplay) {
            if (userProfile.profileImage) {
                profileImageDisplay.src = userProfile.profileImage;
            } else {
                // Default profile image based on user ID to ensure it's unique
                profileImageDisplay.src = `https://randomuser.me/api/portraits/${currentUser.gender === 'Female' ? 'women' : 'men'}/${currentUser.id % 99}.jpg`;
            }
        }
        
        // Set profile stats for the specific user
        const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
        const userAppointments = appointments.filter(apt => apt.userId === currentUser.id);
        const completedAppointments = userAppointments.filter(apt => apt.status === 'confirmed');
        
        if (appointmentsCountElement) appointmentsCountElement.textContent = userAppointments.length;
        if (completedCountElement) completedCountElement.textContent = completedAppointments.length;
        
        // Handle profile image change
        if (changePhotoBtn) {
            changePhotoBtn.addEventListener('click', function() {
                // Create a dropdown menu for choosing image options
                let imageMenu = document.querySelector('.profile-image-menu');
                
                // If menu already exists, remove it (toggle behavior)
                if (imageMenu) {
                    imageMenu.remove();
                    return;
                }
                
                // Create new menu
                imageMenu = document.createElement('div');
                imageMenu.className = 'profile-image-menu';
                imageMenu.innerHTML = `
                    <div class="image-option" data-type="camera">
                        <i class="fas fa-camera"></i>
                        <span>Use Camera</span>
                    </div>
                    <div class="image-option" data-type="random">
                        <i class="fas fa-random"></i>
                        <span>Random Avatar</span>
                    </div>
                    <div class="image-option" data-type="avatar1">
                        <i class="fas fa-user"></i>
                        <span>Professional</span>
                    </div>
                    <div class="image-option" data-type="avatar2">
                        <i class="fas fa-user"></i>
                        <span>Casual</span>
                    </div>
                    <div class="image-option" data-type="avatar3">
                        <i class="fas fa-user"></i>
                        <span>Formal</span>
                    </div>
                `;
                
                // Add styles directly to the menu for positioning
                imageMenu.style.position = 'absolute';
                imageMenu.style.bottom = '0';
                imageMenu.style.right = '0';
                imageMenu.style.backgroundColor = 'white';
                imageMenu.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
                imageMenu.style.borderRadius = '8px';
                imageMenu.style.zIndex = '100';
                imageMenu.style.overflow = 'hidden';
                
                // Position and show the menu
                const profileImageContainer = this.closest('.profile-image');
                profileImageContainer.style.position = 'relative';
                profileImageContainer.appendChild(imageMenu);
                
                // Style the options
                const imageOptions = imageMenu.querySelectorAll('.image-option');
                imageOptions.forEach(option => {
                    option.style.padding = '10px 15px';
                    option.style.cursor = 'pointer';
                    option.style.display = 'flex';
                    option.style.alignItems = 'center';
                    option.style.gap = '10px';
                    option.style.transition = 'background-color 0.2s';
                    
                    option.addEventListener('mouseover', function() {
                        this.style.backgroundColor = '#f0f8ff';
                    });
                    
                    option.addEventListener('mouseout', function() {
                        this.style.backgroundColor = 'white';
                    });
                    
                    // Add click event
                    option.addEventListener('click', function() {
                        const optionType = this.dataset.type;
                        const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
                        if (!currentUser) return;
                        
                        const userProfile = JSON.parse(localStorage.getItem(`profile_${currentUser.id}`)) || {};
                        const gender = userProfile.gender === 'Female' ? 'women' : 'men';
                        
                        if (optionType === 'camera') {
                            // Create camera UI elements
                            const cameraContainer = document.createElement('div');
                            cameraContainer.className = 'camera-container';
                            cameraContainer.style.position = 'fixed';
                            cameraContainer.style.top = '0';
                            cameraContainer.style.left = '0';
                            cameraContainer.style.width = '100%';
                            cameraContainer.style.height = '100%';
                            cameraContainer.style.backgroundColor = 'rgba(0,0,0,0.8)';
                            cameraContainer.style.zIndex = '1000';
                            cameraContainer.style.display = 'flex';
                            cameraContainer.style.flexDirection = 'column';
                            cameraContainer.style.alignItems = 'center';
                            cameraContainer.style.justifyContent = 'center';
                            
                            cameraContainer.innerHTML = `
                                <div style="position:relative; width:100%; max-width:640px; background:#000; border-radius:12px; overflow:hidden;">
                                    <video id="cameraFeed" style="width:100%; height:auto; display:block;" autoplay></video>
                                    <canvas id="photoCanvas" style="display:none;"></canvas>
                                    <div style="position:absolute; bottom:0; left:0; right:0; padding:15px; display:flex; justify-content:space-between; background:rgba(0,0,0,0.5);">
                                        <button id="closeCameraBtn" style="background:#f44336; color:white; border:none; padding:10px 20px; border-radius:4px; cursor:pointer;">
                                            <i class="fas fa-times"></i> Cancel
                                        </button>
                                        <button id="captureBtn" style="background:#4CAF50; color:white; border:none; padding:10px 20px; border-radius:4px; cursor:pointer;">
                                            <i class="fas fa-camera"></i> Take Photo
                                        </button>
                                    </div>
                                </div>
                                <div id="previewContainer" style="display:none; margin-top:20px; position:relative; width:100%; max-width:640px;">
                                    <img id="photoPreview" style="width:100%; border-radius:12px;" />
                                    <div style="position:absolute; bottom:0; left:0; right:0; padding:15px; display:flex; justify-content:space-between; background:rgba(0,0,0,0.5);">
                                        <button id="retakeBtn" style="background:#f44336; color:white; border:none; padding:10px 20px; border-radius:4px; cursor:pointer;">
                                            <i class="fas fa-redo"></i> Retake
                                        </button>
                                        <button id="confirmBtn" style="background:#4CAF50; color:white; border:none; padding:10px 20px; border-radius:4px; cursor:pointer;">
                                            <i class="fas fa-check"></i> Confirm
                                        </button>
                                    </div>
                                </div>
                            `;
                            
                            document.body.appendChild(cameraContainer);
                            
                            // Initialize camera
                            const video = document.getElementById('cameraFeed');
                            const canvas = document.getElementById('photoCanvas');
                            const preview = document.getElementById('photoPreview');
                            const previewContainer = document.getElementById('previewContainer');
                            const captureBtn = document.getElementById('captureBtn');
                            const closeCameraBtn = document.getElementById('closeCameraBtn');
                            const retakeBtn = document.getElementById('retakeBtn');
                            const confirmBtn = document.getElementById('confirmBtn');
                            
                            // Access camera
                            navigator.mediaDevices.getUserMedia({ video: true, audio: false })
                                .then(stream => {
                                    video.srcObject = stream;
                                    
                                    // Take photo
                                    captureBtn.addEventListener('click', function() {
                                        // Set canvas dimensions to match video
                                        canvas.width = video.videoWidth;
                                        canvas.height = video.videoHeight;
                                        
                                        // Draw the current video frame on the canvas
                                        const ctx = canvas.getContext('2d');
                                        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                                        
                                        // Convert canvas to image data
                                        const imgData = canvas.toDataURL('image/png');
                                        
                                        // Show preview
                                        preview.src = imgData;
                                        video.parentElement.style.display = 'none';
                                        previewContainer.style.display = 'block';
                                    });
                                    
                                    // Retake photo
                                    retakeBtn.addEventListener('click', function() {
                                        previewContainer.style.display = 'none';
                                        video.parentElement.style.display = 'block';
                                    });
                                    
                                    // Confirm photo
                                    confirmBtn.addEventListener('click', function() {
                                        // Update profile image
                                        if (profileImageDisplay) {
                                            profileImageDisplay.src = preview.src;
                                            
                                            // Save to localStorage for this specific user
                                            userProfile.profileImage = preview.src;
                                            localStorage.setItem(`profile_${currentUser.id}`, JSON.stringify(userProfile));
                                            
                                            // Show success notification
                                            const notification = document.createElement('div');
                                            notification.className = 'profile-image-notification';
                                            notification.textContent = 'Profile picture updated!';
                                            notification.style.position = 'absolute';
                                            notification.style.bottom = '-40px';
                                            notification.style.left = '50%';
                                            notification.style.transform = 'translateX(-50%)';
                                            notification.style.backgroundColor = '#4CAF50';
                                            notification.style.color = 'white';
                                            notification.style.padding = '5px 10px';
                                            notification.style.borderRadius = '4px';
                                            notification.style.fontSize = '14px';
                                            profileImageContainer.appendChild(notification);
                                            
                                            // Remove notification after 3 seconds
                                            setTimeout(() => {
                                                notification.remove();
                                            }, 3000);
                                        }
                                        
                                        // Stop the camera stream
                                        const tracks = video.srcObject.getTracks();
                                        tracks.forEach(track => track.stop());
                                        
                                        // Remove camera UI
                                        cameraContainer.remove();
                                    });
                                    
                                    // Close camera
                                    closeCameraBtn.addEventListener('click', function() {
                                        // Stop the camera stream
                                        const tracks = video.srcObject.getTracks();
                                        tracks.forEach(track => track.stop());
                                        
                                        // Remove camera UI
                                        cameraContainer.remove();
                                    });
                                })
                                .catch(err => {
                                    console.error('Error accessing camera:', err);
                                    alert('Could not access camera. Please allow camera access or try another option.');
                                    cameraContainer.remove();
                                });
                            
                        } else {
                            let newProfileImage;
                            
                            // Set image based on option selected
                            if (optionType === 'random') {
                                const randomNum = Math.floor(Math.random() * 70) + 1;
                                newProfileImage = `https://randomuser.me/api/portraits/${gender}/${randomNum}.jpg`;
                            } else if (optionType === 'avatar1') {
                                newProfileImage = `https://randomuser.me/api/portraits/${gender}/32.jpg`;
                            } else if (optionType === 'avatar2') {
                                newProfileImage = `https://randomuser.me/api/portraits/${gender}/44.jpg`;
                            } else if (optionType === 'avatar3') {
                                newProfileImage = `https://randomuser.me/api/portraits/${gender}/65.jpg`;
                            }
                            
                            // Update profile image
                            if (profileImageDisplay && newProfileImage) {
                                profileImageDisplay.src = newProfileImage;
                                
                                // Save to localStorage for this specific user
                                userProfile.profileImage = newProfileImage;
                                localStorage.setItem(`profile_${currentUser.id}`, JSON.stringify(userProfile));
                                
                                // Show success notification
                                const notification = document.createElement('div');
                                notification.className = 'profile-image-notification';
                                notification.textContent = 'Profile picture updated!';
                                notification.style.position = 'absolute';
                                notification.style.bottom = '-40px';
                                notification.style.left = '50%';
                                notification.style.transform = 'translateX(-50%)';
                                notification.style.backgroundColor = '#4CAF50';
                                notification.style.color = 'white';
                                notification.style.padding = '5px 10px';
                                notification.style.borderRadius = '4px';
                                notification.style.fontSize = '14px';
                                profileImageContainer.appendChild(notification);
                                
                                // Remove notification after 3 seconds
                                setTimeout(() => {
                                    notification.remove();
                                }, 3000);
                            }
                        }
                        
                        // Remove menu after selection
                        imageMenu.remove();
                    });
                });
                
                // Close menu when clicking outside
                document.addEventListener('click', function closeMenu(e) {
                    if (!e.target.closest('.profile-image-menu') && !e.target.closest('.change-photo-btn')) {
                        if (imageMenu.parentNode) {
                            imageMenu.remove();
                        }
                        document.removeEventListener('click', closeMenu);
                    }
                });
            });
        }
        
        // Setup medical history list for this user
        setupMedicalHistory(currentUser.id);
        
        // Setup notification list for this user
        setupNotifications(currentUser.id);
    }

    // Setup medical history list and functionality
    function setupMedicalHistory(userId) {
        // Get the medical list elements
        const allergiesList = document.getElementById('allergiesList');
        const conditionsList = document.getElementById('conditionsList');
        const medicationsList = document.getElementById('medicationsList');
        
        // Get the add item forms
        const addAllergiesForm = allergiesList ? allergiesList.nextElementSibling : null;
        const addConditionsForm = conditionsList ? conditionsList.nextElementSibling : null;
        const addMedicationsForm = medicationsList ? medicationsList.nextElementSibling : null;
        
        // If none of these elements exist, return early
        if (!allergiesList && !conditionsList && !medicationsList) return;
        
        // Load medical history from localStorage for this specific user
        const userProfile = JSON.parse(localStorage.getItem(`profile_${userId}`)) || {};
        
        // Initialize medical history categories if they don't exist
        if (!userProfile.allergies) userProfile.allergies = [];
        if (!userProfile.conditions) userProfile.conditions = [];
        if (!userProfile.medications) userProfile.medications = [];
        
        // Function to display allergies
        function displayAllergies() {
            if (!allergiesList) return;
            
            allergiesList.innerHTML = '';
            
            if (userProfile.allergies.length === 0) {
                allergiesList.innerHTML = '<li>No allergies recorded</li>';
                return;
            }
            
            userProfile.allergies.forEach((item, index) => {
                const li = document.createElement('li');
                li.innerHTML = `
                    ${item}
                    <button class="delete-item-btn" data-type="allergies" data-index="${index}">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                `;
                allergiesList.appendChild(li);
            });
        }
        
        // Function to display conditions
        function displayConditions() {
            if (!conditionsList) return;
            
            conditionsList.innerHTML = '';
            
            if (userProfile.conditions.length === 0) {
                conditionsList.innerHTML = '<li>No chronic conditions recorded</li>';
                return;
            }
            
            userProfile.conditions.forEach((item, index) => {
                const li = document.createElement('li');
                li.innerHTML = `
                    ${item}
                    <button class="delete-item-btn" data-type="conditions" data-index="${index}">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                `;
                conditionsList.appendChild(li);
            });
        }
        
        // Function to display medications
        function displayMedications() {
            if (!medicationsList) return;
            
            medicationsList.innerHTML = '';
            
            if (userProfile.medications.length === 0) {
                medicationsList.innerHTML = '<li>No medications recorded</li>';
                return;
            }
            
            userProfile.medications.forEach((item, index) => {
                const li = document.createElement('li');
                li.innerHTML = `
                    ${item}
                    <button class="delete-item-btn" data-type="medications" data-index="${index}">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                `;
                medicationsList.appendChild(li);
            });
        }
        
        // Display all medical history
        displayAllergies();
        displayConditions();
        displayMedications();
        
        // Setup delete buttons for all medical history items
        document.addEventListener('click', function(e) {
            if (e.target.closest('.delete-item-btn')) {
                const button = e.target.closest('.delete-item-btn');
                const type = button.dataset.type;
                const index = parseInt(button.dataset.index);
                
                // Remove the item from the appropriate array
                userProfile[type].splice(index, 1);
                
                // Save to localStorage
                localStorage.setItem(`profile_${userId}`, JSON.stringify(userProfile));
                
                // Update displays
                if (type === 'allergies') displayAllergies();
                else if (type === 'conditions') displayConditions();
                else if (type === 'medications') displayMedications();
            }
        });
        
        // Handle add allergies form
        if (addAllergiesForm) {
            addAllergiesForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const input = this.querySelector('input');
                const value = input.value.trim();
                
                if (!value) return;
                
                // Add item to allergies
                userProfile.allergies.push(value);
                
                // Save to localStorage
                localStorage.setItem(`profile_${userId}`, JSON.stringify(userProfile));
                
                // Update display and reset form
                displayAllergies();
                input.value = '';
            });
        }
        
        // Handle add conditions form
        if (addConditionsForm) {
            addConditionsForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const input = this.querySelector('input');
                const value = input.value.trim();
                
                if (!value) return;
                
                // Add item to conditions
                userProfile.conditions.push(value);
                
                // Save to localStorage
                localStorage.setItem(`profile_${userId}`, JSON.stringify(userProfile));
                
                // Update display and reset form
                displayConditions();
                input.value = '';
            });
        }
        
        // Handle add medications form
        if (addMedicationsForm) {
            addMedicationsForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const input = this.querySelector('input');
                const value = input.value.trim();
                
                if (!value) return;
                
                // Add item to medications
                userProfile.medications.push(value);
                
                // Save to localStorage
                localStorage.setItem(`profile_${userId}`, JSON.stringify(userProfile));
                
                // Update display and reset form
                displayMedications();
                input.value = '';
            });
        }
        
        // Setup medical history edit button
        const editMedicalHistoryBtn = document.getElementById('editMedicalHistoryBtn');
        if (editMedicalHistoryBtn) {
            editMedicalHistoryBtn.addEventListener('click', function() {
                const addItemForms = document.querySelectorAll('.add-item-form');
                const isEditing = this.textContent === 'Edit';
                
                addItemForms.forEach(form => {
                    form.style.display = isEditing ? 'flex' : 'none';
                });
                
                // Toggle button text
                this.textContent = isEditing ? 'Done' : 'Edit';
                
                // Toggle button style
                if (isEditing) {
                    this.classList.add('btn-secondary');
                } else {
                    this.classList.remove('btn-secondary');
                }
                
                // Show or hide delete buttons
                const deleteButtons = document.querySelectorAll('.delete-item-btn');
                deleteButtons.forEach(btn => {
                    btn.style.display = isEditing ? 'block' : 'none';
                });
            });
        }
    }

    // Setup notifications list and functionality
    function setupNotifications(userId) {
        const notificationsList = document.getElementById('notificationsList');
        
        if (!notificationsList) return;
        
        // Load notifications from localStorage for this specific user
        const notifications = JSON.parse(localStorage.getItem(`notifications_${userId}`)) || [];
        
        // Display notifications
        function displayNotifications() {
            notificationsList.innerHTML = '';
            
            if (notifications.length === 0) {
                notificationsList.innerHTML = `
                    <div class="empty-state">
                        <i class="fas fa-bell-slash"></i>
                        <p>No notifications</p>
                    </div>
                `;
                return;
            }
            
            notifications.forEach(notification => {
                const notificationItem = document.createElement('div');
                notificationItem.className = `notification-item${notification.read ? '' : ' unread'}`;
                notificationItem.innerHTML = `
                    <div class="notification-icon">
                        <i class="fas ${notification.icon}"></i>
                    </div>
                    <div class="notification-content">
                        <p class="notification-text">${notification.text}</p>
                        <span class="notification-time">${notification.time}</span>
                    </div>
                    <div class="notification-actions">
                        ${!notification.read ? `
                        <button class="mark-read-btn" data-id="${notification.id}">
                            <i class="fas fa-check"></i>
                        </button>
                        ` : ''}
                        <button class="delete-notification-btn" data-id="${notification.id}">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                `;
                
                notificationsList.appendChild(notificationItem);
            });
        }
        
        // Initial display
        displayNotifications();
        
        // Add event listeners for notification actions
        notificationsList.addEventListener('click', function(e) {
            // Handle mark as read button
            if (e.target.closest('.mark-read-btn')) {
                const button = e.target.closest('.mark-read-btn');
                const id = parseInt(button.dataset.id);
                const index = notifications.findIndex(n => n.id === id);
                
                if (index !== -1) {
                    notifications[index].read = true;
                    
                    // Save to localStorage for this specific user
                    localStorage.setItem(`notifications_${userId}`, JSON.stringify(notifications));
                    
                    // Update display
                    displayNotifications();
                }
            }
            
            // Handle delete notification button
            if (e.target.closest('.delete-notification-btn')) {
                const button = e.target.closest('.delete-notification-btn');
                const id = parseInt(button.dataset.id);
                const index = notifications.findIndex(n => n.id === id);
                
                if (index !== -1) {
                    notifications.splice(index, 1);
                    
                    // Save to localStorage for this specific user
                    localStorage.setItem(`notifications_${userId}`, JSON.stringify(notifications));
                    
                    // Update display
                    displayNotifications();
                }
            }
        });
        
        // Handle notification settings checkboxes
        const notificationCheckboxes = document.querySelectorAll('.notification-settings input[type="checkbox"]');
        if (notificationCheckboxes.length > 0) {
            // Load notification settings for this user
            const userProfile = JSON.parse(localStorage.getItem(`profile_${userId}`)) || {};
            if (!userProfile.notificationSettings) {
                userProfile.notificationSettings = {
                    push: true,
                    sms: true,
                    email: true
                };
                
                // Save default settings
                localStorage.setItem(`profile_${userId}`, JSON.stringify(userProfile));
            }
            
            // Set checkboxes based on user settings
            notificationCheckboxes.forEach(checkbox => {
                const type = checkbox.id.replace('notification-', '');
                if (userProfile.notificationSettings[type] !== undefined) {
                    checkbox.checked = userProfile.notificationSettings[type];
                }
                
                // Add change event listeners
                checkbox.addEventListener('change', function() {
                    userProfile.notificationSettings[type] = this.checked;
                    localStorage.setItem(`profile_${userId}`, JSON.stringify(userProfile));
                });
            });
        }
    }

    // Event Listeners - only add if elements exist
    // Search and filter doctors
    if (doctorSearch) {
        doctorSearch.addEventListener('input', () => {
            displayDoctors(doctorSearch.value, specialtyFilter ? specialtyFilter.value : '');
        });
    }

    if (specialtyFilter) {
        specialtyFilter.addEventListener('change', () => {
            displayDoctors(doctorSearch ? doctorSearch.value : '', specialtyFilter.value);
        });
    }

    // Find Doctors button
    if (findDoctorsBtn) {
        findDoctorsBtn.addEventListener('click', () => {
            window.location.href = 'doctors.html';
        });
    }

    // Handle appointment booking
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const doctorId = parseInt(bookingForm.dataset.doctorId);
            const dateInput = document.getElementById('appointmentDate');
            const timeInput = document.getElementById('appointmentTime');
            const reasonInput = document.getElementById('visitReason');
            
            if (!dateInput || !timeInput || !reasonInput) return;
            
            const date = dateInput.value;
            const time = timeInput.value;
            const reason = reasonInput.value;
            
            // Get current user
            const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
            if (!currentUser) {
                alert('Please login to book an appointment');
                window.location.href = 'login.html';
                return;
            }
            
            // Create appointment object
            const appointment = {
                id: Date.now(),
                doctorId,
                userId: currentUser.id,
                date,
                time,
                reason,
                status: 'pending'
            };
            
            // Store appointment
            let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
            appointments.push(appointment);
            localStorage.setItem('appointments', JSON.stringify(appointments));
            
            // Send email notification
            const doctor = doctors.find(d => d.id === doctorId);
            const emailSubject = 'Appointment Confirmation - MediCare';
            const emailBody = `
                Dear ${currentUser.name},
                
                Your appointment has been successfully booked!
                
                Appointment Details:
                Doctor: ${doctor.name}
                Date: ${date}
                Time: ${time}
                Reason: ${reason}
                
                Thank you for choosing MediCare.
                
                Best regards,
                MediCare Team
            `;
            
            emailService.sendEmail(currentUser.email, emailSubject, emailBody);
            
            // Show success message
            alert('Appointment booked successfully! Check your email for confirmation.');
            
            // Reset form and hide it
            bookingForm.reset();
            if (appointmentForm) appointmentForm.classList.add('hidden');
            
            // Update appointments list
            displayAppointments();
            
            // Redirect to appointments page
            window.location.href = 'appointments.html';
        });
    }

    // Update profile
    if (updateProfileBtn) {
        updateProfileBtn.addEventListener('click', () => {
            const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
            if (!currentUser) return;
            
            // Get profile data
            const phone = profilePhoneInput ? profilePhoneInput.value : '';
            const address = profileAddressInput ? profileAddressInput.value : '';
            
            // Save profile data
            const profileData = {
                phone,
                address
            };
            
            localStorage.setItem(`profile_${currentUser.id}`, JSON.stringify(profileData));
            
            alert('Profile updated successfully!');
        });
    }

    // Function to cancel appointment
    function cancelAppointment(appointmentId) {
        let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
        const index = appointments.findIndex(apt => apt.id === appointmentId);
        
        if (index === -1) return;
        
        if (confirm('Are you sure you want to cancel this appointment?')) {
            appointments[index].status = 'cancelled';
            localStorage.setItem('appointments', JSON.stringify(appointments));
            displayAppointments();
        }
    }

    // Function to reschedule appointment
    function rescheduleAppointment(appointmentId) {
        // In a real app, this would show a reschedule form
        alert('Reschedule functionality would be implemented here.');
    }

    // Load doctor details for the doctor-info.html page
    function loadDoctorProfile() {
        const doctorProfile = document.getElementById('doctorProfile');
        if (!doctorProfile) return;

        // Get doctor ID from URL query parameter
        const urlParams = new URLSearchParams(window.location.search);
        const doctorId = parseInt(urlParams.get('id'));

        if (!doctorId) {
            doctorProfile.innerHTML = `
                <div class="error-message">
                    <i class="fas fa-exclamation-circle"></i>
                    <p>Doctor information not found. Please go back and try again.</p>
                    <a href="doctors.html" class="btn">Back to Doctors</a>
                </div>
            `;
            return;
        }

        // Find the doctor in our data
        const doctor = doctors.find(doc => doc.id === doctorId);
        if (!doctor) {
            doctorProfile.innerHTML = `
                <div class="error-message">
                    <i class="fas fa-exclamation-circle"></i>
                    <p>Doctor with ID ${doctorId} not found. Please go back and try again.</p>
                    <a href="doctors.html" class="btn">Back to Doctors</a>
                </div>
            `;
            return;
        }

        // Build the doctor profile HTML
        doctorProfile.innerHTML = `
            <div class="doctor-header">
                <img src="${doctor.image}" alt="${doctor.name}" class="doctor-avatar">
                <div class="doctor-info">
                    <h1>${doctor.name}</h1>
                    <span class="doctor-specialty">${doctor.specialty}</span>
                    <div class="doctor-stats">
                        <div class="doctor-stat">
                            <i class="fas fa-briefcase"></i>
                            <span>${doctor.experience} Experience</span>
                        </div>
                        <div class="doctor-stat">
                            <i class="fas fa-star"></i>
                            <span>${doctor.rating} Rating</span>
                        </div>
                        <div class="doctor-stat">
                            <i class="fas fa-calendar-check"></i>
                            <span>${doctor.availableDays.length} Available Days</span>
                        </div>
                    </div>
                    <div class="doctor-actions">
                        <button class="btn btn-primary book-appointment-btn" data-doctor-id="${doctor.id}">Book Appointment</button>
                    </div>
                </div>
            </div>
            <div class="doctor-content">
                <div class="doctor-about">
                    <h2>About</h2>
                    <p>${doctor.about}</p>
                    
                    <div class="doctor-education">
                        <h3>Education & Training</h3>
                        ${doctor.education.map(edu => `
                            <div class="education-item">
                                <div class="education-year">${edu.year}</div>
                                <div class="education-degree">${edu.degree}</div>
                                <div class="education-institution">${edu.institution}</div>
                            </div>
                        `).join('')}
                    </div>
                    
                    <div class="doctor-specializations">
                        <h3>Specializations</h3>
                        ${doctor.specializations.map(spec => `
                            <div class="specialization-item">
                                <div class="specialization-name">${spec.name}</div>
                                <div class="specialization-description">${spec.description}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="doctor-schedule">
                    <h2>Schedule</h2>
                    <div class="schedule-days">
                        ${['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => `
                            <div class="schedule-day ${doctor.availableDays.includes(day) ? 'available' : 'unavailable'}">
                                ${day}
                            </div>
                        `).join('')}
                    </div>
                    
                    <div class="schedule-hours">
                        <h3>Working Hours</h3>
                        <ul class="hours-list">
                            ${doctor.hours.map(hour => `
                                <li>
                                    <span>${hour.day}</span>
                                    <span>${hour.time}</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
            </div>
            <div class="reviews-section">
                <h2>Patient Reviews</h2>
                ${doctor.reviews.map(review => `
                    <div class="review-card">
                        <div class="review-header">
                            <span class="reviewer">${review.name}</span>
                            <span class="review-date">${new Date(review.date).toLocaleDateString()}</span>
                        </div>
                        <div class="review-rating">
                            ${'★'.repeat(Math.floor(review.rating))}${'☆'.repeat(5 - Math.floor(review.rating))}
                        </div>
                        <p class="review-text">${review.text}</p>
                    </div>
                `).join('')}
            </div>
        `;

        // Add event listener to the book appointment button
        const bookButton = doctorProfile.querySelector('.book-appointment-btn');
        if (bookButton) {
            bookButton.addEventListener('click', () => {
                const appointmentForm = document.getElementById('appointmentForm');
                if (appointmentForm) {
                    appointmentForm.classList.remove('hidden');
                    window.scrollTo({
                        top: appointmentForm.offsetTop - 100,
                        behavior: 'smooth'
                    });
                    
                    // Set doctor ID in the booking form
                    const bookingForm = document.getElementById('bookingForm');
                    if (bookingForm) {
                        bookingForm.dataset.doctorId = doctor.id;
                    }
                }
            });
        }
    }

    // Initialize page based on current URL
    const currentPage = window.location.pathname;
    
    if (currentPage.includes('doctors.html') && doctorsList) {
        displayDoctors();
    }
    
    if (currentPage.includes('appointments.html') && appointmentsList) {
        displayAppointments();
    }
    
    if (currentPage.includes('profile.html')) {
        loadProfile();
        setupProfileTabs();
        updateProfileData();
        setupProfileEditMode();
    }
    
    if (currentPage.includes('doctor-info.html')) {
        loadDoctorProfile();
    }
    
    if (currentPage.includes('home.html') || currentPage.endsWith('/')) {
        setupHomePageCarousel();
    }
    
    // Common navigation functionality for all pages
    setupNavigation();
    
    // Setup navigation and user menu
    function setupNavigation() {
        // Get username from session storage
        const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
        const userNameElement = document.getElementById('userName');
        
        if (currentUser && userNameElement) {
            userNameElement.textContent = currentUser.name;
        }
        
        // Set active navigation link based on current page
        const navLinks = document.querySelectorAll('.nav-links li a');
        
        navLinks.forEach(link => {
            const linkPath = link.getAttribute('href');
            if (currentPage.includes(linkPath)) {
                link.classList.add('active');
            }
        });
        
        // Logout functionality
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remove user from session storage
                sessionStorage.removeItem('currentUser');
                
                // Redirect to login page
                window.location.href = 'index.html';
            });
        }
    }

    // Update profile data
    function updateProfileData() {
        const updateProfileForm = document.getElementById('personalInfoForm');
        const updatePasswordForm = document.getElementById('changePasswordForm');

        if (updateProfileForm) {
            updateProfileForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
                if (!currentUser) return;
                
                // Get form data
                const name = document.getElementById('fullName').value.trim();
                const email = document.getElementById('email').value.trim();
                const phone = document.getElementById('phoneNumber').value.trim();
                const address = document.getElementById('address').value.trim();
                const dob = document.getElementById('dateOfBirth').value.trim();
                const gender = document.getElementById('gender').value;
                const city = document.getElementById('city').value.trim();
                const zipCode = document.getElementById('zipCode').value.trim();
                
                // Update user profile data
                const userProfile = JSON.parse(localStorage.getItem(`profile_${currentUser.id}`)) || {};
                
                userProfile.phone = phone;
                userProfile.address = address;
                userProfile.dob = dob;
                userProfile.gender = gender;
                userProfile.city = city;
                userProfile.zipCode = zipCode;
                
                // Save updated profile data for this specific user
                localStorage.setItem(`profile_${currentUser.id}`, JSON.stringify(userProfile));
                
                // Update user in sessionStorage and localStorage
                if (name !== currentUser.name || email !== currentUser.email) {
                    // Update current user
                    currentUser.name = name;
                    currentUser.email = email;
                    
                    // Update session storage
                    sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
                    
                    // Update user in localStorage users list
                    const users = JSON.parse(localStorage.getItem('users')) || [];
                    const userIndex = users.findIndex(user => user.id === currentUser.id);
                    
                    if (userIndex !== -1) {
                        users[userIndex].name = name;
                        users[userIndex].email = email;
                        localStorage.setItem('users', JSON.stringify(users));
                    }
                    
                    // Update display
                    if (document.getElementById('profileName')) {
                        document.getElementById('profileName').textContent = name;
                    }
                    if (document.getElementById('profileEmail')) {
                        document.getElementById('profileEmail').textContent = email;
                    }
                    if (document.getElementById('userName')) {
                        document.getElementById('userName').textContent = name;
                    }
                }
                
                // Show success message
                const successMessage = document.createElement('div');
                successMessage.className = 'alert alert-success';
                successMessage.textContent = 'Profile updated successfully!';
                
                updateProfileForm.insertBefore(successMessage, updateProfileForm.firstChild);
                
                // Hide form actions and disable inputs after successful update
                const formInputs = document.querySelectorAll('#personalInfoForm .form-control');
                const formActions = document.querySelector('#personalInfoForm .form-actions');
                const editBtn = document.getElementById('editPersonalInfoBtn');
                
                formInputs.forEach(input => {
                    input.disabled = true;
                });
                
                formActions.style.display = 'none';
                editBtn.style.display = 'block';
                
                // Remove success message after 3 seconds
                setTimeout(() => {
                    successMessage.remove();
                }, 3000);
            });
        }
        
        // Change password functionality
        if (updatePasswordForm) {
            updatePasswordForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
                if (!currentUser) return;
                
                // Get form data
                const currentPassword = document.getElementById('currentPassword').value;
                const newPassword = document.getElementById('newPassword').value;
                const confirmPassword = document.getElementById('confirmPassword').value;
                
                // Validate input
                if (!currentPassword || !newPassword || !confirmPassword) {
                    showFormError(updatePasswordForm, 'All password fields are required');
                    return;
                }
                
                // Check if current password is correct
                if (currentPassword !== currentUser.password) {
                    showFormError(updatePasswordForm, 'Current password is incorrect');
                    return;
                }
                
                // Check if new passwords match
                if (newPassword !== confirmPassword) {
                    showFormError(updatePasswordForm, 'New passwords do not match');
                    return;
                }
                
                // Update user password for this specific user
                currentUser.password = newPassword;
                
                // Update session storage
                sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
                
                // Update user in localStorage users list
                const users = JSON.parse(localStorage.getItem('users')) || [];
                const userIndex = users.findIndex(user => user.id === currentUser.id);
                
                if (userIndex !== -1) {
                    users[userIndex].password = newPassword;
                    localStorage.setItem('users', JSON.stringify(users));
                }
                
                // Reset form
                updatePasswordForm.reset();
                
                // Show success message
                const successMessage = document.createElement('div');
                successMessage.className = 'alert alert-success';
                successMessage.textContent = 'Password changed successfully!';
                
                updatePasswordForm.insertBefore(successMessage, updatePasswordForm.firstChild);
                
                // Remove success message after 3 seconds
                setTimeout(() => {
                    successMessage.remove();
                }, 3000);
            });
        }
    }

    // Utility function to show form error
    function showFormError(form, message) {
        // Remove any existing error message
        const existingError = form.querySelector('.alert');
        if (existingError) {
            existingError.remove();
        }
        
        // Create error message
        const errorMessage = document.createElement('div');
        errorMessage.className = 'alert alert-danger';
        errorMessage.textContent = message;
        
        // Add to form
        form.insertBefore(errorMessage, form.firstChild);
        
        // Remove error message after 3 seconds
        setTimeout(() => {
            errorMessage.remove();
        }, 3000);
    }

    // Setup edit mode toggling for profile sections
    function setupProfileEditMode() {
        const editButtons = document.querySelectorAll('.edit-section-btn');
        
        editButtons.forEach(button => {
            button.addEventListener('click', function() {
                const section = this.closest('.profile-section-content');
                const form = section.querySelector('form');
                const inputs = form.querySelectorAll('input, select, textarea');
                
                if (this.textContent === 'Edit') {
                    // Enable edit mode
                    this.textContent = 'Cancel';
                    this.classList.add('btn-secondary');
                    inputs.forEach(input => {
                        input.disabled = false;
                    });
                    
                    // Show submit button
                    const submitButton = form.querySelector('[type="submit"]');
                    if (submitButton) {
                        submitButton.classList.remove('hidden');
                    }
                } else {
                    // Disable edit mode
                    this.textContent = 'Edit';
                    this.classList.remove('btn-secondary');
                    inputs.forEach(input => {
                        input.disabled = true;
                    });
                    
                    // Reset form to original values
                    form.reset();
                    
                    // Reload profile data
                    loadProfile();
                }
            });
        });
    }

    // Setup home page carousel
    function setupHomePageCarousel() {
        const testimonialItems = document.querySelectorAll('.testimonial-item');
        let currentTestimonial = 0;
        
        if (testimonialItems.length === 0) return;
        
        // Set first testimonial as active
        testimonialItems[0].classList.add('active');
        
        // Function to show next testimonial
        function showNextTestimonial() {
            testimonialItems[currentTestimonial].classList.remove('active');
            currentTestimonial = (currentTestimonial + 1) % testimonialItems.length;
            testimonialItems[currentTestimonial].classList.add('active');
        }
        
        // Auto-rotate testimonials every 5 seconds
        setInterval(showNextTestimonial, 5000);
    }
}); 