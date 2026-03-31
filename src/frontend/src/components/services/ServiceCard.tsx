import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Service } from "@/content/services";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  service: Service;
  onClick?: () => void;
}

export default function ServiceCard({ service, onClick }: ServiceCardProps) {
  return (
    <button
      type="button"
      className="group flex h-full w-full flex-col text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      onClick={onClick}
      aria-label={`View details for ${service.title}`}
    >
      <Card className="flex h-full w-full flex-col transition-all duration-300 hover:shadow-lg hover:border-industrial-accent/50">
        <CardHeader className="flex-grow">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-industrial-accent/10 transition-colors group-hover:bg-industrial-accent/20">
            <service.icon className="h-8 w-8 text-industrial-accent" />
          </div>
          <CardTitle className="text-xl">{service.title}</CardTitle>
          <CardDescription>{service.description}</CardDescription>
        </CardHeader>
        <CardContent className="mt-auto">
          <div className="flex items-center text-sm font-medium text-industrial-accent transition-transform group-hover:translate-x-1">
            Learn more
            <ArrowRight className="ml-1 h-4 w-4" />
          </div>
        </CardContent>
      </Card>
    </button>
  );
}
