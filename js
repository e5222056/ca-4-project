const toggleThemeBtn = document.getElementById('toggle-theme');

toggleThemeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  const isDark = document.body.classList.contains('dark-mode');
  toggleThemeBtn.textContent = isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';
});
