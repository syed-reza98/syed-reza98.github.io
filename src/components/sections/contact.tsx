import * as React from "react";
import Link from "next/link";
import { Typography } from "@/components/ui/typography";
import { Container } from "@/components/ui/container";
import { Stack } from "@/components/ui/stack";
import { Button } from "@/components/ui/button";
import { EnvelopeClosedIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export function Contact() {
  return (
    <section id="contact" className="bg-muted/30 py-20">
      <Container size="md">
        <Stack gap={8} align="center" className="text-center">
          {/* Section Header */}
          <Stack gap={4} align="center">
            <Typography variant="h2">Get in Touch</Typography>
            <Typography variant="lead" className="max-w-2xl">
              I&apos;m always open to discussing new projects, creative ideas, 
              or opportunities to be part of your visions.
            </Typography>
          </Stack>

          {/* Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
            <Button asChild size="lg">
              <Link href="mailto:syed.reza98@gmail.com">
                <EnvelopeClosedIcon className="h-5 w-5" />
                Email Me
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link
                href="https://github.com/syed-reza98"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubLogoIcon className="h-5 w-5" />
                GitHub
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link
                href="https://linkedin.com/in/syed-salman-reza"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInLogoIcon className="h-5 w-5" />
                LinkedIn
              </Link>
            </Button>
          </div>
        </Stack>
      </Container>
    </section>
  );
}
