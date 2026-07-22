# CASE_TEMPLATE.md

## Proposito

Este documento define o padrao obrigatorio para todos os estudos de caso do portfolio.

Um estudo de caso existe para demonstrar competencia em Engenharia de Software por meio de evidencias reais. Ele nao e uma pagina de marketing, uma descricao comercial de projeto, uma vitrine de tecnologias ou uma lista de tarefas executadas.

Cada case deve provar:

- Capacidade de tomada de decisao.
- Responsabilidade tecnica.
- Arquitetura.
- Execucao.
- Visao de produto.
- Comunicacao tecnica.
- Trade-offs.
- Resultados.

## Publico

Ordem de prioridade:

1. Engineering Managers.
2. Tech Leads.
3. Recrutadores tecnicos.
4. Desenvolvedores.

## Principios

- O leitor deve compreender o contexto antes da solucao.
- Tecnologias nunca sao a informacao principal.
- Cada afirmacao importante deve possuir evidencia.
- O case nao deve repetir informacoes ja explicadas em outras paginas.
- O conteudo deve evoluir em profundidade.
- O leitor deve conseguir parar a leitura em qualquer secao e ainda assim compreender o caso.
- Diagramas complementam o texto; nunca substituem a explicacao.
- Nenhuma informacao deve depender exclusivamente de um diagrama.
- Informacoes confidenciais, sensiveis ou protegidas devem ser omitidas, agregadas ou generalizadas.

## Ordem Das Secoes

A ordem abaixo e obrigatoria para manter progressao de leitura:

1. Objetivo do case.
2. Competencias demonstradas.
3. Resumo executivo.
4. Contexto.
5. Problema.
6. Restricoes.
7. Meu papel.
8. Responsabilidades.
9. Stakeholders.
10. Criterios de sucesso.
11. Alternativas consideradas.
12. Decisao tomada.
13. Arquitetura.
14. Fluxo da solucao.
15. Tecnologias utilizadas.
16. Trade-offs.
17. Execucao.
18. Principais desafios.
19. Resultado.
20. Impacto.
21. Limitacoes.
22. Aprendizados.
23. Principios de Engenharia extraidos do case.
24. Projetos relacionados.
25. Materiais complementares.
26. Diagramas.
27. Referencias.

Justificativa da ordem:

- Primeiro, o leitor entende por que o case existe e que competencias ele prova.
- Depois, recebe uma sintese suficiente para decidir se quer aprofundar.
- Em seguida, entende contexto, problema e restricoes antes de avaliar a solucao.
- O papel, responsabilidades e stakeholders delimitam ownership e colaboracao.
- Criterios, alternativas e decisao demonstram julgamento tecnico.
- Arquitetura, fluxo e tecnologias explicam a solucao sem transformar stack em protagonista.
- Trade-offs, execucao e desafios demonstram maturidade pratica.
- Resultado, impacto e limitacoes evitam narrativa triunfalista sem evidencia.
- Aprendizados e principios tornam o case reutilizavel para outros contextos.
- Materiais, diagramas e referencias ficam no final para consulta complementar.

## Classificacao Das Secoes

### Obrigatorias

- Objetivo do case.
- Competencias demonstradas.
- Resumo executivo.
- Contexto.
- Problema.
- Restricoes.
- Meu papel.
- Responsabilidades.
- Criterios de sucesso.
- Decisao tomada.
- Arquitetura.
- Fluxo da solucao.
- Tecnologias utilizadas.
- Trade-offs.
- Execucao.
- Principais desafios.
- Resultado.
- Limitacoes.
- Aprendizados.
- Principios de Engenharia extraidos do case.

### Recomendadas

- Stakeholders.
- Alternativas consideradas.
- Impacto.
- Projetos relacionados.
- Diagramas.
- Referencias.

### Opcionais

- Materiais complementares.

Uma secao recomendada so deve ser omitida quando nao houver informacao publica suficiente ou quando a omissao proteger confidencialidade.

