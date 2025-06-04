const { alterarItens, deletarItens, inserirItens } = require("../controllers/cartitemComtroller")

router.post('/item', async (req, res) => {
    res.send(await inserirItens(req.body))
})
//Alterar a quantidade item carrinho
router.put('/item/:id', async (req, res) => {
    res.send(await alterarItens(req.body, req.params.id))
})
router.delete('/item/:id', async (req, res) => {
    res.send(await deletarItens(req.params.id))
})