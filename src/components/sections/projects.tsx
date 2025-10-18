import * as React from "react";
import Link from "next/link";
import { Typography } from "@/components/ui/typography";
import { Container } from "@/components/ui/container";
import { Stack } from "@/components/ui/stack";
import { Grid } from "@/components/ui/grid";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RocketIcon, GitHubLogoIcon, StarIcon } from "@radix-ui/react-icons";

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

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <Container>
        <Stack gap={8}>
          {/* Section Header */}
          <div className="flex items-center gap-3">
            <RocketIcon className="h-8 w-8 text-accent" aria-hidden="true" />
            <Typography variant="h2">Featured Projects</Typography>
          </div>

          {/* Projects Grid */}
          <Grid cols={3} gap={6}>
            {projects.map((project) => (
              <Card
                key={project.name}
                className="flex flex-col hover:shadow-lg transition-shadow duration-200"
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle>{project.name}</CardTitle>
                    {project.stars && (
                      <div className="flex items-center gap-1 text-muted-foreground shrink-0">
                        <StarIcon className="h-4 w-4" aria-hidden="true" />
                        <span className="text-sm">{project.stars}</span>
                      </div>
                    )}
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHubLogoIcon className="h-4 w-4" />
                      View on GitHub
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </Grid>

          {/* View All Button */}
          <div className="text-center pt-8">
            <Button asChild variant="outline" size="lg">
              <Link
                href="https://github.com/syed-reza98?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                View All Projects on GitHub
              </Link>
            </Button>
          </div>
        </Stack>
      </Container>
    </section>
  );
}
