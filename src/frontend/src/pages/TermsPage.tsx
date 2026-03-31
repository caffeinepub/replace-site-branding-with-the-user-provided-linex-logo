import { useSeo } from "@/hooks/useSeo";

export default function TermsPage() {
  useSeo({
    title: "Terms & Conditions - LINEX AUTOMATION",
    description:
      "Terms and conditions for using LINEX AUTOMATION services. Read our terms of service, warranties, and liability information.",
  });

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold">Terms & Conditions</h1>

        <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Agreement to Terms
            </h2>
            <p>
              By accessing and using the LINEX AUTOMATION website and services,
              you agree to be bound by these Terms and Conditions. If you do not
              agree with any part of these terms, you may not access our website
              or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Services
            </h2>
            <p>
              LINEX AUTOMATION provides industrial automation solutions
              including but not limited to PLC systems, HMI solutions, SCADA
              systems, servo systems, VFD solutions, control panels, energy
              management systems, and Industry 4.0 implementations. All services
              are subject to availability and our acceptance of your order or
              request.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Use of Website
            </h2>
            <p>
              You agree to use our website only for lawful purposes and in a
              manner that does not:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Infringe upon the rights of others or restrict their use of the
                website
              </li>
              <li>Violate any applicable laws or regulations</li>
              <li>Transmit any harmful or malicious code</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the proper functioning of the website</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Intellectual Property
            </h2>
            <p>
              All content on this website, including text, graphics, logos,
              images, and software, is the property of LINEX AUTOMATION or its
              licensors and is protected by copyright, trademark, and other
              intellectual property laws. You may not reproduce, distribute,
              modify, or create derivative works without our express written
              permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Quotations and Pricing
            </h2>
            <p>
              All quotations provided are valid for the period specified in the
              quotation. Prices are subject to change without notice. Final
              pricing will be confirmed in writing before any work commences.
              Additional charges may apply for changes to project scope or
              specifications.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Warranties and Disclaimers
            </h2>
            <p>
              We warrant that our services will be performed with reasonable
              skill and care. However, we make no warranties regarding the
              suitability of our solutions for any particular purpose unless
              specifically agreed in writing. To the extent permitted by law, we
              disclaim all implied warranties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, LINEX AUTOMATION shall not
              be liable for any indirect, incidental, special, consequential, or
              punitive damages, or any loss of profits or revenues, whether
              incurred directly or indirectly, or any loss of data, use,
              goodwill, or other intangible losses resulting from your use of
              our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Indemnification
            </h2>
            <p>
              You agree to indemnify and hold harmless LINEX AUTOMATION, its
              officers, directors, employees, and agents from any claims,
              damages, losses, liabilities, and expenses (including legal fees)
              arising from your use of our services or violation of these Terms
              and Conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Project Terms
            </h2>
            <p>
              Specific project terms, including scope, deliverables, timelines,
              and payment terms, will be outlined in separate project agreements
              or statements of work. These project-specific terms supplement
              and, where applicable, supersede these general Terms and
              Conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Termination
            </h2>
            <p>
              We reserve the right to terminate or suspend access to our website
              and services immediately, without prior notice, for any reason,
              including breach of these Terms and Conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Governing Law
            </h2>
            <p>
              These Terms and Conditions shall be governed by and construed in
              accordance with the laws of India. Any disputes arising from these
              terms shall be subject to the exclusive jurisdiction of the courts
              in Uttarakhand, India.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these Terms and Conditions at any
              time. Changes will be effective immediately upon posting to the
              website. Your continued use of our services after any changes
              constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Contact Information
            </h2>
            <p>
              For questions about these Terms and Conditions, please contact us
              through our{" "}
              <a
                href="/contact"
                className="text-industrial-accent hover:underline"
              >
                contact page
              </a>
              .
            </p>
          </section>

          <p className="text-sm mt-8">
            <strong>Last Updated:</strong> February 8, 2026
          </p>
        </div>
      </div>
    </div>
  );
}
