import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label } from 'recharts';
import { useFetch } from '../utils/Fetch'

function CustomTooltip({ payload, active }) {
  if (active) {
    return (
      <div className="custom-tooltip1">
        <p className="label">{`${payload[0].value}`}kg</p>
        <p className="intro">{`${payload[1].value}`}Kcal</p>
      </div>
    )
  }
  return null;
}

export default function Charts1(props) {

  const { data, isLoading } = useFetch(`http://localhost:5500/user/${props.id}/activity`)

  if (!isLoading) {

    return (

      <div className='charts1'>
        <BarChart
          width={600}
          height={320}
          margin={{
            top: 20,
            right: 0,
            left: 10,
            bottom: 10,
          }}
          data={data.data.sessions}
        >
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis stroke='0' tickMargin={20} tick={{ fill: '#9B9EAC' }} scale="band" />
          <YAxis orientation='right' stroke='0' tickMargin={20} tick={{ fill: '#9B9EAC' }} />
          <Label value="" position="insideTopLeft" />
          <Tooltip wrapperStyle={{ width: 50, backgroundColor: '#E60000', color: '#fff' }} content={<CustomTooltip />} cursor={{fill: "rgba(196, 196, 196, 0.5)"}}/>
          <Legend verticalAlign='top' align='right' iconType='circle' iconSize={8} formatter={(value, entry, index) => <span className="charts1_legend">{value}</span>} />
          <Bar dataKey="kilogram" name='Poids (kg)' fill="#282D30" radius={[20, 20, 0, 0]} barSize={10} />
          <Bar dataKey="calories" name='Calories brûlées (kCal)' fill="#E60000" radius={[20, 20, 0, 0]} barSize={10} />
        </BarChart>
      </div>

    );

  }

  return (
    <div>Loading</div>
  )
  
}
