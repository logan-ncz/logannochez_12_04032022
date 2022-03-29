import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';
import { useFetch } from '../utils/Fetch'


export default function Charts3(props) {

  const { data, isLoading } = useFetch(`http://localhost:5500/user/${props.id}/performance`)

  //Code pour map les numero avec les titre (Tranformer l'objet)
  // kind 1

  
  const kinds = { 1: "cardio", 2: "energy", 3: "endurance", 4: "strength", 5: "speed", 6: "intensity" };

  const changeNumbersInKinds = (number) => kinds[number];
  

  

  if (!isLoading) {

    // let kindsNumber = data.data.kind

    // console.log(kindsNumber)

    // let kinds = data.data.data

    // console.log(kinds)

    // kinds.map(kind => {
    //   kind = kindsNumber
    //   console.log(kind)
    // })

    return (
      <div className='charts3'>
        <RadarChart cx="50%" cy="50%" outerRadius="65%" width={258} height={263} data={data.data.data}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis dataKey="kind" stroke='#fff' tickFormatter={changeNumbersInKinds} />
          <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </div>
    );
  }

  return (
    <div>Loading</div>
  )
}
