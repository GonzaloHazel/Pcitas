function login() {
    var user, pass;
    user = document.getElementById("email").value;
    pass = document.getElementById("contra").value;
    if (user == "gonzalo@gmail.com" && pass == "123") {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Bienveido',
            showConfirmButton: false,
            timer: 1500

        })
        console.log("Va te faire foutre, chien galeux, ça marche déjà. ....");
        setTimeout(() => {
            window.location = "/index.html";

            //Coger todos los elementos que quieres descargar.
            var aElements = document.getElementsByClassName('aDescargar');
            //A cada uno de ellos le asignas el atributo download a true.

            for (a of aElements) {
                //Como tiene el atributo downlaod=true, simplemente haciendo click la imagen se descarga
                a.click();
            }

        }, 1700)

    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Usuario y/o Contra incorrecta, vuelva a intertarlo',
            footer: '<a href="">No recuerdas tu contrasena?</a>'
        })
    }

}

function registro() {
    Swal.fire({
        title: 'En mantenimiento!',
        text: 'Este apartado aun se encuentra bajo desarrollo, quizas al rato quede...',
        imageUrl: '/Login/img/ora.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Apoko si?',
    })
}