//let usuario = document.getElementById("usuario")
//let pass = document.getElementById("password")


usrot = "droga"
passt = "2846"

const getValueInput = () => {
    let usuario = document.getElementById("usuario").value;
    let pass = document.getElementById("password").value;

    if (usuario == usrot && pass == passt) {
        //var aviso = document.getElementById("error-login")
        document.getElementById("error-login1").innerHTML = "Login correcto";

        //para trabajar...si terminas y vas a subir al servidor borralo
        //open("/TRABAJOS%20MIGUEL/PAGINAS%20WEB/HTML5/Tienda/Drogas/home.html")
        //Desbloquea es para subir al servidor
        open("/Shiny-Flakes/home.html")
        //open("home.html")
    }
    if (usuario != usrot) {
        //var aviso = document.getElementById("error-login")
        document.getElementById("error-login2").innerHTML = "Usuario incorrecto";
    }
    if (pass != passt) {
        //var aviso = document.getElementById("error-login")
        document.getElementById("error-login3").innerHTML = "Contraseña incorrecto";
    }


}
const getValueReset = () => {
    document.getElementById("error-login1").innerHTML = "";
    document.getElementById("error-login2").innerHTML = "";
    document.getElementById("error-login3").innerHTML = "";
    //document.getElementById("usuario").innerHTML = "";
    $("#us").html('<input name="usuario" placeholder="Usuario" class="form-control" type="text" id="usuario">');
    //document.getElementById("password").innerHTML = "";
    $("#ps").html('<input class="form-control" id="password" type="password" placeholder="password" name="password" data-minLength="5" data-error="some error" required />');
}
const getValueRegister = () => {
    document.getElementById("msj-register").innerHTML = "¡Rellena el formulario!";
}
const obtenerUsuariok = () => {
    document.getElementById("mostrar-usuario").innerHTML = "Tu usuario es--> droga";
    document.getElementById("mostrar-contraseña").innerHTML = "Tu contraseña es--> 2846";
}


var avatar = document.getElementById("avatar")
avatar.onclick = function () {
    alert("No pierdas el tiempo inicia sesion Ya!")
}



//envio de email
emailjs.init('user_zByTB2OyK8sWofFePBZdB')
var subject = "Lyrics-Music"
const phone = document.getElementById('phone');
const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Enviando...';

        const serviceID = 'default_service';
        const templateID = 'gmail';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
                alert('Muchas Gracias por tu comentario!');
            }, (err) => {
                btn.value = 'Send Email';
                alert(JSON.stringify(err));
            });
    });


let btnSe= document.getElementById("btn-search")
btnSe.onclick = function () {
    let txtSe = document.getElementById("search").value

}
    