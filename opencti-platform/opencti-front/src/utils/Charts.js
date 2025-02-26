import * as C from '@mui/material/colors';
import { resolveLink } from './Entity';

const colors = (temp) => [
  C.red[temp],
  C.purple[temp],
  C.pink[temp],
  C.deepPurple[temp],
  C.indigo[temp],
  C.blue[temp],
  C.cyan[temp],
  C.blueGrey[temp],
  C.lightBlue[temp],
  C.green[temp],
  C.teal[temp],
  C.lightGreen[temp],
  C.amber[temp],
  C.deepOrange[temp],
  C.lime[temp],
  C.yellow[temp],
  C.brown[temp],
  C.orange[temp],
  C.grey[temp],
];

const toolbarOptions = {
  show: false,
  export: {
    csv: {
      columnDelimiter: ',',
      headerCategory: 'category',
      headerValue: 'value',
      dateFormatter(timestamp) {
        return new Date(timestamp).toDateString();
      },
    },
  },
};

export const lineChartOptions = (
  theme,
  isTimeSeries = false,
  xFormatter = null,
  yFormatter = null,
  tickAmount = undefined,
  dataLabels = false,
  legend = true,
) => ({
  chart: {
    type: 'line',
    background: 'transparent',
    toolbar: toolbarOptions,
    foreColor: theme.palette.text.secondary,
    width: '100%',
    height: '100%',
  },
  theme: {
    mode: theme.palette.mode,
  },
  dataLabels: {
    enabled: dataLabels,
  },
  colors: [
    theme.palette.primary.main,
    ...colors(theme.palette.mode === 'dark' ? 400 : 600),
  ],
  states: {
    hover: {
      filter: {
        type: 'lighten',
        value: 0.05,
      },
    },
  },
  grid: {
    borderColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .1)'
        : 'rgba(0, 0, 0, .1)',
    strokeDashArray: 3,
  },
  legend: {
    show: legend,
    itemMargin: {
      horizontal: 5,
      vertical: 20,
    },
  },
  stroke: {
    curve: 'smooth',
    width: 2,
  },
  tooltip: {
    theme: theme.palette.mode,
  },
  xaxis: {
    type: isTimeSeries ? 'datetime' : 'category',
    tickAmount,
    tickPlacement: 'on',
    labels: {
      formatter: (value) => (xFormatter ? xFormatter(value) : value),
      style: {
        fontSize: '12px',
        fontFamily: '"IBM Plex Sans", sans-serif',
      },
    },
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      formatter: (value) => (yFormatter ? yFormatter(value) : value),
      style: {
        fontSize: '14px',
        fontFamily: '"IBM Plex Sans", sans-serif',
      },
    },
    axisBorder: {
      show: false,
    },
  },
});

/**
 * @param {Theme} theme
 * @param {boolean} isTimeSeries
 * @param {function} xFormatter
 * @param {function} yFormatter
 * @param {number} tickAmount
 * @param {boolean} isStacked
 * @param {boolean} legend
 */
export const areaChartOptions = (
  theme,
  isTimeSeries = false,
  xFormatter = null,
  yFormatter = null,
  tickAmount = undefined,
  isStacked = false,
  legend = true,
) => ({
  chart: {
    type: 'area',
    background: 'transparent',
    toolbar: toolbarOptions,
    foreColor: theme.palette.text.secondary,
    stacked: isStacked,
    width: '100%',
    height: '100%',
  },
  theme: {
    mode: theme.palette.mode,
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    width: 2,
  },
  colors: [
    theme.palette.primary.main,
    ...colors(theme.palette.mode === 'dark' ? 400 : 600),
  ],
  states: {
    hover: {
      filter: {
        type: 'lighten',
        value: 0.05,
      },
    },
  },
  grid: {
    borderColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .1)'
        : 'rgba(0, 0, 0, .1)',
    strokeDashArray: 3,
  },
  legend: {
    show: legend,
    itemMargin: {
      horizontal: 5,
      vertical: 20,
    },
  },
  tooltip: {
    theme: theme.palette.mode,
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: theme.palette.mode,
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.1,
      gradientToColors: [
        theme.palette.primary.main,
        theme.palette.primary.main,
      ],
    },
  },
  xaxis: {
    type: isTimeSeries ? 'datetime' : 'category',
    tickAmount,
    tickPlacement: 'on',
    labels: {
      formatter: (value) => (xFormatter ? xFormatter(value) : value),
      style: {
        fontSize: '12px',
        fontFamily: '"IBM Plex Sans", sans-serif',
      },
    },
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      formatter: (value) => (yFormatter ? yFormatter(value) : value),
      style: {
        fontSize: '14px',
        fontFamily: '"IBM Plex Sans", sans-serif',
      },
    },
    axisBorder: {
      show: false,
    },
  },
});

