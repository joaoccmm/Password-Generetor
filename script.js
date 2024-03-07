const pwdInputsChars = document.getElementById('pwdInputsChars').getElementsByTagName('input');
const quantityContent = document.getElementById('quantityContent');
const pwdRangeStatus = document.getElementById('pwdRangeStatus');
const pwdRange = document.getElementById('pwdRange');

const password = {
  value: '',
  length: 15,
  characters: {
      numbers: '0123456789',
      special: '?/~^{}[]!@#$%&*()_-+=.,:;',
      lowercase: 'abcdefghijklmnopqrstuvwxyz',
      uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  },
  generate(chars) {
      let pwd = '';

      this.length = this.length < 4 || this.length > 30 ? 10 : this.length;

      chars = chars || Object.values(this.characters).join();

      for (let i = 0; i < this.length; i++) {
          pwd += chars[Math.floor(Math.random() * chars.length)];
      }

      this.value = pwd;
      return pwd;
  }
}

function pwdGenerator() {

  let chars = '';

  for (let i = 0; i < pwdInputsChars.length; i++) {
      if (pwdInputsChars[i].checked) {
          chars += password.characters[pwdInputsChars[i].name];
      }
  }

  password.length = pwdRange.value;
  quantityContent.textContent = password.generate(chars);
}

pwdRange.addEventListener('input', (evt) => {
  pwdRangeStatus.textContent = evt.currentTarget.value;
})

pwdRange.addEventListener('change', pwdGenerator);
for (let i = 0; i < pwdInputsChars.length; i++) {
  pwdInputsChars[i].addEventListener('change', pwdGenerator);
}

pwdGenerator();

const btnCopy = document.getElementById('btnCopy');
btnCopy.addEventListener('click', () => {
  navigator.clipboard.writeText(password.value)
  btnCopy.textContent = 'Copiado!';
  setTimeout(() => {
      btnCopy.textContent = 'Copiar';
  }, 2000);
})
