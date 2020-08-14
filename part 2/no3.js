
function seleksiNilai(nilaiAwal,nilaiAkhir,dataArray){
    

    if  (dataArray.length < 5 ){
        console.log("Masukkan Array Lebih dari 5")
    } else if(nilaiAwal > nilaiAkhir){
        console.log("Nilai akhir harus lebih besar dari nilai awal")
    } 
    else {
    dataArray.sort(function(a,b){
        return a-b;
        });


    
    let data2 = dataArray.filter(function(e){
        return e >= nilaiAwal && e <= nilaiAkhir;
    })
    console.log(data2)
    }
}

seleksiNilai(2,40,[5,15,10,25,40,20,30])
