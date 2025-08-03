fetch('./card.json')
  .then(response => response.json())
  .then(produtos => {
    const container = document.getElementById("cards-container");

    produtos.forEach(produto => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}">
        <h3>${produto.nome}</h3>
        <p>${produto.descricao}</p>
        <p><strong>${produto.preco}</strong></p>
         <p><strong>${produto.unidades}</strong></p>
        <a href="https://wa.me/5519978193361?text=Olá,%20gostaria%20de%20comprar%20o%20produto:%20${encodeURIComponent(produto.nome)}" target="_blank">
        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg" alt="WhatsApp" 
        style="width: 16px; height: 16px; vertical-align: middle; margin-right: 8px; filter: invert(1);"> Chama no Whats </a>
      `;

      container.appendChild(card);
      
    });
  })
  .catch(error => {
    console.error("Erro ao carregar produtos:", error);
  });


