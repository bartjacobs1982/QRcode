let qrcodeInstance = null;

function generateQR() {
    const url = document.getElementById('urlInput').value;
    const container = document.getElementById('qrcode');
    const downloadBtn = document.getElementById('downloadBtn');

    // Maak de container leeg voor een nieuwe QR
    container.innerHTML = ""; 
    
    if(url.trim() !== "" && url !== "https://") {
        // Maak de nieuwe QR-code aan
        qrcodeInstance = new QRCode(container, {
            text: url,
            width: 256,
            height: 256,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        });
        
        // Wacht heel even tot de image is gegenereerd en toon dan de downloadknop
        setTimeout(() => {
            const qrImg = container.querySelector('img');
            if(qrImg) {
                downloadBtn.style.display = "block";
            }
        }, 300);
    } else {
        alert("Voer a.u.b. een geldige URL in!");
    }
}

function downloadQR() {
    const qrImg = document.querySelector('#qrcode img');
    if (qrImg) {
        const link = document.createElement('a');
        link.download = 'mijn-qrcode.png';
        link.href = qrImg.src;
        link.click();
    }
}

// Service Worker Registratie (voor PWA installatie)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log("Service Worker geregistreerd", reg))
            .catch(err => console.log("Service Worker mislukt", err));
    });
}
