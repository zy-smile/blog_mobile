<template>
  <div class="chart_page">
    <div class="card-white">
      <u-grid border col="2">
        <u-grid-item v-for="(listItem, listIndex) in list" :key="listIndex">
          <text class="grid-text">{{ listItem.title }}</text>
          <view class="grid-count">
            <u-count-to :startVal="0" :endVal="listItem.count" color="#51a5f2"></u-count-to>
          </view>
        </u-grid-item>
      </u-grid>
    </div>
    <view class="card-white">
      <view class="chart_title">本月阅读量分析</view>
      <view class="date_chart">
        <qiun-data-charts type="line" :opts="opts" :chartData="chartData"></qiun-data-charts>
      </view>

    </view>
    <view class="card-white">
      <view class="chart_title">本月数据统计</view>
      <view class="date_chart">
        <qiun-data-charts type="pie" :opts="pieOpts" :chartData="pieChartData"></qiun-data-charts>
      </view>

    </view>
  </div>
</template>
<script>
import dayjs from 'dayjs';
import ZhCn from 'dayjs/locale/zh-cn';
dayjs.locale(ZhCn);
export default {
  data() {
    return {
      list: [
        {
          title: '文章总数',
          count: 2000,
        },
        {
          title: '关注数',
          count: 15884,
        },
        {
          title: '阅读次数',
          count: 299,
        },
        {
          title: '阅读时长',
          count: 28,
        },
      ],
      chartData: {},
      opts: {
        color: ['#1890FF'],
        padding: [20, 10, 20, 0],
        enableScroll: true,
        xAxis: {
          disableGrid: true,
          itemCount: 5,
          scrollShow: true,
        },
        yAxis: {
          gridType: 'solid',
          gridColor: '#e4e4e4',
        },
        legend: {
          show: false,
        },
        extra: {
          line: {
            type: 'curve',
            width: 2,
            activeType: 'solid',
            lineType: 'custom',
          },
        },
      },
      pieChartData: {},
      pieOpts: {
        color: [
          '#1890FF',
          '#91CB74',
          '#FAC858',
          '#EE6666',
          '#73C0DE',
          '#3CA272',
          '#FC8452',
          '#9A60B4',
          '#ea7ccc',
        ],
        padding: [10, 10, 10, 10],
        enableScroll: false,
        extra: {
          pie: {
            activeOpacity: 0.5,
            activeRadius: 10,
            offsetAngle: 0,
            labelWidth: 15,
            border: false,
            borderWidth: 3,
            borderColor: '#FFFFFF',
          },
        },
      },
    };
  },
  onLoad() {
    let axisData = this.getDateList('month');
    let yxisData = new Array(axisData.length).fill(0);
    yxisData = yxisData.map((item) => (Math.random() * 1000).toFixed(0));
    this.chartData = {
      categories: axisData,
      series: [
        {
          name: '阅读量',
          data: yxisData,
          linearColor: [
            [0, '#1890FF'],
            [0.6, '#2797ff'],
            [1, '#2b5bb4'],
          ],
        },
      ],
    };
    this.pieChartData = {
      series: [
        {
          data: [
            { name: '阅读量', value: 50 },
            { name: '点赞量', value: 30 },
            { name: '收藏量', value: 20 },
            { name: '展现量', value: 18 },
          ],
        },
      ],
    };
  },
  methods: {
    getDateList(type) {
      let dateList = [];

      if (!['year', 'month', 'week'].includes(type)) return false;
      let startT = dayjs().startOf(type);
      let endT = dayjs().endOf(type).format('MM-DD');
      console.log(dayjs().format('MM-DD'));
      dateList.push(startT.format('MM-DD'));
      while (dateList[dateList.length - 1] !== endT) {
        startT = startT.add(1, 'day');
        dateList.push(startT.format('MM-DD'));
      }
      return dateList;
    },
  },
};
</script>
<style lang="scss" scoped>
.chart_page {
  padding-bottom: 80rpx;
}
.grid-count {
  margin: 10px 0 14px;
  color: #51a5f2;
}
.grid-text {
  margin-top: 10px;
  font-size: 32rpx;
  font-weight: 500;
}
.date_chart {
  height: 440rpx;
}
.chart_title {
  position: relative;
  height: 80rpx;
  line-height: 80rpx;
  font-size: 32rpx;
  font-weight: bold;
  color: #333;
  padding-left: 40rpx;
  &::before {
    content: '';
    position: absolute;
    left: 15rpx;
    top: 50%;
    transform: translateY(-50%);
    height: 24rpx;
    width: 6rpx;
    background-color: #51a5f2;
  }
}
</style>
