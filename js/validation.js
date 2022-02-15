var name
var surname
var email
var gender
var textRegex = /^[A-Z .]+$/i; //^[a-zA-Z ]+$
var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
var numberRegex = /^[0-9]+$/;
var quantity 
var coments 
var cardNumber 
var expiredDate 
var cvv 
var checkin 
var checkout 
//fecha seleccionada
var diaN
var mesN
var axoN

var diaD
var mesD
var axoD

var expiredDateDay;
var expiredDateYear;

(function mostrar(){
    
    $('#name').on('change keyup paste', function(){
        window.name = document.getElementById('name').value;
        if(vName()){
            document.getElementById('name').style.borderColor="lawngreen";
            document.getElementById('nameSpan').innerHTML="¡Campo llenado correctamente!"
            document.getElementById('nameSpan').style.color="green"
        }else{
            document.getElementById('name').style.borderColor="red";
            document.getElementById('nameSpan').innerHTML="¡Introduce un nombre correcto!"
            document.getElementById('nameSpan').style.color="red"
        }  
            
    })

    $('#surname').on('change keyup paste', function(){
        window.surname = document.getElementById('surname').value;
        if(vSurname()){
            document.getElementById('surname').style.borderColor="lawngreen";
            document.getElementById('surnameSpan').innerHTML="¡Campo llenado correctamente!"
            document.getElementById('surnameSpan').style.color="green"
        }else{
            document.getElementById('surname').style.borderColor="red";
            document.getElementById('surnameSpan').innerHTML="¡Introduce un apellido correcto!"
            document.getElementById('surnameSpan').style.color="red"
        }  
    })

    $('#email').on('change keyup paste', function(){
        window.email = document.getElementById('email').value;
        if(vEmail()){
            document.getElementById('email').style.borderColor="lawngreen";
            document.getElementById('emailSpan').innerHTML="¡Campo llenado correctamente!"
            document.getElementById('emailSpan').style.color="green"
        }else{
            document.getElementById('email').style.borderColor="red";
            document.getElementById('emailSpan').innerHTML="¡Introduce un correo electrónico correcto!"
            document.getElementById('emailSpan').style.color="red"
        }  
    })

    $('#gender').on('change keyup paste', function(){
        window.gender = document.getElementById('gender').value;
        if(vGender()){
            document.getElementById('gender').style.borderColor="lawngreen";
            document.getElementById('genderSpan').innerHTML="¡Campo llenado correctamente!"
            document.getElementById('genderSpan').style.color="green"
        }else{
            document.getElementById('gender').style.borderColor="red";
            document.getElementById('genderSpan').innerHTML="¡Debes seleccionar una opción!"
            document.getElementById('genderSpan').style.color="red"
        }  
    })

    $('#quantity').on('change keyup paste', function(){
        window.quantity = document.getElementById('quantity').value;
        if(vQuantity()){
            document.getElementById('quantity').style.borderColor="lawngreen";
            document.getElementById('quantitySpan').innerHTML="¡Campo llenado correctamente!"
            document.getElementById('quantitySpan').style.color="green"
        }else{
            document.getElementById('quantity').style.borderColor="red";
            document.getElementById('quantitySpan').innerHTML="¡Ingresa una cantidad entre 1 y 10!"
            document.getElementById('quantitySpan').style.color="red"
        }  
    })

    $('#coments').on('change keyup paste', function(){
        window.coments = document.getElementById('coments').value;
        if(vComents()){
            document.getElementById('coments').style.borderColor="lawngreen";
            document.getElementById('comentsSpan').innerHTML="¡Campo llenado correctamente!"
            document.getElementById('comentsSpan').style.color="green"
        }else{
            document.getElementById('coments').style.borderColor="red";
            document.getElementById('comentsSpan').innerHTML="¡Comentario demasiado largo o demasiado corto!"
            document.getElementById('comentsSpan').style.color="red"
        }  
    })

    $('#cardNumber').on('change keyup paste', function(){
        window.cardNumber = document.getElementById('cardNumber').value;
        if(vCardNumber()){
            document.getElementById('cardNumber').style.borderColor="lawngreen";
            document.getElementById('cardNumberSpan').innerHTML="¡Campo llenado correctamente!"
            document.getElementById('cardNumberSpan').style.color="green"
        }else{
            document.getElementById('cardNumber').style.borderColor="red";
            document.getElementById('cardNumberSpan').innerHTML="¡Introduce los 16 digitos de tu tarjeta!"
            document.getElementById('cardNumberSpan').style.color="red"
        }  
    })

    $('#expiredDate').on('change keyup paste', function(){
        window.expiredDate = document.getElementById('expiredDate').value;
        var cont = expiredDate.length
        if(cont == 2){
            document.getElementById('expiredDate').value=expiredDate+"/";
        }    
        if(window.expiredDate.length>=5){
            var expiredDate2 = expiredDate.split("/")
            window.expiredDateDay = expiredDate2[0];
            window.expiredDateDay = parseInt(expiredDateDay,10)
            window.expiredDateYear = expiredDate2[1]
            window.expiredDateYear = parseInt(expiredDateYear,10)
            window.expiredDateYear = expiredDateYear+2000
        }

        if(vExpiredDate()){
            document.getElementById('expiredDate').style.borderColor="lawngreen";
            document.getElementById('expiredDateSpan').innerHTML="¡Campo llenado correctamente!"
            document.getElementById('expiredDateSpan').style.color="green"
        }else{
            document.getElementById('expiredDate').style.borderColor="red";
            document.getElementById('expiredDateSpan').innerHTML="¡Introduce una fecha correcta!"
            document.getElementById('expiredDateSpan').style.color="red"
        }  
    })

    $('#cvv').on('change keyup paste', function(){
        window.cvv = document.getElementById('cvv').value;
        if(vCvv()){
            document.getElementById('cvv').style.borderColor="lawngreen";
            document.getElementById('cvvSpan').innerHTML="¡Campo llenado correctamente!"
            document.getElementById('cvvSpan').style.color="green"
        }else{
            document.getElementById('cvv').style.borderColor="red";
            document.getElementById('cvvSpan').innerHTML="¡Introduce los tres dígitos de tu CVV!"
            document.getElementById('cvvSpan').style.color="red"
        }  
    })

    $('#checkin').on('change keyup paste', function(){
        window.checkin = document.getElementById('checkin').value;
        var checkin2 = checkin.split("-");
        window.axoN = checkin2[0]
        window.axoN = parseInt(axoN,10)
        window.mesN = checkin2[1]
        window.mesN = parseInt(mesN,10)
        window.diaN = checkin2[2]
        window.diaN = parseInt(diaN,10)

        if(vCheckin()){
            document.getElementById('checkin').style.borderColor="lawngreen";
            document.getElementById('checkinSpan').innerHTML="¡Campo llenado correctamente!"
            document.getElementById('checkinSpan').style.color="green"
        }else{
            document.getElementById('checkin').style.borderColor="red";
            document.getElementById('checkinSpan').innerHTML="¡Introduce una fecha de hoy o días posteriores!"
            document.getElementById('checkinSpan').style.color="red"
        }  

    })

    $('#checkout').on('change keyup paste', function(){
        window.checkout = document.getElementById('checkout').value;
        var checkout2 = checkout.split("-");
        window.axoD = checkout2[0]
        window.axoD = parseInt(axoD,10)
        window.mesD = checkout2[1]
        window.mesD = parseInt(mesD,10)
        window.diaD = checkout2[2]
        window.diaD = parseInt(diaD,10)
        if(vCheckout()){
            document.getElementById('checkout').style.borderColor="lawngreen";
            document.getElementById('checkoutSpan').innerHTML="¡Campo llenado correctamente!"
            document.getElementById('checkoutSpan').style.color="green"
        }else{
            document.getElementById('checkout').style.borderColor="red";
            document.getElementById('checkoutSpan').innerHTML="¡Introduce una fecha de mañana o 10 días posteriores!"
            document.getElementById('checkoutSpan').style.color="red"
        }  
    })

})()




