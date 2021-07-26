const redeemButton = document.querySelector('#redeemButton');
const cancelButton = document.querySelector('#cancelButton');

function redeem() {
    speechSynthesis.speak(t = new SpeechSynthesisUtterance('Do Not Redeem, you silly goose'), t.rate = 0.1, t.pitch = 0, t);
}

function cancel() {
   speechSynthesis.speak(t = new SpeechSynthesisUtterance('Whoopsees. The cancel button does nothing.'), t.rate = 0.7, t.pitch = 0, t);
}

redeemButton.addEventListener('click', redeem);
cancelButton.addEventListener('click', cancel);
