#  Olá, bem vindo(a) ao projeto saque FGTS aniversário :rocket:
Segue algumas instruções de modificação para colocar sua versão do projeto no ar.

## :muscle: Motivação

O objetivo desse projeto é proporcionar tecnologia à pequenas empresas no ramo de correspondente bancário, apresentando uma nova forma de contratação totalmente autônoma visando levar informações, simulações e contratações do Saque aniversário FGTS.

`#tecnologiaparatodos`

<br>

## Rodando em ambiente de desenvolvimento
Primeiro baixe o projeto para sua maquina usando o comando: 
```bash
git clone git@github.com:hugobueno/lpfgts.git
```

Abra o terminal na pasta raiz do projeto e instale as dependências rodando o comando:
```bash
    npm install
    //ou
    yarn install
```

### Executando o projeto
Após a instalação das dependências, rode o comando abaixo para executar o projeto:
```bash
    npm run dev
    //ou
    yarn dev
```
feito isso bora para as modificações



# :pushpin: Modificando o Projeto para sua marca


## Adicionando seu logo
O Projeto usa 2 modelos de logo sendo eles para o modo escuro (dark mode) e o modo claro (light mode)
copie as imagens da sua logo para a pasta :
```bash
    /public/assets/
```
e substitua os arquivos 'logo.png' e 'logo_light.png'
lembre-se de manter os nomes originais dos arquivos, caso contrário será necessário alterar a importação nos Componentes `Navbar`, `NavMobile` e `Footer`.
```bash
    /src/components/NavBar/index.tsx
    /src/components/NavMobile/index.tsx
    /src/components/Footer/index.tsx
```


## Adicionando sua paleta de cores
Esse projeto possui duas paletas de cores, uma criada para o modo claro e outra para o modo escuro, dessa forma é possivel alterar 100% das cores e deixar o projeto com a cara do seu negócio.

para alterar a paleta de cores vá para a pasta raiz do projeto e abra o seguindo diretório:

```bash
    /styles/themes/light.ts  //cores modo claro
    /styles/themes/dark.ts  //cores modo escuro
```
Dentro do arquivo existem as seguintes propriedades

`primary secundary ternary quaternary` refere-se as cores do shapes e detalhes

`background, background_gray` refere-se as cores do plano de fundo da aplicação

`text` refere-se as cores dos textos de toda a aplicação

`text_button` refere-se as cores dos textos dentro dos botões

`text_light` essa propriedade sempre retorna um texto branco

`border` refere-se a cor das bordas, quando aplicada a um componente

<br>

## Adicionando suas redes sociais
para adicionar suas redes sociais ao projeto acesse

```bash
    /src/components/Footer/index.tsx
```
Nas linhas 21 e 22  substitua o link pelo da  sua rede social.
<br>
Na linha 23 coloque o número Whatsapp da sua empresa com o DDD
<br>
Exemplos
<br>
Facebook: https://www.facebook.com/SUA-PAGINA/
<br>
Whatsapp:https://api.whatsapp.com/send?phone=5511xxxxxxxxx

## Definir as variáveis de ambiente Front-end
Esse projeto possui uma única variável de ambiente, para configura-la,
crie um novo arquivo na raiz do projeto com o nome `.env`, dentro do arquivo criado, adicione a seguinte linha:

```bash
    BASE_URL_API="http://localhost:3001/api" //para ambiente dev
```

para ambiente de produção, alterar o endereço para o domínio da sua API exemplo

```bash
    BASE_URL_API="http://seudominio:PORT/api" 
```

Todos os recursos e instruções necessários referentes ao Back-end da aplicação então no repositório :  https://github.com/hugobueno/api-lpfgts

dúvidas sobre o projeto me envie um email: :mailbox: `hugobueno@live.com`