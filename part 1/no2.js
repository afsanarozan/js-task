const mtk = 100
const bahasaIndonesia = 90
const bahasaInggris = 100
const ipa = 90

const totalNilai = mtk + bahasaIndonesia + bahasaInggris + ipa;
const rata2  = totalNilai / 4;



    if (rata2 >= 90 ){
            console.log("Grade = A")
        } else if (rata2 >= 80){
            console.log("Grade = B")
        } else if (rata2 >= 70){
            console.log("Grade = C")
        } else if (rata2 >= 60){
            console.log("Grade = D")
        } else {
            console.log("Grade = E")
        }
    
console.log(`Rata Rata = ${rata2}`)