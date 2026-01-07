/* eslint-disable react/no-unescaped-entities */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How long does orthodontic treatment typically take?",
      answer:
        "Treatment duration varies depending on the complexity of your case. Simple cases may take 12-18 months, while more complex cases can take 24-36 months. During your consultation, Dr Dasoo will provide a personalized timeline based on your specific needs.",
    },
    {
      question: "At what age should my child first see an orthodontist?",
      answer:
        "The South African Dental Association recommends children have their first orthodontic evaluation by age 7. At this age, we can identify potential issues early and plan for treatment at the optimal time. Early intervention can often simplify future treatment.",
    },
    {
      question: "Are braces painful?",
      answer:
        "While you may experience some discomfort after adjustments, modern braces are much more comfortable than in the past. Any discomfort typically lasts only a few days and can be managed with over-the-counter pain relievers. We prioritize your comfort throughout treatment.",
    },
    {
      question:
        "What's the difference between traditional braces and clear aligners?",
      answer:
        "Traditional braces use brackets and wires to move teeth and are excellent for complex cases. Clear aligners are removable, nearly invisible trays that work well for mild to moderate cases. During your consultation, we'll recommend the best option for your specific situation.",
    },
    {
      question: "How much does orthodontic treatment cost?",
      answer:
        "Treatment costs vary based on the complexity of your case and the type of treatment selected. We offer flexible payment plans to make treatment accessible. During your consultation, we'll provide a detailed cost breakdown and discuss financing options.",
    },
    {
      question: "Do you accept medical aid?",
      answer:
        "Yes, we work with most major medical aid schemes in South Africa. Our admin team will help you understand your benefits and maximize your coverage. We also offer affordable payment plans for any remaining balance.",
    },
    {
      question: "How often will I need appointments?",
      answer:
        "Typically, patients visit every 4-8 weeks during active treatment. These appointments allow us to monitor progress and make necessary adjustments. Each visit usually takes 15-30 minutes.",
    },
    {
      question: "What happens after my braces are removed?",
      answer:
        "After treatment, you'll wear a retainer to maintain your new smile. Initially, retainers are worn full-time, then gradually transitioned to nighttime wear only. We provide detailed retention care instructions and follow-up appointments to ensure lasting results.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-3">FAQ</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Find answers to common questions about orthodontic treatment.
              Can't find what you're looking for? Contact us directly.
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-muted rounded-xl border-0 px-6 shadow-soft"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
