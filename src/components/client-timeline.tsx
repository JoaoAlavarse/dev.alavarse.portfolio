"use client";

import { Timeline } from "@/components/timeline";
import { TimelineItem } from "@/interfaces";

export default function ClientTimeline({
  items,
  currentLabel,
}: {
  items: TimelineItem[];
  currentLabel: string;
}) {
  return <Timeline items={items} currentLabel={currentLabel} />;
}
