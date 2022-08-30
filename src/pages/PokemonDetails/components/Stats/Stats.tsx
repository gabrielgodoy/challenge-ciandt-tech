import * as am5 from "@amcharts/amcharts5";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5xy from "@amcharts/amcharts5/xy";
import { useEffect, useRef } from "react";

interface IStatsProps {
  data: {
    category: string;
    value: number;
  }[];
}

export const Stats = ({ data }: IStatsProps) => {
  const innerRoot = useRef<am5.Root>();

  useEffect(() => {
    const root = am5.Root.new("chartdiv");

    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panY: false,
        layout: root.verticalLayout,
      }),
    );

    // Create Y-axis
    const yAxis = chart.yAxes.push(
      am5xy.CategoryAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
        categoryField: "category",
      }),
    );
    yAxis.data.setAll(data);

    // Create X-Axis
    const xAxis = chart.xAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererX.new(root, {}),
        min: 0,
        calculateTotals: true,
      }),
    );

    // Create series
    const series1 = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Series",
        xAxis: xAxis,
        yAxis: yAxis,
        valueXField: "value",
        categoryYField: "category",
      }),
    );
    series1.data.setAll(data);

    series1.bullets.push(function () {
      return am5.Bullet.new(root, {
        locationY: 1.08,
        locationX: 1,
        sprite: am5.Label.new(root, {
          text: "{valueXTotal}",
          fill: am5.color(0x000000),
          centerY: am5.p100,
          centerX: am5.p50,
          populateText: true,
        }),
      });
    });

    innerRoot.current = root;

    return () => {
      innerRoot.current && innerRoot.current.dispose();
    };
  }, [data]);

  return <div id="chartdiv" style={{ width: "100%", height: "300px" }}></div>;
};
