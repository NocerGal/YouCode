import { SiteConfig } from '@/lib/site-config';
import Link from 'next/link';
import { ThemeToggle } from '../ThemeToggle';
import { Typography } from '../ui/Typography';
import AuthButton from '@/features/auth/AuthButton';

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex items-baseline gap-6 md:gap-10">
          <Typography variant="h3" as={Link} href="/">
            {SiteConfig.title}
          </Typography>
          <div className="flex flex-1 justify-center">
            <Typography
              as={Link}
              variant="link"
              href="/explorer"
              className="text-muted-foreground hover:text-foreground"
            >
              Explorer
            </Typography>
            <Typography
              as={Link}
              variant="link"
              href="/courses"
              className="text-muted-foreground hover:text-foreground"
            >
              Courses
            </Typography>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center gap-2 space-x-1">
            <AuthButton />
            {/* <ThemeToggle /> */}
          </nav>
        </div>
      </div>
    </header>
  );
}
