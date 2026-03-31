import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { services } from "@/content/services";
import { useSeo } from "@/hooks/useSeo";
import { Link, useParams } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function SolutionDetailPage() {
  const { id } = useParams({ from: "/solutions/$id" });
  const service = services.find((s) => s.id === id);

  useSeo({
    title: service
      ? `${service.title} - LINEX AUTOMATION`
      : "Solution Not Found - LINEX AUTOMATION",
    description: service
      ? service.description
      : "The requested solution could not be found.",
  });

  if (!service) {
    return (
      <div className="container py-12">
        <Alert variant="destructive">
          <AlertDescription>
            Solution not found. Please check the URL or return to the solutions
            page.
          </AlertDescription>
        </Alert>
        <div className="mt-6">
          <Button asChild variant="outline">
            <Link to="/solutions">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Solutions
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <div className="mb-6">
        <Button asChild variant="ghost" size="sm">
          <Link to="/solutions">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Solutions
          </Link>
        </Button>
      </div>

      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-lg bg-industrial-accent/10">
            <service.icon className="h-10 w-10 text-industrial-accent" />
          </div>
          <h1 className="mb-4 text-4xl font-bold">{service.title}</h1>
          <p className="text-xl text-muted-foreground">{service.description}</p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="mb-4 text-2xl font-semibold">Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              {service.detailedDescription}
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Key Features</h2>
            <ul className="space-y-3">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-industrial-accent" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Applications</h2>
            <ul className="space-y-3">
              {service.applications.map((application) => (
                <li key={application} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-industrial-accent" />
                  <span className="text-muted-foreground">{application}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="border-t pt-8">
            <h2 className="mb-4 text-2xl font-semibold">Get Started</h2>
            <p className="mb-6 text-muted-foreground">
              Interested in implementing {service.title.toLowerCase()} for your
              facility? Contact us to discuss your requirements and learn how we
              can help optimize your operations.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Request Information</Link>
            </Button>
          </section>
        </div>
      </div>
    </div>
  );
}
