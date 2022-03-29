import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { useFetch } from '../utils/Fetch'


export default function PieChart4(props) {

    const { data, isLoading } = useFetch(`http://localhost:5500/user/${props.id}`)

    const data2 = { score: 0.88 }


    if (!isLoading) {
        return (
            <div>
                <PieChart width={400} height={400}>
                    <Pie data={data.data} dataKey="score" cx="50%" cy="50%" innerRadius={60} outerRadius={70} fill="#8884d8" paddingAngle={2}>
                        <Cell fill='#0088FE'/>
                    </Pie>
                </PieChart>
            </div>
        );
    }

    return (
        <div>Loading</div>
    )
}