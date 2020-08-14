const json = fetch('https://jsonplaceholder.typicode.com/users')

json
.then(response => response.json())
.then(data => {return data.map(e =>{
    console.log(`id : ${e.id} nama : ${e.name}`) ;
})});
