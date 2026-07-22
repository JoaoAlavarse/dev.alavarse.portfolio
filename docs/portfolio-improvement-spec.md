# Spec de Melhorias do Portfolio

## Contexto

O portfolio atual ja possui uma base tecnica solida em Next.js, i18n, rotas estaticas, metadata, sitemap, robots, dados estruturados em JSON e paginas de projetos. A primeira etapa de estabilizacao tecnica corrigiu o erro de lint no `ThemeToggle`, migrou `middleware` para `proxy` no Next.js 16 e padronizou o projeto em npm.

As proximas melhorias devem reposicionar o portfolio como um sistema de evidencias profissionais, nao como uma vitrine generica de tecnologias ou servicos.

## Objetivo Principal

Posicionar Joao Paulo Almeida Alavarse como engenheiro de software Full Stack com atuacao em sistemas reais, arquitetura, tomada de decisao, execucao, comunicacao tecnica, produto, inovacao e lideranca tecnica.

O portfolio nao deve comunicar apenas "desenvolvedor Full Stack", "freelancer" ou "executor de tecnologias".

## Publicos Prioritarios

- Recrutadores de tecnologia.
- Tech Leads.
- Engineering Managers.
- Desenvolvedores.

## Nao Objetivos

- Nao fazer redesign visual nesta fase.
- Nao alterar cores, animacoes, componentes visuais ou CSS sem uma spec especifica.
- Nao inventar metricas, responsabilidades, resultados ou experiencias.
- Nao transformar o portfolio em landing page comercial de freelance.
- Nao fazer a stack tecnica ser a mensagem principal.

## Posicionamento Recomendado

Engenheiro de software Full Stack que constroi e evolui sistemas reais em producao, combinando arquitetura, execucao tecnica, visao de produto, comunicacao e lideranca em contextos de ERP, mobile, web, inovacao e ensino.

## Narrativa Profissional

O portfolio deve contar uma evolucao progressiva:

1. Base tecnica e formacao em desenvolvimento de software.
2. Execucao Full Stack em produtos reais.
3. Ativacao de competencias de arquitetura, integracao, infraestrutura e manutencao.
4. Participacao em sistemas em producao e modernizacao de ERP.
5. Atuacao como fundador e responsavel tecnico da HemoUp.
6. Comunicacao tecnica e ensino como professor universitario.
7. Maturidade como engenheiro que conecta codigo, produto, negocio e pessoas.

## Hierarquia Das Competencias

1. Engenharia de software em sistemas reais.
2. Arquitetura e tomada de decisao tecnica.
3. Execucao Full Stack: web, mobile, APIs, autenticacao, sessoes, bancos de dados e infraestrutura.
4. Produto e negocio: validacao, MVP, requisitos, mercado e operacao.
5. Comunicacao tecnica e ensino.
6. Lideranca tecnica e ownership.
7. Inovacao e empreendedorismo.
8. Tecnologias especificas como evidencia secundaria.

## Arquitetura De Informacao Recomendada

### Home

Objetivo: dar leitura rapida do posicionamento profissional e direcionar para evidencias.

Publico: todos, especialmente recrutadores e Engineering Managers em primeira visita.

Mensagem principal: engenheiro de software com atuacao em sistemas reais, produto, arquitetura, ensino e lideranca tecnica.

Deve conter:

- Posicionamento profissional resumido.
- Pilares de atuacao.
- Evidencias resumidas.
- Experiencias mais relevantes em versao curta.
- Cases principais.
- Caminhos para Experiencia, Cases, Sobre e Contato.

Nao deve conter:

- Lista extensa de tecnologias.
- FAQ de freelance.
- Catalogo de servicos.
- Biografia longa.
- Todos os projetos.
- Diagramas ou detalhes tecnicos profundos.

Profundidade: baixa a media.

### Experiencia

Objetivo: demonstrar evolucao profissional cronologica e progressao de responsabilidade.

Publico: recrutadores, Engineering Managers e Tech Leads.

Mensagem principal: progressao em sistemas reais, maturidade tecnica e ampliacao de escopo.

Deve conter:

- Linha do tempo profissional.
- Papel, periodo e contexto de cada experiencia.
- Escopo de atuacao.
- Competencias demonstradas.
- Relacao com cases.
- Camada propria para ensino e experiencia academica, quando relevante.

Nao deve conter:

- Descricoes vagas.
- Lista solta de tecnologias.
- Repeticao completa dos cases.
- Conteudo comercial.

Profundidade: media.

### Cases

Objetivo: provar competencias com evidencias concretas.

Publico: Tech Leads, Engineering Managers, desenvolvedores e recrutadores tecnicos.

Mensagem principal: cada projeto demonstra uma competencia profissional especifica.

Deve conter:

- Lista priorizada de cases.
- Competencia principal demonstrada por cada case.
- Contexto, problema, papel, restricoes, decisoes, execucao, resultado ou estagio atual e aprendizados.
- Tecnologias como suporte, nao como eixo principal.

Nao deve conter:

- Cards focados apenas em logo, stack e descricao comercial.
- Todos os detalhes na listagem.
- Projetos fracos com o mesmo peso dos projetos fortes.

