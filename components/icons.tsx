import { ChartNoAxesCombined, Compass, Mail, MessagesSquare, Search, Target, Workflow, type LucideIcon } from "lucide-react";
const icons: Record<string, LucideIcon> = { ChartNoAxesCombined, Compass, Mail, MessagesSquare, Search, Target, Workflow };
export function ServiceIcon({ name }: { name: string }) { const Icon = icons[name] || Compass; return <Icon aria-hidden="true"/>; }
