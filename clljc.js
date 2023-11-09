export default{
  namespaced: true,
  state: () => ({
    itemName: "车流量监测",
    data: {
      backgroundColor: 'transparent',
  series: [
    {
      type: 'gauge',
      startAngle: 180,
      radius: '160%',
      center:['50%','80%'],
      endAngle: 0,
      min: 0,
      max: 240,
      splitNumber: 12,
      itemStyle: {
        color: '#58D9F9',
        shadowColor: 'rgba(0,138,255,0.45)',
        shadowBlur: 10,
        shadowOffsetX: 2,
        shadowOffsetY: 2
      },
      progress: {
        show: true,
        roundCap: true,
        width: 6
      },
      pointer: {
        icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
        length: '70%',
        width: 4,
        offsetCenter: [0, '5%']
      },
      axisLine: {
        roundCap: true,
        lineStyle: {
          width: 6
        }
      },
      axisTick: {
        splitNumber: 2,
        lineStyle: {
          width: 2,
          color: '#999'
        }
      },
      splitLine: {
        length: 12,
        lineStyle: {
          width: 3,
          color: '#999'
        }
      },
      axisLabel: {
        distance: 10,
        color: '#999',
        fontSize: 12
      },
      title: {
        show: false
      },
      // detail: {
      //   backgroundColor: 'rgba(255,255,255,.1)',
      //   borderColor: 'rgba(255,255,255,.6)',
      //   borderWidth: 1,
      //   width: '40%',
      //   lineHeight: 20,
      //   height: 20,
      //   borderRadius: 8,
      //   offsetCenter: [0, '30%'],
      //   valueAnimation: true,
      //   formatter: function (value) {
      //     return '{value|' + value.toFixed(0) + '}{unit|人}';
      //   },
      //   rich: {
      //     value: {
      //       fontSize:14,
      //       fontWeight: 'bolder',
      //       color: '#777',
      //       padding: [0, 0, 0, 0]
      //     },
      //     unit: {
      //       fontSize: 12,
      //       color: '#999',
      //       padding: [0, 0, 0, 0]
      //     }
      //   }
      // },
      data: [
        {
          value: 150
        }
      ]
    }]
    },
  }),
  mutations: {},
  actions: {},
};