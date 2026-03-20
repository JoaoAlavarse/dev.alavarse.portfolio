import { TimelineItem } from "@/interfaces";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Rocket } from "lucide-react";

export function Timeline({ items, currentLabel }: { items: TimelineItem[]; currentLabel: string }) {
  const icons = {
    work: Briefcase,
    education: GraduationCap,
    project: Rocket,
  };

  return (
    <div className="relative mt-20">
      {/* Linha central */}
      <div className="absolute left-4 md:left-1/2 top-0 h-full w-px -translate-x-1/2 bg-linear-to-b from-purple-400/60 via-blue-400/60 to-transparent" />

      <ul className="space-y-20">
        {items.map((item, index) => {
          const isLeft = index % 2 === 0;
          const Icon = icons[item.type];

          return (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`relative flex flex-col md:flex-row ${
                isLeft
                  ? "md:justify-start md:pr-[50%]"
                  : "md:justify-end md:pl-[50%]"
              }`}
            >
              {/* Ponto */}
              <span className="absolute left-4 md:left-1/2 top-8 h-5 w-5 -translate-x-1/2 rounded-full bg-linear-to-r from-purple-400 to-blue-400 shadow-lg" />

              {/* Card */}
              <div
                className={`mt-4 md:mt-0 w-full max-w-md rounded-2xl border p-6 shadow-xl backdrop-blur-md
                ${
                  item.current
                    ? "border-purple-400/60 bg-purple-400/10"
                    : "bg-background/80"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-purple-400" />
                  <span className="text-xs text-muted-foreground">
                    {item.period}
                  </span>
                  {item.current && (
                    <span className="ml-auto rounded-full bg-purple-500/10 px-2 py-0.5 text-xs text-purple-400">
                      {currentLabel}
                    </span>
                  )}
                </div>

                <h3 className="mt-3 text-lg font-bold">{item.title}</h3>

                <p className="text-sm text-muted-foreground">{item.subtitle}</p>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
