function calcular() {
    let soma = 0;
    let vitima;

    const p1 = document.querySelector('input[name="p1"]:checked').value;
    const p2 = document.querySelector('input[name="p2"]:checked').value;
    const p3 = document.querySelector('input[name="p3"]:checked').value;
    const p4 = document.querySelector('input[name="p4"]:checked').value;
    const p5 = document.querySelector('input[name="p5"]:checked').value;
    const p6 = document.querySelector('input[name="p6"]:checked').value;
    const p7 = document.querySelector('input[name="p7"]:checked').value;
    const p8 = document.querySelector('input[name="p8"]:checked').value;
    const p9 = document.querySelector('input[name="p9"]:checked').value;
    const p10 = document.querySelector('input[name="p10"]:checked').value;

    const n1 = document.getElementById('n1').value;
    const n2 = document.getElementById('n2').value;
    const n3 = document.getElementById('n3').value;

    if (p1 === "Sim") soma++;
    if (p2 === "Sim") soma++;
    if (p3 === "Sim") soma++;
    if (p4 === "Sim") soma++;
    if (p5 === "Sim") soma++;
    if (p6 === "Sim") soma++;
    if (p7 === "Sim") soma++;
    if (p8 === "Sim") soma++;
    if (p9 === "Sim") soma++;
    if (p10 === "Sim") soma++;

    if(soma >= 1 && soma<=5){
        vitima = "SUSPEITO";
    }else if (soma>= 6 && soma<=8 ) {
        vitima = "CÚMPLICE";
    }else if (soma>=9 && soma <=10){
        vitima = "CULPADO";
    }else{
        vitima = "INOCENTE";
    }
    if(soma >= 1 && soma<=5){
        resultado_img = document.getElementById('resultado_img').src="img/suspeito.png";
    }else if (soma>= 6 && soma<=8 ) {
        resultado_img = document.getElementById('resultado_img').src="img/cumplice.jpg";
    }else if (soma>=9 && soma <=10){
        resultado_img = document.getElementById('resultado_img').src="img/culpado.jpg";
    }else{
        resultado_img = document.getElementById('resultado_img').src="img/inocente.jpg";
    }
    const resultado = `<br><p>Delegado(a): ${n1}<br> Suspeito (a): ${n2} <br> Inocente: ${n3}<br> O(a) ${n2} é considerado:<b><span class="yellow"> ${vitima}</span></b>`;
    document.getElementById('mensagem').innerHTML = `${resultado}`;
    document.getElementById('resultado_img').src = `${resultado_img}`;
}

function limpar() {
    document.getElementById('formulario').reset();
    document.getElementById('mensagem').innerHTML="";
    document.getElementById('resultado_img').src="";
}
