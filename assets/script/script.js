let colorActual = "";


function pintar(colorFondo, colorTexto) {
    if (colorFondo === colorActual) {
        alert("¡Basta de tocar al gato!");
        return;
    }
    let texto = ["#head h1", "footer p"];
    let fondo = ["#head", ".box", "footer"]
    texto.forEach(function(t) {
        let colort = document.querySelectorAll(t);
        colort.forEach(function(c) {
            c.style.color = colorTexto;
        });
    })
    fondo.forEach(function(f) {
        let colorf = document.querySelectorAll(f);
        colorf.forEach(function(f) {
            f.style.backgroundColor = colorFondo;
            f.style.borderColor = colorFondo;
        });
    })
    colorActual = colorFondo;
}