## Estrutura Detalhada

### 1. Objetivo Do Case

Obrigatoria.

Objetivo:

- Explicar por que este case existe no portfolio.
- Definir qual competencia principal ele pretende provar.

Perguntas que responde:

- O que este case demonstra?
- Por que ele e relevante para avaliar maturidade em Engenharia de Software?
- Qual dimensao profissional sera evidenciada?

Profundidade esperada:

- Baixa.
- Deve ser direto e orientador.

Deve aparecer:

- Competencia principal demonstrada.
- Tipo de problema abordado.
- Tipo de evidencia que o leitor encontrara.

Nunca deve aparecer:

- Slogan comercial.
- Promessa vaga.
- Lista de tecnologias.
- Resultado nao comprovado.

Justificativa:

- Engineering Managers e Tech Leads precisam saber rapidamente por que investir tempo no case.

### 2. Competencias Demonstradas

Obrigatoria.

Objetivo:

- Mapear explicitamente quais competencias o case prova.

Perguntas que responde:

- Quais capacidades profissionais este case evidencia?
- O case demonstra arquitetura, produto, execucao, lideranca, comunicacao ou outro eixo?

Profundidade esperada:

- Baixa.
- Lista curta e precisa.

Deve aparecer:

- Competencias observaveis no case.
- No maximo 5 a 7 competencias.

Nunca deve aparecer:

- Competencias que nao serao sustentadas no texto.
- Termos genericos sem evidencia, como "alta performance" ou "escalabilidade", se nao forem explicados depois.

Justificativa:

- Ajuda recrutadores tecnicos a fazer triagem e ajuda Tech Leads a encontrar os sinais que procuram.

### 3. Resumo Executivo

Obrigatoria.

Objetivo:

- Permitir compreensao rapida do caso sem exigir leitura completa.

Perguntas que responde:

- Qual era o contexto?
- Qual era o problema?
- Qual foi o papel desempenhado?
- Qual decisao central foi tomada?
- Qual foi o resultado ou estado atual?

Profundidade esperada:

- Baixa a media.
- Deve ser suficiente para uma leitura de 30 a 60 segundos.

Deve aparecer:

- Contexto resumido.
- Problema central.
- Papel exercido.
- Decisao ou abordagem principal.
- Resultado, impacto ou estagio atual.

Nunca deve aparecer:

- Detalhes tecnicos extensos.
- Historico completo.
- Autoelogio.
- Metricas sem fonte ou ressalva.

Justificativa:

- Engineering Managers e recrutadores podem parar aqui e ainda entender o valor do case.

### 4. Contexto

Obrigatoria.

Objetivo:

- Explicar o ambiente em que o problema existia.

Perguntas que responde:

- Que tipo de produto, sistema ou organizacao estava envolvido?
- Qual era o momento do projeto?
- Quais usuarios, areas ou fluxos eram afetados?
- O sistema estava em producao, em validacao, em MVP ou em descoberta?

Profundidade esperada:

- Media.

Deve aparecer:

- Tipo de sistema.
- Estagio do produto.
- Ambiente operacional.
- Escopo publico permitido.
- Relevancia do contexto.

Nunca deve aparecer:

- Informacoes confidenciais.
- Nomes de clientes nao autorizados.
- Dados internos sensiveis.
- Detalhes comerciais protegidos.

Justificativa:

- Sem contexto, uma decisao tecnica nao pode ser avaliada corretamente.

### 5. Problema

Obrigatoria.

Objetivo:

- Definir claramente o problema que precisava ser resolvido.

Perguntas que responde:

- Qual dor, risco, ineficiencia ou oportunidade motivou o trabalho?
- O problema era tecnico, de produto, operacional ou misto?
- O que aconteceria se nada fosse feito?

Profundidade esperada:

- Media.

Deve aparecer:

- Problema principal.
- Consequencias.
- Evidencias do problema, quando publicas.
- Quem era afetado.

