
async function listarItens() {
    try {
        const result = await client.query(
            'SELECT * FROM cart_item WHERE cart_id = $1',
             [req.params.id]
        )
        res.status(200).json(result.rows)
       } catch (error) {
            console.log("Erro ao listar itens do carrinho", error)
            res.status(500).json({error: 'Erro ao buscar itens'})
       }  
}


module.exports = listarItens