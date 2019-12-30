import pSBC from 'shade-blend-color';

const _componentToHex = component => {
  var hex = component.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
};

export const shiftColor = ({ blendWith, color, convert, shiftBy}) => pSBC(
  shiftBy,
  color,
  convert === true ? 'c' : blendWith
);

export const generateColorRange = color => ({
  50:  shiftColor({ color, shiftBy: -0.55 }),
  100: shiftColor({ color, shiftBy: -0.40 }),
  200: shiftColor({ color, shiftBy: -0.30 }),
  300: shiftColor({ color, shiftBy: -0.20 }),
  400: shiftColor({ color, shiftBy: -0.10 }),
  500: color,
  600: shiftColor({ color, shiftBy: 0.09 }),
  700: shiftColor({ color, shiftBy: 0.15 }),
  800: shiftColor({ color, shiftBy: 0.20 }),
  900: shiftColor({ color, shiftBy: 0.24 }),
});

export const getColorHSP = color => {
  // Variables for red, green, blue values
  let r;
  let g;
  let b;
  let hsp;

  // Check the format of the color, HEX or RGB?
  if (color.match(/^rgb/)) {
    // If HEX --> store the red, green, blue values in separate variables
    color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);

    r = color[1];
    g = color[2];
    b = color[3];
  }
  else {
    // If RGB --> Convert it to HEX: http://gist.github.com/983661
    color = +('0x' + color.slice(1).replace(
      color.length < 5 && /./g, '$&$&'
    ));

    r = color >> 16;
    g = (color >> 8) & 255;
    b = color & 255;
  }

  // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
  hsp = Math.sqrt(
    0.299 * (r * r) +
    0.587 * (g * g) +
    0.114 * (b * b)
  );

  // Using the HSP value, determine whether the color is light or dark
  return hsp;
};

export const hexToRgb = hex => {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
};

export const getAlphaColors = color => {
  const hex = hexToRgb(color);
  const rgb = hex
    ? `${hex.r}, ${hex.g}, ${hex.b}`
    : typeof color === 'string' ? color : `${color.r}, ${color.g}, ${color.b}`;
  return {
    50: `rgba(${rgb}, 0.04)`,
    100: `rgba(${rgb}, 0.06)`,
    200: `rgba(${rgb}, 0.08)`,
    300: `rgba(${rgb}, 0.16)`,
    400: `rgba(${rgb}, 0.24)`,
    500: `rgba(${rgb}, 0.36)`,
    600: `rgba(${rgb}, 0.48)`,
    700: `rgba(${rgb}, 0.64)`,
    800: `rgba(${rgb}, 0.80)`,
    900: `rgba(${rgb}, 0.92)`,
  };
};

export const generateColors = inputColors => {
  const {
    black,
    white,
  } = inputColors;
  const colors = {
    black,
    blackAlpha: getAlphaColors(black),
    white,
    whiteAlpha: getAlphaColors(white),
    primary: {},
    secondary: {},
    tertiary: {},
    neutral: {},
    text: {},
  };

  const colorNames = [
    'primary',
    'secondary',
    'tertiary',
    'neutral',
  ];

  // Calculate the named colors and the text that goes with each one
  colorNames.forEach(colorName => {
    const colorValues = inputColors[colorName];
    const colorRange = generateColorRange(colorValues.regular);
    colors[colorName] = colorRange;
    colors.text[colorName] = {};

    Object.keys(colorRange).forEach(key => {
      const colorValue = colorRange[key];
      const hsp = getColorHSP(colorValue);
      if (hsp > 200) {
        colors.text[colorName][key] = shiftColor({ color: colorValues.dark, shiftBy: -0.30 });
      } else if (hsp > 150) {
        colors.text[colorName][key] = black;
      } else if (hsp > 70) {
        colors.text[colorName][key] = white;
      } else {
        colors.text[colorName][key] = shiftColor({ color: colorValues.light, shiftBy: 1.00 });
      }
    });
  });

  return colors;
};