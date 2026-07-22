# PROJECT_EVIDENCE.md

Este documento reúne todas as informações conhecidas sobre os principais projetos do portfólio.

O objetivo não é gerar os estudos de caso, mas fornecer contexto suficiente para que eles sejam escritos seguindo `CASE_TEMPLATE.md`.

Todas as informações abaixo devem ser tratadas como fatos conhecidos. Caso alguma informação necessária esteja ausente, ela deve ser marcada como "Informação necessária" em vez de ser inventada.

---

# Modernização do ERP (Kero Ótica)

## Tipo

Modernização de ERP em produção.

## Contexto conhecido

- ERP especializado para o mercado óptico.
- Sistema em produção há aproximadamente cinco anos.
- Utilizado por aproximadamente 500 empresas (métrica aproximada já utilizada nas discussões do projeto).
- Sistema crítico para operação diária.
- Multi-tenant.
- Usuários concorrentes.
- Abrange módulos financeiros, fiscais, PDV, estoque, dashboards e integrações bancárias.
- A modernização ainda está em andamento.

## Cenário encontrado

Frontend desenvolvido em:

- Vue 2
- Nuxt 2
- Vuetify 2

Problemas identificados:

- Alto acoplamento.
- Componentes monolíticos.
- Baixa separação de responsabilidades.
- Dificuldade para evolução.
- Ausência de gerenciamento explícito da complexidade.
- Crescimento contínuo do produto.

## Meu papel

Responsável por:

- Definir a arquitetura do novo frontend.
- Pesquisar alternativas.
- Comparar frameworks.
- Produzir documentação técnica.
- Escrever RFCs e diretrizes.
- Apoiar decisões técnicas.
- Conduzir a estratégia de modernização.

## Decisões conhecidas

- React + Next.js escolhidos como base.
- Migração gradual em vez de reescrita completa.
- Priorização de governança.
- Priorização de observabilidade.
- Priorização de longevidade.
- Arquitetura preparada para evolução incremental.

## Competências demonstradas

- Arquitetura.
- Engenharia de Software.
- Modernização de sistemas legados.
- Tomada de decisão.
- Comunicação técnica.
- Documentação.
- Gestão de complexidade.

## Ainda falta documentar

- Trade-offs.
- Responsabilidades detalhadas.
- Fluxo arquitetural.
- Diagramas.
- Resultados obtidos até o momento.
- Aprendizados.

---

# HemoUp

## Tipo

Produto próprio.

## Papel

Fundador.

Responsável técnico.

Desenvolvedor Full Stack.

## Responsabilidades conhecidas

- Desenvolvimento Mobile.
- Backend.
- Análise de requisitos.
- Pesquisa de mercado.
- Marketing.
- Planejamento do produto.
- Projeção financeira.
- Projeção de custos.
- Definição do MVP.

## Contexto conhecido

- Plataforma voltada para doação de sangue.
- Participou de programas de pré-incubação.
- Participou de programas de incubação.
- Houve contato com hemocentros.
- Foram realizados estudos de mercado.
- Foram feitas projeções financeiras.

## Stack

- React Native.
- Next.js.
- Java.
- Spring Boot.
- TypeScript.
- Tailwind.

## Competências

- Produto.
- Arquitetura.
- Empreendedorismo.
- Liderança técnica.
- Engenharia Full Stack.
- Comunicação.
- Validação de negócio.

## Ainda falta documentar

- Estado atual do MVP.
- Validações realizadas.
- Stakeholders públicos.
- Próximos marcos.
- Trade-offs técnicos.
- Arquitetura.

---

# ZShop

## Tipo

Sistema de atendimento e vendas.

## Contexto conhecido

- Sistema dividido em aproximadamente seis repositórios.
- Utiliza Docker.
- Possui pipeline de CI/CD.
- Integrações com:
  - WhatsApp.
  - Pagamentos.
  - Fretes.

## Competências demonstradas

- Arquitetura distribuída.
- Integrações.
- Backend.
- Frontend.
- Infraestrutura.
- Docker.
- CI/CD.

## Ainda falta documentar

- Papel exato desempenhado.
- Decisões arquiteturais.
- Trade-offs.
- Fluxos.
- Resultados.

---

# Pupilens

## Tipo

Aplicação para demonstração de lentes ópticas.

## Stack

- React Native.
- .NET.
- TypeScript.

## Competências

- Mobile.
- UX.
- Engenharia Full Stack.
- Produto.

## Ainda falta documentar

- Problema de negócio.
- Arquitetura.
- Decisões.
- Restrições.
- Impacto.

---

# BatteryCommerce

## Tipo

E-commerce.

## Stack

- React.
- Java.
- Spring Boot.
- Bootstrap.
- TypeScript.

## Competências

- Backend.
- Frontend.
- APIs.
- Integrações.

## Ainda falta documentar

- Papel.
- Arquitetura.
- Problema.
- Trade-offs.
- Resultado.

---

# Informações gerais

Ao produzir qualquer estudo de caso:

- Não inventar métricas.
- Não inventar resultados.
- Não inventar responsabilidades.
- Não assumir decisões sem evidência.
- Marcar explicitamente todas as lacunas de informação.
- Priorizar engenharia sobre tecnologias.
- Demonstrar competências por meio de evidências concretas.
- Utilizar `CASE_TEMPLATE.md` como contrato obrigatório.
