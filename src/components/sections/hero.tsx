import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { Container } from "@/components/ui/container";
import { Stack } from "@/components/ui/stack";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  RocketIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";

export function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-background to-background pointer-events-none" />
      
      <Container>
        <Stack gap={8} align="center" className="relative text-center">
          {/* Main heading */}
          <Stack gap={4} align="center">
            <Typography variant="h1" className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
              Hi, I&apos;m <span className="text-accent">Syed Salman Reza</span>
            </Typography>
            <Typography variant="lead" className="max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
              Full-Stack Developer passionate about building innovative web applications 
              and contributing to open source
            </Typography>
          </Stack>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Button asChild size="lg">
              <Link href="#projects">
                <RocketIcon className="h-5 w-5" />
                View Projects
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#contact">
                <EnvelopeClosedIcon className="h-5 w-5" />
                Get in Touch
              </Link>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            <Link
              href="https://github.com/syed-reza98"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform duration-200"
              aria-label="GitHub Profile"
            >
              <GitHubLogoIcon className="h-6 w-6" />
            </Link>
            <Link
              href="https://linkedin.com/in/syed-salman-reza"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform duration-200"
              aria-label="LinkedIn Profile"
            >
              <LinkedInLogoIcon className="h-6 w-6" />
            </Link>
          </div>
        </Stack>
      </Container>
    </section>
  );
}
