"use strict";
const button = document.getElementById('btn');
const imgBox = document.getElementById('imgbox');
const qrimage = document.getElementById('qrimage');
const input = document.getElementById('qrtext');
async function generateQRcode() {
    qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
    imgBox.classList.add("showimg");
}
button.addEventListener('click', generateQRcode);
