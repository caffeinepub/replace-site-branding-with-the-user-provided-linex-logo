import { useSeo } from '@/hooks/useSeo';
import RevealOnScroll from '@/components/motion/RevealOnScroll';
import { CheckCircle2 } from 'lucide-react';

const capabilities = [
  'Programmable Logic Controllers (PLC)',
  'Human Machine Interface (HMI)',
  'Supervisory Control and Data Acquisition (SCADA)',
  'Servo Motor Systems',
  'Variable Frequency Drives (VFD)',
  'Custom Control Panels',
  'Energy Management Systems',
];

export default function AboutPage() {
  useSeo({
    title: 'About Linex Automations - Industrial Automation Experts',
    description:
      'Learn about Linex Automations, your trusted partner for comprehensive industrial automation solutions including PLC, HMI, SCADA, and energy management systems.',
  });

  return (
    <div className="flex flex-col">
      <section className="border-b border-border/40 bg-gradient-to-br from-background to-muted/20 py-16 md:py-24">
        <div className="container">
          <RevealOnScroll>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
                About Linex Automations
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Your trusted partner in industrial automation, delivering cutting-edge solutions
                that drive efficiency, reliability, and innovation.
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
                <h2 className="text-3xl font-bold tracking-tight">Who We Are</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Linex Automations is a leading provider of industrial automation solutions,
                    specializing in the design, implementation, and support of advanced control
                    systems for modern manufacturing and process industries.
                  </p>
                  <p>
                    With deep expertise across the full spectrum of automation technologies, we
                    help businesses optimize their operations, reduce downtime, and achieve their
                    production goals through intelligent, reliable automation systems.
                  </p>
                  <p>
                    Our team of experienced engineers and technicians works closely with clients to
                    understand their unique challenges and deliver tailored solutions that meet
                    their specific requirements.
                  </p>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight">Our Expertise</h2>
                <p className="text-muted-foreground">
                  We offer comprehensive capabilities across all major industrial automation
                  technologies:
                </p>
                <ul className="space-y-3">
                  {capabilities.map((capability) => (
                    <li key={capability} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-industrial-accent" />
                      <span className="text-muted-foreground">{capability}</span>
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
              <h2 className="mb-6 text-3xl font-bold tracking-tight">Our Commitment</h2>
              <p className="text-lg text-muted-foreground">
                At Linex Automations, we are committed to delivering excellence in every project.
                From initial consultation through implementation and ongoing support, we partner
                with our clients to ensure their automation systems deliver maximum value and
                performance. Our focus on quality, reliability, and customer satisfaction has made
                us a trusted name in industrial automation.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
