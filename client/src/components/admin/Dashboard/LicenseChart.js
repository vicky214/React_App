import React,{Component} from 'react';
import { Pie } from 'react-chartjs-2';

class Chart extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
      const total = this.props.data.Total
      const used = this.props.data.Used

      console.log('used',total,used)
        const data = {
                  labels: [
                    'Used',
                    'Left',
                  ],
                  datasets: [{
                    data: [used,total-used],
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
            //   text:'Your License',
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
