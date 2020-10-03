import React,{PureComponent} from 'react';
import axios from 'axios';

class Home extends PureComponent{
    constructor(props){
        super(props)
        this.state = {
            total:this.props.TotalIdle
        }
    }

    // componentDidMount(){
    //     console.log('component')
    //     axios.get('/user/idletime')
    //     .then(res=>{
    //         console.log('time',res.data.data)
    //     })
    //     axios.get('/user/category')
    //     .then(res=>{
    //         console.log('result',res.data.data)
    //     })
    // }

    render(){
        console.log('home',this.state.total)

        return(
        <div>
            <div class="row clearfix">
            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div class="info-box  hover-expand-effect">
                    <div class="icon" style={{backgroundColor: "#17a2b8!important"}}>
                        <img src="" class="total-img" />
                        <i class="material-icons">help</i>
                    </div>
                    <div class="content">
                        <div class="text font-bold">PRODUCTIVE<i class="material-icons"></i></div>
                        <div class="number">
                            {/* {{-- @if (empty($totalproductivetimes)) */}
                            {/* <small>00:00:00</small> */}
                            <small>{this.state.total}</small>

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
                    <div class="icon" style={{backgroundColor: "#dc355c!important"}}>
                        <img src="" class="total-img" />
                        <i class="material-icons">help</i>
                    </div>
                    <div class="content">
                        <div class="text font-bold">IDLE</div>
                        <div class="number">
                            {/* {{-- @if (empty($totalidletimes)) */}
                            {/* <small>00:00:00</small> */}
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
                    <div class="icon" style={{backgroundColor:"#28a745!important"}}>
                        <i class="material-icons">forum</i>
                        <img src="" class="total-img" />
                    </div>
                    <div class="content">
                        <div class="text font-bold">TOTAL</div>
                        <div class="number"><small></small></div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div class="info-box hover-expand-effect">
                    <div class="icon" style={{backgroundColor:"#ffc107!important"}}>
                        <div class="chart chart-pie">30, 35, 35</div>
                    </div>
                    <div class="icon"  style={{backgroundColor: "#ffc107!important"}}>
                        <img src="" class="total-img" />
                    </div>
                    <div class="content">
                        <div class="text font-bold">UTILIZATION %</div>
                    <div class="number"><small>%</small></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row clearfix">
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                <div class="card"   style={{backgroundColor:"#17a2b8!important"}}>
                   
                    <div class="body" style={{color: "white"}}>
                         <div class="sparkline" data-type="line" data-spot-Radius="4" data-highlight-Spot-Color="rgb(233, 30, 99)" data-highlight-Line-Color="#fff"
                             data-min-Spot-Color="rgb(255,255,255)" data-max-Spot-Color="rgb(255,255,255)" data-spot-Color="rgb(255,255,255)"
                             data-offset="90" data-width="100%" data-height="92px" data-line-Width="2" data-line-Color="rgba(255,255,255,0.7)"
                             data-fill-Color="rgba(0, 188, 212, 0)">
                            10,50,40
                        </div>
                        <div class="font-bold" style={{marginBottom: "112px"}}>UTILIZATION PERCENTAGE</div>
                        <ul class="dashboard-stat-list">
                            <li>
                                YESTERDAY
                            <span class="pull-right"><b>%</b> <small></small></span>
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
            </div>
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                <div class="card">
                    <div class="header">
                        <h2>CATEGORY</h2>
                    </div>
                    <div class="body">
                        <small class="badge small">
                        Business</small>
                        <span class="badge data-percentage">%</span>
                        <div class="progress">
                            <div class="progress-bar bg-pink" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{width:"20%"}}>
                            </div>
                        </div>
                        <small class="badge small" >Communication</small>
                        <span class="badge data-percentage">60%</span>
                        <div class="progress">
                            <div class="progress-bar bg-purple" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{width:"60%"}}>
                            </div>
                        </div>
                        <small class="badge small" >Uncategorized</small>
                        <span class="badge data-percentage">50%</span>
                        <div class="progress">
                            <div class="progress-bar bg-green" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{width:"50%"}}>
                            </div>
                        </div>
                        <small class="badge small">Social Networking</small>
                        <span class="badge data-percentage">80%</span>
                        <div class="progress">
                            <div class="progress-bar bg-brown" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{width:"80%"}}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                <div class="card" style={{backgroundColor: "#28a745!important"}}>
                    <div class="body" style={{color:"white"}}>
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
                                <h2>PIE CHART</h2>
                            </div>
                            <div class="body">
                                <canvas id="pie_chart" height="150"></canvas>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div class="card">
                            <div class="header">
                                <h2>Mothly Trend</h2>
                            </div>
                            <div class="body">
                                <canvas id="bar_chart" height="150"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        
       
        )
    }
}

export default Home;