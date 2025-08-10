import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Button, Tooltip, useColorScheme } from '@mui/material';

const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
} as const;

function ThemeToggler() {
  const { mode, setMode } = useColorScheme();

  if (!mode) {
    return null;
  }

  const isLightMode = mode === THEMES.LIGHT;

  const toggleMode = () => {
    setMode(isLightMode ? THEMES.DARK : THEMES.LIGHT);
  };

  const tooltipTitle = isLightMode ? 'Switch to dark mode' : 'Switch to light mode';

  return (
    <Tooltip title={tooltipTitle}>
      <Button onClick={toggleMode}>{isLightMode ? <DarkModeIcon /> : <LightModeIcon />}</Button>
    </Tooltip>
  );
}

export default ThemeToggler;