export const verticalBarsChartOptions = (
  theme,
  xFormatter = null,
  yFormatter = null,
  distributed = false,
  isTimeSeries = false,
  isStacked = false,
  legend = false,
  tickAmount = undefined,
) => ({
  chart: {
    type: 'bar',
    background: 'transparent',
    toolbar: toolbarOptions,
    foreColor: theme.palette.text.secondary,
    stacked: isStacked,
    width: '100%',
    height: '100%',
  },
  theme: {
    mode: theme.palette.mode,
  },
  dataLabels: {
    enabled: false,
  },
  colors: [
    theme.palette.primary.main,
    ...colors(theme.palette.mode === 'dark' ? 400 : 600),
  ],
  states: {
    hover: {
      filter: {
        type: 'lighten',
        value: 0.05,
      },
    },
  },
  grid: {
    borderColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .1)'
        : 'rgba(0, 0, 0, .1)',
    strokeDashArray: 3,
  },
  legend: {
    show: legend,
    itemMargin: {
      horizontal: 5,
      vertical: 20,
    },
  },
  tooltip: {
    theme: theme.palette.mode,
  },
  xaxis: {
    type: isTimeSeries ? 'datetime' : 'category',
    tickAmount,
    tickPlacement: 'on',
    labels: {
      formatter: (value) => (xFormatter ? xFormatter(value) : value),
      style: {
        fontSize: '12px',
        fontFamily: '"IBM Plex Sans", sans-serif',
      },
    },
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      formatter: (value) => (yFormatter ? yFormatter(value) : value),
      style: {
        fontFamily: '"IBM Plex Sans", sans-serif',
      },
    },
    axisBorder: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      barHeight: '30%',
      borderRadius: 4,
      borderRadiusApplication: 'end',
      borderRadiusWhenStacked: 'last',
      distributed,
    },
  },
});

export const horizontalBarsChartOptions = (
  theme,
  adjustTicks = false,
  xFormatter = null,
  yFormatter = null,
  distributed = false,
  navigate = undefined,
  redirectionUtils = null,
  stacked = false,
  total = false,
  categories = null,
  legend = false,
) => ({
  events: ['xAxisLabelClick'],
  chart: {
    type: 'bar',
    background: 'transparent',
    toolbar: toolbarOptions,
    foreColor: theme.palette.text.secondary,
    stacked,
    width: '100%',
    height: '100%',
    events: {
      xAxisLabelClick: (event, chartContext, config) => {
        if (redirectionUtils) {
          const { labelIndex } = config;
          const link = resolveLink(redirectionUtils[labelIndex].entity_type);
          const entityId = redirectionUtils[labelIndex].id;
          navigate(`${link}/${entityId}`);
        }
      },
      mouseMove: (event, chartContext, config) => {
        if (
          redirectionUtils
          && ((config.dataPointIndex >= 0
            && ((config.seriesIndex >= 0
              && redirectionUtils[config.dataPointIndex].series?.[
                config.seriesIndex
              ]?.entity_type)
              || !(
                config.seriesIndex >= 0
                && redirectionUtils[config.dataPointIndex].series
              )))
            || event.target.parentNode.className.baseVal
              === 'apexcharts-text apexcharts-yaxis-label ')
        ) {
          // for clickable parts of the graphs
          // eslint-disable-next-line no-param-reassign
          event.target.style.cursor = 'pointer';
          // eslint-disable-next-line no-param-reassign
          event.target.classList.add('noDrag');
        }
      },
      click: (event, chartContext, config) => {
        if (redirectionUtils) {
          if (config.dataPointIndex >= 0) {
            // click on a bar
            const { dataPointIndex } = config;
            if (
              config.seriesIndex >= 0
              && redirectionUtils[dataPointIndex].series
            ) {
              // for multi horizontal bars representing entities
              const { seriesIndex } = config;
              if (
                redirectionUtils[dataPointIndex].series[seriesIndex]
                  ?.entity_type
              ) {
                // for series representing a single entity
                const link = resolveLink(
                  redirectionUtils[dataPointIndex].series[seriesIndex]
                    .entity_type,
                );
                const entityId = redirectionUtils[dataPointIndex].series[seriesIndex].id;
                navigate(`${link}/${entityId}`);
              }
            } else {
              const link = resolveLink(
                redirectionUtils[dataPointIndex].entity_type,
              );
              const entityId = redirectionUtils[dataPointIndex].id;
              navigate(`${link}/${entityId}`);
            }
          }
        }
      },
    },
  },
  theme: {
    mode: theme.palette.mode,
  },
  dataLabels: {
    enabled: false,
  },
  colors: [
    theme.palette.primary.main,
    ...colors(theme.palette.mode === 'dark' ? 400 : 600),
  ],
  states: {
    hover: {
      filter: {
        type: 'lighten',
        value: 0.05,
      },
    },
  },
  grid: {
    borderColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .1)'
        : 'rgba(0, 0, 0, .1)',
    strokeDashArray: 3,
  },
  legend: {
    show: legend,
    itemMargin: {
      horizontal: 5,
    },
  },
  tooltip: {
    theme: theme.palette.mode,
  },
  xaxis: {
    categories: categories ?? [],
    labels: {
      formatter: (value) => (xFormatter ? xFormatter(value) : value),
      style: {
        fontFamily: '"IBM Plex Sans", sans-serif',
      },
    },
    axisBorder: {
      show: false,
    },
    tickAmount: adjustTicks ? 1 : undefined,
  },
  yaxis: {
    labels: {
      formatter: (value) => (yFormatter ? yFormatter(value) : value),
      style: {
        fontFamily: '"IBM Plex Sans", sans-serif',
      },
    },
    axisBorder: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '30%',
      borderRadius: 4,
      borderRadiusApplication: 'end',
      borderRadiusWhenStacked: 'last',
      distributed,
      dataLabels: {
        total: {
          enabled: total,
          offsetX: 0,
          style: {
            fontSize: '13px',
            fontWeight: 900,
            fontFamily: '"IBM Plex Sans", sans-serif',
          },
        },
      },
    },
  },
});

