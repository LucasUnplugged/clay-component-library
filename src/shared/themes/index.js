const _shiftColor = (col, amt) => {
    let usePound = false;

    if (col[0] === '#') {
        col = col.slice(1);
        usePound = true;
    }

    let num = parseInt(col,16);
    let r = (num >> 16) + amt;

    if (r > 255) r = 255;
    else if  (r < 0) r = 0;

    let b = ((num >> 8) & 0x00FF) + amt;

    if (b > 255) b = 255;
    else if  (b < 0) b = 0;

    let g = (num & 0x0000FF) + amt;

    if (g > 255) g = 255;
    else if (g < 0) g = 0;

    return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16);
};

const _generateColorOptions = ({ light, regular, dark }) => {
  const hsp = _getColorHSP(regular);
  const modifier = hsp < 100 ? 2 : 1;
  return {
    50:  _shiftColor(dark,    -20 * modifier),
    100: _shiftColor(dark,    -10 * modifier),
    200: dark,
    300: _shiftColor(dark,     10),
    400: _shiftColor(regular, -10),
    500: regular,
    600: _shiftColor(regular,  10),
    700: _shiftColor(light,    -10 * (2 - modifier)),
    800: _shiftColor(light,    10 * (modifier - 1)),
    900: _shiftColor(light,    10 * modifier),
  };
};

const _getColorHSP = color => {
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

const _hexToRgb = hex => {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
};

const _getAlphaColors = color => {
  const hex = _hexToRgb(color);
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

const generateColors = inputColors => {
  const {
    black,
    white,
  } = inputColors;
  const colors = {
    black,
    blackAlpha: _getAlphaColors(black),
    white,
    whiteAlpha: _getAlphaColors(white),
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
    const colorRange = _generateColorOptions(colorValues);

    colors[colorName] = colorRange;
    colors.text[colorName] = {};

    Object.keys(colorRange).forEach(key => {
      const color = colorRange[key];
      const hsp = _getColorHSP(color);
      if (hsp > 200) {
        colors.text[colorName][key] = _shiftColor(colorValues.dark, -30);
      } else if (hsp > 150) {
        colors.text[colorName][key] = black;
      } else if (hsp > 70) {
        colors.text[colorName][key] = white;
      } else {
        colors.text[colorName][key] = _shiftColor(colorValues.light, 100);
      }
    });
  });

  return colors;
};

export default generateColors;
