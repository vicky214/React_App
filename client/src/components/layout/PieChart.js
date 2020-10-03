import React,{Component} from 'react';
import { Pie } from 'react-chartjs-2';

class Chart extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
      const used = this.props.data.Utilize
      console.log('used',used)
        const data = {
                  labels: [
                    'Productive',
                    'Idle',
                  ],
                  datasets: [{
                    data: [used,100-used],
                    backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    // '#FFCE56'
                    ],
                    hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    // '#FFCE56' 
                    ]
                  }]
                };

        return(
            <div>
                 <Pie
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
