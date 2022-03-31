import React from 'react';
import { PieChart, Pie, Cell, Label } from 'recharts';
import { useFetch } from '../../utils/Fetch'


export default function Score(props) {

    const { data, isLoading } = useFetch(`http://localhost:5500/user/${props.id}`)

    if (!isLoading) {

        const data01 = [
            { name: 'Group A', value: data.data.score * 100 },
            { name: 'Group B', value: 100 - data.data.score }
        ];

        return (
            <div className='score'>
                <p className='score_title'>Score</p>
                <PieChart width={258} height={263} >
                    <Pie data={data01} nameKey="score" dataKey="value" cx="50%" cy="50%" innerRadius={90} outerRadius={100} cornerRadius={40} paddingAngle={2} startAngle={90}>
                        <Cell fill='#FF0000'/>
                        <Cell fill='rgba(0, 0, 0, 0)' stroke='#FBFBFB'/>
                        <Label className='score_label_percent' position="center">
                            {`${data01[0].value}%`}
                        </Label>
                    </Pie>
                </PieChart>
            </div>
        );
    }

    return (
        <div>Loading</div>
    )
}