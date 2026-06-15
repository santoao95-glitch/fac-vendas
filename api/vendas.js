export default async function handler(req,res){

    const webhook = process.env.WEBHOOK_URL;

    const {
        item,
        desconto,
        quantidade
    } = req.body;

    await fetch(webhook,{
        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify({

            embeds:[{

                title:"Nova Venda",

                color:16776960,

                fields:[

                    {
                        name:"Item",
                        value:item
                    },

                    {
                        name:"Desconto",
                        value:desconto
                    },

                    {
                        name:"Quantidade",
                        value:String(quantidade)
                    }

                ]

            }]

        })

    });

    res.status(200).json({
        sucesso:true
    });

}