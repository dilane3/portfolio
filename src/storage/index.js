export const saveTheme = (theme) => {
  localStorage.setItem('d3-theme', theme);
}

export const getTheme = () => {
  const theme = localStorage.getItem("d3-theme");

  return theme || 'light'
}