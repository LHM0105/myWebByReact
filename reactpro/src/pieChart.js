import React,{Component} from 'react';

import echarts from 'echarts/lib/echarts' //必须
// 引入提示框组件、标题组件、工具箱组件。
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';//显示标题
import 'echarts/lib/component/toolbox';
import 'echarts/lib/chart/pie'//饼状图
// import 'echarts/lib/chart/line'//折线图
class PieChart extends Component{
    componentDidMount() {

        // 来自父组件传的参数
　　　　 this.showChart1(this.props.jiaoyistyle,this.props.jyStyleData)
    }
    shouldComponentUpdate(){
        return false;
    }
    changeData=()=>{
        this.setState({
            domId:"测试，在函数中"
        })
        console.log(this.state.domId)
    }
    showChart1 = (style,dataArr)=>{
        var myChart = echarts.init(document.getElementById(this.props.dataId));

        var option = {
            title : {
                text: style,
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
            },
            series : [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:dataArr,
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };

        myChart.setOption(option);
    }
// 组件渲染
     render() {
        return (
              <div id={this.props.dataId} style={{width:325, height:400}}></div>
        )
    }
}


export default PieChart