Nunca deve aparecer:

- Problema inventado para valorizar a solucao.
- Linguagem acusatoria contra empresas, equipes ou pessoas.
- Diagnostico sem evidencias.

Justificativa:

- O problema e a base da narrativa. A solucao so importa se o problema estiver claro.

### 6. Restricoes

Obrigatoria.

Objetivo:

- Mostrar as condicoes reais que influenciaram a decisao.

Perguntas que responde:

- Quais limites de tempo, equipe, legado, budget, seguranca ou operacao existiam?
- Havia sistemas em producao?
- Havia restricoes de tecnologia, contrato, compliance ou negocio?

Profundidade esperada:

- Media.

Deve aparecer:

- Restricoes tecnicas.
- Restricoes de produto ou negocio.
- Restricoes de equipe ou prazo.
- Restricoes de confidencialidade, quando afetarem o que pode ser contado.

Nunca deve aparecer:

- Informacoes sensiveis sobre custos, contratos ou estrategia.
- Justificativas vagas para escolhas ruins.
- Exposicao indevida de limitacoes internas de terceiros.

Justificativa:

- Trade-offs so sao compreensiveis quando as restricoes sao explicitas.

### 7. Meu Papel

Obrigatoria.

Objetivo:

- Delimitar ownership e nivel de responsabilidade.

Perguntas que responde:

- Qual foi o papel exercido?
- A atuacao foi individual, em equipe, liderada ou colaborativa?
- Houve responsabilidade tecnica, produto, comunicacao ou execucao?

Profundidade esperada:

- Baixa a media.

Deve aparecer:

- Papel formal ou pratico.
- Nivel de autonomia.
- Tipo de contribuicao.
- Limites da responsabilidade.

Nunca deve aparecer:

- Apropriacao de trabalho coletivo como se fosse individual.
- Exagero de senioridade.
- Papel ambiguo.

Justificativa:

- Avaliadores precisam distinguir participacao, execucao, influencia e lideranca.

### 8. Responsabilidades

Obrigatoria.

Objetivo:

- Detalhar responsabilidades concretas assumidas.

Perguntas que responde:

- Quais atividades estavam sob responsabilidade direta?
- Quais decisoes foram conduzidas?
- Quais entregas foram realizadas?

Profundidade esperada:

- Media.

Deve aparecer:

- Responsabilidades especificas.
- Separacao entre responsabilidade direta e colaboracao.
- Responsabilidades tecnicas e nao tecnicas relevantes.

Nunca deve aparecer:

- Lista generica como "desenvolvimento full stack" sem desdobramento.
- Tarefas sem importancia para o case.
- Responsabilidades nao comprovaveis.

Justificativa:

- Responsabilidades concretas sao uma das principais evidencias de maturidade.

### 9. Stakeholders

Recomendada.

Objetivo:

- Mostrar com quem foi necessario alinhar, comunicar ou negociar.

Perguntas que responde:

- Quem era impactado?
- Com quem as decisoes precisaram ser alinhadas?
- Houve usuarios, liderancas, clientes, professores, areas de negocio ou equipes tecnicas envolvidas?

Profundidade esperada:

- Baixa a media.

Deve aparecer:

- Tipos de stakeholders.
- Relacao deles com o problema.
- Nivel de interacao.

Nunca deve aparecer:

- Nomes pessoais sem autorizacao.
- Informacoes internas de clientes ou empresas.
- Conflitos interpessoais.

Justificativa:

- Engineering Managers valorizam capacidade de atuar com pessoas, nao apenas codigo.

### 10. Criterios De Sucesso

Obrigatoria.

Objetivo:

- Definir como a solucao seria avaliada.

Perguntas que responde:

- O que precisava acontecer para considerar o trabalho bem-sucedido?
- Quais criterios eram tecnicos, de produto ou operacionais?
- Havia metricas, sinais qualitativos ou entregaveis?

Profundidade esperada:

