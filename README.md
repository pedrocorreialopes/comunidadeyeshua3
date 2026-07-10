# Comunidade Yeshuá — Site de Evangelização

Site institucional e de evangelização da **Comunidade Yeshuá**, com design inspirado no Sagrado Coração de Jesus, tons vinho/dourado, tipografia clássica (serifada) e uma experiência de entrada marcante: a página inicial apresenta uma grande imagem do Coração de Jesus com a mensagem **"Entre, a porta está aberta"**, e ao clicar no coração, um menu elegante em tela cheia se abre com todas as seções do site.

## ✨ Conceito visual

- **Paleta**: vinho (`#6b1420`), dourado (`#d4af37`), creme (`#faf5ea`) — remetendo a paramentos litúrgicos e ouro sacro.
- **Tipografia**: Cormorant Garamond / EB Garamond (serifadas, elegantes) + Montserrat (para elementos de interface).
- **Interações**: coração pulsante (efeito "heartbeat"), partículas douradas flutuantes, menu overlay em tela cheia com grade de ícones, animações de revelação ao rolar a página (`scroll reveal`).
- **Ícones**: Font Awesome 6.
- **Imagens**: fotos e pinturas de domínio público / uso livre (Sagrado Coração de Jesus, vitrais, altares, terço, Bíblia, Papa Francisco, música de louvor, mãos ajudando, etc.), todas armazenadas em `images/`.

## ✅ Funcionalidades já implementadas

1. **Página Inicial (`index.html`)**
   - Hero em tela cheia com imagem do Sagrado Coração de Jesus, mensagem "Entre, a porta está aberta" e versículo (Ap 3,20).
   - Coração clicável que abre o **menu overlay** com todas as páginas do site.
   - Seção de boas-vindas, cards de destaque (Oração, Leitura da Palavra, Músicas, Testemunhos) e chamada para ação (Espaço do Benfeitor).
2. **Menu overlay compartilhado** em todas as páginas internas (acessível também pelo botão "Menu" no cabeçalho fixo).
3. **Oração (`oracao.html`)** — orações tradicionais + formulário de pedido de oração gravado na tabela `prayer_requests` (Table API), com listagem dinâmica das últimas intenções.
4. **Formação (`formacao.html`)** — cursos e trilhas de formação cristã.
5. **Catequese (`catequese.html`)** — turmas (infantil, 1ª Eucaristia, Crisma, RICA, etc.).
6. **Notícias da Igreja (`noticias.html`)** — cards de notícias sobre o Papa, liturgia, documentos da Igreja.
7. **Galeria de Imagens (`galeria.html`)** — grade de fotos com lightbox (clique para ampliar).
8. **Espaço do Benfeitor (`benfeitor.html`)** — formas de contribuição e chamada para doações.
9. **Testemunhos (`testemunhos.html`)** — listagem dinâmica de testemunhos + formulário de envio, gravado na tabela `testimonials` (Table API).
10. **Músicas Católicas (`musicas.html`)** — playlist de sugestões de louvor e adoração.
11. **Meditação (`meditacao.html`)** — exercício visual de respiração/silêncio + caminhos de meditação católica (Lectio Divina, Via-Sacra, Adoração).
12. **Leitura da Palavra (`leitura-da-palavra.html`)** — trecho do Evangelho em destaque, data do dia dinâmica, trilhas de leitura bíblica.
13. **Sobre Nós (`sobre.html`)** e **Contato (`contato.html`)** — história/missão da Comunidade e formulário de contato (front-end apenas, sem envio real de e-mail).
14. **Rodapé padronizado** em todas as páginas com links de navegação, redes sociais (placeholders) e o crédito **"Desenvolvido por Pedro Correia Lopes Filho"**.

## 🗺️ Mapa de páginas (entry points)

