const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
            const dataDay = ['senin','selasa','rabu','kamis','jumat'];
            let cek = dataDay.find((item)=>{
               return day == item 
            })
                if (cek){
                    resolve(day)
                } else {
                    reject("tidak ada hari kerja")
                }
            
        })
}


cekHariKerja()
.then(res => console.log(res))
.catch(rej => console.log(rej))
    
const aysncAwait = async(day) => {
    try {
        const dataKerja = await cekHariKerja(day)
        console.log(dataKerja)
    } catch (err) {
        console.log(err)
    }
}

aysncAwait('selasa')