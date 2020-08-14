function reverseWord(str){
    let arr = str.split(" "); 
    let x = arr.length -1

    let hasil = ''
    for (x; x >= 0; x--){
     hasil += arr[x]
     }
     
     console.log(hasil)

 
     let balik = arr.reverse();
     console.log(balik.join(' '))
    
     
 }
 console.log(reverseWord("Saya Sedang Makan"))
 