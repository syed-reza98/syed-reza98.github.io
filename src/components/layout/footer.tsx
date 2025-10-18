import Link from "next/link";
import { GitHubLogoIcon, LinkedInLogoIcon, EnvelopeClosedIcon, HeartFilledIcon } from "@radix-ui/react-icons";
import { Typography } from "@/components/ui/typography";
import { Stack } from "@/components/ui/stack";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://github.com/syed-reza98",
    icon: GitHubLogoIcon,
    label: "GitHub Profile",
  },
  {
    href: "https://linkedin.com/in/syed-salman-reza",
    icon: LinkedInLogoIcon,
    label: "LinkedIn Profile",
  },
  {
    href: "mailto:syed.reza98@gmail.com",
    icon: EnvelopeClosedIcon,
    label: "Email",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* About Section */}
          <Stack gap={4}>
            <Typography variant="h4" className="text-foreground">
              Syed Salman Reza
            </Typography>
            <Typography variant="small" className="text-muted-foreground max-w-xs">
              Full-stack developer passionate about building innovative solutions and contributing to open source.
            </Typography>
            <div className="flex items-center gap-2 text-muted-foreground pt-2">
              <Typography variant="small">Made with</Typography>
              <HeartFilledIcon className="h-4 w-4 text-red-500 animate-pulse" aria-hidden="true" />
              <Typography variant="small">using Next.js & Tailwind CSS</Typography>
            </div>
          </Stack>

          {/* Quick Links */}
          <Stack gap={4}>
            <Typography variant="h4" className="text-foreground">
              Quick Links
            </Typography>
            <nav className="flex flex-col gap-2" aria-label="Footer navigation">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </Stack>

          {/* Social Links */}
          <Stack gap={4}>
            <Typography variant="h4" className="text-foreground">
              Connect
            </Typography>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.href}
                    href={social.href}
                    target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    className="text-muted-foreground hover:text-foreground hover:scale-110 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm p-1"
                    aria-label={social.label}
                  >
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </Link>
                );
              })}
            </div>
            <Typography variant="small" className="text-muted-foreground pt-2">
              Feel free to reach out for collaborations or just a friendly chat!
            </Typography>
          </Stack>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Typography variant="small" className="text-muted-foreground text-center md:text-left">
              © {currentYear} Syed Salman Reza. All rights reserved.
            </Typography>
            <Typography variant="small" className="text-muted-foreground text-center md:text-right">
              Designed & Built with modern web technologies
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}
