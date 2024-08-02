document.addEventListener('DOMContentLoaded', function () {
  const registrationForm = document.getElementById('registrationForm');
  const loginForm = document.getElementById('loginForm');
  const recoveryForm = document.getElementById('recoveryForm');

  document.getElementById('toLogin').addEventListener('click', function (event) {
      event.preventDefault();
      registrationForm.classList.add('visually-hidden');
      loginForm.classList.remove('visually-hidden');
      recoveryForm.classList.add('visually-hidden');
  });

  document.getElementById('toRecovery').addEventListener('click', function (event) {
      event.preventDefault();
      registrationForm.classList.add('visually-hidden');
      loginForm.classList.add('visually-hidden');
      recoveryForm.classList.remove('visually-hidden');
  });

  document.getElementById('toLoginFromRecovery').addEventListener('click', function (event) {
      event.preventDefault();
      registrationForm.classList.add('visually-hidden');
      loginForm.classList.remove('visually-hidden');
      recoveryForm.classList.add('visually-hidden');
  });
});
