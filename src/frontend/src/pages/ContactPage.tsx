import { useSeo } from '@/hooks/useSeo';
import ContactForm from '@/components/contact/ContactForm';
import RevealOnScroll from '@/components/motion/RevealOnScroll';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  useSeo({
    title: 'Contact Us - Linex Automations',
    description:
      'Get in touch with Linex Automations to discuss your industrial automation needs. Our team is ready to help you optimize your operations.',
  });

  return (
    <div className="flex flex-col">
      <section className="border-b border-border/40 bg-gradient-to-br from-background to-muted/20 py-16 md:py-20">
        <div className="container">
          <RevealOnScroll>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
                Get in Touch
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Have a question or ready to discuss your automation needs? We're here to help.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <RevealOnScroll>
              <div className="space-y-8">
                <div>
                  <h2 className="mb-6 text-3xl font-bold tracking-tight">Contact Information</h2>
                  <p className="text-muted-foreground">
                    Reach out to our team to learn more about our solutions and how we can help
                    optimize your industrial operations.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-industrial-accent/10">
                      <Mail className="h-5 w-5 text-industrial-accent" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">Email</h3>
                      <p className="text-muted-foreground">sales@linexautomation.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-industrial-accent/10">
                      <Phone className="h-5 w-5 text-industrial-accent" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">Phone</h3>
                      <p className="text-muted-foreground">+91 8810234064</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-industrial-accent/10">
                      <MapPin className="h-5 w-5 text-industrial-accent" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">Location</h3>
                      <p className="text-muted-foreground">
                        Serving industrial facilities nationwide
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <div>
                <ContactForm />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}
