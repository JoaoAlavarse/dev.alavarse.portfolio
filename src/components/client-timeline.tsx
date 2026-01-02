"use client";

import { Timeline } from "@/components/timeline";
import { TimelineItem } from "@/interfaces";

export default function ClientTimeline({
  items,
}: {
  items: TimelineItem[];
}) {
  return <Timeline items={items} />;
}
