const buttons = document.querySelectorAll('.filter button');
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Pagination interaktif
const pages = document.querySelectorAll('.page');
pages.forEach(page => {
  page.addEventListener('click', () => {
    pages.forEach(p => p.classList.remove('active'));
    page.classList.add('active');
  });
});