Profundidade:

- Listagem: media-baixa.
- Pagina de case: alta, mas progressiva.

### Sobre

Objetivo: explicar a evolucao como engenheiro, professor, fundador e comunicador tecnico.

Publico: recrutadores, Engineering Managers e visitantes que querem contexto humano/profissional.

Mensagem principal: trajetoria entre engenharia pratica, produto, ensino e responsabilidade tecnica.

Deve conter:

- Evolucao profissional e academica.
- Relação entre ensino e comunicacao tecnica.
- Relação entre produto, inovacao e engenharia.
- Principios profissionais.
- Contexto da HemoUp como iniciativa de inovacao.
- Formacao e especializacao.

Nao deve conter:

- Lista grande de tecnologias.
- Repeticao dos projetos.
- Texto pessoal sem conexao profissional.
- Oferta de servico.

Profundidade: media.

### Contato

Objetivo: permitir continuidade profissional da conversa.

Publico: recrutadores, lideres tecnicos, pares e possiveis parceiros.

Mensagem principal: canal para oportunidades profissionais, colaboracao tecnica, produto, ensino e inovacao.

Deve conter:

- Email.
- LinkedIn.
- GitHub.
- Tipos de conversa apropriados.

Nao deve conter:

- Promessa de freelance.
- "Tiro sua ideia do papel".
- Beneficios comerciais genericos.
- Catalogo de servicos.

Profundidade: baixa.

## Menu Recomendado

Estrutura principal:

- Home
- Experiencia
- Cases
- Sobre
- Contato

Estrutura futura opcional:

- Home
- Experiencia
- Cases
- Escrita / Ensino
- Sobre
- Contato

## Sitemap Recomendado

Versao inicial, preservando simplicidade tecnica de slugs compartilhados:

```txt
/[locale]
/[locale]/experiencia
/[locale]/cases
/[locale]/cases/[id]
/[locale]/sobre
/[locale]/contato
```

Versao internacionalizada completa, se for decidido localizar slugs:

```txt
/pt
/pt/experiencia
/pt/cases
/pt/cases/[id]
/pt/sobre
/pt/contato

/en
/en/experience
/en/cases
/en/cases/[id]
/en/about
/en/contact

/es
/es/experiencia
/es/casos
/es/casos/[id]
/es/sobre
/es/contacto
```

## Jornadas Esperadas

### Recrutador

Fluxo: Home -> Experiencia -> Cases resumidos -> Contato.

Precisa entender:

- Perfil profissional.
- Experiencias.
- Stack em alto nivel.
- Evidencias de atuacao real.
- Como entrar em contato.

Nao deve precisar ler detalhes tecnicos profundos.

### Tech Lead

Fluxo: Home -> Cases -> Decisoes tecnicas -> Experiencia.

Precisa entender:

- Como Joao pensa tecnicamente.
- Que problemas resolveu.
- Que decisoes tomou.
- Qual foi o papel real em cada sistema.
- Como lida com arquitetura, integracao, infraestrutura e manutencao.

### Engineering Manager

Fluxo: Home -> Experiencia -> Sobre -> Cases estrategicos -> Contato.

Precisa entender:

- Autonomia.
- Comunicacao.
- Produto.
- Lideranca.
- Maturidade.
- Capacidade de operar entre negocio, tecnologia e pessoas.

### Desenvolvedor

Fluxo: Home -> Cases -> Arquitetura/decisoes -> GitHub/Contato.

Precisa entender:

- Tipo de problema tecnico enfrentado.
- Stack usada.
- Decisoes e trade-offs.
- Possivel material tecnico ou codigo publico.

## Transformacao De Projetos Em Estudos De Caso

Cada case deve seguir uma estrutura progressiva:

1. Contexto.
2. Problema.
3. Papel de Joao.
4. Restricoes.
5. Decisoes tecnicas.
6. Arquitetura geral.
7. Execucao.
8. Resultado ou estagio atual.
9. Aprendizados.
10. Tecnologias usadas.
11. Links relacionados.

Nem todos os projetos precisam ter a mesma profundidade.

Hierarquia sugerida:

- Case principal: HemoUp.
- Cases fortes: Kero Otica e Zshop.
- Cases tecnicos especificos: Pupilens e BatteryCommerce.

## Distribuicao De Arquitetura, Decisoes E Diagramas

Home:

- Apenas sinais de alto nivel.

Experiencia:

- Breve indicacao de desafios tecnicos por experiencia.

Listagem de Cases:

- Competencia principal demonstrada por cada case.

Pagina de Case:

- Arquitetura em camada intermediaria.
- Decisoes tecnicas em secoes especificas.
- Diagramas apenas quando explicarem fluxos, modulos, integracoes ou responsabilidades.
- Detalhes profundos em secoes finais ou blocos opcionais.

Regra: o usuario deve entender o case sem ler diagramas, mas os diagramas devem recompensar quem busca profundidade.

## Mensagens A Eliminar