$('#btnReservar').on('click', function(){
    var entrada = false;
    if(vName()&&vSurname()&&vEmail()&&vGender()&&vCheckin()&&vCheckout()&&vQuantity()&&vComents()&&vCardNumber()&&vExpiredDate()&&vCvv()){
        entrada = true;
    }


    if(entrada){
        swal({
            title: "SE HA REGISTRADO TU RESERVACIÓN",
            text: "Se envió correctamente el formulario",
            icon: "success",
            button: "OK",
          });

    }else{
        swal({
            title: "OCURRIO UN ERROR!",
            text: "Debes llenar todos los campos correctamente!",
            icon: "error",
            button: "Ok",
          });
    }

})

//validaciones
function vName(){
    if(textRegex.test(window.name) && window.name.length>=2){  
        return true;

    }  
    return false;
}

function vSurname(){
    if(textRegex.test(window.surname) && window.surname.length>=2)
        return true;
    
    return false;
}

function vEmail(){
    if(emailRegex.test(window.email))
        return true
    else
        return false
    
}

function vGender(){
    if(window.gender=='m' || window.gender =='h')
        return true
    
    return false
}

function vQuantity(){
    if(window.quantity>0 && window.quantity<=10)
        return true

    return false
}

function vComents(){
    if(window.coments.length>0 && window.coments.length<=200)
        return true

    return false
}

