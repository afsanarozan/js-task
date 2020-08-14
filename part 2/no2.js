// const name = [
//     'Abigail', 'Alexandra', 'Alison',
//     'Amanda', 'Angela', 'Bella',
//     'Carol', 'Caroline', 'Carolyn',
//     'Deirdre', 'Diana', 'Elizabeth',
//     'Ella', 'Faith', 'Olivia', 'Penelope'];

// function searchName(key, num ,callback){   
    
// }


// searchName("Amanda")
var names = [
        'Abigail', 'Alexandra', 'Alison',
        'Amanda', 'Angela', 'Bella',
        'Carol', 'Caroline', 'Carolyn',
        'Deirdre', 'Diana', 'Elizabeth',
        'Ella', 'Faith', 'Olivia', 'Penelope'];
/**
 * Array filters items based on search criteria (query)
 */

function searchName(keyword,i) {

    const filterNama = names.filter(function(e) {
    return e.toLowerCase().indexOf(keyword.toLowerCase()) > -1});
    
    let batas = filterNama.slice(0,i)

    console.log(batas.map(callback => {
      if(batas.length >= i){
        console.log(`data`)
      } else {
        console.log()
      }
      return callback;
    }));
   
    
}
    
searchName('an',6)
