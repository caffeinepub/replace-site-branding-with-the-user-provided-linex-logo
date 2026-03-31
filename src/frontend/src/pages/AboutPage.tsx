import RevealOnScroll from "@/components/motion/RevealOnScroll";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useSeo } from "@/hooks/useSeo";
import { Award, CheckCircle2, ShieldCheck, X } from "lucide-react";
import { useState } from "react";

const capabilities = [
  "Programmable Logic Controllers (PLC)",
  "Human Machine Interface (HMI)",
  "Supervisory Control and Data Acquisition (SCADA)",
  "Servo Motor Systems",
  "Variable Frequency Drives (VFD)",
  "Custom Control Panels",
  "Energy Management Systems",
];

const certifications = [
  {
    id: 1,
    icon: ShieldCheck,
    title: "ISO 9001:2015",
    subtitle: "Quality Management System",
    description:
      "Certified for our commitment to consistent quality management, customer satisfaction, and continual improvement across all operations.",
    embedUrl:
      "https://drive.google.com/file/d/1bnGuwMXFHGZvAfjkGx8IfkhPvg_dnAVB/preview",
    ocidBtn: "certifications.view_certificate_button.1",
  },
  {
    id: 2,
    icon: Award,
    title: "IEC Certified",
    subtitle: "Import & Export Compliance",
    description:
      "Internationally recognized certification confirming our compliance with global standards for import and export of industrial automation equipment.",
    embedUrl:
      "https://drive.google.com/file/d/13psjHgfHf0llifzmrB2oR1dDYT5YcIHw/preview",
    ocidBtn: "certifications.view_certificate_button.2",
  },
];

export default function AboutPage() {
  useSeo({
    title: "About LINEX AUTOMATION - Industrial Automation Experts",
    description:
      "Learn about LINEX AUTOMATION, your trusted partner for comprehensive industrial automation solutions including PLC, HMI, SCADA, and energy management systems.",
  });

  const [openCert, setOpenCert] = useState<(typeof certifications)[0] | null>(
    null,
  );

  return (
    <div className="flex flex-col">
      <section className="border-b border-border/40 bg-gradient-to-br from-background to-muted/20 py-16 md:py-24">
        <div className="container">
          <RevealOnScroll>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 flex flex-col items-center gap-2 text-4xl font-bold uppercase tracking-tight sm:text-5xl">
                <span>About Us</span>
                <span className="text-3xl text-industrial-accent sm:text-4xl">
                  LINEX AUTOMATION
                </span>
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Your trusted partner in industrial automation, delivering
                cutting-edge solutions that drive efficiency, reliability, and
                innovation.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <RevealOnScroll>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight">
                  Who We Are
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <span className="font-bold uppercase">
                      LINEX AUTOMATION
                    </span>{" "}
                    is a leading provider of industrial automation solutions,
                    specializing in the design, implementation, and support of
                    advanced control systems for modern manufacturing and
                    process industries.
                  </p>
                  <p>
                    With deep expertise across the full spectrum of automation
                    technologies, we help businesses optimize their operations,
                    reduce downtime, and achieve their production goals through
                    intelligent, reliable automation systems.
                  </p>
                  <p>
                    Our team of experienced engineers and technicians works
                    closely with clients to understand their unique challenges
                    and deliver tailored solutions that meet their specific
                    requirements.
                  </p>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight">
                  Our Expertise
                </h2>
                <p className="text-muted-foreground">
                  We offer comprehensive capabilities across all major
                  industrial automation technologies:
                </p>
                <ul className="space-y-3">
                  {capabilities.map((capability) => (
                    <li key={capability} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-industrial-accent" />
                      <span className="text-muted-foreground">
                        {capability}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <section className="border-t border-border/40 bg-muted/30 py-16 md:py-24">
        <div className="container">
          <RevealOnScroll>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold tracking-tight">
                Our Commitment
              </h2>
              <p className="text-lg text-muted-foreground">
                At <span className="font-bold uppercase">LINEX AUTOMATION</span>
                , we are committed to delivering excellence in every project.
                From initial consultation through implementation and ongoing
                support, we partner with our clients to ensure their automation
                systems deliver maximum value and performance. Our focus on
                quality, reliability, and customer satisfaction has made us a
                trusted name in industrial automation.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="border-t border-border/40 py-16 md:py-24">
        <div className="container">
          <RevealOnScroll>
            <div className="mb-12 text-center">
              <h2 className="mb-3 text-3xl font-bold tracking-tight">
                Our Certifications
              </h2>
              <p className="text-muted-foreground">
                Recognized globally for quality, compliance, and operational
                excellence.
              </p>
            </div>
          </RevealOnScroll>

          <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
            {certifications.map((cert, i) => {
              const Icon = cert.icon;
              return (
                <RevealOnScroll key={cert.id} delay={i * 0.15}>
                  <div className="flex flex-col items-center gap-4 rounded-xl border border-border bg-card p-8 text-center shadow-sm transition-shadow hover:shadow-md">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-industrial-accent/10">
                      <Icon className="h-8 w-8 text-industrial-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold tracking-tight">
                        {cert.title}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-industrial-accent">
                        {cert.subtitle}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {cert.description}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-2 border-industrial-accent/40 text-industrial-accent hover:bg-industrial-accent/10"
                      onClick={() => setOpenCert(cert)}
                      data-ocid={cert.ocidBtn}
                    >
                      View Certificate
                    </Button>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      <Dialog
        open={!!openCert}
        onOpenChange={(open) => !open && setOpenCert(null)}
      >
        <DialogContent className="max-w-3xl" data-ocid="certifications.modal">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              {openCert && (
                <>
                  {openCert.id === 1 ? (
                    <ShieldCheck className="h-5 w-5 text-industrial-accent" />
                  ) : (
                    <Award className="h-5 w-5 text-industrial-accent" />
                  )}
                  {openCert.title} — {openCert.subtitle}
                </>
              )}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-2 overflow-hidden rounded-lg border border-border">
            {openCert && (
              <iframe
                src={openCert.embedUrl}
                title={openCert.title}
                width="100%"
                height="600"
                className="block"
                sandbox="allow-scripts allow-same-origin"
                allow="autoplay"
              />
            )}
          </div>
          <div className="mt-4 flex justify-end">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setOpenCert(null)}
              data-ocid="certifications.close_button"
            >
              <X className="mr-1.5 h-4 w-4" />
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
