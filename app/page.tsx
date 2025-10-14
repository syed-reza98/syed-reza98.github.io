import Link from "next/link";
import { GitHubLogoIcon, LinkedInLogoIcon, EnvelopeClosedIcon, RocketIcon, CodeIcon, PersonIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

export default function Home() {
  const projects = [
    {
      name: "SMCM",
      description: "An open source web application that helps online businesses plan, schedule, track, and analyze multi-platform social media marketing campaigns.",
      tech: ["Next.js", "React", "TypeScript", "APIs"],
      github: "https://github.com/syed-reza98/SMCM",
      stars: 2,
    },
    {
      name: "WalkInRoom",
      description: "Comprehensive hotel booking and management system with modern UI and seamless user experience.",
      tech: ["JavaScript", "PHP", "MySQL"],
      github: "https://github.com/syed-reza98/walkinroom",
      stars: 2,
    },
    {
      name: "Metro Solver",
      description: "Graph-based solution for finding optimal metro routes and connections.",
      tech: ["Python", "Algorithms", "Graph Theory"],
      github: "https://github.com/syed-reza98/Metro-Solver",
    },
    {
      name: "E-Commerce Platform",
      description: "Digital product e-commerce system with payment integration and user management.",
      tech: ["PHP", "Laravel", "MySQL"],
      github: "https://github.com/syed-reza98/digital_product_e-commerce",
      stars: 1,
    },
    {
      name: "CodeStorm Hub",
      description: "Community platform for open source enthusiasts and creators to collaborate.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/syed-reza98/CodeStorm-Hub.github.io",
    },
    {
      name: "Gourmet Hub Catering",
      description: "Modern catering service website with booking and menu management.",
      tech: ["TypeScript", "React", "Next.js"],
      github: "https://github.com/syed-reza98/gourmet-hub-catering",
    },
  ];

  const skills = {
    "Languages": ["JavaScript", "TypeScript", "Python", "PHP", "C"],
    "Frontend": ["React", "Next.js", "Vue.js", "Nuxt.js", "Tailwind CSS"],
    "Backend": ["Node.js", "Laravel", "Express.js"],
    "Database": ["MySQL", "PostgreSQL", "MongoDB"],
    "Tools": ["Git", "GitHub Actions", "Docker", "Linux"],
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Hi, I'm <span className="text-accent">Syed Salman Reza</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
              Full-Stack Developer passionate about building innovative web applications and contributing to open source
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="#projects">
                <RocketIcon className="mr-2 h-5 w-5" />
                View Projects
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#contact">
                <EnvelopeClosedIcon className="mr-2 h-5 w-5" />
                Get in Touch
              </Link>
            </Button>
          </div>

          <div className="flex gap-4 pt-4">
            <Link
              href="https://github.com/syed-reza98"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub Profile"
            >
              <GitHubLogoIcon className="h-6 w-6" />
            </Link>
            <Link
              href="https://linkedin.com/in/syed-salman-reza"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedInLogoIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-center gap-3">
              <PersonIcon className="h-8 w-8 text-accent" />
              <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground">
                I'm a passionate full-stack developer with expertise in building modern web applications using cutting-edge technologies. 
                With experience across multiple programming languages and frameworks, I love creating elegant solutions to complex problems.
              </p>
              <p className="text-muted-foreground">
                My journey in software development has led me to work on diverse projects ranging from e-commerce platforms to social media 
                management tools, always focusing on writing clean, maintainable code and delivering exceptional user experiences.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                <CodeIcon className="h-6 w-6 text-accent" />
                Technical Skills
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category} className="space-y-3">
                    <h4 className="font-semibold text-foreground">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <RocketIcon className="h-8 w-8 text-accent" />
              <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div
                  key={project.name}
                  className="border border-border rounded-lg p-6 space-y-4 hover:shadow-lg transition-shadow bg-background"
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-semibold">{project.name}</h3>
                      {project.stars && (
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <span>⭐</span>
                          <span className="text-sm">{project.stars}</span>
                        </div>
                      )}
                    </div>
                    <p className="text-muted-foreground text-sm">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-accent/10 text-accent rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Button asChild variant="outline" className="w-full">
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <GitHubLogoIcon className="mr-2 h-4 w-4" />
                      View on GitHub
                    </Link>
                  </Button>
                </div>
              ))}
            </div>

            <div className="text-center pt-8">
              <Button asChild variant="outline" size="lg">
                <Link href="https://github.com/syed-reza98?tab=repositories" target="_blank" rel="noopener noreferrer">
                  View All Projects on GitHub
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto space-y-8 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
              <p className="text-muted-foreground text-lg">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="mailto:syed.reza@example.com">
                  <EnvelopeClosedIcon className="mr-2 h-5 w-5" />
                  Email Me
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="https://github.com/syed-reza98" target="_blank" rel="noopener noreferrer">
                  <GitHubLogoIcon className="mr-2 h-5 w-5" />
                  GitHub
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="https://linkedin.com/in/syed-salman-reza" target="_blank" rel="noopener noreferrer">
                  <LinkedInLogoIcon className="mr-2 h-5 w-5" />
                  LinkedIn
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
