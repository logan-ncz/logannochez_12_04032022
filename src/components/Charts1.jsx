import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
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
          height={300}
          data={data.data.sessions}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <Tooltip wrapperStyle={{ width: 50, backgroundColor: '#E60000', color: '#fff' }} content={<CustomTooltip />}/>
          <Legend />
          <Bar dataKey="kilogram" fill="#282D30" />
          <Bar dataKey="calories" fill="#E60000" />
        </BarChart>
      </div>
    );
  }

  return (
    <div>Loading</div>
  )

  
}
