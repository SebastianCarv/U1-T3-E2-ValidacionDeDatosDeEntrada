$(document).ready(function(){
    
});

var name
var surname
var email
var gender
var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

(function mostrar(){
    
    $('#name').on('change', function(){
        window.name = document.getElementById('name').value;
        console.log(name)
    })

    $('#surname').on('change', function(){
        window.surname = document.getElementById('surname').value;
        console.log(surname)
    })

    $('#email').on('change', function(){
        window.email = document.getElementById('email').value;
        console.log(email)
    })

    $('#gender').on('change', function(){
        window.gender = document.getElementById('gender').value;
        console.log(gender)
    })

    $('#cardNumber').on('change', function(){
        window.surname = document.getElementById('cardNumber').value;
        console.log(surname)
    })

    $('#expiredDate').on('change', function(){
        window.email = document.getElementById('expiredDate').value;
        console.log(email)
    })

    $('#cvv').on('change', function(){
        window.gender = document.getElementById('cvv').value;
        console.log(gender)
    })


})()

$('#btnReservar').on('click', function(){
    console.log("btn")
    console.log(vEmail())
})

//validaciones
function vName(){
    if(name.length>=2)
        return true;
    
    return false;
}

function vSurname(){
    if(surname.length>=2)
        return true;
    
    return false;
}

function vEmail(){
    if(emailRegex.test(window.email))
        return true
    else
        return false
    
}

function vCardNumber(){
    if(cardNumber.length=16){
        return true;
    }else{
        return false;
    }
}

function vExpiredDate(){
    if(expiredDate.length=5){
        return true;
    }else{
        return false;
    }
}

function vCVV(){
    if(cvv.length=3){
        return true;
    }else{
        return false;
    }
}


$('#name').on('keypress', function (e) {
    if (!/^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]*$/.test(e.target.value)) {
        e.preventDefault();
    }
});

$('#surname').on('keypress', function (e) {
    if (!/^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]*$/.test(e.target.value)) {
        e.preventDefault();
    }
});

//Comentarios
function contarcaracteres(){
		
    var total=40;
    setTimeout(function(){
    var valor=document.getElementById('contador');
    var respuesta=document.getElementById('res');
    var cantidad=valor.value.length;
    document.getElementById('res').innerHTML = cantidad + ' caractere/s, te quedan ' + (total - cantidad) ;
	if(cantidad>total){
        respuesta.style.color = "red";
    }
    else {
        respuesta.style.color = "black";
    }

    },10);
}
