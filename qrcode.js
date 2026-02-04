<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SnelQR PWA</title>
    <link rel="manifest" href="manifest.json">
    <style>
        body { font-family: sans-serif; display: flex; flex-direction: column; align-items: center; padding: 20px; }
        input { padding: 10px; width: 80%; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 5px; }
        button { padding: 10px 20px; background: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer; }
        #qrcode { margin-top: 20px; }
    </style>
</head>
<body>
    <h1>QR Generator</h1>
    <input type="url" id="urlInput" placeholder="Plak hier je URL...">
    <button onclick="generateQR()">Maak QR Code</button>
    <div id="qrcode"></div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>
    <script>
        function generateQR() {
            const url = document.getElementById('urlInput').value;
            const container = document.getElementById('qrcode');
            container.innerHTML = ""; // Maak vorige QR leeg
            if(url) {
                new QRCode(container, url);
            } else {
                alert("Voer eerst een URL in!");
            }
        }
    </script>
</body>
</html>
