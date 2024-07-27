// console.log(fetch('http://universities.hipolabs.com/search?/country=Indonesia'))

// Promise = Janji => Ditepati/Diingkari

// var Janji = new Promise((ditepati, diingkari) => {
//     console.log('Mengambil data...')
//     var hasil = 400
//     if (hasil === 400) {
//         ditepati()
//     }else if (hasil === 200){
//         diingkari()
//     }
// })

// console.log('Mulai')
// Janji
//  .then(() => {
//     console.log('Ditepati')
//  })
//  .catch(() => {
//     console.log('Dingkari')
//  })
//  console.log('Berakhit')

var unduh = url => new Promise((ditepati, diingkari) => {
    setTimeout(() => {
        var data = 'Ini datanya '
        console.log('Mengambil data dari ' + url)
        var status = 400
        if (status === 400) {
            ditepati(data)
        }else if(status === 200) {
            diingkari('Error')
        }
    }, 3000);
})

console.log('Mulai')
//PENULISAN ASYNCHRONUS
// unduh('www.website.com')
    // .then((res) => {
    //     console.log(res)
    // })
    // .catch((err) => {
    //     console.log(err)
    // })


//PENULISAN SYNCHRONUS
    async function TampilkanData(url) {
        var hasil = await unduh(url)
        console.log(hasil)
    }

    TampilkanData('www.website.com')

console.log("Selesai")