- Media.

Deve aparecer:

- Criterios observaveis.
- Indicadores qualitativos ou quantitativos.
- Criterios de aceitacao, quando existirem.

Nunca deve aparecer:

- Criterios definidos depois apenas para valorizar o case.
- Metricas sem fonte.
- Promessas nao verificaveis.

Justificativa:

- Sem criterio de sucesso, resultado vira opiniao.

### 11. Alternativas Consideradas

Recomendada.

Objetivo:

- Demonstrar tomada de decisao e comparacao de caminhos.

Perguntas que responde:

- Quais opcoes foram consideradas?
- Por que algumas alternativas foram descartadas?
- Que riscos ou custos cada alternativa trazia?

Profundidade esperada:

- Media.

Deve aparecer:

- 2 a 4 alternativas relevantes.
- Motivos de descarte.
- Comparacao objetiva.

Nunca deve aparecer:

- Alternativas ficticias.
- Critica gratuita a decisoes de outras pessoas.
- Nivel de detalhe que revele informacao protegida.

Justificativa:

- Tech Leads avaliam maturidade pela qualidade da comparacao, nao apenas pela escolha final.

### 12. Decisao Tomada

Obrigatoria.

Objetivo:

- Explicar a escolha central e sua justificativa.

Perguntas que responde:

- Qual decisao foi tomada?
- Por que essa decisao fazia sentido naquele contexto?
- Quem participou da decisao?
- O que foi priorizado?

Profundidade esperada:

- Media.

Deve aparecer:

- Decisao principal.
- Justificativa.
- Relacao com restricoes e criterios de sucesso.
- Consequencias esperadas.

Nunca deve aparecer:

- "Escolhi X porque e melhor" sem contexto.
- Decisao apresentada como perfeita.
- Decisao sem conexao com problema e restricoes.

Justificativa:

- Esta secao e uma das mais importantes para provar engenharia.

### 13. Arquitetura

Obrigatoria.

Objetivo:

- Explicar a organizacao tecnica da solucao em nivel compreensivel.

Perguntas que responde:

- Quais partes compoem a solucao?
- Como os modulos, servicos, clientes, APIs ou bancos se relacionam?
- Onde ficam as responsabilidades?
- Que decisoes arquiteturais foram relevantes?

Profundidade esperada:

- Media a alta.
- Deve comecar em alto nivel e aprofundar somente onde for necessario.

Deve aparecer:

- Visao geral da arquitetura.
- Responsabilidades principais.
- Integracoes relevantes.
- Fronteiras do sistema.
- Dependencias importantes.

Nunca deve aparecer:

- Segredos de infraestrutura.
- Chaves, tokens, URLs internas, nomes de bancos, topologias sensiveis.
- Diagrama sem explicacao textual.
- Excesso de detalhe irrelevante.

Justificativa:

- Arquitetura demonstra raciocinio sobre sistemas, nao apenas implementacao.

### 14. Fluxo Da Solucao

Obrigatoria.

Objetivo:

- Explicar como a solucao funciona do ponto de vista operacional ou tecnico.

Perguntas que responde:

- Como uma solicitacao, usuario, evento ou processo percorre o sistema?
- Onde ocorrem validacoes, persistencia, integracoes ou respostas?
- Quais fluxos eram mais importantes?

Profundidade esperada:

- Media.

Deve aparecer:

- Fluxo principal.
- Pontos de decisao no fluxo.
- Interacoes entre partes do sistema.
- Casos alternativos importantes.

Nunca deve aparecer:

- Passo a passo irrelevante.
- Fluxos internos confidenciais.
- Dependencia exclusiva de diagrama.

Justificativa:

- O fluxo conecta arquitetura com experiencia real de uso e operacao.

### 15. Tecnologias Utilizadas

Obrigatoria.

Objetivo:

- Informar as tecnologias como suporte a decisao e execucao.

Perguntas que responde:

