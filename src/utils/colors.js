// Light colors
export const PRIMARY_COLOR = "#3e4bff"
export const SECONDARY_COLOR = "#ef3948"
export const HOME_BG_COLOR = "#e5e7ff"
export const HOME_LIGHT = "#f8f8f8"
export const TEXT_DARK = "#333"
export const LIGHT_TEXT_DARK = "#555"
export const BOX_LIGHT = "#fff"
export const YELLOW_COLOR = "#FB8500"
export const WHITE_COLOR = "#fff"
export const FOOTER_COLOR = "#535787"

// Dark colors
export const HOME_BG_DARK_COLOR = "#001523"
export const BG_DARK_COLOR = "#002137"
export const HOME_DARK = "#030303"
export const TEXT_LIGHT = "#fff"
export const LIGHT_TEXT_LIGHT = "#ccc"
export const BOX_DARK = "#b3c5d1"

export const Colors = {
  light: {
    home: `linear-gradient(to bottom, ${HOME_BG_COLOR}, ${HOME_LIGHT})`,
    navbar: HOME_BG_COLOR,
    text: TEXT_DARK,
    lightText: LIGHT_TEXT_DARK,
    box: BOX_LIGHT,
    bg: WHITE_COLOR,
    footer: FOOTER_COLOR
  },
  dark: {
    home: `linear-gradient(to bottom, ${HOME_BG_DARK_COLOR} 50%, ${HOME_DARK})`,
    navbar: HOME_BG_DARK_COLOR,
    text: TEXT_LIGHT,
    lightText: LIGHT_TEXT_LIGHT,
    box: BOX_DARK,
    bg: BG_DARK_COLOR,
    footer: HOME_BG_DARK_COLOR
  }
}

export const getThemeColor = (theme) => {
  return Colors[theme];
}