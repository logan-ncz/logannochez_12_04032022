import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';

/**
 * This component render the Performance Chart
 * 
 * @param {*} props The props types of the component
 * @returns Render the Chart
 */

export default function Performance(props) {
  const { data, isLoading } = props.data

  const dataKind = data.data && data.data.kind;

  const formattedKind = (type) => dataKind && dataKind[type];

  if (!isLoading) {
    return (
      <div className='performance'>
        <RadarChart cx="48%" cy="50%" outerRadius="65%" width={258} height={263} data={data.data.data}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis dataKey="kind" stroke='#fff' strokeWidth={0} tick={{ fontSize: "12px", fontFamily: 'Roboto' }} tickFormatter={formattedKind} />
          <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </div>
    );
  }

  return (
    <div>Loading</div>
  )
}
