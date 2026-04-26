# Portfolio | Thiago Martins

<div align="center">
  <p><strong>"A única maneira de fazer um trabalho excelente é amar o que você faz." — Steve Jobs</strong></p>
</div>

<hr />

## 🚀 Sobre o Projeto

Este portfólio atua como um hub central para meus projetos e experimentações técnicas. Embora minha especialização esteja concentrada no Back-end,
este projeto reflete minha convicção de que a excelência em engenharia desoftware abrange desde a organização rigorosa do código até a entrega de uma interface fluida e intuitiva.

> **Nota de Transparência:** Este projeto ainda não está na sua versão final. Decidi publicá-lo agora porque o
> "pensamento de perfeição" estava gerando mais adiamentos do que progresso. Então isso é um trabalho em constante evolução.

## 🏗️ Arquitetura e Organização

O diferencial deste projeto não está apenas no que é visto no navegador, mas em como o código foi estruturado.
A organização das pastas foi pensada para simular um ambiente de produção complexo, separando responsabilidades:

- **Modularização de Estilos:** O CSS não é um arquivo único e confuso. Ele foi fragmentado em `global`, `pages` e `partials` para facilitar a manutenção e escalabilidade.
- **Separação de Funções:** Scripts de lógica (como o sistema de tradução) estão isolados, permitindo que a interface cresça sem poluir a regra de negócio do front-end.
- **Padrão Profissional:** Estrutura preparada para integração com frameworks ou sistemas mais robustos no futuro.

## 🛠️ Tecnologias Utilizadas

Inspirado na filosofia de design minimalista, utilizei uma stack leve e eficiente:

* **Linguagens:** HTML5, CSS3, JavaScript (ES6+).
* **Design:** UI/UX focado em White Space e Tipografia (Apple-inspired).
* **Recursos:** Sistema de internacionalização (i18n) via JS nativo.

## 📂 Estrutura de Pastas
<br>
<pre>
assets/
├── css/
│   ├── components/
│   │   └── modal.css            # Estilos específicos do modal de projetos
│   ├── global/                  # Estilos base que valem para o projeto inteiro
│   │   ├── elements.css
│   │   ├── fonts.css
│   │   ├── global.css           # Importa tudo e define o reset geral
│   │   ├── normalize.css        # Normalização entre navegadores
│   │   └── variables.css        # Variáveis de cor, espaçamento e transições
│   └── pages/
│       └── index/
│           ├── index.css        # Importa os partials da página
│           └── partials/        # Um arquivo CSS por seção da página
│               ├── about.css
│               ├── contact_form.css
│               ├── footer.css
│               ├── header.css
│               ├── hero.css
│               ├── quote.css
│               └── work.css
├── documents/                   # Pasta para arquivos PDF e documentos
│   └── THIAGO MARTINS.pdf       # Currículo profissional
├── images/
│   └── global/                  # Imagens usadas em todo o site
│       ├── portfolio_photo.png
│       ├── sunny.jpeg           # Foto do Sunny (Pet)
│       └── thiago.JPG           # Foto de perfil
└── js/
    ├── global/                  # Scripts que rodam em todas as páginas
    │   ├── dependencies.js      # Carregamento de libs externas (GSAP, Lucide)
    │   ├── global.js            # Inicialização geral (menu, scroll, ano)
    │   └── language-translate.js# Sistema de internacionalização (i18n)
    └── pages/                   # Scripts específicos por página ou função
        ├── index/
        │   └── index.js         # Lógica da página inicial
        └── work/
            └── modal.js         # Controle de abertura/fechamento do modal
├── .gitignore                   # Arquivos ignorados pelo Git
├── index.html                   # Página principal
├── README.md                    # Documentação do projeto
└── workspace.code-workspace     # Configuração do ambiente VS Code
</pre>
<br>

## 🌐 **Como visualizar**

Você pode conferir o resultado atual rodando o projeto localmente ou através do link oficial:

👉 [Visualizar Portfólio Online](https://thiagomartinsasilva.github.io/Portfolio/)

<br>

<div align="center">
<sub>Desenvolvido com o ❤️ por <a href="https://thiagomartinsasilva.github.io/Portfolio/">Thiago Martins</a></sub>
</div>