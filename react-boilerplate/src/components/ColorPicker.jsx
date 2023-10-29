export const ColorPicker = ({ colors }) => {
  const onColorClick = (color) => {
    document.body.style.background = color;
  };

  return (
    <div className="flex gap-4 mt-4">
      {colors.split(",").map((col, index) => (
        <button
          type="button"
          key={index}
          className="uppercase border border-white text-white"
          style={{ background: col }}
          onClick={() => onColorClick(col)}
        >
          {col}
        </button>
      ))}
    </div>
  );
};
