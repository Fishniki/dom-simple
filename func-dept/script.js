function Angka(a , n) {
    console.log("Jumlah nya adalah " + a + n)
}

Angka(5,7)

function JumlahDuaAnhka(angka1, angka2) {
    console.log(angka1 + angka2)
}

var penjumkahan = function(angka1, angka2) {
    console.log(angka1 + angka2)
}

JumlahDuaAnhka(3, 2)
penjumkahan(2, 2)


var Objek = {
    nama : "Niki",
    panggil : function() {
        return this.nama
    }
}

console.log(Objek.panggil())


//Regular vs Arrow Function
var Fungsi = function (nama1, nama2){
    console.log(arguments)
}

Fungsi("Niki", 18)