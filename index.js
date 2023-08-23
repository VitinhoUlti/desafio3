function msk(){
    let inicio = document.getElementById("iinicio");
    let fim = document.getElementById("ifim");
    let passos = document.getElementById("ipassos");
    let contagem = document.getElementById("foto")
    let msg = document.getElementById("msg")

    msg.innerText = 'Contando:'
    contagem.style.opacity = 2;

    if(inicio.value <= 0 || fim.value<=0 || passos.value<=0 || inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0){
        window.alert("conta invalida")
        contagem.style.opacity = 0;
    }
    else {
        let a = Number(inicio.value)
        let b = Number(fim.value)
        let d = Number(passos.value)
        let c = a;
        
        if(a<b){
        for(let c = a; c<=b; c+=d){
            msg.innerHTML += `👉🏻${c} `
        }
        msg.innerHTML += `\u{2764}`
      }else{
        for(let c = a; c>=b; c-=d){
            msg.innerHTML += `👉🏻${c} `
        }
        msg.innerHTML += `\u{2764}`
      }
    }
    
}