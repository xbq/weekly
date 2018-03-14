$(function () {

    initProjectCharts();
    initMonthCharts();
    initWeekCharts();
    initTaskTypeCharts();

});

function initProjectCharts() {
    $.ajax({
        url: '/weekly/statisticByProject',
        success: function (res) {
            var data = res.data[0];
            var xAxisDate = [];
            var yAxisDate = [];
            data.forEach(function (item) {
                xAxisDate.push(item.name);
                yAxisDate.push(item.value);
            });
            var option = {
                title: {
                    text: '按所属项目',
                    subtext: '工时',
                    x: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    x: 'left',
                    data: xAxisDate
                },
                toolbox: {
                    show: true,
                    feature: {
                        mark: {show: true},
                        magicType: {
                            show: true,
                            type: ['pie', 'funnel'],
                            option: {
                                funnel: {
                                    x: '25%',
                                    width: '50%',
                                    funnelAlign: 'left',
                                    max: 1548
                                }
                            }
                        },
                        restore: {show: true},
                        saveAsImage: {show: true}
                    }
                },
                calculable: true,
                series: [
                    {
                        name: '工时',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        data: data
                    }
                ]
            };


            var projectChart = echarts.init(document.getElementById('div_project'));
            projectChart.setOption(option);
        }
    });
}

function initTaskTypeCharts() {
    $.ajax({
        url: '/weekly/statisticByTasktype',
        success: function (res) {
            var data = res.data[0];
            var xAxisDate = [];
            var yAxisDate = [];
            data.forEach(function (item) {
                xAxisDate.push(item.name);
                yAxisDate.push(item.value);
            });
            var option = {
                title: {
                    text: '按照项目统计',
                    subtext: '工时',
                    x: 'center'
                },
                tooltip: {
                    trigger: 'axis'
                },
                toolbox: {
                    show: true,
                    feature: {
                        mark: {show: true},
                        dataView: {show: true, readOnly: false},
                        magicType: {show: true, type: ['line', 'bar']},
                        restore: {show: true},
                        saveAsImage: {show: true}
                    }
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        data: xAxisDate
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: '工时',
                        type: 'bar',
                        data: yAxisDate,
                    }
                ]
            };
            var taskTypeChart = echarts.init(document.getElementById('div_taskType'));
            taskTypeChart.setOption(option);

        }
    });
}


function initWeekCharts() {
    $.ajax({
        url: '/weekly/statisticByWeek',
        success: function (res) {
            var data = res.data[0];
            var xAxisDate = [];
            var yAxisDate = [];
            data.forEach(function (item) {
                xAxisDate.push(item.name);
                yAxisDate.push(item.value);
            });
            var option = {
                title: {
                    text: '按周统计',
                    subtext: '工时',
                    x: 'center'
                },
                tooltip: {
                    trigger: 'axis'
                },
                toolbox: {
                    show: true,
                    feature: {
                        mark: {show: true},
                        dataView: {show: true, readOnly: false},
                        magicType: {show: true, type: ['line', 'bar']},
                        restore: {show: true},
                        saveAsImage: {show: true}
                    }
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        data: xAxisDate
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: '工时',
                        type: 'bar',
                        data: yAxisDate,
                    }
                ]
            };
            var weekChart = echarts.init(document.getElementById('div_week'));
            weekChart.setOption(option);

        }
    });
}


function initMonthCharts() {
    $.ajax({
        url: '/weekly/statisticByMonth',
        success: function (res) {
            var data = res.data[0];
            var xAxisDate = [];
            var yAxisDate = [];
            data.forEach(function (item) {
                xAxisDate.push(item.name);
                yAxisDate.push(item.value);
            });
            var option = {
                title: {
                    text: '按月统计',
                    subtext: '工时',
                    x: 'center'
                },
                tooltip: {
                    trigger: 'axis'
                },
                toolbox: {
                    show: true,
                    feature: {
                        mark: {show: true},
                        dataView: {show: true, readOnly: false},
                        magicType: {show: true, type: ['line', 'bar']},
                        restore: {show: true},
                        saveAsImage: {show: true}
                    }
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        data: xAxisDate
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: '工时',
                        type: 'bar',
                        data: yAxisDate,
                    }
                ]
            };
            var monthChart = echarts.init(document.getElementById('div_month'));
            monthChart.setOption(option);

        }
    });
}