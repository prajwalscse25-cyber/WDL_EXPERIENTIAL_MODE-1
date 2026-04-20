/**
 * TechFront 2024 Conference Website
 * JavaScript Module - Main Entry Point
 * 
 * This module handles:
 * - Form validation and submission
 * - Smooth scrolling navigation
 * - Dynamic navigation highlighting
 * - Interactive ticket counters
 * - User notifications
 * 
 * @author TechFront Development Team
 * @version 1.0.0
 * @date 2024-04-20
 */

document.addEventListener('DOMContentLoaded', function() {
  console.log('TechFront 2024 - Conference website loaded');
  
  // Initialize all components
  initializeFormValidation();
  initializeSmoothScrolling();
  initializeNavigation();
  initializeTicketCounter();
});

// ============================= 
// FORM VALIDATION              
// ============================= 

/**
 * Initialize form validation for registration form
 * Handles client-side validation before submission
 */
function initializeFormValidation() {
  const form = document.querySelector('.registration-form');
  
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const phone = form.querySelector('#phone').value.trim();
    const ticket = form.querySelector('#ticket').value;
    
    // Validate form
    if (!validateForm(name, email, phone, ticket)) {
      return;
    }
    
    // Show success message
    showNotification('Registration successful! We\'ll contact you soon.', 'success');
    
    // Reset form
    setTimeout(() => {
      form.reset();
    }, 1000);
  });
}

/**
 * Validates form fields
 * @param {string} name - User's full name
 * @param {string} email - User's email address
 * @param {string} phone - User's phone number
 * @param {string} ticket - Selected ticket type
 * @returns {boolean} - True if all validations pass
 */
function validateForm(name, email, phone, ticket) {
  // Validate name
  if (name.length < 3) {
    showNotification('Please enter a valid name (minimum 3 characters)', 'error');
    return false;
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showNotification('Please enter a valid email address', 'error');
    return false;
  }

  // Validate phone
  const phoneRegex = /^[0-9\-+\s()]{10,}$/;
  if (!phoneRegex.test(phone)) {
    showNotification('Please enter a valid phone number', 'error');
    return false;
  }

  // Validate ticket selection
  if (!ticket) {
    showNotification('Please select a ticket type', 'error');
    return false;
  }

  return true;
}

/**
 * Display notification message to user
 * @param {string} message - Message to display
 * @param {string} type - Notification type ('success' or 'error')
 */
function showNotification(message, type) {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 15px 20px;
    border-radius: 6px;
    color: white;
    font-weight: 600;
    z-index: 1000;
    animation: slideIn 0.3s ease;
    ${type === 'success' ? 'background-color: #27ae60;' : 'background-color: #c0392b;'}
  `;
  
  document.body.appendChild(notification);
  
  // Remove notification after 4 seconds
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 4000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// ============================= 
// SMOOTH SCROLLING              
// ============================= 

function initializeSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// ============================= 
// NAVIGATION ENHANCEMENT        
// ============================= 

function initializeNavigation() {
  const navLinks = document.querySelectorAll('nav a');
  
  window.addEventListener('scroll', function() {
    let current = '';
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').slice(1) === current) {
        link.classList.add('active');
      }
    });
  });
}

// ============================= 
// TICKET COUNTER ANIMATION      
// ============================= 

function initializeTicketCounter() {
  const ticketCards = document.querySelectorAll('.ticket-card');
  
  ticketCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      const progress = this.querySelector('progress');
      if (progress) {
        animateProgress(progress);
      }
    });
  });
}

function animateProgress(progressBar) {
  const targetValue = parseFloat(progressBar.getAttribute('value'));
  const maxValue = parseFloat(progressBar.getAttribute('max'));
  let currentValue = 0;
  
  const interval = setInterval(() => {
    currentValue += (targetValue / 20);
    
    if (currentValue >= targetValue) {
      currentValue = targetValue;
      clearInterval(interval);
    }
    
    progressBar.setAttribute('value', currentValue);
  }, 50);
}

// ============================= 
// UTILITY FUNCTIONS             
// ============================= 

// Get ticket availability percentage
function getTicketPercentage(available, total) {
  return Math.round((available / total) * 100);
}

// Format currency
function formatCurrency(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
  }).format(amount);
}

// Log page performance
window.addEventListener('load', function() {
  const perfData = window.performance.timing;
  const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
  console.log(`Page loaded in ${pageLoadTime}ms`);
});

// Add active state styling for navigation
const style2 = document.createElement('style');
style2.textContent = `
  nav a.active {
    color: #c9993a;
    border-bottom-color: #c9993a;
  }
`;
document.head.appendChild(style2);
