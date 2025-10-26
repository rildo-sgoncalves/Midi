# Projeto de Estudo: Sample pad - Teclado Digital de Bateria

Este projeto foi desenvolvido como parte dos meus estudos de **programação front-end** utilizando **JavaScript**, **HTML** e **CSS**.  
O objetivo foi criar um **teclado digital com 9 teclas** capaz de reproduzir sons de uma bateria, acionados tanto por **cliques do mouse** quanto pelas teclas **Espaço** ou **Enter** do teclado físico.

---

## Objetivos de Aprendizado

Durante o desenvolvimento deste projeto, aprendi e pratiquei diversos conceitos importantes, incluindo:

- Captura de **eventos de clique (`click`)**, **teclas pressionadas (`keydown`)** e **teclas liberadas (`keyup`)**.
- Uso das **ferramentas de desenvolvedor (DevTools)** dos navegadores para:
  - Explorar e compreender diferentes tipos de eventos.
  - Testar comportamentos e depurar interações com o DOM.
- Implementação de **validações** para garantir:
  - Que apenas as teclas corretas disparem os sons correspondentes.
  - Que funções não sejam chamadas indevidamente através do console do navegador ou por elementos HTML não permitidos.

---

## Funcionalidades

- Interface com **9 teclas visuais** representando sons de uma bateria.
- Reprodução de áudio ao:
  - **Clicar** com o mouse sobre uma tecla.
  - Pressionar **Espaço** ou **Enter** com a tecla correspondente selecionada.
- Feedback visual opcional (como destaque ou animação) ao pressionar ou soltar as teclas.

---

## Tecnologias Utilizadas

- **HTML5** — estrutura da página e elementos interativos.  
- **CSS3** — estilização das teclas e layout responsivo.  
- **JavaScript (ES6)** — manipulação de eventos, reprodução de sons e lógica de validação.

---

## Estrutura do Projeto

```
projeto-teclado-digital/
├── index.html
├── css/
│ └── estilos.css
│ └── reset.css
├── js/
│ └── main.js
└── sons/
├── som1.mp3
├── som2.mp3
├── ...
└── som9.mp3
```

---

## Aprendizados Importantes

- Como **detectar e tratar eventos** do teclado e do mouse de forma integrada.  
- A importância de **validar a origem e o contexto das funções** chamadas em aplicações web.  
- Como utilizar o **DevTools** para investigar eventos e comportamentos do navegador em tempo real.  
- Organização de código e separação entre estrutura (HTML), estilo (CSS) e comportamento (JavaScript).

---

## Possíveis Melhorias Futuras

- Adicionar suporte a mais sons e teclas.  
- Criar uma **animação visual sincronizada** com o som reproduzido.
- Implementar **modo gravação e reprodução** de sequências tocadas.
- Tornar o teclado compatível com dispositivos móveis (toque na tela).

---

## Licença

Este projeto foi criado apenas para fins educacionais e de prática pessoal.  
Sinta-se à vontade para estudar, modificar e melhorar o código.

---
