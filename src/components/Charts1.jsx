import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
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

// const renderLegend = (props) => {
//   const { payload } = props;

//   return (
//     <ul>
//       <li key={`item-0`}>{payload[0].value}lsd</li>
//     </ul>
//   );
// }

export default function Charts1(props) {

  const { data, isLoading } = useFetch(`http://localhost:5500/user/${props.id}/activity`)

  if (!isLoading) {
    return (
      <div>
        <BarChart
          width={600}
          height={320}
          margin={{
            top: 20,
            right: 10,
            left: 10,
            bottom: 10,
          }}
          data={data.data.sessions}
        >
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="day" stroke='0' tickMargin={20} />
          <YAxis orientation='right' stroke='0' tickMargin={30} />
          <Tooltip wrapperStyle={{ width: 50, backgroundColor: '#E60000', color: '#fff' }} content={<CustomTooltip />}/>
          <Legend verticalAlign='top' align='right' />
          <Bar dataKey="kilogram" fill="#282D30" radius={[20, 20, 0, 0]} barSize={10} />
          <Bar dataKey="calories" fill="#E60000" radius={[20, 20, 0, 0]} barSize={10} />
        </BarChart>
      </div>
    );
  }

  return (
    <div>Loading</div>
  )

  
}
