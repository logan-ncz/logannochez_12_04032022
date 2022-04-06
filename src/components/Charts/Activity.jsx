import {
  BarChart,
  ResponsiveContainer,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

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

/**
 * Component used to render the Activity Chart
 * 
 * @param {*} props
 * @returns {}
 */

export default function Activity(props) {
  const { data, isLoading } = props.data

  const numbers = { '2020-07-01': "1", '2020-07-02': "2", '2020-07-03': "3", '2020-07-04': "4", '2020-07-05': "5", '2020-07-06': "6", '2020-07-07': "7" };

  const changeDateInNumbers = (date) => numbers[date];

  if (!isLoading) {
    return (
      <ResponsiveContainer className='activity' width="93%" height={320}>
        <BarChart
          width={835}
          height={320}
          margin={{
            top: 20,
            right: 10,
            left: 10,
            bottom: 10,
          }}
          data={data.data.sessions}
          barCategoryGap="35%"
        >
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="day" stroke='0' interval={0} tickMargin={20} tick={{ fill: '#9B9EAC' }} tickFormatter={changeDateInNumbers} />
          <YAxis orientation='right' stroke='0' tickMargin={10} tick={{ fill: '#9B9EAC' }} />
          <Tooltip wrapperStyle={{ width: 50, backgroundColor: '#E60000', color: '#fff' }} content={<CustomTooltip />} cursor={{fill: "rgba(196, 196, 196, 0.5)"}}/>
          <Legend verticalAlign='top' align='right' iconType='circle' iconSize={8} wrapperStyle={{top: 0, padding: "0 1em"}} formatter={(value, entry, index) => <span className="activity_legend">{value}</span>} />
          <Bar dataKey="kilogram" name='Poids (kg)' fill="#282D30" radius={[20, 20, 0, 0]} />
          <Bar fill='none' />
          <Bar dataKey="calories" name='Calories brûlées (kCal)' fill="#E60000" radius={[20, 20, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    );
  }

  return (
    <div>Loading</div>
  )
}