- "Full Stack Developer" como mensagem principal isolada.
- Secao "What I do" em formato de servicos.
- Pergunta de FAQ sobre disponibilidade para freelance.
- "Technologies mastered".
- Lista de tecnologias como principal prova de competencia.
- Frases genericas como "modern interfaces", "robust and scalable APIs" e "best practices" sem evidencia.
- CTAs que parecam contratacao freelancer.

## Mensagens A Reforcar

- Sistemas reais em producao.
- Modernizacao de ERP.
- Produto usado por empresas, se a metrica for confirmada.
- Atuacao em multiplos repositorios.
- Infraestrutura, Docker e CI/CD.
- Decisoes tecnicas em web, mobile, backend, autenticacao, sessoes, banco e deploy.
- Professor universitario como evidencia de comunicacao tecnica.
- Fundador e responsavel tecnico da HemoUp como evidencia de lideranca, produto e inovacao.
- Pre-incubacao, validacao e contato com hemocentro como evidencia de produto real.

## Evidencias Necessarias Antes De Escrever Copy

### Sistemas reais e producao

Ja existe:

- Kero Otica.
- Zshop.
- Pupilens.
- BatteryCommerce.

Precisa fornecer:

- Contexto de producao.
- Volume aproximado, quando puder ser publico.
- Usuarios, empresas ou operacao impactada.
- Criticidade do sistema.
- Papel real desempenhado.

### ERP e modernizacao

Ja existe:

- Kero Otica como ERP especializado.

Precisa fornecer:

- Confirmacao da metrica de aproximadamente 500 empresas.
- Papel na modernizacao do ERP.
- Modulos ou areas envolvidas.
- Restricoes de confidencialidade.

### Arquitetura

Ja existe:

- 6 repositorios no Zshop.
- Docker orchestration.
- CI/CD.
- Integracoes com WhatsApp, pagamento e frete.

Precisa fornecer:

- Decisoes tomadas.
- Motivos das decisoes.
- Trade-offs.
- Limites tecnicos.
- Responsabilidades assumidas.

### Produto e negocio

Ja existe:

- HemoUp.
- Analise de mercado.
- Projecao de custos e faturamento.
- Programa de pre-incubacao.
- Conversas com hemocentro.

Precisa fornecer:

- Estado atual do MVP.
- Validacoes feitas.
- Aprendizados.
- Parceiros ou stakeholders citaveis.
- Proximos marcos.

### Ensino e comunicacao

Ja existe:

- Professor universitario.
- Monitoria.
- Representante discente.

Precisa fornecer:

- Disciplinas lecionadas.
- Responsabilidades academicas.
- Materiais, projetos ou resultados que possam ser citados.

### Lideranca tecnica

Ja existe:

- Fundador e tech lead da HemoUp.

Precisa fornecer:

- Pessoas envolvidas.
- Decisoes lideradas.
- Responsabilidades tecnicas concretas.
- Interacao com stakeholders.

## Fases De Implementacao Recomendadas

### Fase 1: Conteudo e dados

- Definir schema de cases.
- Levantar evidencias faltantes.
- Reorganizar dados de projetos para cases.
- Separar experiencias profissionais de formacao/ensino.

Criterios de aceite:

- Nenhuma afirmacao sem evidencia.
- Cada case tem competencia principal definida.
- Cada experiencia tem escopo, papel e contexto.

### Fase 2: Arquitetura de informacao

- Criar rota de Experiencia.
- Reposicionar Projetos como Cases.
- Definir funcao reduzida da Home.
- Reposicionar Sobre.
- Reposicionar Contato.

Criterios de aceite:

- Home nao tenta conter todo o portfolio.
- Experiencia mostra progressao.
- Cases funcionam como evidencias.
- Sobre nao duplica Experiencia.
- Contato nao comunica freelance como foco principal.

### Fase 3: SEO e metadata

- Atualizar titles/descriptions para refletir engenharia, sistemas reais e cases.
- Atualizar sitemap conforme novas rotas.
- Revisar structured data.
- Preservar i18n.

Criterios de aceite:

- Metadata alinhada ao posicionamento.
- Slugs e alternates consistentes.
- Sitemap cobre novas rotas.

### Fase 4: Validacao tecnica

- Rodar lint.
- Rodar build.
- Verificar rotas estaticas.
- Conferir links internos.
- Validar ausencia de regressao em i18n.

Criterios de aceite:

- `npm run lint` passa.
- `npm run build` passa.
- Rotas principais existem nos tres idiomas.
- Links internos apontam para rotas validas.

## Riscos

- Posicionamento ficar forte demais sem evidencia publica suficiente.
- Cases ficarem longos e cansativos.
- Slugs localizados aumentarem complexidade tecnica.
- Projetos com pouca evidencia receberem peso excessivo.
- Linguagem voltar para freelance por causa de CTAs e contato.

## Decisoes Pendentes

- Usar slugs localizados ou slugs compartilhados por idioma.
- Criar `/contato` como pagina propria ou manter contato como secao.
- Criar pagina futura de Ensino/Escrita.
- Definir quais metricas podem ser publicas.
- Definir quais detalhes de ERP podem ser divulgados.
- Definir se algum case tera diagramas tecnicos.

