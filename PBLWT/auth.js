// Authentication Module for MediCare
(function() {
    // DOM Elements
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');
    const logoutBtn = document.getElementById('logoutBtn');

    // Check if user is logged in
    function checkAuthState() {
        const currentUser = sessionStorage.getItem('currentUser');
        const authForms = document.querySelector('.auth-forms');
        const protectedContent = document.querySelector('.protected-content');
        
        if (currentUser) {
            // User is logged in
            if (authForms) authForms.classList.add('hidden');
            if (protectedContent) protectedContent.classList.remove('hidden');
            
            // If on login/register page, redirect to home
            if (window.location.pathname.includes('index.html') && !window.location.pathname.includes('home.html')) {
                window.location.href = 'home.html';
            }
            
            // Set username in the navbar
            const userNameElement = document.getElementById('userName');
            if (userNameElement) {
                const userData = JSON.parse(currentUser);
                userNameElement.textContent = userData.name;
            }
        } else {
            // User is not logged in
            if (authForms) authForms.classList.remove('hidden');
            if (protectedContent) protectedContent.classList.add('hidden');
            
            // Redirect to login if trying to access protected pages
            const currentPath = window.location.pathname;
            if (currentPath.includes('doctors.html') || 
                currentPath.includes('appointments.html') || 
                currentPath.includes('profile.html')) {
                window.location.href = 'index.html';
            }
        }
    }

    // Register new user
    function registerUser(name, email, password) {
        // Get existing users or initialize empty array
        const users = JSON.parse(localStorage.getItem('users')) || [];
        
        // Check if email already exists
        if (users.some(user => user.email === email)) {
            showAuthError(registerForm, 'Email already registered');
            return false;
        }
        
        // Create new user object
        const newUser = {
            id: Date.now(),
            name,
            email,
            password,
            joinDate: new Date().toISOString()
        };
        
        // Add user to array and save to localStorage
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        
        // Log in the new user
        sessionStorage.setItem('currentUser', JSON.stringify(newUser));
        
        return true;
    }

    // Login user
    function loginUser(email, password) {
        // Get users from localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        
        // Find user with matching email and password
        const user = users.find(user => user.email === email && user.password === password);
        
        if (user) {
            // Save user to sessionStorage
            sessionStorage.setItem('currentUser', JSON.stringify(user));
            return true;
        } else {
            showAuthError(loginForm, 'Invalid email or password');
            return false;
        }
    }

    // Logout user
    function logoutUser() {
        sessionStorage.removeItem('currentUser');
        window.location.href = 'index.html';
    }

    // Reset password (dummy function for now)
    function resetPassword(email) {
        // Get users from localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        
        // Check if email exists
        const user = users.find(user => user.email === email);
        
        if (user) {
            // In a real app, this would send a reset email
            // For demo, we'll just show a success message
            
            // Store reset request in localStorage
            const resetRequests = JSON.parse(localStorage.getItem('resetRequests')) || [];
            resetRequests.push({
                email,
                timestamp: new Date().toISOString(),
                token: Math.random().toString(36).substr(2, 10)
            });
            localStorage.setItem('resetRequests', JSON.stringify(resetRequests));
            
            return true;
        } else {
            showAuthError(forgotPasswordForm, 'Email not found');
            return false;
        }
    }

    // Show auth form error
    function showAuthError(form, message) {
        if (!form) return;
        
        // Remove any existing error message
        const existingError = form.querySelector('.auth-error');
        if (existingError) {
            existingError.remove();
        }
        
        // Create error message element
        const errorElement = document.createElement('div');
        errorElement.className = 'auth-error';
        errorElement.textContent = message;
        
        // Add to form
        form.insertBefore(errorElement, form.firstChild);
        
        // Remove error after 3 seconds
        setTimeout(() => {
            if (errorElement.parentNode === form) {
                form.removeChild(errorElement);
            }
        }, 3000);
    }

    // Event Listeners
    document.addEventListener('DOMContentLoaded', function() {
        // Check authentication state on page load
        checkAuthState();
        
        // Handle Login Form
        if (loginForm) {
            loginForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const email = document.getElementById('loginEmail').value.trim();
                const password = document.getElementById('loginPassword').value;
                
                if (!email || !password) {
                    showAuthError(loginForm, 'Please enter email and password');
                    return;
                }
                
                if (loginUser(email, password)) {
                    window.location.href = 'home.html';
                }
            });
        }
        
        // Handle Register Form
        if (registerForm) {
            registerForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const name = document.getElementById('registerName').value.trim();
                const email = document.getElementById('registerEmail').value.trim();
                const password = document.getElementById('registerPassword').value;
                const confirmPassword = document.getElementById('confirmPassword').value;
                
                // Validate inputs
                if (!name || !email || !password || !confirmPassword) {
                    showAuthError(registerForm, 'All fields are required');
                    return;
                }
                
                if (password !== confirmPassword) {
                    showAuthError(registerForm, 'Passwords do not match');
                    return;
                }
                
                if (password.length < 6) {
                    showAuthError(registerForm, 'Password must be at least 6 characters');
                    return;
                }
                
                // Attempt to register
                if (registerUser(name, email, password)) {
                    window.location.href = 'home.html';
                }
            });
        }
        
        // Handle Forgot Password Form
        if (forgotPasswordForm) {
            forgotPasswordForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const email = document.getElementById('forgotEmail').value.trim();
                
                if (!email) {
                    showAuthError(forgotPasswordForm, 'Please enter your email');
                    return;
                }
                
                if (resetPassword(email)) {
                    // Show success message
                    showAuthError(forgotPasswordForm, 'Password reset instructions sent to your email');
                    
                    // Clear form
                    document.getElementById('forgotEmail').value = '';
                }
            });
        }
        
        // Handle Logout Button
        if (logoutBtn) {
            logoutBtn.addEventListener('click', function(e) {
                e.preventDefault();
                logoutUser();
            });
        }
        
        // Toggle between login and register forms
        const authToggle = document.querySelectorAll('.auth-toggle');
        authToggle.forEach(toggle => {
            toggle.addEventListener('click', function(e) {
                e.preventDefault();
                
                const formToShow = this.getAttribute('data-form');
                const forms = document.querySelectorAll('.auth-form');
                
                forms.forEach(form => {
                    if (form.id === formToShow) {
                        form.classList.remove('hidden');
                    } else {
                        form.classList.add('hidden');
                    }
                });
            });
        });
    });

    // Create demo users if none exist
    function initializeDemoUsers() {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        
        if (users.length === 0) {
            // Create default users
            const defaultUsers = [
                {
                    id: 1,
                    name: 'John Doe',
                    email: 'john@example.com',
                    password: 'password123',
                    joinDate: new Date().toISOString(),
                    gender: 'Male'
                },
                {
                    id: 2,
                    name: 'Jane Smith',
                    email: 'jane@example.com',
                    password: 'password123',
                    joinDate: new Date().toISOString(),
                    gender: 'Female'
                }
            ];
            
            // Add default users to localStorage
            localStorage.setItem('users', JSON.stringify(defaultUsers));
            
            // Create profile data for demo users
            const johnProfile = {
                phone: '+1 (555) 123-4567',
                address: '123 Main Street, Apt 4B',
                city: 'New York',
                zipCode: '10001',
                dob: '1985-06-15',
                gender: 'Male',
                profileImage: 'https://randomuser.me/api/portraits/men/32.jpg',
                allergies: [
                    'Penicillin',
                    'Peanuts'
                ],
                conditions: [
                    'Asthma',
                    'High Blood Pressure'
                ],
                medications: [
                    'Lisinopril 10mg (Daily)',
                    'Albuterol Inhaler (As needed)'
                ]
            };
            
            const janeProfile = {
                phone: '+1 (555) 987-6543',
                address: '456 Oak Avenue',
                city: 'Los Angeles',
                zipCode: '90001',
                dob: '1990-02-21',
                gender: 'Female',
                profileImage: 'https://randomuser.me/api/portraits/women/44.jpg',
                allergies: [
                    'Shellfish',
                    'Latex'
                ],
                conditions: [
                    'Migraine',
                    'Hypothyroidism'
                ],
                medications: [
                    'Levothyroxine 75mcg (Daily)',
                    'Sumatriptan (As needed for migraines)'
                ]
            };
            
            // Save profile data
            localStorage.setItem('profile_1', JSON.stringify(johnProfile));
            localStorage.setItem('profile_2', JSON.stringify(janeProfile));
            
            // Create sample appointments
            const sampleAppointments = [
                {
                    id: 101,
                    doctorId: 1,
                    userId: 1,
                    date: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0], // 3 days from now
                    time: '10:00 AM',
                    reason: 'Annual checkup',
                    status: 'confirmed'
                },
                {
                    id: 102,
                    doctorId: 3,
                    userId: 1,
                    date: new Date(Date.now() + 86400000 * 7).toISOString().split('T')[0], // 7 days from now
                    time: '2:30 PM',
                    reason: 'Flu symptoms',
                    status: 'pending'
                },
                {
                    id: 103,
                    doctorId: 2,
                    userId: 2,
                    date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0], // 2 days from now
                    time: '11:15 AM',
                    reason: 'Headache consultation',
                    status: 'confirmed'
                },
                {
                    id: 104,
                    doctorId: 5,
                    userId: 2,
                    date: new Date(Date.now() - 86400000 * 5).toISOString().split('T')[0], // 5 days ago
                    time: '3:00 PM',
                    reason: 'Skin rash',
                    status: 'confirmed'
                }
            ];
            
            localStorage.setItem('appointments', JSON.stringify(sampleAppointments));
            
            // Create notifications for users
            const johnNotifications = [
                {
                    id: 1,
                    text: 'Your appointment with Dr. Sarah Johnson has been confirmed for tomorrow at 10:00 AM.',
                    time: '1 hour ago',
                    icon: 'fa-calendar-check',
                    read: false
                },
                {
                    id: 2,
                    text: 'Remember to take your medication at 8:00 PM today.',
                    time: '5 hours ago',
                    icon: 'fa-bell',
                    read: true
                }
            ];
            
            const janeNotifications = [
                {
                    id: 1,
                    text: 'Your appointment with Dr. Michael Chen has been confirmed.',
                    time: '2 hours ago',
                    icon: 'fa-calendar-check',
                    read: false
                },
                {
                    id: 2,
                    text: 'Dr. Priya Patel recommended a follow-up in 2 weeks.',
                    time: '3 days ago',
                    icon: 'fa-user-md',
                    read: true
                }
            ];
            
            localStorage.setItem('notifications_1', JSON.stringify(johnNotifications));
            localStorage.setItem('notifications_2', JSON.stringify(janeNotifications));
        }
    }
    
    // Initialize demo data
    initializeDemoUsers();

    // Export public functions and variables
    window.authModule = {
        checkAuthState,
        loginUser,
        registerUser,
        logoutUser,
        resetPassword
    };
})();
