import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const NeighborhoodChart = () => {
  const options = {
    chart: {
      height: 210
    },

    title: {
      text: 'Neighborhood value trend',
      align: 'left'
    },

    subtitle: null,

    yAxis: {
      title: {
        text: null
      }
    },

    xAxis: {
      accessibility: {
        rangeDescription: 'Range: 2010 to 2022'
      }
    },

    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: 2010
      }
    },

    series: [
      {
        name: '',
        showInLegend: false,
        data: [
          43934, 48656, 65165, 81827, 112143, 142383, 171533, 165174, 155157, 161454, 154610,
          168960, 171558
        ]
      }
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom'
            }
          }
        }
      ]
    }
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default NeighborhoodChart;
