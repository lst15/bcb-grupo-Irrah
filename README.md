# BCB – Big Chat Brasil

Este projeto representa um desafio de emprego para o Grupo Irrah e concentra-se em desenvolver um serviço backend especializado no envio de mensagens SMS, proporcionando uma solução eficaz e escalável para atender às necessidades de comunicação da empresa BCB - Big Chat Brasil (Ficticia). A API será o principal ponto de acesso, permitindo que os clientes integrem facilmente o serviço em suas aplicações e sistemas existentes.

## Desafio

Precisamos que seja possível via web ou mobile que os clientes enviem mensagens para seus usuários finais. Nesse sistema cada cliente precisa ser previamente cadastrado. Ao receber a solicitação de envio de mensagem deve ser verificado o tipo de plano de pagamento desse cliente. Caso for pre-pago, esse cliente deve possuir creditos para envio de SMS que custam R$0,25 cada. Caso o cliente seja pós pago, deve registrar o consumo na conta até o limite máximo autorizado.

## Backoffice

 * Incluir creditos para um cliente
 * Consultar saldo de um cliente
 * Alterar limite de um cliente
 * Alterar plano de um cliente
 * Ver dados de um cliente

# Instalação e Execução

Clone o projeto e acesse o diretorio
   
   ```
   git clone https://github.com/lst15/bcb-grupo-Irrah
   cd bcb-grupo-Irrah
   ```

## Instruções para Instalação e Execução local

1. Instale as dependencias
   
   ```
   npm i
   ```

2. Faça uma copia do arquivo env-example e renomeie a copia para .env, em seguida configure o DATABASE_URL de acordo com o banco a ser utilizado
3. Execute as migrações do banco
   
   ```
   npx prisma migrate dev
   ```

5. Faça o build do projeto

   ```
   npm run build
   ```

6. Inicialize o projeto

    ```
    npm run start
    ```

## Instruções para Instalação e Execução com Docker

1. Inicialize os containeres

   ```
   docker-compose up -d
   docker-compose exec web npx prisma migrate dev
   ```
