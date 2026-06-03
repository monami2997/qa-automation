function palindrome(str){
    str1=str.toLowerCase();
    let len=str1.length;
    for(let i=0;i<len/2;i++)
        { 
            if(str1[i] !== str1[len-1-i])
                return false;
                
        }
    return true;
}

console.log(palindrome("Madam"));
console.log(palindrome("pramod"));
