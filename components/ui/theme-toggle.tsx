import { useTheme } from 'next-themes';
import { Button } from './button';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const IconComponent = theme === 'dark' ? Sun : Moon;

  const switchTheme = () => {
    console.log('switch theme');
    console.log(theme);
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Button
      className={className}
      variant='ghost'
      size='icon'
      onClick={switchTheme}
    >
      <IconComponent />
    </Button>
  );
}
