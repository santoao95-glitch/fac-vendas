document
.getElementById("enviar")
.addEventListener("click", async () => {

    const item =
        document.getElementById("item").value;

    const desconto =
        document.getElementById("desconto").value;

    const quantidade =
        document.getElementById("quantidade").value;

    if (!item || !desconto || !quantidade) {
        alert("Preencha todos os campos.");
        return;
    }

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
        alert("Venda enviada com sucesso!");
    } else {
        alert("Erro ao enviar venda.");
    }

});
