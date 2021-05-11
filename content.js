// alert('ello');
console.log('mhm');

document.addEventListener('keyup', (e) => {
   if (e.ctrlKey && e.keyCode == 86) {
      console.log(e.keyCode);
      const input = document.activeElement;

      const tempInput = document.createElement('input');
      document.body.appendChild(tempInput);
      tempInput.focus();
      document.execCommand('paste');
      const text = tempInput.value;
      input.focus();
      input.value = text;
   }
});
