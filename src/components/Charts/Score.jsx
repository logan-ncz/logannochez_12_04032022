import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import { useFetch } from '../../utils/Fetch'


export default function Score(props) {

    const { data, isLoading } = useFetch(`http://localhost:5500/user/${props.id}`)

    if (!isLoading) {
        const changePercent = (percent) => percent * 100;
        data.data.score = changePercent(data.data.score)
        console.log(data.data)
        return (
            <div className='score'>
                <PieChart width={258} height={263}>
                    <Pie data={data.data} dataKey="score" cx="50%" cy="50%" innerRadius={50} outerRadius={100} fill="#8884d8" paddingAngle={2}>
                        <Cell fill='#FF0000'/>
                        <Cell fill='#8884d8'/>
                    </Pie>
                </PieChart>
            </div>
        );
    }

    return (
        <div>Loading</div>
    )
}