const themeConfig = {
  dark: {
    backgroundStyle: { fill: "rgba(38, 38, 38, 1)" },
    defaultColor: "#5B8FF9",
    width: 400,
    height: 400,
    bleeding: [null, 24, null, 24],
    padding: "auto",
    title: {
      padding: [24, 24, 24, 24],
      fontFamily: "PingFang SC",
      fontSize: 18,
      fontWeight: "bold",
      fill: "rgba(255,255,255,0.65)",
      stroke: "rgba(0,0,0,0.95)",
      textAlign: "left",
      textBaseline: "top",
      lineHeight: 20,
      alignWithAxis: false,
    },
    description: {
      padding: [10, 24, null, 24],
      fontFamily: "PingFang SC",
      fontSize: 12,
      fill: "rgba(255, 255, 255, 0.65)",
      stroke: "rgba(0,0,0,0.95)",
      textAlign: "left",
      textBaseline: "top",
      lineHeight: 16,
      alignWithAxis: false,
    },
    axis: {
      y: {
        visible: true,
        position: "left",
        autoRotateTitle: true,
        grid: {
          visible: true,
          line: {
            style: {
              stroke: "rgba(255, 255, 255, 0.15)",
              lineWidth: 1,
              lineDash: null,
            },
          },
        },
        line: {
          visible: false,
          style: { stroke: "rgba(255, 255, 255, 0.45)", lineWidth: 1 },
        },
        tickLine: {
          visible: false,
          style: {
            stroke: "rgba(255, 255, 255, 0.45)",
            lineWidth: 0.5,
            length: 4,
          },
        },
        label: {
          visible: true,
          offset: 8,
          autoRotate: false,
          autoHide: true,
          textStyle: { fill: "rgba(255, 255, 255, 0.45)", fontSize: 12 },
        },
        title: {
          visible: false,
          spacing: 12,
          style: {
            fill: "rgba(255, 255, 255, 0.65)",
            fontSize: 12,
            textBaseline: "bottom",
          },
        },
      },
      x: {
        visible: true,
        position: "bottom",
        autoRotateTitle: false,
        grid: {
          visible: false,
          line: {
            style: {
              stroke: "rgba(255, 255, 255, 0.15)",
              lineWidth: 1,
              lineDash: null,
            },
          },
        },
        line: {
          visible: false,
          style: { stroke: "rgba(255, 255, 255, 0.45)" },
        },
        tickLine: {
          visible: true,
          style: {
            length: 4,
            stroke: "rgba(255, 255, 255, 0.45)",
            lineWidth: 0.5,
          },
        },
        label: {
          visible: true,
          textStyle: { fill: "rgba(255, 255, 255, 0.65)", fontSize: 12 },
          offset: 16,
          autoHide: true,
          autoRotate: true,
        },
        title: {
          visible: false,
          spacing: 12,
          style: { fill: "rgba(255, 255, 255, 0.65)", fontSize: 12 },
        },
      },
      circle: {
        autoRotateTitle: true,
        grid: { style: { lineDash: null, lineWidth: 1, stroke: "#E3E8EC" } },
        line: { style: { lineWidth: 1, stroke: "#BFBFBF" } },
        tickLine: {
          style: {
            lineWidth: 1,
            stroke: "#bdc8d3",
            length: 4,
            alignWithLabel: true,
          },
        },
        label: {
          offset: 16,
          textStyle: { fill: "#a0a4aa", fontSize: 12 },
          autoRotate: true,
          autoHide: true,
        },
        title: { offset: 12, style: { fill: "#767b84", fontSize: 12 } },
      },
      radius: {
        label: { offset: 12, textStyle: { fill: "#a0a4aa", fontSize: 12 } },
      },
    },
    legend: {
      flipPage: false,
      position: "bottom",
      innerPadding: [16, 16, 16, 16],
      title: { visible: false, style: { fill: "#bdc8d3" } },
      text: { style: { fill: "#bdc8d3" } },
    },
    label: {
      offset: 12,
      textStyle: { fill: "rgba(255, 255, 255, 0.65)" },
      style: { fill: "rgba(255, 255, 255, 0.65)", lineWidth: 1 },
    },
    components: {
      tooltip: {
        domStyles: {
          "g2-tooltip": {
            backgroundColor: "rgba(33,33,33, 0.95)",
            boxShadow: "0px 0px 8px rgba(0,0,0,0.65)",
            color: "rgba(255, 255, 255, 0.65)",
          },
        },
      },
    },
    geometries: {
      line: {
        line: { default: { style: {} }, active: {}, disable: {}, selected: {} },
      },
      point: {
        circle: {
          default: { style: {} },
          active: { style: {} },
          disable: { style: {} },
          selected: { style: {} },
        },
      },
    },
  },
  default: {
    width: 400,
    height: 400,
    bleeding: [null, 24, null, 24],
    padding: "auto",
    defaultColor: "#5B8FF9",
    colors: [
      "#5B8FF9",
      "#5AD8A6",
      "#5D7092",
      "#F6BD16",
      "#E8684A",
      "#6DC8EC",
      "#9270CA",
      "#FF9D4D",
      "#269A99",
      "#FF99C3",
    ],
    colors_20: [
      "#5B8FF9",
      "#BDD2FD",
      "#5AD8A6",
      "#BDEFDB",
      "#5D7092",
      "#C2C8D5",
      "#F6BD16",
      "#FBE5A2",
      "#E8684A",
      "#F6C3B7",
      "#6DC8EC",
      "#B6E3F5",
      "#9270CA",
      "#D3C6EA",
      "#FF9D4D",
      "#FFD8B8",
      "#269A99",
      "#AAD8D8",
      "#FF99C3",
      "#FFD6E7",
    ],
    title: {
      padding: [24, 24, 24, 24],
      fontFamily: "PingFang SC",
      fontSize: 18,
      fill: "black",
      textAlign: "left",
      textBaseline: "top",
      lineHeight: 20,
      alignWithAxis: false,
    },
    description: {
      padding: [10, 24, null, 24],
      fontFamily: "PingFang SC",
      fontSize: 12,
      fill: "grey",
      textAlign: "left",
      textBaseline: "top",
      lineHeight: 16,
      alignWithAxis: false,
    },
    axis: {
      y: {
        visible: true,
        position: "left",
        autoRotateTitle: true,
        grid: {
          visible: true,
          line: {
            style: {
              stroke: "rgba(0, 0, 0, 0.15)",
              lineWidth: 1,
              lineDash: [0, 0],
            },
          },
        },
        line: {
          visible: false,
          style: { stroke: "rgba(0, 0, 0, 0.45)", lineWidth: 1 },
        },
        tickLine: {
          visible: false,
          style: { stroke: "rgba(0,0,0,0.45)", lineWidth: 0.5, length: 4 },
        },
        label: {
          visible: true,
          offset: 8,
          textStyle: { fill: "rgba(0,0,0,0.45)", fontSize: 12 },
          autoRotate: false,
          autoHide: true,
        },
        title: {
          visible: false,
          spacing: 12,
          style: {
            fill: "rgba(0, 0, 0, 0.65)",
            fontSize: 12,
            textBaseline: "bottom",
          },
        },
      },
      x: {
        visible: true,
        position: "bottom",
        autoRotateTitle: false,
        grid: {
          visible: false,
          line: {
            style: {
              stroke: "rgba(0, 0, 0, 0.15)",
              lineWidth: 1,
              lineDash: [0, 0],
            },
          },
        },
        line: {
          visible: false,
          style: { stroke: "rgba(0, 0, 0, 0.45)", lineWidth: 1 },
        },
        tickLine: {
          visible: true,
          style: { length: 4, stroke: "rgba(0, 0, 0, 0.45)", lineWidth: 0.5 },
        },
        label: {
          visible: true,
          textStyle: { fill: "rgba(0,0,0,0.45)", fontSize: 12 },
          offset: 16,
          autoRotate: true,
          autoHide: true,
        },
        title: {
          visible: false,
          spacing: 12,
          style: { fill: "rgba(0, 0, 0, 0.65)", fontSize: 12 },
        },
      },
      circle: {
        autoHideLabel: false,
        grid: {
          line: {
            style: {
              lineDash: null,
              lineWidth: 1,
              stroke: "rgba(0, 0, 0, 0.15)",
            },
          },
        },
        line: { style: { lineWidth: 1, stroke: "rgba(0, 0, 0, 0.45)" } },
        tickLine: {
          style: {
            lineWidth: 1,
            stroke: "rgba(0, 0, 0, 0.45)",
            length: 4,
            alignWithLabel: true,
          },
        },
        label: {
          offset: 16,
          textStyle: { fill: "rgba(0,0,0,0.45)", fontSize: 12 },
          autoRotate: true,
          autoHide: true,
        },
        title: {
          offset: 12,
          style: { fill: "rgba(0, 0, 0, 0.65)", fontSize: 12 },
        },
      },
      radius: {
        label: { textStyle: { fill: "rgba(0,0,0,0.45)", fontSize: 12 } },
      },
    },
    legend: {
      flipPage: false,
      position: "bottom",
      innerPadding: [16, 16, 16, 16],
      margin: [0, 24, 24, 24],
    },
    label: {
      offset: 12,
      textStyle: { fill: "#595959" },
      style: { fill: "#595959", stroke: "#ffffff", lineWidth: 2 },
    },
    tooltip: {
      "g2-tooltip": { boxShadow: "0px 0px 8px rgba(0,0,0,0.15)" },
      offset: 10,
    },
    components: {
      legend: { margin: [0, 24, 24, 24] },
      tooltipIndicator: {
        title: { style: { fontSize: 14, fill: "#262626" } },
        line: { style: { opacity: 1 }, inactiveStyle: { opacity: 0.3 } },
        itemTitle: {
          style: { fontSize: 12, fill: "#8C8C8C", opacity: 1 },
          inactiveStyle: { opacity: 0.3 },
        },
        itemName: {
          style: { fontSize: 12, fill: "#8C8C8C", opacity: 1 },
          inactiveStyle: { opacity: 0.3 },
        },
        itemValue: {
          style: {
            fontSize: 14,
            fontWeight: "bold",
            fill: "#595959",
            opacity: 1,
          },
          inactiveStyle: { opacity: 0.3 },
        },
      },
    },
    geometries: {
      line: {
        line: { default: { style: {} }, active: {}, disable: {}, selected: {} },
      },
      point: {
        circle: {
          default: { style: {} },
          active: { style: {} },
          disable: { style: {} },
          selected: { style: {} },
        },
      },
    },
  },
};

export default themeConfig;