- Quais tecnologias foram usadas?
- Que papel cada uma cumpriu?
- Alguma escolha tecnologica teve impacto na decisao?

Profundidade esperada:

- Baixa a media.

Deve aparecer:

- Tecnologias agrupadas por funcao.
- Papel de cada tecnologia.
- Motivo de escolhas relevantes, quando aplicavel.

Nunca deve aparecer:

- Lista longa sem contexto.
- Stack como protagonista do case.
- Tecnologias que voce nao usou diretamente, a menos que isso esteja claro.

Justificativa:

- Tecnologia importa, mas como meio para resolver problemas.

### 16. Trade-offs

Obrigatoria.

Objetivo:

- Mostrar maturidade sobre custos e consequencias das escolhas.

Perguntas que responde:

- O que foi ganho?
- O que foi perdido ou adiado?
- Quais riscos foram aceitos?
- Que decisao poderia mudar em outro contexto?

Profundidade esperada:

- Media a alta.

Deve aparecer:

- Trade-offs reais.
- Relacao com restricoes.
- Consequencias tecnicas, operacionais ou de produto.
- Riscos conhecidos.

Nunca deve aparecer:

- Narrativa em que tudo foi perfeito.
- Trade-offs artificiais.
- Risco sensivel sem anonimizar.

Justificativa:

- Bons engenheiros sabem explicar custo, nao apenas beneficio.

### 17. Execucao

Obrigatoria.

Objetivo:

- Mostrar como a decisao saiu do plano e virou entrega.

Perguntas que responde:

- Como o trabalho foi organizado?
- Quais etapas principais aconteceram?
- Que colaboracoes foram necessarias?
- Como qualidade, entrega ou validacao foram tratadas?

Profundidade esperada:

- Media.

Deve aparecer:

- Etapas principais.
- Praticas de engenharia relevantes.
- Validacoes.
- Comunicacao ou alinhamentos importantes.

Nunca deve aparecer:

- Diario completo de tarefas.
- Commit-by-commit.
- Detalhes operacionais sem valor avaliativo.

Justificativa:

- Execucao diferencia quem apenas pensa de quem entrega em contexto real.

### 18. Principais Desafios

Obrigatoria.

Objetivo:

- Explicar dificuldades tecnicas, operacionais ou de produto enfrentadas.

Perguntas que responde:

- Quais foram os pontos mais dificeis?
- Por que eram dificeis?
- Como foram tratados?

Profundidade esperada:

- Media.

Deve aparecer:

- Desafios concretos.
- Causa ou contexto do desafio.
- Caminho adotado.
- Aprendizado ou consequencia.

Nunca deve aparecer:

- Reclamar de pessoas, empresas ou equipes.
- Expor falhas internas sensiveis.
- Dificuldades irrelevantes.

Justificativa:

- Desafios revelam capacidade de julgamento sob restricao.

### 19. Resultado

Obrigatoria.

Objetivo:

- Demonstrar o que foi entregue ou qual e o estado atual.

Perguntas que responde:

- O que mudou depois da execucao?
- O que foi entregue?
- O projeto esta em producao, MVP, validacao, piloto ou planejamento?

Profundidade esperada:

- Media.

Deve aparecer:

- Entregaveis.
- Estado atual.
- Resultado tecnico ou de produto.
- Evidencia disponivel.

Nunca deve aparecer:

- Resultado inflado.
- Metrica nao autorizada.
- Afirmação de sucesso sem criterio.

Justificativa:

- Resultado fecha o ciclo entre problema, decisao e execucao.

### 20. Impacto

Recomendada.

Objetivo:

- Explicar consequencias reais do trabalho.

Perguntas que responde:

- Quem foi beneficiado?
- Qual processo, produto ou operacao melhorou?
- Houve impacto tecnico, de negocio, usuario ou equipe?

Profundidade esperada:

- Media.

Deve aparecer:

- Impacto qualitativo.
- Metricas publicas ou aproximadas, quando permitidas.
- Beneficio observado.

