import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import PageTransition from "../components/PageTransitions";
import { HOME_ROUTE } from "@/lib/routes";

export default function TermsOfServicePage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-primary/5 border-b">
          <div className="container mx-auto px-4 py-8">
            <Link href={HOME_ROUTE}>
              <Button variant="ghost" className="mb-4 -ml-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              Terms of Service
            </h1>
            <p className="text-muted-foreground mt-2">
              Last updated: January 15, 2026
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using our orthodontic services, you accept and
                agree to be bound by the terms and provisions of this agreement.
                If you do not agree to abide by these terms, please do not use
                our services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                2. Services Provided
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We provide professional orthodontic services including but not
                limited to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Clear aligner treatments (Invisalign)</li>
                <li>Traditional braces and orthodontic appliances</li>
                <li>Consultations and treatment planning</li>
                <li>Retainer services and aftercare</li>
                <li>Dental care products through our store</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                3. Appointments and Cancellations
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We kindly request that you provide at least 24 hours notice for
                any appointment cancellations or rescheduling. Missed
                appointments without prior notice may be subject to a
                cancellation fee.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to reschedule appointments due to
                unforeseen circumstances and will provide as much notice as
                possible.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                4. Payment Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Payment for services is due at the time of treatment unless
                alternative arrangements have been made. We offer various
                payment options including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Cash and credit/debit cards</li>
                <li>Medical Aid</li>
                <li>Flexible payment plans for qualifying treatments</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                5. Patient Responsibilities
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Patients are responsible for:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Following treatment instructions and care guidelines</li>
                <li>Attending scheduled appointments</li>
                <li>Maintaining good oral hygiene during treatment</li>
                <li>Reporting any concerns or complications promptly</li>
                <li>Wearing retainers as prescribed after treatment</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                6. Store Purchases
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Products purchased through our store are subject to our return
                policy. Unopened products may be returned within 30 days of
                purchase with proof of purchase. Opened or used products cannot
                be returned for hygiene reasons.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                7. Limitation of Liability
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                While we strive to provide the highest quality care, individual
                results may vary. We are not liable for outcomes that result
                from failure to follow treatment instructions or recommended
                care guidelines.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                8. Contact Information
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms of Service, please
                contact us at:
              </p>
              <div className="mt-4 p-6 bg-muted/50 rounded-lg">
                <p className="text-foreground font-medium">
                  Three Rivers Orthodontics
                </p>
                <p className="text-muted-foreground">
                  139 General Hertzog Rd,
                  <br />
                  Three Rivers, Vereeniging, 1929
                </p>
                <p className="text-muted-foreground">Phone: 016 423 1227</p>
                <p className="text-muted-foreground">
                  Email: privacy@threeriversorthodontics.co.za
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
