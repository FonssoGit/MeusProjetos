const items = [
    {
        id: 0,
        nome: 'Camiseta',
        img: '/image.jpg',
        quantidade: 0
    },
    {
        id: 1,
        nome: 'Short',
        img: '/image.jpg',
        quantidade: 0
    },
    {
        id: 2,
        nome: 'Sapato',
        img: '/image.jpg',
        quantidade: 0
    },
]

inicializarLoja = () =>{

    var containerProdutos = document.getElementById('produtos')
    items.map((val)=>{
        containerProdutos.innerHTML += `
        <div class="produtos-single">
            <img src="`+val.img+`"/>
            <p>`+val.nome+`</p>
            <a key="`+val.id+`" href="#">Adicionar ao carrinho</a>
        </div>
        `;
    })
}
inicializarLoja()


atualizarCarrrinho = ()=>{
    var containerCarrinho = document.getElementById('carrinhos')
    containerCarrinho.innerHTML = ""
    items.map((val)=>{
        if(val.quantidade > 0){
            containerCarrinho.innerHTML += `
                <p>`+val.nome+` | Quantidade `+val.quantidade+`</p>
                <hr>
            `;
        }
    })
}
var links = document.getElementsByTagName('a')

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(){
        let key = this.getAttribute('key')
        items[key].quantidade++
        atualizarCarrrinho()
        return false
    })
    
}