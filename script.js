document
.getElementById("enviar")
.addEventListener("click", async () => {

    const item =
        document.getElementById("item").value;

    const desconto =
        document.getElementById("desconto").value;

    const quantidade =
        document.getElementById("quantidade").value;

    const resposta = await fetch("/api/vendas", {

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify({
            item,
            desconto,
            quantidade
        })

    });

    if(resposta.ok){
        alert("Venda enviada.");
    }

});