import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';
import { useFetch } from '../../utils/Fetch'


export default function Performance(props) {

  const { data, isLoading } = useFetch(`http://localhost:5500/user/${props.id}/performance`)

  //Code pour map les numero avec les titre (Tranformer l'objet)
  // kind 1

  const dataKind = data.data && data.data.kind;
  const formattedKind = (type) => dataKind && dataKind[type];

  if (!isLoading) {

    return (
      <div className='performance'>
        <RadarChart cx="50%" cy="50%" outerRadius="65%" width={280} height={263} data={data.data.data}>
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