export const radarChartOptions = (
  theme,
  labels,
  chartColors = [],
  legend = false,
  offset = false,
) => ({
  chart: {
    type: 'radar',
    background: 'transparent',
    toolbar: toolbarOptions,
    offsetY: offset ? -20 : 0,
    parentHeightOffset: 0,
    width: '100%',
    height: '100%',
  },
  theme: {
    mode: theme.palette.mode,
  },
  labels,
  states: {
    hover: {
      filter: {
        type: 'lighten',
        value: 0.05,
      },
    },
  },
  legend: {
    show: legend,
    itemMargin: {
      horizontal: 5,
      vertical: 5,
    },
  },
  tooltip: {
    theme: theme.palette.mode,
    x: {
      formatter: (value) => value,
    },
  },
  fill: {
    opacity: 0.2,
    colors: [theme.palette.primary.main],
  },
  stroke: {
    show: true,
    width: 1,
    colors: [theme.palette.primary.main],
    dashArray: 0,
  },
  markers: {
    shape: 'circle',
    strokeColors: [theme.palette.primary.main],
    colors: [theme.palette.primary.main],
  },
  xaxis: {
    labels: {
      show: legend,
      style: {
        fontFamily: '"IBM Plex Sans", sans-serif',
        colors: chartColors,
      },
    },
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  plotOptions: {
    radar: {
      polygons: {
        strokeColors:
          theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .1)'
            : 'rgba(0, 0, 0, .1)',
        connectorColors:
          theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .1)'
            : 'rgba(0, 0, 0, .1)',
        fill: { colors: [theme.palette.background.paper] },
      },
    },
  },
});

export const polarAreaChartOptions = (
  theme,
  labels,
  formatter = null,
  legendPosition = 'bottom',
) => ({
  chart: {
    type: 'polarArea',
    background: 'transparent',
    toolbar: toolbarOptions,
    foreColor: theme.palette.text.secondary,
    width: '100%',
    height: '100%',
  },
  theme: {
    mode: theme.palette.mode,
  },
  colors: colors(theme.palette.mode === 'dark' ? 400 : 600),
  labels,
  states: {
    hover: {
      filter: {
        type: 'lighten',
        value: 0.05,
      },
    },
  },
  legend: {
    show: true,
    position: legendPosition,
    floating: legendPosition === 'bottom',
    fontFamily: '"IBM Plex Sans", sans-serif',
  },
  tooltip: {
    theme: theme.palette.mode,
  },
  fill: {
    opacity: 0.5,
  },
  yaxis: {
    labels: {
      formatter: (value) => (formatter ? formatter(value) : value),
      style: {
        fontFamily: '"IBM Plex Sans", sans-serif',
      },
    },
    axisBorder: {
      show: false,
    },
  },
  plotOptions: {
    polarArea: {
      rings: {
        strokeWidth: 1,
        strokeColor:
          theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .1)'
            : 'rgba(0, 0, 0, .1)',
      },
      spokes: {
        strokeWidth: 1,
        connectorColors:
          theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .1)'
            : 'rgba(0, 0, 0, .1)',
      },
    },
  },
});

