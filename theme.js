const THEME = {
  light: {
    color: "#4c4f69",
    background: "#eff1f5",
  },
  dark: {
    color: "#cad3f5",
    background: "#24273a",
  },
};

const applyTheme = () => {
  const isNight = new Date().getHours() >= 19 || new Date().getHours() < 6;

  if (isNight) {
    document.documentElement.style.backgroundColor = THEME.dark.background;
    document.documentElement.style.color = THEME.dark.color;
    document.documentElement.classList.add("night");
  } else {
    document.documentElement.style.backgroundColor = THEME.light.background;
    document.documentElement.style.color = THEME.light.color;
    document.documentElement.classList.add("day");
  }
};

applyTheme();