| Página | Arquivo | Descrição |
|---|---|---|
| Início | `/index.html` | Hero do Coração de Jesus + menu |
| Oração | `/oracao.html` | Orações + pedidos de oração |
| Leitura da Palavra | `/leitura-da-palavra.html` | Evangelho do dia e trilhas bíblicas |
| Meditação | `/meditacao.html` | Silêncio, Lectio Divina, Via-Sacra |
| Formação | `/formacao.html` | Cursos e formação cristã |
| Catequese | `/catequese.html` | Turmas e sacramentos |
| Músicas Católicas | `/musicas.html` | Playlist de louvor |
| Notícias da Igreja | `/noticias.html` | Notícias e mensagens do Papa |
| Galeria de Imagens | `/galeria.html` | Fotos com lightbox |
| Testemunhos | `/testemunhos.html` | Histórias de fé + envio |
| Espaço do Benfeitor | `/benfeitor.html` | Formas de doação |
| Sobre Nós | `/sobre.html` | História e missão |
| Contato | `/contato.html` | Formulário de contato |

Nenhuma página recebe parâmetros de URL — toda a navegação é feita via links estáticos e o menu overlay.

## 🗄️ Dados e armazenamento (Table API)

O site usa a **RESTful Table API** fornecida pela plataforma para funcionalidades dinâmicas simples (sem backend próprio):

### Tabela `testimonials`
| Campo | Tipo | Descrição |
|---|---|---|
| `id` | text | ID único |
| `name` | text | Nome de quem envia o testemunho |
| `city` | text | Cidade / comunidade |
| `message` | rich_text | Texto do testemunho |

Usada em `testemunhos.html` para listar e cadastrar novos testemunhos via `GET/POST tables/testimonials`.

### Tabela `prayer_requests`
| Campo | Tipo | Descrição |
|---|---|---|
| `id` | text | ID único |
| `name` | text | Nome de quem pede oração (ou "Anônimo") |
| `intention` | rich_text | Texto do pedido de oração |

Usada em `oracao.html` para listar e cadastrar pedidos de oração via `GET/POST tables/prayer_requests`.

> O formulário de **Contato** (`contato.html`) é apenas front-end (exibe mensagem de confirmação local) — não há envio real de e-mail, pois isso exigiria backend/serviço de terceiros com autenticação.

## 🚧 Funcionalidades não implementadas (limitações de site estático)

- Envio real de e-mails a partir do formulário de contato (requer serviço de backend/SMTP autenticado).
- Sistema de doações/pagamentos online (PIX, cartão) — exibimos apenas informações ilustrativas; para receber pagamentos reais é necessário um gateway de pagamento externo integrado pelo próprio usuário.
- Player de áudio real das músicas católicas (hoje é uma playlist de sugestões em texto, sem arquivos de áudio licenciados).
- Área de login/restrita para catequistas, benfeitores ou administração de conteúdo.
- Publicação automática de notícias reais da Igreja (hoje o conteúdo é fixo/editorial, redigido pela equipe).

## 🔭 Próximos passos recomendados

1. Substituir os textos placeholder de PIX/contato por dados reais da Comunidade.
2. Conectar as redes sociais (Instagram, YouTube, Facebook, WhatsApp) aos perfis reais no rodapé.
3. Adicionar um serviço externo de e-mail (ex.: Formspree, EmailJS) para o formulário de contato realmente enviar mensagens.
4. Se desejar player de música, hospedar os arquivos de áudio próprios (com direitos autorais liberados) e usar a tag `<audio>`.
5. Avaliar moderação dos testemunhos e pedidos de oração antes de exibição pública (hoje aparecem imediatamente após o envio).
6. Adicionar novas fotos reais da Comunidade Yeshuá na Galeria, substituindo as imagens ilustrativas atuais.

## 🌐 Publicação

Para publicar o site e obter a URL pública, utilize a aba **Publish** da plataforma — ela cuida de todo o processo de deploy automaticamente.

## 🛠️ Stack técnica

- HTML5 semântico + CSS3 (variáveis CSS, grid, animações) — sem frameworks de build.
- JavaScript vanilla (ES6+), incluindo `IntersectionObserver` para animações de rolagem e `fetch` para a Table API.
- Font Awesome 6 (ícones via CDN).
- Google Fonts: Cormorant Garamond, EB Garamond, Montserrat.
- RESTful Table API (armazenamento de testemunhos e pedidos de oração).

---

**Desenvolvido por Pedro Correia Lopes Filho.**
