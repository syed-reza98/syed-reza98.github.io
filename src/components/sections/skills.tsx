import * as React from "react";
import { Typography } from "@/components/ui/typography";
import { Container } from "@/components/ui/container";
import { Stack } from "@/components/ui/stack";
import { Grid } from "@/components/ui/grid";
import { Badge } from "@/components/ui/badge";
import { CodeIcon } from "@radix-ui/react-icons";

const skillCategories = {
  "Languages": ["JavaScript", "TypeScript", "Python", "PHP", "C"],
  "Frontend": ["React", "Next.js", "Vue.js", "Nuxt.js", "Tailwind CSS"],
  "Backend": ["Node.js", "Laravel", "Express.js"],
  "Database": ["MySQL", "PostgreSQL", "MongoDB"],
  "Tools": ["Git", "GitHub Actions", "Docker", "Linux"],
};

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <Container>
        <Stack gap={8}>
          {/* Section Header */}
          <div className="flex items-center gap-3">
            <CodeIcon className="h-8 w-8 text-accent" aria-hidden="true" />
            <Typography variant="h2">Technical Skills</Typography>
          </div>

          {/* Skills Grid */}
          <Grid cols={3} gap={6}>
            {Object.entries(skillCategories).map(([category, skills]) => (
              <div key={category} className="space-y-3">
                <Typography variant="h4" className="text-foreground">
                  {category}
                </Typography>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </Grid>
        </Stack>
      </Container>
    </section>
  );
}
