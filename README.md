# Fundamentos da Web

## Exercício 1 - Página estática e fluxo de uma requisição

### Em qual momento uma página dinâmica é processada?

Uma página dinâmica é processada no servidor depois que ele recebe a requisição enviada pelo navegador. O servidor verifica o que precisa ser mostrado e gera o conteúdo que será enviado de volta.

### Por que um banco de dados pode ser necessário?

Um banco de dados pode ser necessário para guardar as informações que serão utilizadas pela página. Por exemplo, em uma loja virtual, os produtos, preços e dados dos clientes podem estar guardados no banco. Quando o usuário acessa a página, o servidor pode consultar essas informações e mostrar os dados atualizados.

## Exercício 2 - Client-side e Server-side

## Tabela comparativa

| Característica                    | Client-side                                                             | Server-side                                                           |
| --------------------------------- | ----------------------------------------------------------------------- | --------------------------------------------------------------------- |
| Local em que o código é executado | No navegador do usuário                                                 | No servidor                                                           |
| Tecnologias de exemplo            | JavaScript                                                              | Node.js, PHP, VBScript                                                |
| Responsabilidades                 | Alterar a página, validar dados e realizar ações no navegador           | Processar dados, acessar informações e controlar sessões              |
| Vantagens                         | Resposta mais rápida para algumas ações e menos requisições ao servidor | Maior segurança para dados e possibilidade de acessar bancos de dados |
| Limitações                        | O código fica disponível no navegador e depende dos recursos do cliente | Depende do servidor e pode gerar mais requisições                     |
| Exemplos de tarefas               | Validar formulários e alterar elementos da página                       | Consultar banco de dados e controlar sessões de usuários              |

## Classificação das operações

### 1. Validar se um campo obrigatório foi preenchudo

**Client-side e Server-side**
Essa validação pode ser feita diretamente no navegador antes de enviar o formulário. Isso permite avisar o usuário rapidamente que ele esqueceu de preencher algum campo.
Também pode existir uma validação no servidor, principalmente para garantir que os dados recebidos estão corretos.

### 2. Consultar dados sigilosos de um cliente

**Server-side**
Esse tipo de informação deve ser tratado no no servidor, pois não é seguro dexar dados sigilosos disponíveis no código do navegador. O servidor pode consultar o banco de dados e enviar somente as informações que o usuário tem permissão para visualizar.

### 3. Alterar a cor de um botão após um clique

**Client-side**
Essa alteração pode ser feita diretamente no navegador usando JavaScript e CSS. Não é necessário enviar uma requisição ao servidor apenas para mudar a aparência do botão.

### 4. Verificar login e senha em um banco de dados

**Server-side**
O servidor deve recever os dados do login e consultar o banco de dados para verificar se as informações estão corretas. Essa operação não deve ser feita somente no navegador porque envolve informações de segurança.

## 5. Calcular o total de uma compra

**Server-side e Client-side**
O cálculo pode ser feito no client-side para mostrar rapidamente o total para o usuário enquanto ele adiciona ou remove produtos.
Porém, o server-side também deve fazer a verificação do do valor antes de finalizar a compra, para evitar que alguém altere os valores pelo navegador.

### 6. Controlar uma sessão de usuário

**Server-side**
O controle de sessão normalmente é feito no servidor, porque ele precisa saber se o usuário está autenticado e quais informações ele pode acessar. O navegador pode armazenar um identificador da sessão, mas o conttole das permissões fica no servidor.
