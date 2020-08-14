const getMonth = (callback) =>{
    setTimeout(()=>{
        let error = false;
        let Month = ['January','February','March','April','May','Juni','July','August','September','October','November','Desember'];
        if(!error){
            callback(null, Month)
        } else{
            callback(new Error('Sory Data Not Found',[]))
        }
    },4000)


}

getMonth((x,bulan) => bulan.map(function(e){
    console.log(e) ;
}))
