import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { useFetch } from '../utils/Fetch'


export default function PieChart4(props) {

    const { data, isLoading } = useFetch(`http://localhost:5500/user/${props.id}`)


    if (!isLoading) {
        return (
            <div>
                <PieChart width={400} height={400}>
                    <Pie data={data.data} dataKey="score" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                    {/* <Pie data={data.data} dataKey="score" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label /> */}
                </PieChart>
            </div>
        );
    }

    return (
        <div>Loading</div>
    )
}