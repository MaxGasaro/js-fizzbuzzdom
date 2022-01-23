let quadrato = document.getElementById('container');
// quadrato.innerHTML = 'ciao';

for (let i = 1; i <= 100; i++) {

    if ( i % 3 == 0 && i % 5 == 0 ) {
    
        quadrato.innerHTML += "<div class='box-fizz-buzz'>" + "fizzbuzz" + "</div>"
    
    } else if ( i % 3 == 0 ) {
        
        quadrato.innerHTML += '<div class="box-fizz">' + 'fizz' + '</div>'

    } else if ( i % 5 == 0) {

        quadrato.innerHTML += '<div class="box-buzz">' + 'buzz' + '</div>'

    }  else {

        quadrato.innerHTML += '<div class="box">' + i + '</div>' 

    }

}

// quadrato.innerHTML += '<div class="box">' + i + '</div>'
