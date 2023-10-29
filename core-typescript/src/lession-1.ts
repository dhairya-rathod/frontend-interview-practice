// satisfies keyword

type Colors = "red" | "green" | "blue";
type RGB = [red: number, green: number, blue: number];

// Each property can be a string or an RGB tuple.
const palette = {
  red: [255, 0, 0],
  green: "#00ff00",
  blue: [0, 0, 255],
  //  ^^^^ sacrebleu - we've made a typo!
} satisfies Record<Colors, string | RGB>;

// We want to be able to use array methods on 'red'...
const redComponent = palette.red.at(0);

// or string methods on 'green'...
const greenNormalized = palette.green.toUpperCase();
