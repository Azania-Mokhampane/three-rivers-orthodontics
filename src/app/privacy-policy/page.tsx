/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import { ArrowLeft, Eye, Lock, Scale, Shield, UserCheck } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary/5 border-b">
        <div className="container mx-auto px-4 py-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4 -ml-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mt-2">
            Last updated: January 15, 2026
          </p>
        </div>
      </div>

      {/* Quick Overview Cards */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-5 gap-4 max-w-5xl mx-auto">
          <div className="p-4 bg-primary/5 rounded-xl text-center">
            <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-sm font-medium text-foreground">
              Data Protection
            </p>
          </div>
          <div className="p-4 bg-primary/5 rounded-xl text-center">
            <Lock className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-sm font-medium text-foreground">
              Secure Storage
            </p>
          </div>
          <div className="p-4 bg-primary/5 rounded-xl text-center">
            <Eye className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-sm font-medium text-foreground">Transparency</p>
          </div>
          <div className="p-4 bg-primary/5 rounded-xl text-center">
            <UserCheck className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-sm font-medium text-foreground">Your Rights</p>
          </div>
          <div className="p-4 bg-primary/5 rounded-xl text-center">
            <Scale className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-sm font-medium text-foreground">
              POPIA Compliant
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
              1. Introduction
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              At Three Rivers Orthodontics, we are committed to protecting your
              privacy and ensuring the security of your personal information.
              This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you use our services or visit our
              website.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
              2. Information We Collect
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may collect the following types of information:
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              Personal Information
            </h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Name, address, and contact information</li>
              <li>Date of birth and identification details</li>
              <li>Insurance information</li>
              <li>Emergency contact information</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              Medical Information
            </h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Dental and medical history</li>
              <li>X-rays, photographs, and dental impressions</li>
              <li>Treatment records and progress notes</li>
              <li>Prescription information</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              Website Information
            </h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>IP address and browser information</li>
              <li>Pages visited and time spent on site</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>To provide and manage your orthodontic treatment</li>
              <li>To communicate with you about appointments and treatment</li>
              <li>To process payments and insurance claims</li>
              <li>
                To send appointment reminders and follow-up care instructions
              </li>
              <li>To improve our services and patient experience</li>
              <li>To comply with legal and regulatory requirements</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
              4. Information Sharing
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We do not sell your personal information. We may share your
              information with:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Healthcare providers involved in your treatment</li>
              <li>Insurance companies for claims processing</li>
              <li>Laboratory services for creating dental appliances</li>
              <li>Legal authorities when required by law</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
              5. Data Security
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction. This includes encryption,
              secure servers, and restricted access to personal data.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
              6. Your Rights
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Access your personal information</li>
              <li>Request correction of inaccurate data</li>
              <li>
                Request deletion of your data (subject to legal requirements)
              </li>
              <li>Opt-out of marketing communications</li>
              <li>Request a copy of your medical records</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
              7. Data Retention
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain your medical records for the period required by
              applicable laws and regulations. After this period, records are
              securely destroyed. Non-medical information is retained only as
              long as necessary for the purposes outlined in this policy.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
              8. Cookies
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website uses cookies to enhance your browsing experience. You
              can control cookie settings through your browser preferences.
              Disabling cookies may affect some functionality of our website.
            </p>
          </section>

          {/* POPIA Section */}
          <section className="mb-10 p-6 bg-primary/5 rounded-xl border border-primary/10">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-display font-semibold text-foreground">
                9. POPIA Compliance (South Africa)
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We are committed to complying with the Protection of Personal
              Information Act (POPIA) of South Africa. As a responsible party
              under POPIA, we ensure that your personal information is processed
              lawfully, minimally, and securely.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              Your Rights Under POPIA
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              As a data subject, you have the following rights:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li>
                The right to be notified when your personal information is being
                collected
              </li>
              <li>The right to access your personal information we hold</li>
              <li>
                The right to request correction or deletion of your personal
                information
              </li>
              <li>
                The right to object to the processing of your personal
                information
              </li>
              <li>
                The right to submit a complaint to the Information Regulator
              </li>
              <li>
                The right to institute civil proceedings regarding alleged
                interference with your personal information
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              Conditions for Lawful Processing
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We process your personal information in accordance with the eight
              conditions for lawful processing as set out in POPIA:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li>
                <strong>Accountability:</strong> We take responsibility for
                complying with POPIA
              </li>
              <li>
                <strong>Processing limitation:</strong> We only process
                information with your consent or when legally permitted
              </li>
              <li>
                <strong>Purpose specification:</strong> We collect information
                for specific, defined purposes
              </li>
              <li>
                <strong>Further processing limitation:</strong> We don't use
                your information for unrelated purposes
              </li>
              <li>
                <strong>Information quality:</strong> We ensure your information
                is accurate and up to date
              </li>
              <li>
                <strong>Openness:</strong> We are transparent about how we
                handle your information
              </li>
              <li>
                <strong>Security safeguards:</strong> We protect your
                information against loss, damage, or unauthorized access
              </li>
              <li>
                <strong>Data subject participation:</strong> You can access and
                correct your information
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              Information Officer
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our designated Information Officer is responsible for ensuring
              POPIA compliance. For any POPIA-related queries or to exercise
              your rights, please contact:
            </p>
            <div className="p-4 bg-background rounded-lg">
              <p className="text-foreground font-medium">Information Officer</p>
              <p className="text-muted-foreground">Dr Saad Dasoo</p>
              <p className="text-muted-foreground">
                Email: privacy@threeriversorthodontics.co.za
              </p>
              <p className="text-muted-foreground">Phone: 016 423 1227</p>
            </div>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              Complaints
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              If you believe we have not handled your personal information in
              accordance with POPIA, you have the right to lodge a complaint
              with the Information Regulator:
            </p>
            <div className="mt-4 p-4 bg-background rounded-lg">
              <p className="text-foreground font-medium">
                Information Regulator (South Africa)
              </p>
              <p className="text-muted-foreground">
                Website: inforegulator.org.za
              </p>
              <p className="text-muted-foreground">
                Email: enquiries@inforegulator.org.za
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
              10. Changes to This Policy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. We will
              notify you of any significant changes by posting the new policy on
              our website and updating the "Last updated" date.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
              11. Contact Us
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about this Privacy Policy or wish to
              exercise your rights, please contact us:
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
  );
}
