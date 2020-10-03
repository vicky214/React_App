import React,{Component} from 'react';
import img from '../users/images/clock-add (1).png';
import img2 from '../users/images/remove-clock.png';
import img3 from '../users/images/time-management.png';
import img4 from '../users/images/utilization.png';
import Chart from './PieChart';
import MonthlyChart from './MonthlyChart';
import moment from 'moment';
import {connect} from 'react-redux'
// import './style.css';
import './Formatting.css';
import './home.css';
import axios from 'axios';
class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            total:'',
            todayData:[],
            yesterdayData:[],
            weekData:[],
            monthlyData:[],
            yearData:[],
            allData:[],
            role:this.props.roles,
            auth: props.isAuthenticated
        }
    }

    componentWillMount(){
        var now  = moment().format('YYYY-MM-DD');
        var yesterday = moment().subtract(1,'days').format('YYYY-MM-DD')
        var last_week_end = moment().subtract(1,'days').format('YYYY-MM-DD')
        var last_week_start = moment().subtract(7,'days').format('YYYY-MM-DD')
        var last_months = moment().subtract(1,'months').format('YYYY-MM-DD')
        var years = moment().subtract(1,'y').format('YYYY-MM-DD')

        const TodayData={
            today:now
        }
        axios.post('/user/gettodaywork',TodayData)
        .then(res=>{
            console.log('resulttoday',res.data.data)
        })

        const YesterdayData={
            yesterday:yesterday
        }
        axios.post('/user/getyesterdaywork',YesterdayData)
        .then(res=>{
            console.log('resultyesterday',res.data.data)
        })

        const lastWeekData={
            start:last_week_start,
            end:last_week_end
        }
        axios.post('/user/getlastWeekwork',lastWeekData)
        .then(res=>{
            console.log('3',res.data.data)
        })

        const lastMonthData={
            last_months:last_months
            
        }
        axios.post('/user/getlastMonthwork',lastMonthData)
        .then(res=>{
            console.log('4',res.data.data)
            this.setState({
                monthlyData:res.data.data
            })
        })

        const lastYearData={
            last_year:years
            
        }
        axios.post('/user/getlastYearwork',lastYearData)
        .then(res=>{
            console.log('5',res.data.data)
        })

        axios.post('/user/getallwork')
        .then(res=>{
            console.log('6',res.data.data)
            this.setState({
                allData:res.data.data
            })
        })
    }


    render(){

      console.log('redux',this.state.role,this.state.auth)
        // Calculate Idle time from a number 
        var totalidle = this.props.data.idle
        if(totalidle>3600){
            var Idlehour = Math.floor(totalidle/3600) ;
        }
        else{
            var Idlehour = 0
        }
        var Idleminute= Math.floor((totalidle%3600)/60);
        var Idlesecond =(totalidle%3600)-(Idleminute*60) ;

        // Calculate Productive time from a number 

        var totalactive = this.props.data.active
        if(totalactive>3600){
            var Activehour = Math.floor(totalactive/3600) ;
        }
        else{
            var Activehour = 0
        }
        var Activeminute= Math.floor((totalactive%3600)/60);
        var Activesecond =(totalactive%3600)-(Activeminute*60) ;

        // Calculate Total time from a number

        var totaltime = this.props.data.active + this.props.data.idle
        if(totaltime>3600){
            var totalhour = Math.floor(totaltime/3600) ;
        }
        else{
            var totalhour = 0
        }
        var totalminute= Math.floor((totaltime%3600)/60);
        var totalsecond =(totaltime%3600)-(totalminute*60) ;

        // Calculate Utilization time from a number

        var utilize = ((totalactive/totalidle)*100).toFixed(2);

        // category Task
        // var str = 'Hello Vicky How Are You'
        // if(str.toLowerCase().includes(['hello','kkk'])){
        //     console.log('yes')
        // }
        // else{
        //     console.log('no')
        // }

        var result = this.props.data.Category;
        const len = result.length;
        var socialsite = 0;
        var business = 0;
        var uncategorized = 0;
        var communication=0;
        for (var i=0;i<len;i++){
        if((result[i].activewindowtitle).toLowerCase().includes('whatsapp')||(result[i].activewindowtitle).toLowerCase().includes('facebook')||(result[i].activewindowtitle).toLowerCase().includes('instagram') ){
            socialsite=socialsite+1
        }
        else if((result[i].activewindowtitle).toLowerCase().includes('microsoft')||(result[i].activewindowtitle).toLowerCase().includes('google')|| (result[i].activewindowtitle).toLowerCase().includes('visual')||(result[i].activewindowtitle).toLowerCase().includes('pgadmin 4')||(result[i].activewindowtitle).toLowerCase().includes('phpmyadmin')){
            business=business+1
        }
        else if((result[i].activewindowtitle).toLowerCase().includes('microsoft teams')||(result[i].activewindowtitle).toLowerCase().includes('outlook')){
            communication=communication+1
        }
        else{
        uncategorized=uncategorized+1
        }
    }

        var communicationPercentage= ((communication/len)*100).toFixed(1)
        var businessPercentage= ((business/len)*100).toFixed(1)
        var socialsitePercentage= ((socialsite/len)*100).toFixed(1)
        var uncategoryPercentage= ((uncategorized/len)*100).toFixed(1)

        // <------------ Start Of Data Percentage for Lastmonth Date------------>
       
        // const monlen = this.state.monthlyData.length;
        // var monidle = 0;
        // var monactive = 0;
        // var mondata = this.state.monthlyData;
        // for (var i=0;i<monlen;i++){
        //     monidle = monidle + parseInt(mondata[i].total_idle);
        //     monactive = monactive + parseInt(mondata[i].active_time);
        // }
        // var monfinal = ((monactive/monidle)*100).toFixed(2);

        // <------------ Start Of Data Percentage for Lastmonth Date------------>


        // <------------ Start Of Data Percentage for All Date------------>

        // const alllen = this.state.allData.length;
        // var allidle = 0;
        // var allactive = 0;
        // var alldata = this.state.allData;
        // for (var i=0;i<alllen;i++){
        //     allidle = allidle + parseInt(alldata[i].total_idle);
        //     allactive = allactive + parseInt(alldata[i].active_time);
        // }
        // var allfinal = ((allactive/allidle)*100).toFixed(2);

        // <------------ end Of Data Percentage for All Date------------>


        // <------------ Start Of Data Percentage for Year Date------------>

        // const yearlen = this.state.yearData.length;
        // var yearidle = 0;
        // var yearactive = 0;
        // var yeardata = this.state.yearData;
        // for (var i=0;i<yearlen;i++){
        //     yearidle = yearidle + parseInt(yeardata[i].total_idle);
        //     yearactive = yearactive + parseInt(yeardata[i].active_time);
        // }
        // var yearfinal = ((yearactive/yearidle)*100).toFixed(2);

        // <------------ Start Of Data Percentage for Year Date------------>


        // <------------ Start Of Data Percentage for Week Date------------>

        // const weeklen = this.state.weekData.length;
        // var weekidle = 0;
        // var weekactive = 0;
        // var weekdata = this.state.weekData;
        // for (var i=0;i<weeklen;i++){
        //     weekidle = weekidle + parseInt(weekdata[i].total_idle);
        //     weekactive = weekactive + parseInt(weekdata[i].active_time);
        // }
        // var weekfinal = ((weekactive/weekidle)*100).toFixed(2);

        // <------------ End Of Data Percentage for Week Date------------>


        // <------------ Start Of Data Percentage for Yesterday Date------------>

        // const yesterdaylen = this.state.yesterdayData.length;
        // var yesterdayidle = 0;
        // var yesterdayactive = 0;
        // var yesterdaydata = this.state.yesterdayData;
        // for (var i=0;i<yesterdaylen;i++){
        //     yesterdayidle = yesterdayidle + parseInt(yesterdaydata[i].total_idle);
        //     yesterdayactive = yesterdayactive + parseInt(yesterdaydata[i].active_time);
        // }
        // var yesterdayfinal = ((yesterdayactive/yesterdayidle)*100).toFixed(2);

        // <------------ End Of Data Percentage for Yesterday Date------------>



        // <------------ Start Of Data Percentage for Today Date------------>

        // const todaylen = this.state.todayData.length;
        // var todayidle = 0;
        // var todayactive = 0;
        // var todaydata = this.state.todayData;
        // for (var i=0;i<todaylen;i++){
        //     todayidle = todayidle + parseInt(todaydata[i].total_idle);
        //     todayactive = todayactive + parseInt(todaydata[i].active_time);
        // }
        // var todayfinal = ((todayactive/todayidle)*100).toFixed(2);

        // <------------ End Of Data Percentage for Today Date------------>


        return(
        <div>
            <div class="row clearfix">
            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div class="info-box  hover-expand-effect">
                    <div class="icon" style={{backgroundColor: "#17a2b8"}}>
                        <img src={img} class="total-img" />
                        <i class="material-icons">help</i>
                    </div>
                    <div class="content">
                        <div class="text font-bold">PRODUCTIVE<i class="material-icons"></i></div>
                        <div class="number">
                            {/* {{-- @if (empty($totalproductivetimes)) */}
                            {/* <small>00:00:00</small> */}
                            <small>{Activehour.toString()+":"+Activeminute.toString()+":"+Activesecond.toString()}</small>
                            {/* @else */}
                            {/* <small>{{gmdate("H:i:s", $productiveSeconds)}}</small>   
                            @endif --}}
                            @if (empty($totalActive->active))
                            <small>00:00:00</small>
                            @else
                            <small>{{gmdate("H:i:s", $totalActive->active)}}</small>   
                            @endif */}
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div class="info-box hover-expand-effect">
                    <div class="icon" style={{backgroundColor: "#dc355c"}}>
                        <img src={img2} class="total-img" />
                        {/* <i class="material-icons">help</i> */}
                    </div>
                    <div class="content">
                        <div class="text font-bold">IDLE</div>
                        <div class="number">
                            {/* {{-- @if (empty($totalidletimes)) */}
                            {/* <small>00:00:00</small> */}
                            <small>{Idlehour.toString()+":"+Idleminute.toString()+":"+Idlesecond.toString()}</small>
                             {/* <small>{Idlehour}</small>  */}

                            {/* @else
                            <small>{{gmdate("H:i:s",$idleInSeconds)}}</small>   
                            @endif --}}
                            @if (empty($totalIdleCalculated))
                            <small>00:00:00</small>
                            @else
                            <small>{{gmdate("H:i:s",$totalIdleCalculated)}}</small>   
                            @endif */}
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div class="info-box  hover-expand-effect">
                    <div class="icon" style={{backgroundColor:"#28a745"}}>
                        {/* <i class="material-icons">forum</i> */}
                        <img src={img3} class="total-img" />
                    </div>
                    <div class="content">
                        <div class="text font-bold">TOTAL</div>
                        <div class="number">
                        <small>{totalhour.toString()+":"+totalminute.toString()+":"+totalsecond.toString()}</small>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div class="info-box hover-expand-effect">
                    {/* <div class="icon" style={{backgroundColor:"#ffc107!important"}}>
                        <div class="chart chart-pie">30, 35, 35</div>
                    </div> */}
                    <div class="icon"  style={{backgroundColor: "#ffc107"}}>
                        <img src={img4} class="total-img" />
                    </div>
                    <div class="content">
                        <div class="text font-bold">UTILIZATION %</div>
                <div class="number"><small>{utilize=='NaN'?'%':`${utilize}%`}</small></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row clearfix">
            {/* <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                <div class="card"   style={{backgroundColor:"#17a2b8"}}>
                   
                    <div class="body" style={{color: "white"}}>
                        <div class="font-bold" style={{marginBottom: "112px"}}>UTILIZATION PERCENTAGE</div>
                        <ul className="dashboard-stat-list">
                            <li>
                                YESTERDAY
                            <span className="pull-right"><b>%</b> <small></small></span>
                            </li>
                            <li>
                                LAST WEEK
                            <span class="pull-right"><b>%</b> <small></small></span>
                            </li>
                            <li>
                                CURRENT MONTH
                            <span class="pull-right"><b>%</b> <small></small></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div> */}
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div class="card">
                    <div class="header" style={{height:"47px"}}>
                        <h2 style={{padding:"0px"}}>CATEGORY</h2>
                    </div>
                    <div class="body" style={{paddingBottom:"9px"}}>
                        <small class="badge small">
                        Business</small>
                    <span class="badge data-percentage" style={{fontSize:"12px"}}>{businessPercentage}%</span>
                        <div class="progress" style={{height:"5px"}}>
                            <div class="progress-bar bg-pink" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{width:`${Math.floor(businessPercentage)}%`}}>
                            </div>
                        </div>
                        <small class="badge small" style={{padding:"0px",margin:"0px"}}>Communication</small>
        <span class="badge data-percentage" style={{fontSize:"12px"}}>{communicationPercentage}%</span>
                        <div class="progress" style={{height:"5px"}}>
                            <div class="progress-bar bg-purple" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{width:`${Math.floor(communicationPercentage)}%`}}>
                            </div>
                        </div>
                        <small class="badge small" >Uncategorized</small>
                    <span class="badge data-percentage" style={{fontSize:"12px"}}>{uncategoryPercentage}%</span>
                        <div class="progress" style={{height:"5px"}}>
                            <div class="progress-bar bg-green" role="progressbar" aria-valuenow="200" aria-valuemin="0" aria-valuemax="100" style={{width:`${Math.floor(uncategoryPercentage)}%`}}>
                            </div>
                        </div>
                        <small class="badge small">Social Networking</small>
                        <span class="badge data-percentage" style={{fontSize:"12px"}}>{socialsitePercentage}%</span>
                        <div class="progress" style={{height:"5px"}}>
                            <div class="progress-bar bg-brown" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{width:`${Math.floor(socialsitePercentage)}%`}}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div class="card" style={{backgroundColor: "#28a745"}}>
                    <div class="body" style={{color:"white",paddingBottom:"19px"}}>
                        <div class="font-bold m-b--35">UTILIZATION PERCENTAGE</div>
                        <ul class="dashboard-stat-list">
                            <li>
                                TODAY
                            <span class="pull-right"><b>%</b> <small></small></span>
                            </li>
                            <li>
                                YESTERDAY
                                <span class="pull-right"><b>%</b> <small></small></span>
                            </li>
                            <li>
                                LAST WEEK
                                <span class="pull-right"><b>%</b> <small></small></span>
                            </li>
                            <li>
                                LAST MONTH
                            <span class="pull-right"><b>%</b> <small></small></span>
                            </li>
                            <li>
                                LAST YEAR
                            <span class="pull-right"><b>%</b> <small></small></span>
                            </li>
                            <li>
                                ALL
                            <span class="pull-right"><b>%</b> <small></small></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
                <div class="row clearfix">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div class="card">
                            <div class="header">
                                <h2>Today Performance</h2>
                            </div>
                            <div class="body">
                                <Chart data={{Utilize:utilize}} />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div class="card">
                            <div class="header">
                                <h2>Mothly Performance</h2>
                            </div>
                            <div class="body">
                                <MonthlyChart />
                                {/* <canvas id="bar_chart" height="150"></canvas> */}
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        
       
        )
    }
}

const mapStateToProps = state => {
    return {
      isAuthenticated: state.auth.isAuthenticated,
      roles:state.auth.userType
    }
  };

export default connect(mapStateToProps)(Home);