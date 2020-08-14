function palindrome(str) {
    var x = str.length-1;
    
    if (x == 1 || str.length == 0) {
    return "palindrome";
    } else if (str[0] === str[x]) {
    return palindrome(str.slice(1, x));
    } else {
      return "Bukan palindrome";
    }
    
    
    };
    
console.log(palindrome("malam"))
    
    