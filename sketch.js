let webcam;
let hueSlider;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  webcam = createCapture(VIDEO);
  webcam.size(windowWidth, windowHeight);
  webcam.hide();

  // Create a slider for hue shift and position it inside the window
  hueSlider = createSlider(0, 360, 0);
  hueSlider.position(width / 2 - 150, height - 50);  // Positioned at the bottom of the window
}

function draw() {
  webcam.loadPixels();

  // Get the value from the slider for hue shift
  let hueShift = hueSlider.value();

  // Loop through each pixel
  for (let i = 0; i < webcam.pixels.length; i += 4) {
    let r = webcam.pixels[i];
    let g = webcam.pixels[i + 1];
    let b = webcam.pixels[i + 2];

    // Convert RGB to HSL
    let hsl = rgbToHsl(r, g, b);

    // Modify the hue based on the slider value (creating a tint effect)
    hsl[0] = (hsl[0] + hueShift / 360) % 1;

    // Convert the modified HSL back to RGB
    let rgb = hslToRgb(hsl[0], hsl[1], hsl[2]);

    // Apply the modified colors back to the pixels
    webcam.pixels[i] = rgb[0];
    webcam.pixels[i + 1] = rgb[1];
    webcam.pixels[i + 2] = rgb[2];
  }

  webcam.updatePixels();
  image(webcam, 0, 0);

  // Label for the slider
  textSize(16);
  fill(255);
  text("Hue Shift: " + hueShift, 10, height - 10);
}

// Function to convert RGB to HSL
function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  let max = Math.max(r, g, b);
  let min = Math.min(r, g, b);
  let h = (max + min) / 2;
  let s = h;
  let l = h;

  if (max === min) {
    h = s = 0; // Achromatic
  } else {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) {
      h = (g - b) / d + (g < b ? 6 : 0);
    } else if (max === g) {
      h = (b - r) / d + 2;
    } else {
      h = (r - g) / d + 4;
    }
    h /= 6;
  }

  return [h, s, l];
}

// Function to convert HSL to RGB
function hslToRgb(h, s, l) {
  let r, g, b;

  if (s === 0) {
    r = g = b = l; // Achromatic
  } else {
    let hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    let p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}
