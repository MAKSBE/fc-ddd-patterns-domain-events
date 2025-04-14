# Domain Events - DDD Patterns

Este é um projeto que atende o desafio do modulo DDD da Full Cycle, o desafio é:
Implemente dois Eventos de Domínio para o agregado de Customer.

O primeiro evento deverá acontecer quando um novo Customer é criado. Nesse ponto, crie 2 handlers exibindo um "console.log". 

Handler1: EnviaConsoleLog1Handler. Mensagem: "Esse é o primeiro console.log do evento: CustomerCreated".
Handler2: EnviaConsoleLog2Handler. Mensagem: "Esse é o segundo console.log do evento: CustomerCreated". 
O segundo evento deverá ser disparado quando o endereço do Customer é trocado (método changeAddress()). Nesse caso, o ID, Nome, bem como os dados do endereço devem ser passados ao evento.

Handler: EnviaConsoleLogHandler. Mensagem: "Endereço do cliente: {id}, {nome} alterado para: {endereco}".
Todos os testes devem ser realizados para garantir o bom funcionamento dos eventos.

## Estrutura do Projeto

```
src/
└── domain/
    └── customer/
        └── event/
            ├── customer-created.event.ts
            ├── customer-address-changed.event.ts
            ├── customer-events.spec.ts
            └── handler/
                ├── envia-console-log1.handler.ts
                ├── envia-console-log2.handler.ts
                └── envia-console-log-address.handler.ts
```

## Eventos de Domínio

### CustomerCreated
Evento disparado quando um novo cliente é criado no sistema.

### CustomerAddressChanged
Evento disparado quando o endereço de um cliente é alterado.

## Handlers

### Handlers para CustomerCreated
- `envia-console-log1.handler.ts`: Registra no console quando um cliente é criado

### Handlers para CustomerAddressChanged
- `envia-console-log2.handler.ts`: Registra no console quando o endereço de um cliente é alterado
- `envia-console-log-address.handler.ts`: Handler adicional para mudança de endereço

## Validações

O projeto implementa várias camadas de validação seguindo os princípios do DDD:

### Validações na Entidade Customer
- ID: Não pode ser vazio
- Nome: Não pode ser vazio
- Ativação: Requer endereço definido para ativar um cliente

### Validações no Value Object Address
- Rua: Não pode ser vazia
- Número: Não pode ser zero
- CEP: Não pode ser vazio
- Cidade: Não pode ser vazia

### Validações nos Eventos
- Testes unitários garantem que:
  - Eventos são criados corretamente
  - Handlers são notificados adequadamente
  - Notificações são enviadas conforme esperado

### Validações nos Handlers
- Testes garantem que:
  - Processamento correto dos eventos
  - Execução das ações esperadas
  - Logs e notificações são gerados adequadamente

## Testes

O projeto inclui testes unitários para todos os eventos e handlers, garantindo que:
- Os eventos são criados corretamente
- Os handlers processam os eventos adequadamente
- As notificações são enviadas conforme esperado

## Tecnologias Utilizadas

- TypeScript
- Jest (para testes)
- Domain-Driven Design (DDD)
- Domain Events Pattern

## Padrões de Projeto

- Domain Events
- Event Handlers
- Observer Pattern

## Desenvolvido por Gilson Moreira dos Santos
