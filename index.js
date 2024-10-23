

//Gör så att en ruta kommer upp där man kan fylla i usernamne och password
let password = prompt("Enter password");
let username = prompt ("Enter Username");

function isValidPassword(password, username) {
    if (password.length < 8) {
        return false;
    } 
    else if (password.includes(' ')) {
        return false;
    }

    else if (password.includes(username)){
        return false;
    }

    return true;
}

//Testar funktionen
isValidPassword("Beathrice", "b.hoogesteyn"); 
console.log(isValidPassword ("Beathrice", "b.hoogesteyn"))