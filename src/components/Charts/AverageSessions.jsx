import React from 'react';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, } from 'recharts';

function CustomTooltip({ payload, active }) {
  if (active) {
    return (
      <div className="custom-tooltip2">
        <p className="label">{`${payload[0].value}`}min</p>
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

/**
 * This component render the AverageSessions Chart
 * 
 * @param {*} props The props types of the component
 * @returns Render the Chart
 */

export default function AverageSessions(props) {
  const { data, isLoading } = props.data

  const dayOfWeek = { 1: "L", 2: "M", 3: "M", 4: "J", 5: "V", 6: "S", 7: "D" };

  const changeDaysInLetters = (day) => dayOfWeek[day];

  if (!isLoading) {
    return (
      <div className='averageSessions'>
        <p className='averageSessions_title'>Durée moyenne des <br />sessions</p>
        <LineChart
          width={258}
          height={263}
          data={data.data.sessions}
          margin={{
            top: 20,
            right: 10,
            left: 10,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="0 1" />
          <XAxis dataKey="day" height={30} stroke={0} tick={{ fill: "#FFFFFF" }} tickFormatter={changeDaysInLetters} />
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
