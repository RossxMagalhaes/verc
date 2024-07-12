let clickCount = 0;
let currentAmount = 10.00;

const lotterBg = document.querySelector('.lotter-bg');
const lotterBg2 = document.querySelector('.lotter-bg2');
const amountElement = document.getElementById('amount');


const lottiePlayer = document.getElementById('lottie_f5a42d04-8ce3-4f8e-8f76-955fd4c9034d');

function showPopup() {
    if(clickCount === 2 || clickCount === 1) {
        lotterBg.style.display = 'flex';
        lottiePlayer.stop();
        lottiePlayer.play();
        setTimeout(() => {
            updatetextssteps();
            lotterBg.style.display = 'none';
        }, 2500);
    }
    if(clickCount === 3) {
        var btnmoneychange = document.getElementById('money-change');
        btnmoneychange.textContent = "$67.55 USD";
        lotterBg2.style.display = 'flex';
    }
}

document.getElementById('asdbasduykfbwr').addEventListener('click', function() {
    window.location.href = '/vsl';
})

function updateAmount(increment) {
    currentAmount += increment;
    amountElement.textContent = `$${currentAmount.toFixed(2)} USD`;
}

document.getElementById('button-clic1').addEventListener('click', () => {
    clickCount++;
    if (clickCount === 1) {
        updateAmount(6.48);
        document.querySelector('.empresasdasd').textContent = "Nike";
        showPopup();
    } else if (clickCount === 2) {
        updateAmount(2.98);
        document.querySelector('.empresasdasd').textContent = "Amazon";
        showPopup();
    } else if (clickCount === 3) {
        showPopup();
    }
});

document.getElementById('button-clic2').addEventListener('click', () => {
    clickCount++;
    if (clickCount === 1) {
        updateAmount(6.48);
        document.querySelector('.empresasdasd').textContent = "Nike";
        showPopup();
    } else if (clickCount === 2) {
        updateAmount(2.98);
        document.querySelector('.empresasdasd').textContent = "Amazon";
        showPopup();
    } else if (clickCount === 3) {
        showPopup();
    }
});

function updatetextssteps() {
    var texth44 = document.getElementById('content-text-h4');
    var btnmoneychange = document.getElementById('money-change');
    var sdfsadfdas = document.querySelector('.sdafsdfrewgtrhyr');
    var bradingimg = document.getElementById('bradingimg');
    var posterimage = document.getElementById('poster-image');
    var btnclic1 = document.getElementById('button-clic1');
    var btnclic2 = document.getElementById('button-clic2');
    sdfsadfdas.style.display = "none";

    if(clickCount === 1) {
        texth44.textContent = "¿Comprarías productos más caros como una moto por Amazon?";
        posterimage.src = "/assets/img/moto.jpg";
        bradingimg.src = "/assets/img/amazon.jpg";
        btnmoneychange.textContent = amountElement.textContent;
        btnclic1.textContent = "Sí, compraría";
        btnclic2.textContent = "Todavía no";
    }

    if(clickCount === 2) {
        texth44.textContent = "Você usuaria o Apple Vision Pro normalmente enquanto anda na rua?";
        posterimage.src = "/assets/img/vr.jpg";
        bradingimg.src = "/assets/img/apple.jpg";
        btnmoneychange.textContent = amountElement.textContent;
        btnclic1.textContent = "Sí, lo usaría";
        btnclic2.textContent = "No lo usaría";
        
    }
}
