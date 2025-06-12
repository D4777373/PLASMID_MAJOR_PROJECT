// Progress bar logic
const fields = [
  'fullName',
  'email',
  'phone',
  'password',
  'confirmPassword'
];
const progressBar = document.getElementById('formProgress');
fields.forEach(id => {
  document.getElementById(id).addEventListener('input', updateProgress);
});
function updateProgress() {
  let filled = 0;
  if (document.getElementById('fullName').value.trim().length >= 5) filled++;
  if (document.getElementById('email').value.includes('@')) filled++;
  if (/^\d{10}$/.test(document.getElementById('phone').value.trim())) filled++;
  if (document.getElementById('password').value.length >= 8) filled++;
  if (
    document.getElementById('password').value &&
    document.getElementById('password').value === document.getElementById('confirmPassword').value
  ) filled++;
  const percent = (filled / fields.length) * 100;
  progressBar.style.width = percent + '%';
}

// Mini-game logic
let miniGamePassed = false;
const dragCircle = document.getElementById('dragCircle');
const dropBox = document.getElementById('dropBox');
const miniGameMsg = document.getElementById('miniGameMsg');

dragCircle.addEventListener('dragstart', (e) => {
  e.dataTransfer.setData('text/plain', 'circle');
});
dropBox.addEventListener('dragover', (e) => {
  e.preventDefault();
});
dropBox.addEventListener('drop', (e) => {
  e.preventDefault();
  const data = e.dataTransfer.getData('text/plain');
  if (data === 'circle') {
    dropBox.style.background = '#212529';
    miniGameMsg.textContent = 'Verified!';
    miniGameMsg.classList.remove('text-danger');
    miniGameMsg.classList.add('text-success');
    miniGamePassed = true;
  }
});

// Attach form submit event
document.getElementById('registrationForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent reload

  // Input values
  const fullName = document.getElementById('fullName').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  // Error elements
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const phoneError = document.getElementById('phoneError');
  const passwordError = document.getElementById('passwordError');
  const confirmPasswordError = document.getElementById('confirmPasswordError');

  // Input fields
  const pwdInput = document.getElementById('password');
  const confirmPwdInput = document.getElementById('confirmPassword');

  // Reset messages
  nameError.textContent = "";
  emailError.textContent = "";
  phoneError.textContent = "";
  passwordError.textContent = "";
  confirmPasswordError.textContent = "";

  // Reset classes
  pwdInput.classList.remove('input-fill-black');
  confirmPwdInput.classList.remove('input-fill-black');
  pwdInput.classList.add('input-normal');
  confirmPwdInput.classList.add('input-normal');

  let isValid = true;

  // Name validation
  if (fullName.length < 5) {
    nameError.textContent = "Name must be at least 5 characters.";
    isValid = false;
  }

  // Email validation
  if (!email.includes('@')) {
    emailError.textContent = "Enter a valid email.";
    isValid = false;
  }

  // Phone validation
  if (phone === '123456789' || !/^\d{10}$/.test(phone)) {
    phoneError.textContent = "Enter a valid 10-digit phone number.";
    isValid = false;
  }

  // Password validation
  if (
    password.toLowerCase() === 'password' ||
    password.toLowerCase() === fullName.toLowerCase() ||
    password.length < 8
  ) {
    passwordError.textContent = "Password is too weak.";
    isValid = false;
  }

  // Confirm password check
  if (password !== confirmPassword) {
    confirmPasswordError.textContent = "Passwords do not match.";
    isValid = false;
  }

  // Mini-game check
  if (!miniGamePassed) {
    miniGameMsg.textContent = "Please complete the human verification!";
    miniGameMsg.classList.remove('text-success');
    miniGameMsg.classList.add('text-danger');
    return;
  } else {
    miniGameMsg.classList.remove('text-danger');
    miniGameMsg.classList.add('text-success');
  }

  // Final check
  if (isValid) {
    document.getElementById('thankYouMsg').style.display = 'block';
    setTimeout(() => {
      document.getElementById('thankYouMsg').style.display = 'none';
    }, 3500);
    document.getElementById('registrationForm').reset();
    miniGamePassed = false;
    dropBox.style.background = '';
    miniGameMsg.textContent = '';
    pwdInput.classList.remove('input-fill-black');
    confirmPwdInput.classList.remove('input-fill-black');
    pwdInput.classList.add('input-normal');
    confirmPwdInput.classList.add('input-normal');
    updateProgress();
  }
});

// Live animation on confirm password input
const pwdInput = document.getElementById('password');
const confirmPwdInput = document.getElementById('confirmPassword');

confirmPwdInput.addEventListener('input', () => {
  const pwd = pwdInput.value;
  const confirmPwd = confirmPwdInput.value;

  if (pwd && confirmPwd && pwd === confirmPwd) {
    pwdInput.classList.remove('input-normal');
    confirmPwdInput.classList.remove('input-normal');
    pwdInput.classList.add('input-fill-black');
    confirmPwdInput.classList.add('input-fill-black');
  } else {
    pwdInput.classList.remove('input-fill-black');
    confirmPwdInput.classList.remove('input-fill-black');
    pwdInput.classList.add('input-normal');
    confirmPwdInput.classList.add('input-normal');
  }
});

// 3D rotation effect
const formBox = document.querySelector('.form-box');

formBox.addEventListener('mousemove', (e) => {
  const box = formBox.getBoundingClientRect();
  const x = e.clientX - box.left;
  const y = e.clientY - box.top;
  const centerX = box.width / 2;
  const centerY = box.height / 2;

  const rotateX = -(y - centerY) / 15;
  const rotateY = (x - centerX) / 15;

  formBox.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

formBox.addEventListener('mouseleave', () => {
  formBox.style.transform = 'rotateX(0deg) rotateY(0deg)';
});