# Weather App

## Descrição do Projeto

O Weather App é uma aplicação web simples que permite aos usuários consultar informações meteorológicas em tempo real de diversas cidades. A aplicação exibe a temperatura atual, condições climáticas, umidade, velocidade do vento, e uma previsão do tempo para os próximos cinco dias.

## Funcionalidades

- Pesquisa por cidade para consultar condições climáticas.
- Exibição da temperatura em graus Celsius.
- Apresentação da condição climática com ícones representativos.
- Detalhes adicionais: umidade, velocidade do vento e hora local da cidade.
- Previsão climática para os próximos cinco dias.

## Tecnologias Utilizadas

- **HTML5**: Estrutura do projeto.
- **CSS3**: Estilização e design responsivo.
- **JavaScript**: Lógica e interatividade.
- **Axios**: Biblioteca para requisições HTTP.
- **SheCodes Weather API**: Fornece os dados meteorológicos.

## Como Utilizar

1. Clone este repositório:
   ```bash
   git clone https://github.com/gaba-teixeira/my-weather-project.git
   ```
2. Acesse o diretório do projeto:
   ```bash
   cd my-weather-project
   ```
3. Abra o arquivo `index.html` em seu navegador.
4. Insira o nome de uma cidade no campo de busca e clique em "Search".

## Estrutura do Projeto

- **index.html**: Arquivo principal com a estrutura HTML.
- **src/style.css**: Arquivo de estilização.
- **Script incorporado**: Contém a lógica da aplicação.

## Funcionalidade do Código

- `searchCity(city)`: Realiza a busca dos dados climáticos de uma cidade através da API.
- `showWeather(response)`: Atualiza as informações climáticas na interface.
- `getForecast(city)`: Obtém a previsão do tempo para a cidade selecionada.
- `displayForecast(response)`: Exibe os dados da previsão na interface.

## Sobre

Este projeto foi desenvolvido por [Gabriela Teixeira](https://github.com/gaba-teixeira) e está disponível como código aberto no [GitHub](https://github.com/gaba-teixeira/my-weather-project). O projeto também está hospedado na [Netlify](https://www.netlify.com/).

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.


