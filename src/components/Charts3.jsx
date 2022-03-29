import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';
import { useFetch } from '../utils/Fetch'


export default function Charts3(props) {

  const { data, isLoading } = useFetch(`http://localhost:5500/user/${props.id}/performance`)

  //Code pour map les numero avec les titre (Tranformer l'objet)
  // kind 1
  
  const kinds = { 1: "Cardio", 2: "Energie", 3: "Endurance", 4: "Force", 5: "Vitesse", 6: "Intensité" };

  const changeNumbersInKinds = (number) => kinds[number];

  if (!isLoading) {

    return (
      <div className='charts3'>
        <RadarChart cx="50%" cy="50%" outerRadius="65%" width={280} height={263} data={data.data.data}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis dataKey="kind" stroke='#fff' strokeWidth={0} tick={{ fontSize: "12px", fontFamily: 'Roboto' }} tickFormatter={changeNumbersInKinds} />
          <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </div>
    );
  }

  return (
    <div>Loading</div>
  )
}
