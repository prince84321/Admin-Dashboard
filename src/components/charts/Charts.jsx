
import "./charts.css";
import Chart from 'react-apexcharts'; 

function Charts() {


  return (
    <div className='charts'>
     <Chart
     type="pie"
     width={400}
     height = {400}
     series = {[22,11,22,34]}
     options={{
      labels:['Approved', 'Pending', 'Rejected', "Deboarded"],
       formatter: function(val) {
      return val;
    }
     }}
     >

     </Chart>
    </div>
  )
}

export default Charts;