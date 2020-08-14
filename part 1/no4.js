let data = {
    id: 1,
    name: "Naufal Rozan Afsana",
    username: "Afsana",
    email: "afsanarozannaufal9@gmail.com",
    address: 
    {
        street: "Jl. Malowopati",
        suite: "Kartasura",
        city: "Sukoharjo",
        zipcode: "57169",
    },
    phone: "0859159911343",
    website: "Afsanarozannaufal.com",
    }
    
    // let x = {...data.address}
    // console.log(x)

    // data.name = "Afsana Rozan Naufal"
    // data.username = "Naufal"
    let biodata = {...data,
        hobby : "Coding"}
    console.log(biodata)

    biodata.name = "Afsana Rozan Naufal"
    biodata.username= "Naufal"

    let {street, city} = data.address
    console.log(`Street : ${street} `)
    console.log(`City: ${city} `)