export const donutChartOptions = (
  theme,
  labels,
  legendPosition = 'bottom',
  reversed = false,
  chartColors = [],
) => {
  const temp = theme.palette.mode === 'dark' ? 400 : 600;
  let dataLabelsColors = labels.map(() => theme.palette.text.primary);
  if (chartColors.length > 0) {
    dataLabelsColors = chartColors.map((n) => (n === '#ffffff' ? '#000000' : theme.palette.text.primary));
  }
  let chartFinalColors = chartColors;
  if (chartFinalColors.length === 0) {
    chartFinalColors = colors(temp);
    if (labels.length === 2 && labels[0] === 'true') {
      if (reversed) {
        chartFinalColors = [C.red[temp], C.green[temp]];
      } else {
        chartFinalColors = [C.green[temp], C.red[temp]];
      }
    } else if (labels.length === 2 && labels[0] === 'false') {
      if (reversed) {
        chartFinalColors = [C.green[temp], C.red[temp]];
      } else {
        chartFinalColors = [C.red[temp], C.green[temp]];
      }
    }
  }
  return {
    chart: {
      type: 'donut',
      background: 'transparent',
      toolbar: toolbarOptions,
      foreColor: theme.palette.text.secondary,
      width: '100%',
      height: '100%',
    },
    theme: {
      mode: theme.palette.mode,
    },
    colors: chartFinalColors,
    labels,
    fill: {
      opacity: 1,
    },
    states: {
      hover: {
        filter: {
          type: 'lighten',
          value: 0.05,
        },
      },
    },
    stroke: {
      curve: 'smooth',
      width: 3,
      colors: [theme.palette.background.paper],
    },
    legend: {
      show: true,
      position: legendPosition,
      fontFamily: '"IBM Plex Sans", sans-serif',
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: '10px',
        fontFamily: '"IBM Plex Sans", sans-serif',
        fontWeight: 600,
        colors: dataLabelsColors,
      },
      background: {
        enabled: false,
      },
      dropShadow: {
        enabled: false,
      },
    },
    plotOptions: {
      pie: {
        donut: {
          background: 'transparent',
          size: '70%',
        },
      },
    },
  };
};

export const treeMapOptions = (
  theme,
  legendPosition = 'bottom',
  distributed = false,
) => {
  return {
    chart: {
      type: 'treemap',
      background: 'transparent',
      toolbar: toolbarOptions,
      foreColor: theme.palette.text.secondary,
      width: '100%',
      height: '100%',
    },
    theme: {
      mode: theme.palette.mode,
    },
    colors: [
      theme.palette.primary.main,
      ...colors(theme.palette.mode === 'dark' ? 400 : 600),
    ],
    fill: {
      opacity: 1,
    },
    states: {
      hover: {
        filter: {
          type: 'lighten',
          value: 0.05,
        },
      },
    },
    stroke: {
      curve: 'smooth',
      width: 3,
      colors: [theme.palette.background.paper],
    },
    legend: {
      show: true,
      position: legendPosition,
      fontFamily: '"IBM Plex Sans", sans-serif',
    },
    tooltip: {
      theme: theme.palette.mode,
    },
    dataLabels: {
      style: {
        fontFamily: '"IBM Plex Sans", sans-serif',
        fontWeight: 600,
        colors: [theme.palette.text.primary],
      },
      background: {
        enabled: false,
      },
      dropShadow: {
        enabled: false,
      },
    },
    plotOptions: {
      treemap: {
        distributed,
      },
    },
  };
};

export const heatMapOptions = (
  theme,
  isTimeSeries = false,
  xFormatter = null,
  yFormatter = null,
  tickAmount = undefined,
  isStacked = false,
  ranges = [],
) => ({
  chart: {
    type: 'heatmap',
    background: 'transparent',
    toolbar: toolbarOptions,
    foreColor: theme.palette.text.secondary,
    stacked: isStacked,
  },
  theme: {
    mode: theme.palette.mode,
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    colors: [theme.palette.background.paper],
    width: 1,
  },
  states: {
    hover: {
      filter: {
        type: 'lighten',
        value: 0.05,
      },
    },
  },
  grid: {
    borderColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .1)'
        : 'rgba(0, 0, 0, .1)',
    strokeDashArray: 3,
  },
  legend: {
    show: false,
  },
  tooltip: {
    theme: theme.palette.mode,
  },
  xaxis: {
    type: isTimeSeries ? 'datetime' : 'category',
    tickAmount,
    tickPlacement: 'on',
    labels: {
      formatter: (value) => (xFormatter ? xFormatter(value) : value),
      style: {
        fontSize: '12px',
        fontFamily: '"IBM Plex Sans", sans-serif',
      },
    },
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      formatter: (value) => (yFormatter ? yFormatter(value) : value),
      style: {
        fontSize: '14px',
        fontFamily: '"IBM Plex Sans", sans-serif',
      },
    },
    axisBorder: {
      show: false,
    },
  },
  plotOptions: {
    heatmap: {
      enableShades: false,
      distributed: false,
      colorScale: {
        ranges,
      },
    },
  },
});
