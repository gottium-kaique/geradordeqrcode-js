const qr = document.querySelector(".qr")
const button = document.querySelector("button")

new QRCode(qr, {
    text: "Gerador de QR Code",
    colorDark: "#000",
    colorLight: "#00ccaa"
})

button.onclick = () => {
    qr.innerHTML = "";
    let inputs = document.querySelectorAll("input")

    let text = inputs[2].value ? inputs[2].value : "Empty!"

    new QRCode(qr, {
        text: text,
        width: 250,
        height: 250,
        colorDark: inputs[1].value,
        colorLight: inputs[0].value,
    })
    
    setTimeout(() => {
        downloadQrCode()
    }, 1000)
}

function downloadQrCode() {
    let download = document.querySelector("#download")
    let img = document.querySelector("img")
    download.href = img.src
}