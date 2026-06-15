export default async function handler(req,res){

    const webhook = "https://discord.com/api/webhooks/1515873413095493684/CrM4ZnXkdRpblBt9xWod9tfb7-6i9bS7p9mhq2irgk4QRUs-Uirk0BfXvgV4DRvFNTkk";

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
