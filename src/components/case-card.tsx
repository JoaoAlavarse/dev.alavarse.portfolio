import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ICase, Locale } from "@/interfaces";
import { Button } from "@/components/ui/button";

function sectionText(caseStudy: ICase, id: "problem" | "decision" | "result") {
  return caseStudy.sections
    .find((section) => section.id === id && section.status !== "missing")
    ?.content.filter((item) => !/^(lacuna|informação necessária):/i.test(item.trim()))[0];
}

function caseDecisionSummary(caseStudy: ICase) {
  if (caseStudy.id === "kerootica") {
    return "Evoluir por partes, sem tratar a troca como evento único.";
  }

  if (caseStudy.id === "hemoup") {
    return "Segurar a solução até entender melhor o recorte.";
  }

  if (caseStudy.id === "batterycommerce") {
    return "Organizar o fluxo antes de depender dos serviços externos.";
  }

  if (caseStudy.id === "zshop") {
    return "Ler a entrega pelo caminho do usuário, não pelo limite dos repositórios.";
  }

  return sectionText(caseStudy, "decision");
}

function caseChallengeSummary(caseStudy: ICase) {
  if (caseStudy.id === "kerootica") {
    return "A alternativa mais limpa tecnicamente também carregava mais risco operacional.";
  }

  if (caseStudy.id === "hemoup") {
    return "A pressa por produto competia com a necessidade de validar a dor primeiro.";
  }

  if (caseStudy.id === "batterycommerce") {
    return "Cada parte podia funcionar isolada e ainda assim gerar inconsistência no pedido.";
  }

  if (caseStudy.id === "zshop") {
    return "Uma mudança pequena em uma parte podia afetar venda, atendimento ou operação.";
  }

  return sectionText(caseStudy, "problem") || caseStudy.summary;
}

function caseContextSummary(caseStudy: ICase) {
  if (caseStudy.id === "kerootica") {
    return "Quando um sistema já sustenta uma operação diária.";
  }

  if (caseStudy.id === "hemoup") {
    return "Quando uma ideia nasce de uma dor real, mas ainda não de um produto claro.";
  }

  if (caseStudy.id === "batterycommerce") {
    return "Quando regras de negócio pequenas começam a depender umas das outras.";
  }

  if (caseStudy.id === "zshop") {
    return "Quando o produto atravessa canais, serviços e infraestrutura.";
  }

  return caseStudy.summary;
}

function caseNarrativeTitle(caseStudy: ICase) {
  if (caseStudy.id === "kerootica") {
    return "Quando um sistema não pode parar";
  }

  if (caseStudy.id === "hemoup") {
    return "Quando construir não era a prioridade";
  }

  if (caseStudy.id === "batterycommerce") {
    return "Quando regras vieram antes da arquitetura";
  }

  if (caseStudy.id === "zshop") {
    return "Quando partes separadas precisavam vender juntas";
  }

  return caseStudy.name;
}

export default function CaseCard({
  caseStudy,
  locale,
}: {
  caseStudy: ICase;
  locale: Locale;
}) {
  const challenge = caseChallengeSummary(caseStudy);
  const context = caseContextSummary(caseStudy);
  const decision = caseDecisionSummary(caseStudy);
  const title = caseNarrativeTitle(caseStudy);
  const result = sectionText(caseStudy, "result");

  return (
    <article className="flex h-full flex-col rounded-lg border border-border bg-background/70 p-5 shadow-sm backdrop-blur transition hover:border-purple-400/50">
      <div className="flex items-start gap-4">
        <div className="relative h-14 w-14 shrink-0 rounded-md bg-black/5 dark:bg-white/5">
          <Image
            src={caseStudy.logo}
            alt={`${caseStudy.name} logo`}
            fill
            className="object-contain p-2"
            sizes="56px"
          />
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            {caseStudy.competency}
          </p>
          <h3 className="mt-2 text-xl font-bold">{title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{caseStudy.name}</p>
        </div>
      </div>

      <dl className="mt-6 space-y-4 text-sm leading-6">
        <div>
          <dt className="font-semibold text-foreground">Contexto</dt>
          <dd className="mt-1 text-muted-foreground">{context}</dd>
        </div>
        <div>
          <dt className="font-semibold text-foreground">Desafio</dt>
          <dd className="mt-1 text-muted-foreground">{challenge}</dd>
        </div>
        {decision ? (
          <div>
            <dt className="font-semibold text-foreground">Decisão principal</dt>
            <dd className="mt-1 text-muted-foreground">{decision}</dd>
          </div>
        ) : null}
        {result ? (
          <div>
            <dt className="font-semibold text-foreground">Situação atual</dt>
            <dd className="mt-1 text-muted-foreground">{result}</dd>
          </div>
        ) : null}
      </dl>

      <div className="mt-5 flex flex-wrap gap-2">
        {caseStudy.technologies.slice(0, 4).map((technology) => (
          <span
            key={technology}
            className="rounded-md border px-2.5 py-1 text-xs text-muted-foreground"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-6">
        <Button asChild variant="outline" className="gap-2">
          <Link href={`/${locale}/cases/${caseStudy.id}`}>
            Ler case
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </article>
  );
}
