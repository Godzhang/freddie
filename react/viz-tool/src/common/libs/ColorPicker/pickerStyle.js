const styles = {
  default: {
    color: {
      width: "36px",
      height: "14px",
      borderRadius: "2px",
      background: "#000000",
    },
    swatch: {
      padding: "5px",
      background: "#fff",
      borderRadius: "1px",
      boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
      display: "inline-block",
      cursor: "pointer",
    },
    popover: {
      position: "absolute",
      zIndex: "2",
      right: "0px",
    },
    cover: {
      position: "fixed",
      top: "0px",
      right: "0px",
      bottom: "0px",
      left: "0px",
    },
  },
};

const pickerStyle = (size = "medium") => {
  const pickerStyle = JSON.parse(JSON.stringify(styles));
  if (size === "small") {
    pickerStyle.default.color.width = "18px";
    pickerStyle.default.color.height = "18px";
    pickerStyle.default.swatch.padding = "3px";
  }
  return (state) => {
    pickerStyle.default.color.background =
      typeof state.color === "string"
        ? state.color
        : `rgba(${state.color.r}, ${state.color.g}, ${state.color.b}, ${state.color.a})`;
    return pickerStyle;
  };
};

export default pickerStyle;
