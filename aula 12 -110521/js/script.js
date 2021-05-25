function createList(){

    const divRaiz = document.querySelector('div#root')
    const containerPai = document.createElement('div');
    const divProduto = document.createElement('div');
    const nomeProduto = document.createElement('span');
    const imagemProduto = document.createElement('img');
    const divPreco = document.createElement('div');
    const preco = document.createElement('span');
    const parcelas = document.createElement('span');
    const valorParcela = document.createElement('span');

    const list = data.items;
    list.forEach(element => {
        console.log(element);
    });


}