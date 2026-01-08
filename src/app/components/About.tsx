import { Card, CardContent } from "@/components/ui/card";
import {
  Award,
  GraduationCap,
  Heart,
  Users,
  Sparkles,
  User,
} from "lucide-react";

const About = () => {
  const credentials = [
    {
      icon: GraduationCap,
      title: "Specialist Qualified",
      description: "Registered specialist orthodontist with advanced training",
    },
    {
      icon: Award,
      title: "15+ Years Experience",
      description: "Trusted expertise in orthodontic care since 2009",
    },
    {
      icon: Users,
      title: "2,000+ Patients",
      description: "Successfully transformed thousands of smiles",
    },
    {
      icon: Heart,
      title: "Patient-Focused",
      description: "Personalized care tailored to your unique needs",
    },
    {
      icon: Sparkles,
      title: "Official Spark Provider",
      description: "Certified provider of Spark clear aligners",
      link: "https://sparkaligners.com/",
    },
  ];

  const teamMembers = [
    {
      name: "Thandi Mokoena",
      role: "Practice Manager",
      initials: "TM",
    },
    {
      name: "Lerato Nkosi",
      role: "Dental Assistant",
      initials: "LN",
    },
    {
      name: "Sipho Dlamini",
      role: "Orthodontic Assistant",
      initials: "SD",
    },
    {
      name: "Palesa Molefe",
      role: "Receptionist",
      initials: "PM",
    },
  ];

  return (
    <section id="about" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="aspect-4/5 rounded-2xl overflow-hidden shadow-elevated">
              <div className="w-full h-full bg-accent flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 rounded-full bg-hero-gradient mx-auto mb-6 flex items-center justify-center">
                    <span className="text-5xl text-primary-foreground font-display font-bold">
                      SD
                    </span>
                  </div>
                  <p className="font-display text-2xl font-semibold text-foreground">
                    Dr Saad Dasoo
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Specialist Orthodontist
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    BDS (Wits) • DipOdont (Pret)
                  </p>
                  <p className="text-xs text-muted-foreground">
                    MDent (SMU) • FCD (SA)
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-hero-gradient rounded-2xl -z-10 opacity-20" />
          </div>

          {/* Content Column */}
          <div>
            <p className="text-primary font-medium mb-3">
              Meet Your Orthodontist
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Dr Saad Dasoo
            </h2>
            <p className="text-primary font-medium mb-6">
              BDS (Wits) • DipOdont (Pret) • MDent (SMU) • FCD (SA)
              <br />
              <span className="text-muted-foreground text-sm">
                PR. No.: 064 000 0935271
              </span>
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              With over 15 years of dedicated experience in orthodontics, Dr
              Saad Dasoo has established Three Rivers Orthodontics as a leading
              practice in Vereeniging. Combining advanced techniques with a
              gentle, patient-centered approach, Dr Dasoo is committed to
              creating beautiful, healthy smiles for patients of all ages.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Every treatment plan is carefully customized to address your
              unique dental needs and aesthetic goals. From traditional braces
              to modern clear aligners, we use the latest technology to ensure
              optimal results with maximum comfort.
            </p>

            {/* Credentials Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {credentials.map((credential) => {
                const content = (
                  <div
                    key={credential.title}
                    className={`flex items-start gap-4 p-4 rounded-xl bg-background shadow-soft ${
                      credential.link
                        ? "hover:shadow-elevated transition-shadow cursor-pointer"
                        : ""
                    }`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                      <credential.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm">
                        {credential.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        {credential.description}
                      </p>
                    </div>
                  </div>
                );

                return credential.link ? (
                  <a
                    key={credential.title}
                    href={credential.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {content}
                  </a>
                ) : (
                  content
                );
              })}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">
              Our Team
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Meet the Team Behind Your Smile
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our dedicated staff ensures every visit is comfortable, efficient,
              and welcoming
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <Card
                key={member.name}
                className="bg-background border-border/50 hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <CardContent className="p-6">
                  <div className="w-20 h-20 rounded-full bg-accent mx-auto mb-4 flex items-center justify-center">
                    <User className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground">
                    {member.name}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    {member.role}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
