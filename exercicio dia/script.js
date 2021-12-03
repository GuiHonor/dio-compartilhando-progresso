var intervalo = setInterval(() => {carregar()}, 1000);

function carregar(){

    var msg = document.querySelector('div#msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes();
    var segundo = data.getSeconds();
    

    msg.innerHTML = `Agora são ${hora}:${minuto}:${segundo}.`

    if (hora>=6 && hora<=12)
    {
        //BOM DIA!!
       img.src = 'manha.png'
       document.body.style.background = '#deeffa'
       
    }       
     if (hora>12 && hora<18)
    {
        //BOA TARDE!!
        img.src = 'tarde.png'
        document.body.style.background = '#dc9a83'
    }

    if (hora>=18 || hora<=5)
    {
        //BOA NOITE!!
        img.src = 'noite.png'
        document.body.style.background = '#55213a'
    }

}