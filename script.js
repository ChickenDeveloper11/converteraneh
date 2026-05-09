function convert() {
    const angka = document.getElementById('inputNumber').value;
    const satuan = document.getElementById('satuanTujuan').value;
    const displayHasil = document.getElementById('result');

    console.log("Tombol Convert Diklik!");

    if (angka === "" || angka <= 0) {
        displayHasil.innerHTML = "Masukkan angka yang betoooool!";
        return;
    }

    let hasilAkhir = 0;
    let pesan = "";

    switch (satuan) {
        case "kucing":
            hasilAkhir = angka * 2.2;
            pesan = `Kamu butuh sekitar <strong>${hasilAkhir.toFixed(1)}</strong> ekor kucing rebahan untuk mencapai <strong>${angka}</strong> meter!`;
            break;
        case "gelas":
            hasilAkhir = angka * 12.5;
            pesan = `Kamu butuh sekitar <strong>${hasilAkhir.toFixed(1)}</strong> gelas untuk mencapai <strong>${angka}</strong> meter!`;
            break;
        case "semangka":
            hasilAkhir = angka * 3.5;
            pesan = `Kamu butuh sekitar <strong>${hasilAkhir.toFixed(1)}</strong> buah semangka untuk mencapai <strong>${angka}</strong> meter!`;
            break;
        case "sawit":
            hasilAkhir = angka / 24;
            pesan = `Kamu butuh sekitar <strong>${hasilAkhir.toFixed(1)}</strong> pohon sawit untuk mencapai <strong>${angka}</strong> meter!`;
            break;
        case "omprengMBG":
            hasilAkhir = angka * 3.5714;
            pesan = `Kamu butuh sekitar <strong>${hasilAkhir.toFixed(1)}</strong> ompreng MBG untuk mencapai <strong>${angka}</strong> meter!`;
            break;
        case "Mosasaurus":
            hasilAkhir = angka / 15000;
            pesan = `Kamu butuh sekitar <strong>${hasilAkhir.toFixed(1)}</strong> mosasaurus untuk mencapai berat <strong>${angka}</strong> kilogram!`;
            break;
        case "Mobil Presiden":
            hasilAkhir = angka / 2950;
            pesan = `Kamu butuh sekitar <strong>${hasilAkhir.toFixed(1)}</strong> mobil presiden RI untuk mencapai berat <strong>${angka}</strong> kilogram!`;
            break;
        case "pesawat A380":
            hasilAkhir = angka / 375000;
            pesan = `Kamu butuh sekitar <strong>${hasilAkhir.toFixed(1)}</strong> pesawat A380 untuk mencapai berat <strong>${angka}</strong> kilogram!`;
            break;
        case "Semut":
            hasilAkhir = angka * 333333.3333333333;
            pesan = `Kamu butuh sekitar <strong>${hasilAkhir.toFixed(1)}</strong> ekor semut untuk mencapai berat <strong>${angka}</strong> kilogram!`;
            break;
        default:
            pesan = "pilih satuannya dulu bang..."
    }

    displayHasil.innerHTML = pesan;
}

function gantiCard() {
    const v1 = document.getElementById('v1');
    const v2 = document.getElementById('v2');

    if (v1.classList.contains('hidden')) {
        v1.classList.remove('hidden');
        v2.classList.add('hidden');
    } else {
        v1.classList.add('hidden');
        v2.classList.remove('hidden');
    }
}

function convert2() {
    const angka = document.getElementById('inputNumber2').value;
    const satuan = document.getElementById('satuanTujuan2').value;
    const displayHasil = document.getElementById('result2');

    console.log("Tombol Convert Diklik!");

    if (angka === "" || angka <= 0) {
        displayHasil.innerHTML = "Masukkan angka yang betoooool!";
        return;
    }

    let hasilAkhir = 0;
    let pesan = "";

    switch (satuan) {
        case "kucing":
            hasilAkhir = angka / 2.2;
            pesan = `<strong>${angka}</strong> ekor kucing rebahan itu sama dengan <strong>${hasilAkhir.toFixed(1)}</strong> meter!`;
            break;
        case "lapanganBola":
            hasilAkhir = angka / 0.009;
            pesan = `<strong>${angka}</strong> lapangan bola itu sama dengan <strong>${hasilAkhir.toFixed(1)}</strong> meter!`;
            break;
        case "galonIsiUlang":
            hasilAkhir = angka / 0.052;
            pesan = `<strong>${angka}</strong> galon isi ulang itu sama dengan <strong>${hasilAkhir.toFixed(1)}</strong> kilogram!`;
            break;
    }

    displayHasil.innerHTML = pesan;
}