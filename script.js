//comunicação com banco de dados-no SQL- json
fetch('dados.json')
    .then(response => response.json())
    .then(banco => {console.log(banco);
        // Acessando os dados do JSON
        const produtos = banco[0].produtos;
        const vendedores = banco[1].vendedor;
        const precos = banco[2].preco;
        const imagens = banco[3].imagemproduto;
        const clientes = banco[4].cliente;

        // Exibindo os dados na página
        document.getElementById('imagem').innerHTML = imagens.imagem001;
        document.getElementById('produto').innerHTML = produtos.produto123;
        document.getElementById('preco').innerHTML ="R$"+ precos.preco789;
        document.getElementById('vendedor').innerHTML ="vendedor-"+ vendedores.vend456;  
        document.getElementById('comprador').innerHTML ="comprador-"+ clientes.cliente001;

        document.getElementById('imagem2').innerHTML = imagens.imagem002;
        document.getElementById('produto2').innerHTML = produtos.produto124;
        document.getElementById('preco2').innerHTML ="R$"+ precos.preco790;
        document.getElementById('vendedor2').innerHTML ="vendedor-"+ vendedores.vend457;
        document.getElementById('comprador2').innerHTML ="comprador-"+ clientes.cliente002;

        document.getElementById('imagem3').innerHTML = imagens.imagem003;
        document.getElementById('produto3').innerHTML = produtos.produto125;
        document.getElementById('preco3').innerHTML ="R$"+ precos.preco791;
        document.getElementById('vendedor3').innerHTML ="vendedor-"+ vendedores.vend458;
        document.getElementById('comprador3').innerHTML ="comprador-"+ clientes.cliente003;

        document.getElementById('imagem4').innerHTML = imagens.imagem004;
        document.getElementById('produto4').innerHTML = produtos.produto126;
        document.getElementById('preco4').innerHTML ="R$"+ precos.preco792;
        document.getElementById('vendedor4').innerHTML ="vendedor-"+ vendedores.vend459;
        document.getElementById('comprador4').innerHTML ="comprador-"+ clientes.cliente004;

    })
    
    
    .catch(error => console.error('Erro ao carregar o JSON:', error));  