let hobi = ["Coding", "Games", "Mendaki"]


//join yaitu berfungsi untuk mengubah array menjadi string dan menggabungkan array
console.log(hobi.join(' - '))

//slice berfungsi memotong/mengiris data
console.log(hobi.slice(1,3))

//push berfungsi menambahkan element baru di element terakhir
hobi.push("Berenang")
console.log(hobi)

//pop berfungsi untuk menghapus element terakhir dalam array
hobi.pop()
console.log(hobi)

//Slice digunakan untuk memotong array, menambahkan elemen array atau dua duanya
hobi.splice(2,0,"Bernyanyi")
console.log(hobi)

//forEach berfungsi yaitu untuk mengeksekusi setiap elemen dari index terkecil ke yang terbesar.
hobi.forEach(function(e, i){
    console.log (`Hobi saya yang ke : ${i+1} Adalah ${e}`)
});

//map berfungsi sama dengan foreach cmn map ini bisa mengembalikan nilai array
let newHobi = hobi.map(function(e, i){
    return `Hobi saya yang ke : ${i+1} Adalah ${e}`;
})
console.log(newHobi)

//sort berfungsi mengurutkan sebuah nilai dari array sesuai dengan karakter pertamanya dahulu 
let angka = [1,3,4,5,6,8,10]
angka.sort(function(a,b){
    return a-b;
});
console.log(angka) 

//filter berfungsi untuk mencari element pada array untuk banyak nilai
let angka2 = angka.filter(function(e){
    return e > 5; 
})
console.log(angka2)

//find berfungsi untuk mencari element pada array akan tetapi hanya satu nilai
let angka3 = angka.find(function(e){
    return e == 5;
})
console.log(angka3)