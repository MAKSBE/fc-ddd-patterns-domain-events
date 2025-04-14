# Domain Events - DDD Patterns

Este projeto é uma implementação de Domain Events utilizando Domain-Driven Design (DDD) e Patterns. O objetivo é demonstrar como eventos de domínio podem ser utilizados para notificar mudanças importantes no estado do domínio.

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

## Testes

O projeto inclui testes unitários para todos os eventos e handlers, garantindo que:
- Os eventos são criados corretamente
- Os handlers processam os eventos adequadamente
- As notificações são enviadas conforme esperado

## Como Executar

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Execute os testes:
   ```bash
   npm test
   ```

## Tecnologias Utilizadas

- TypeScript
- Jest (para testes)
- Domain-Driven Design (DDD)
- Domain Events Pattern

## Padrões de Projeto

- Domain Events
- Event Handlers
- Observer Pattern

## Contribuição

Sinta-se à vontade para contribuir com o projeto através de pull requests ou reportando issues. 