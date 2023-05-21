const wrapper = document.querySelector('.wrapper'),
qrInput = wrapper.querySelector('.form input'),
generateBtn = wrapper.querySelector('.form button'),
qrImg = wrapper.querySelector('.qr-code img'),

generateBtn.addEventListener('click', ()=>{
  let qrValue = qrInput.value;
  if(!qrValue) return;
  generateBtn.innerText = 'Generating QR Code...';

  qrImg.scr= `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
  qrImg.addEventListener("load", ()=>{
    wrapper.classList.add('active');
    qrResult.innerHTML = "";
    new QRCode(qrResult, inputValue);
  });
});

qrInput.addEventListener("keyup", (e)=>{
    if(!qrInput.value){
        wrapper.classList.remove('active');
    }
    });
    
