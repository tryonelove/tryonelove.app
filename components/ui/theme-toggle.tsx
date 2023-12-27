import { useTheme } from 'next-themes';
import { Button } from './button';
import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();

  const IconComponent = theme === 'dark' ? Sun : Moon;

  const switchTheme = () => {
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