Nunca deve aparecer:

- Numeros exatos protegidos.
- Impacto atribuido exclusivamente a voce quando foi trabalho coletivo.
- Causalidade sem evidencia.

Justificativa:

- Impacto conecta engenharia ao valor gerado.

### 21. Limitacoes

Obrigatoria.

Objetivo:

- Apresentar honestamente o que nao foi resolvido, nao era publico ou ficou fora do escopo.

Perguntas que responde:

- Quais limites permaneceram?
- O que nao pode ser divulgado?
- O que foi adiado?
- Que informacao ainda nao existe?

Profundidade esperada:

- Baixa a media.

Deve aparecer:

- Limitacoes tecnicas, de produto ou de informacao.
- Ressalvas sobre confidencialidade.
- Itens fora de escopo.

Nunca deve aparecer:

- Exposicao de vulnerabilidades.
- Informacoes que comprometam empresas, usuarios ou sistemas.
- Linguagem defensiva.

Justificativa:

- Transparencia aumenta credibilidade.

### 22. Aprendizados

Obrigatoria.

Objetivo:

- Mostrar reflexao tecnica e profissional.

Perguntas que responde:

- O que este case ensinou?
- O que seria repetido?
- O que seria feito diferente?
- Que aprendizado e transferivel para outros contextos?

Profundidade esperada:

- Media.

Deve aparecer:

- Aprendizados especificos.
- Relacao com decisao, arquitetura, produto ou colaboracao.
- Reflexao madura.

Nunca deve aparecer:

- Frases genericas como "aprendi muito".
- Moral da historia vazia.
- Exposicao de falhas de terceiros.

Justificativa:

- Aprendizado demonstra crescimento profissional e comunicacao tecnica.

### 23. Principios De Engenharia Extraidos Do Case

Obrigatoria.

Objetivo:

- Transformar experiencia concreta em principio reutilizavel.

Perguntas que responde:

- Que principio tecnico ou profissional este case reforca?
- Como esse principio poderia orientar decisoes futuras?

Profundidade esperada:

- Baixa a media.

Deve aparecer:

- 2 a 5 principios.
- Principios conectados ao caso.
- Aplicabilidade em outros contextos.

Nunca deve aparecer:

- Frases motivacionais.
- Principios sem conexao com evidencia.
- Dogmas absolutos.

Justificativa:

- Engineering Managers e Tech Leads valorizam capacidade de generalizar experiencia sem perder contexto.

### 24. Projetos Relacionados

Recomendada.

Objetivo:

- Conectar cases por competencia ou contexto.

Perguntas que responde:

- Que outro case complementa este?
- Onde o leitor pode ver competencia semelhante em outro contexto?

Profundidade esperada:

- Baixa.

Deve aparecer:

- Links para cases relacionados.
- Motivo da relacao.

Nunca deve aparecer:

- Lista automatica sem criterio.
- Projetos sem relacao real.

Justificativa:

- Ajuda o leitor a construir uma visao progressiva da trajetoria.

### 25. Materiais Complementares

Opcional.

Objetivo:

- Oferecer aprofundamento quando houver materiais publicos.

Perguntas que responde:

- Existe repositorio publico?
- Existe artigo, apresentacao, documentacao, video ou demonstracao?

Profundidade esperada:

- Baixa.

Deve aparecer:

- Links publicos.
- Breve descricao do material.
- Ressalvas sobre escopo publico.

Nunca deve aparecer:

- Material privado.
- Documentos internos.
- Arquivos sem autorizacao.

Justificativa:

- Materiais complementares aumentam confianca, mas nao devem ser necessarios para entender o case.

### 26. Diagramas

Recomendada.

Objetivo:

- Complementar a explicacao de arquitetura, fluxo ou integracao.

Perguntas que responde:

- Ha uma relacao entre partes que fica mais clara visualmente?
- Existe fluxo dificil de explicar apenas em texto?
- O diagrama ajuda o leitor tecnico sem excluir o leitor nao tecnico?

