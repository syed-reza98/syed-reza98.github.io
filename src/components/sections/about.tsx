import * as React from "react";
import { Typography } from "@/components/ui/typography";
import { Container } from "@/components/ui/container";
import { Stack } from "@/components/ui/stack";
import { PersonIcon } from "@radix-ui/react-icons";

export function About() {
  return (
    <section id="about" className="bg-muted/30 py-20">
      <Container>
        <Stack gap={8} className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-3">
            <PersonIcon className="h-8 w-8 text-accent" aria-hidden="true" />
            <Typography variant="h2">About Me</Typography>
          </div>

          {/* About Content */}
          <Stack gap={6}>
            <Typography variant="body" className="text-muted-foreground">
              I&apos;m a passionate full-stack developer with expertise in building modern web 
              applications using cutting-edge technologies. With experience across multiple 
              programming languages and frameworks, I love creating elegant solutions to complex problems.
            </Typography>
            <Typography variant="body" className="text-muted-foreground">
              My journey in software development has led me to work on diverse projects ranging 
              from e-commerce platforms to social media management tools, always focusing on 
              writing clean, maintainable code and delivering exceptional user experiences.
            </Typography>
            <Typography variant="body" className="text-muted-foreground">
              I&apos;m particularly interested in performance optimization, accessibility, and 
              modern design engineering practices. I believe in continuous learning and staying 
              up-to-date with the latest web technologies and best practices.
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </section>
  );
}
