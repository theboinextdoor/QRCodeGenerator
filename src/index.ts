const button = document.getElementById('btn')as HTMLButtonElement;
const imgBox= document.getElementById('imgbox') as HTMLElement;
const qrimage= document.getElementById('qrimage') as HTMLImageElement;
const input = document.getElementById('qrtext') as HTMLInputElement;

async function generateQRcode(){
    qrimage.src= "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ input.value;
    imgBox.classList.add("showimg")
}
button.addEventListener('click', generateQRcode)