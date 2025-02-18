
function hitung() {
    let angka1 = parseFloat(document.getElementById("angka1").value);
    let angka2 = parseFloat(document.getElementById("angka2").value);
    let operasi = document.getElementById("operasi").value;
    let hasil;

    if (isNaN(angka1) || isNaN(angka2)) {
        alert("Masukkan angka yang valid!");
        return;
    }

    // Logika if-else  
    if (operasi === "+") {
        hasil = angka1 + angka2;
    } else if (operasi === "-") {
        hasil = angka1 - angka2;
    } else if (operasi === "×") {
        hasil = angka1 * angka2;
    } else if (operasi === "÷") {
        if (angka2 === 0) {
            alert("Tidak bisa dibagi 0!");
            return;
        } else {
            hasil = angka1 / angka2;
        }
    }

    document.getElementById("hasil").innerHTML = "Hasil: " + hasil;
}
hitung();