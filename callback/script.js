//fungsi dalam fungsi

function kalikan(angka1, angka2) {
    return angka1 * angka2
}

function tambah(angka1, angka2) {
    return angka1 + angka2
}

function showKalikan(angka1, angka2) {
    var hasil = kalikan(angka1, angka2)
    console.log(hasil)
}

showKalikan(5, 4)

//callback

function SetHasil(angka1, angka2, callback) {
    console.log("Menghitung...")
    var hasil = callback(angka1, angka2)
    console.log(hasil)
}

SetHasil(5, 4, tambah)


//callback mengambil data dari server (API)
console.log('======Mulai======')
fetch('http://universities.hipolabs.com/search?/country=Indonesia')
    .then((res) => res.json())
    .then((res) => console.log(res))

console.log("Selesai")