import './style.css'

console.log('Parivahan UI Clone Loaded');

// Session Management Logic
document.addEventListener('DOMContentLoaded', () => {
  const user = localStorage.getItem('vahanUser');
  const loginBtn = document.querySelector('.login-btn');

  if (user && loginBtn) {
    // Replace Login button with User Dropdown
    loginBtn.innerHTML = `
      <a href="#" class="user-dropdown-toggle">
        <i class="fa-solid fa-user-circle"></i> ${user} <i class="fa-solid fa-caret-down"></i>
      </a>
      <ul class="dropdown-menu" style="min-width: 150px; right: 0; left: auto;">
        <li><a href="#" id="logoutBtn"><i class="fa-solid fa-right-from-bracket"></i> Logout</a></li>
      </ul>
    `;

    // Add 'dropdown' class to the parent li to enable hover effect from CSS
    loginBtn.classList.add('dropdown');

    // Attach Logout Event Listener
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem('vahanUser');
        alert('Logged out successfully');
        location.href = '/vahan_login.html';
      });
    }
  }
});
