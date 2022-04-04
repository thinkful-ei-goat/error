//two error types
// error object - throw new Error('Error message')
// error string - throw `Error Message`

let username = process.argv[2];
let password = process.argv[3];


try {
    if(username==='booklover55' && password==='password12'){
        console.log('Youve got mail')
    } 
    else if(username==='booklover55' && password==='password1'){
       throw `Thats not the password we expected` ///Error of type string
    }
    else{
        throw new Error('Incorrect username or password. Try again');  //Error of type object
    }
    
} catch (error) {
    if(typeof error === 'string'){
        console.log(error);
    }else{
        console.log(error.message);
    }
} finally{
    console.log('this is going to happen, error or no error')
}

console.log('We get here')