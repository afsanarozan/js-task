const janji = new Promise((resolve, reject) =>{
    let tepati = true;
    if(tepati){
        resolve('janji ditepati')
    } else {
        reject('ingkar')
    }
})
 

janji
.then((resolve) => console.log(resolve))
.catch((reject) => console.log(reject));

let dataAkun = [{
    id : 1,
    nama : 'Afsana Rozan Naufal',
    email : 'afsanarozannaufal9@gmail.com',
    password : 'sinopal'
},{
    id : 2,
    nama : 'Monkey D Luffy',
    email : 'bakasenchou@gmail.com',
    password : 'onepiece'
}];

const login = () => {
    return new Promise((resolve,reject)=> {
    let email = 'afsanarozannaufal9@gmail.com';
    let password = 'sinopal';
    dataAkun.forEach(e => {return e})
    if(email == dataAkun[0].email && password == dataAkun[0].password ){
        resolve('anda Login')
    } else {
        reject('email atau password salah')
    }
})
}

login()
.then(resolve => console.log(resolve))
.catch(reject=>console.log(reject))

