const form = document.getElementById('form');

form.onsubmit = e => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  users.push(data);
  localStorage.setItem('users', JSON.stringify(users));

  // Simulated AJAX POST
  fetch('/fake', { method: 'POST', body: JSON.stringify(data) });

  showUsers();
};

function showUsers() {
  document.getElementById('register').classList.add('hidden');
  document.getElementById('list').classList.remove('hidden');
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const ul = document.getElementById('users');
  ul.innerHTML = users.map(u => `<li>${u.name} - ${u.email}</li>`).join('');
}

function goBack() {
  document.getElementById('list').classList.add('hidden');
  document.getElementById('register').classList.remove('hidden');
}