Profundidade esperada:

- Variavel.
- Deve ser suficiente para apoiar a leitura, nao dominar o case.

Deve aparecer:

- Diagrama de arquitetura, fluxo, sequencia ou integracao quando util.
- Legenda.
- Explicacao textual antes ou depois do diagrama.
- Versao generalizada se houver confidencialidade.

Nunca deve aparecer:

- Segredos de infraestrutura.
- IPs, tokens, nomes internos, credenciais ou endpoints sensiveis.
- Diagrama sem contexto.
- Informacao que so exista no diagrama.

Justificativa:

- Diagramas devem reduzir carga cognitiva, nao virar dependencia.

### 27. Referencias

Recomendada.

Objetivo:

- Registrar fontes, documentos publicos ou bases que sustentam informacoes do case.

Perguntas que responde:

- De onde vem uma metrica?
- Existe fonte publica?
- Alguma tecnologia, padrao ou decisao se apoia em referencia externa?

Profundidade esperada:

- Baixa.

Deve aparecer:

- Links publicos.
- Referencias a documentacao publica.
- Observacoes de confidencialidade.

Nunca deve aparecer:

- Links internos privados.
- Dados protegidos.
- Fontes que nao podem ser acessadas ou citadas.

Justificativa:

- Referencias tornam afirmacoes auditaveis quando possivel.

## Confidencialidade

Nunca divulgar:

- Credenciais, tokens, secrets ou chaves.
- IPs, endpoints internos, nomes de hosts privados ou detalhes de rede sensiveis.
- Nomes de clientes, usuarios ou empresas sem autorizacao.
- Dados financeiros internos.
- Dados pessoais.
- Informacoes protegidas por NDA.
- Incidentes, vulnerabilidades ou falhas exploraveis.
- Estrategia comercial confidencial.
- Roadmap privado.
- Codigos, diagramas ou documentos internos sem autorizacao.
- Metricas exatas quando elas forem sensiveis.
- Criticas a pessoas, equipes, liderancas ou empresas.

Como publicar com seguranca:

- Generalizar nomes.
- Agregar numeros.
- Usar intervalos ou aproximacoes autorizadas.
- Descrever responsabilidades sem revelar implementacao sensivel.
- Separar o que e publico do que e privado.
- Explicitar quando uma informacao foi omitida por confidencialidade.

## Projetos Em Andamento

Um case de projeto em andamento pode ser publicado se:

- O estado atual estiver claro.
- Resultados nao forem apresentados como concluidos.
- Criterios de sucesso forem descritos como pretendidos ou em validacao.
- Limitacoes e proximos passos forem explicitos.
- Nao houver risco de divulgar estrategia ou roadmap sensivel.

O que evitar:

- Prometer resultado futuro.
- Tratar MVP como produto maduro.
- Apresentar validacao parcial como sucesso conclusivo.
- Divulgar planos sensiveis.

## Informacoes Protegidas Por NDA

Quando houver NDA:

- Nao citar nomes, numeros ou arquitetura especifica sem autorizacao.
- Usar descricoes abstratas.
- Focar no tipo de problema, tipo de decisao e aprendizado.
- Marcar explicitamente que detalhes foram omitidos.
- Validar com a parte responsavel antes de publicar, quando necessario.

Um case sob NDA ainda pode demonstrar engenharia se explicar:

- Contexto generalizado.
- Tipo de restricao.
- Natureza da decisao.
- Trade-offs em alto nivel.
- Aprendizados reutilizaveis.

## Metricas Aproximadas

Metricas aproximadas podem ser usadas quando:

- Sao autorizadas.
- Sao relevantes para entender escala, impacto ou complexidade.
- A aproximacao esta indicada claramente.
- Nao permitem inferir informacoes sensiveis.

Formatos aceitaveis:

