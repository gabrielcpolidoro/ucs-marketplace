const produtos = [
    {
        'nome': 'Elaboração de Portfólio em Artes Visuais - Online Síncrono',
        'color': 'purple',
        'codigo': 'CE002',
        'preco_anterior': '',
        'preco_agora': 'R$ 159,00',
    },
    {
        'nome': 'Energy Plus - Módulo Básico - Online Síncrono',
        'color': 'purple',
        'codigo': 'CE003',
        'preco_anterior': '',
        'preco_agora': 'R$ 159,00',
    },
    {
        'nome': 'O Acordo de Paris e o Monitoramento do Cumprimento das Metas dos Países (NDCs) - Online Síncrono',
        'color': 'green',
        'codigo': 'CE004',
        'preco_anterior': '',
        'preco_agora': 'R$ 159,00',
    },
    {
        'nome': 'E-Commerce: A Segurança no Ambiente de Compras Online - Modalidade EAD',
        'color': 'teal',
        'codigo': 'CE005',
        'preco_anterior': '',
        'preco_agora': 'R$ 159,00',
    },
    {
        'nome': 'LGPD nas Organizações: O Essencial da Nova Lei Informacional - Online Síncrono',
        'color': 'orange',
        'codigo': 'CE006',
        'preco_anterior': 'R$ 149,00',
        'preco_agora': 'R$ 134,00',
    },
    {
        'nome': 'Neurociência e Educação - Online Síncrono',
        'color': 'red',
        'codigo': 'CE007',
        'preco_anterior': 'R$ 149,00',
        'preco_agora': 'R$ 134,00',
    },
    {
        'nome': 'PCR Convencional e em Tempo Real - Caxias do Sul',
        'color': 'red',
        'codigo': 'CE008',
        'preco_anterior': 'R$ 149,00',
        'preco_agora': 'R$ 134,00',
    },
    // {
    //     'nome': 'Cinematografia e Movimentos de Câmera - Online Síncrono',
    //     'color': 'indigo',
    //     'codigo': 'CE009',
    //     'preco_anterior': 'R$ 149,00',
    //     'preco_agora': 'R$ 134,00',
    // },
    // {
    //     'nome': 'Propaganda Boca a Boca Tradicional e Eletrônica no Contexto do E-commerce - EAD',
    //     'color': 'indigo',
    //     'codigo': 'CE010',
    //     'preco_anterior': 'R$ 149,00',
    //     'preco_agora': 'R$ 134,00',
    // },
    // {
    //     'nome': 'Excel Avançado - Online Síncrono',
    //     'color': 'cyan',
    //     'codigo': 'CE011',
    //     'preco_anterior': 'R$ 149,00',
    //     'preco_agora': 'R$ 134,00',
    // },
    // {
    //     'nome': 'Modelagem de Software para Games e App\'s - Online Síncrono',
    //     'color': 'cyan',
    //     'codigo': 'CE012',
    //     'preco_anterior': 'R$ 149,00',
    //     'preco_agora': 'R$ 134,00',
    // },
    // {
    //     'nome': 'Libras - Básico - Nível 2 - Online Síncrono',
    //     'color': 'red',
    //     'codigo': 'CE012',
    //     'preco_anterior': 'R$ 149,00',
    //     'preco_agora': 'R$ 134,00',
    // }
];

document.addEventListener('DOMContentLoaded', function () {
    produtos.forEach(function (item) {
        let productItemBase = document.querySelector('.product-item:last-child'),
            newItemNode = productItemBase.cloneNode(true);

        newItemNode.querySelector('a').title = 'Curso de Extensão: ' + item.nome;
        newItemNode.querySelector('.card-title').innerText = item.nome;
        newItemNode.querySelector('.card-img-top').style.backgroundColor = 'var(--' + item.color + ')';
        newItemNode.querySelector('.card-subtitle').innerText = item.codigo;
        newItemNode.querySelector('.card-text del').innerText = item.preco_anterior;
        newItemNode.querySelector('.card-text b').innerText = item.preco_agora;

        productItemBase.parentNode.insertBefore(newItemNode, productItemBase.nextSibling);

    })
})