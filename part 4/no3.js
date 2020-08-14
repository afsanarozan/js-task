function devideAndSort(num){

    let arr = num.toString().split('0')
    let urutkanIndex = arr.map(e => {
       return e.split('').sort().join('')
    });
    return urutkanIndex.join('')
}
console.log(devideAndSort(5956560159466056))
