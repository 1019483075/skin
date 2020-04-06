// 字体变量
const baseSize = {
  "--font-size-large-x": "22px",
  "--font-size-large": "18px",
  "--font-size-medium": "14px",
  "--font-size-medium-x": "16px",
  "--font-size-small-s": "10px",
  "--font-size-small": "12px",
};

//浅色
export const lightTheme = {
  "--fill-1": "#fff",
  "--text": "#3c3c3c",
  "--text-1": "#757575",
  "--text-2": "#222",
  ...baseSize,
};

// 深色
export const darkTheme = {
  "--fill-1": "#222",
  "--text": "#fff",
  "--text-1": "rgba(255, 255, 255, 0.3)",
  "--text-2": "#ffcd32",
  ...baseSize,
};