function vCardNumber(){
    if((window.cardNumber.length==16)&& numberRegex.test(window.cardNumber))
        return true
    
    return false
}


function vExpiredDate(){
    var fechaA = new Date();
    var axoActual = fechaA.getFullYear();    
    if(window.expiredDate.length==5 && ((window.expiredDateDay>0 && window.expiredDateDay <= 12) && window.expiredDateYear >= axoActual && window.expiredDateYear <= axoActual+5) ){
        return true
    }
    
    return false
}

function vCvv(){
    if(window.cvv.length ==3 && numberRegex.test(window.cvv))
        return true

    return false
}

function vCheckin(){

    var fechaA = new Date();
    var axoActual = fechaA.getFullYear();
    axoActual = parseInt(axoActual);
    var mesActual = fechaA.getMonth() + 1;
    var diaActual = fechaA.getDate();
    if(window.checkin != undefined &&(window.axoN>=axoActual && window.mesN >= mesActual && window.axoN<=axoActual+10)){
        if((window.diaN>=diaActual && window.mesN==mesActual)||(window.diaN<diaActual&&(window.mesN>mesActual||window.axoN>axoActual)))
            return true
        else
            return false
    }
        

    return false
}

function vCheckout(){
    if(window.checkout != undefined &&(window.axoD >= window.axoN && window.mesD >=window.mesN && window.diaD>window.diaN)){
        if((window.diaD>=window.diaN && window.mesD==window.mesN)||(window.diaD<window.diaN&&(window.mesD>window.mesN||window.axoD>window.axoN)))
            return true
        else
            return false
     
    }
        

    return false
}

$(document).ready(function(){
    $('#expiredDate').on('keypress', function (e) {
        if (!/^[0-9 /]*$/.test(e.target.value)) {
            e.preventDefault();
        }
    });

    $('#cardNumber').on('keypress', function (e) {
        if (!/^[0-9 /]*$/.test(e.target.value)) {
            e.preventDefault();
        }
    });

    $('#cvv').on('keypress', function (e) {
        if (!/^[0-9 /]*$/.test(e.target.value)) {
            e.preventDefault();
        }
    });

    //Bloqueando fechas menores al dia
    var fechaA = new Date();
    var axo = fechaA.getFullYear();
    var _mes = fechaA.getMonth() + 1;
    var _dia = fechaA.getDate();
    if (_mes < 10){
        var mes ="0"+_mes;
    } else {
        var mes = _mes;
    }

    if (_dia < 10){
        var dia ="0"+_dia;
    } else {
        var dia = _dia;
    }

    document.getElementById("checkin").setAttribute('min', axo+"-"+mes+"-"+dia);
    document.getElementById("checkout").setAttribute('min',axo+"-"+mes+"-"+parseInt(dia+1))

})