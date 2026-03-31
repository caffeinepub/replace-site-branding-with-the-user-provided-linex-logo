import { useSeo } from "@/hooks/useSeo";

export default function PrivacyPage() {
  useSeo({
    title: "Privacy Policy - LINEX AUTOMATION",
    description:
      "Privacy policy for LINEX AUTOMATION. Learn how we collect, use, and protect your personal information.",
  });

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold">Privacy Policy</h1>

        <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Introduction
            </h2>
            <p>
              At LINEX AUTOMATION, we are committed to protecting your privacy
              and ensuring the security of your personal information. This
              Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website or use our
              services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Information We Collect
            </h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Personal Information:</strong> Name, email address,
                phone number, company name, and other contact details you
                provide through our inquiry forms.
              </li>
              <li>
                <strong>Technical Information:</strong> IP address, browser
                type, device information, and usage data collected through
                cookies and similar technologies.
              </li>
              <li>
                <strong>Communication Data:</strong> Records of your
                correspondence with us, including inquiry messages and support
                requests.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              How We Use Your Information
            </h2>
            <p>We use the collected information for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To respond to your inquiries and provide customer support</li>
              <li>
                To deliver our industrial automation solutions and services
              </li>
              <li>To improve our website and user experience</li>
              <li>
                To send you relevant information about our products and services
                (with your consent)
              </li>
              <li>To comply with legal obligations and protect our rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction. However, no method of
              transmission over the Internet or electronic storage is 100%
              secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Data Retention
            </h2>
            <p>
              We retain your personal information only for as long as necessary
              to fulfill the purposes outlined in this Privacy Policy, unless a
              longer retention period is required or permitted by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Your Rights
            </h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access and receive a copy of your personal information</li>
              <li>Request correction of inaccurate or incomplete data</li>
              <li>Request deletion of your personal information</li>
              <li>Object to or restrict certain processing of your data</li>
              <li>Withdraw consent where processing is based on consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Cookies
            </h2>
            <p>
              Our website uses cookies to enhance your browsing experience. You
              can control cookie settings through your browser preferences.
              Disabling cookies may affect the functionality of certain features
              on our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Third-Party Services
            </h2>
            <p>
              We may use third-party services for analytics, hosting, and other
              purposes. These third parties have their own privacy policies
              governing the use of your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page with an updated effective date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy or our data
              practices, please contact us through our{" "}
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
