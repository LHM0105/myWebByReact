import React,{Component} from 'react';

import echarts from 'echarts/lib/echarts' //必须
// 引入提示框组件、标题组件、工具箱组件。
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';//显示标题
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/grid'
import 'echarts/lib/chart/bar'//柱状图
import 'echarts/lib/chart/line'//折线图
class PineChart extends Component{
    state = {
        // data:[
        //     10,30,24,12,30,100,34
        // ]
    }

     componentDidMount() {
　　　　　this.showChart()
     }

     showChart = ()=>{
       var myChart = echarts.init(document.getElementById('main'));

       var option = {
        color:["skyblue","blue"],
        title: {
            text: '交易额趋势'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        // toolbox: {
        //     feature: {
        //         dataView: {show: true, readOnly: false},
        //         magicType: {show: true, type: ['line', 'bar']},
        //         restore: {show: true},
        //         saveAsImage: {show: true}
        //     }
        // },
        legend: {
            data:['日交易笔数','日交易额'],
        },
        xAxis: [
            {
                type: 'category',
                data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                axisPointer: {
                    type: 'shadow'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '日交易笔数',
                min: 0,
                max: 100000,
                interval: 20000,
                axisLabel: {
                    formatter: '{value} 笔'
                }
            },
            {
                type: 'value',
                name: '日交易额',
                min: 0,
                max: 2000,
                interval: 400,
                axisLabel: {
                    formatter: '{value} 万元'
                }
            }
        ],
        series: [
            {
                name:'日交易笔数',
                type:'bar',
                data:[20000, 45200, 24552, 39552, 56542, 74332, 23452, 34452, 87342, 56542, 23442,65432]
            },
            {
                name:'日交易额',
                type:'line',
                yAxisIndex: 1,//根据第几个数据渲染
                data:[400, 800, 452, 1552,1542, 1332, 452,952, 1242, 1542, 442,1132]
            }
        ]
       };

       myChart.setOption(option);
     }
// 组件渲染
     render() {
        return (
              <div id="main" style={{width:650, height:400}}></div>
        )
    }
}


export default PineChart