- "aproximadamente X".
- "mais de X".
- "na ordem de X".
- "centenas de".
- "dezenas de".

Nunca usar metrica aproximada para:

- Inflar impacto.
- Substituir evidencia inexistente.
- Sugerir causalidade nao comprovada.
- Revelar informacao confidencial por inferencia.

## Decisoes Parcialmente Publicas

Quando uma decisao so puder ser parcialmente explicada:

- Explicar o que pode ser dito.
- Omitir detalhes sensiveis.
- Manter a relacao entre problema, restricao e decisao.
- Declarar que detalhes especificos foram generalizados.

Exemplo de abordagem permitida:

- Descrever a categoria da decisao.
- Descrever os criterios usados.
- Descrever trade-offs em alto nivel.
- Evitar nomes internos, configuracoes e detalhes operacionais.

## Checklist De Qualidade

Um estudo de caso so esta pronto para publicacao quando todos os itens obrigatorios abaixo forem atendidos.

### Contexto E Problema

- [ ] Existe contexto suficiente para entender o ambiente do case.
- [ ] O problema ficou claro antes da solucao.
- [ ] O leitor entende quem era afetado pelo problema.
- [ ] O estado do projeto esta claro: producao, MVP, validacao, piloto, planejamento ou encerrado.
- [ ] Restricoes relevantes foram explicadas.

### Papel E Responsabilidade

- [ ] O papel de Joao esta claramente delimitado.
- [ ] Responsabilidades diretas foram separadas de colaboracoes.
- [ ] Nao ha apropriacao indevida de trabalho coletivo.
- [ ] Stakeholders foram descritos quando publicamente possivel.

### Decisao E Engenharia

- [ ] Existem criterios de sucesso.
- [ ] As decisoes possuem justificativa.
- [ ] As alternativas consideradas foram apresentadas ou a ausencia delas foi justificada.
- [ ] Os trade-offs foram apresentados.
- [ ] A arquitetura foi explicada em texto.
- [ ] O fluxo da solucao pode ser entendido sem diagrama.
- [ ] Tecnologias aparecem apenas como suporte.
- [ ] Nao ha lista de stack sem contexto.

### Evidencia E Resultado

- [ ] Cada afirmacao importante possui evidencia ou ressalva.
- [ ] Resultados foram demonstrados sem exagero.
- [ ] Impacto foi explicado quando houver informacao publica.
- [ ] Metricas aproximadas estao identificadas como aproximadas.
- [ ] Limitacoes foram apresentadas com honestidade.

### Aprendizado E Maturidade

- [ ] Existe pelo menos um aprendizado reutilizavel.
- [ ] Existem principios de Engenharia extraidos do case.
- [ ] O case mostra reflexao, nao apenas execucao.
- [ ] O texto demonstra tomada de decisao, responsabilidade e comunicacao tecnica.

### Diagramas E Materiais

- [ ] O leitor consegue entender o case sem olhar diagramas.
- [ ] Diagramas complementam o texto, nao substituem explicacoes.
- [ ] Diagramas nao contem informacao confidencial.
- [ ] Materiais complementares sao publicos ou autorizados.
- [ ] Referencias foram adicionadas quando necessarias.

### Confidencialidade

- [ ] Nao ha credenciais, tokens, endpoints internos ou dados sensiveis.
- [ ] Nao ha nomes de clientes, empresas ou pessoas sem autorizacao.
- [ ] Informacoes protegidas por NDA foram omitidas ou generalizadas.
- [ ] Dados financeiros, pessoais e estrategicos foram protegidos.
- [ ] O texto nao critica pessoas, equipes ou empresas.

### Leitura Progressiva

- [ ] O resumo executivo permite entender o case rapidamente.
- [ ] Cada secao acrescenta profundidade sem repetir conteudo.
- [ ] O leitor pode parar a leitura em qualquer secao e ainda compreender o caso.
- [ ] O case nao repete informacoes que pertencem a Home, Sobre ou Experiencia.

