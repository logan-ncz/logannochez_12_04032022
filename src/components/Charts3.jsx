import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';
import { useFetch } from '../utils/Fetch'


export default function Charts3(props) {

  const { data, isLoading } = useFetch(`http://localhost:5500/user/${props.id}/performance`)

  //Code pour map les numero avec les titre (Tranformer l'objet)
  // kind 1

  

  

  

  if (!isLoading) {

    let kindsNumber = data.data.kind

    console.log(kindsNumber)

    let kinds = data.data.data

    console.log(kinds)

    // kinds.map(kind => {
    //   kind = kindsNumber
    //   console.log(kind)
    // })

    return (
      <div className='charts3'>
        <RadarChart cx={150} cy={150} outerRadius={150} width={300} height={300} data={data.data.data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="kind" />
          <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </div>
    );
  }

  return (
    <div>Loading</div>
  )
}
