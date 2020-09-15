const key = 2;
var input = document.getElementById('input');
var result = document.getElementById('result');

const inputHandler = function(e){
    update();
}

function update(){
    string = input.value;
    encrypted = caesar(string);
    result.innerText = encrypted;
}

let caesar = (str) => {
    return str.toUpperCase().replace(/[A-Z]/g, c => {
        if(c.charCodeAt(0) > 90 || c.charCodeAt(0) < 65) return c;
        if(c.charCodeAt(0) + key > 90) return String.fromCharCode(65 + (c.charCodeAt(0) - 90) + key);
        return String.fromCharCode(c.charCodeAt(0) + key)
    });
}

input.addEventListener('input', inputHandler);