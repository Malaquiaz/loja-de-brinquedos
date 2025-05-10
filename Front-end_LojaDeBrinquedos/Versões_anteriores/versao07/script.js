function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.style.display = (sidebar.style.display === 'none' || sidebar.style.display === '') ? 'block' : 'none';
  }

  function carregarGaleria(categoria) {
    // Aqui adicionar lógica para carregar a galeria da categoria selecionada; A FUNÇÃO PRECISA SER TESTADA COM O BACKEND E O BANCO.
   
   /* const produtosDaCategoria = produtos.filter(produto => produto.categoria === categoria);
    alert('Carregar galeria da categoria: ' + categoria);
    console.log('Produtos da categoria', categoria + ':', produtosDaCategoria); */

    //Apenas para teste exibir um alerta para demonstração.
    alert('Carregar galeria da categoria: ' + categoria);
  }