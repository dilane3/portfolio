// Light colors
export const PRIMARY_COLOR = "#3e4bff"
export const SECONDARY_COLOR = "#ef3948"
export const HOME_BG_COLOR = "#e5e7ff"
export const HOME_LIGHT = "#f8f8f8"

// Dark colors
export const HOME_BG_DARK_COLOR = "#001523"
export const BG_DARK_COLOR = "#002137"
export const HOME_DARK = "#030303"

export const Colors = {
  light: {
    home: `linear-gradient(to bottom, ${HOME_BG_COLOR}, ${HOME_LIGHT})`
  },
  dark: {
    home: `linear-gradient(to bottom, ${HOME_BG_DARK_COLOR}, ${HOME_DARK})`
  }
}

export const getThemeColor = (theme) => {
  return Colors[theme];
}