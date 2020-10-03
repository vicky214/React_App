import React,{Component} from 'react';
import {Line } from 'react-chartjs-2';

class Chart extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        const data = {
            labels: ['January', 'February', 'March',
            'April', 'May'],
   datasets: [
     {
       label: 'Rainfall',
       fill: false,
       lineTension: 0.5,
       backgroundColor: 'rgba(75,192,192,1)',
       borderColor: 'rgba(0,0,0,1)',
       borderWidth: 2,
       data: [65, 59, 80, 81, 56]
     }
   ]
                };

        return(
            <div>
                 <Line
                  // data={this.state.chartData}

          data={data}
          options={{
            // title:{
            //   display:'true',
            //   text:'Your Performance',
            //   fontSize:25
            // },
            legend:{
              display:'true',
              position:'bottom'
            }
          }}
        />
            </div>
        )
    }
}

export default Chart;
