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

function CustomHover({ points }) {
  return (
    <rect
      x={points[0].x}
      y={0}
      height="100%"
      width="100%"
      fill="rgba(0, 0, 0, 0.1)"
    />
  )
}

export default function Charts2(props) {

  const { data, isLoading } = useFetch(`http://localhost:5500/user/${props.id}/average-sessions`)

  const dayOfWeek = { 1: "L", 2: "M", 3: "M", 4: "J", 5: "V", 6: "S", 7: "D" };

  const changeDaysInLetters = (day) => dayOfWeek[day];

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
          <CartesianGrid strokeDasharray="0 1" />
          <XAxis dataKey="day" height={30} stroke={0} tick={<CustomizedAxisTick />} tickFormatter={changeDaysInLetters} />
          <Tooltip wrapperStyle={{ width: 50, backgroundColor: '#fff', color: '#000000' }} content={<CustomTooltip />} cursor={<CustomHover />} />
          <Line type="monotone" dataKey="sessionLength" stroke="#fff" dot={0} />
        </LineChart>
      </div>
    );
  }

  return (
    <div>Loading</div>
  )
}
