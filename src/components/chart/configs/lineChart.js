const lineChart = {
  series: [
    {
      name: "Horizontal Shifts",
      data: [100, 40, 30, 22, 50, 25, 40, 20, 50],
      offsetY: 0,
    },
    {
      name: "Panel shifts",
      data: [30, 90, 40, 14, 29, 29, 34, 23, 40],
      offsetY: 0,
    },
  ],

  options: {
    chart: {
      width: "100%",
      height: 350,
      type: "area",
      toolbar: {
        show: false,
      },
    },

    legend: {
      show: false,
    },

    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },

    yaxis: {
      labels: {
        style: {
          fontSize: "14px",
          fontWeight: 600,
          colors: ["#8c8c8c"],
        },
      },
    },

    xaxis: {
      labels: {
        style: {
          fontSize: "14px",
          fontWeight: 600,
          colors: [
            "#8c8c8c",
            "#8c8c8c",
            "#8c8c8c",
            "#8c8c8c",
            "#8c8c8c",
            "#8c8c8c",
            "#8c8c8c",
            "#8c8c8c",
            "#8c8c8c",
          ],
        },
      },
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
    },

    tooltip: {
      y: {
        formatter: function (val) {
          return val;
        },
      },
    },
  },
};

export default lineChart;
