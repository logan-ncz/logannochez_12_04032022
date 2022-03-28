/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, } from 'recharts';
import { useFetch } from '../utils/Fetch'

  
class CustomizedAxisTick extends PureComponent {
    render() {
      const { x, y, payload } = this.props;
  
      return (
        <g transform={`translate(${x},${y})`}>
          <text x={0} y={0} dy={16} textAnchor="end" fill="#fff">
            {payload.value}
          </text>
        </g>
      );
    }
}

function CustomTooltip({ payload, label, active }) {
    if (active) {
      return (
        <div className="custom-tooltip2">
          <p className="label">{`${payload[0].value}`}kg</p>
        </div>
      )
    }
    return null;
}

export default function Charts2(props) {

  const { data, isLoading } = useFetch(`http://localhost:5500/user/${props.id}/average-sessions`)

  if (!isLoading) {
    return (
      <div className='charts2'>
        <LineChart
          width={300}
          height={300}
          data={data.data.sessions}
          margin={{
            top: 20,
            right: 10,
            left: 10,
            bottom: 10,
          }}
        >
          <CartesianGrid stroke="#ccc" strokeDasharray="0 1" />
          <XAxis dataKey="day" height={30} stroke={0} tick={<CustomizedAxisTick />} />
          <Tooltip wrapperStyle={{ width: 50, backgroundColor: '#fff', color: '#000000' }} content={<CustomTooltip />}/>
          <Line type="monotone" dataKey="sessionLength" stroke="#fff" />
        </LineChart>
      </div>
    );
  }

  return (
    <div>Loading</div>
  )
}
