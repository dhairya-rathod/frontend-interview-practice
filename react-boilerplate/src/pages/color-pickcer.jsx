/**
 Create a React component called ColorPicker. This component should render a set of buttons, each representing a color (e.g., red, green, blue, yellow, etc.). When the user clicks on a color button, the background color of the whole page should change to the selected color.
*/
import { useState } from "react";
import { ColorPicker as MyColorPicker } from "../components/ColorPicker";

const ColorPicker = () => {
  const [colors, setColors] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="w-full p-4 flex flex-col">
      <input
        className="p-2 max-w-md"
        type="text"
        name="colors"
        id="colors"
        value={colors}
        onChange={(e) => setColors(e.target.value)}
        placeholder="Enter color names Note: comma(,) separated"
        onKeyDown={(e) => {
          if (e.code === "Enter") {
            console.log("TCL ~ ColorPicker ~ e.code:", e.code);
            setIsVisible(true);
          }
        }}
      />

      {isVisible && <MyColorPicker colors={colors} />}
    </div>
  );
};

export default ColorPicker;
