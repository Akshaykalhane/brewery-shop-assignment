import React from "react";
import { Bar } from 'react-chartjs-2';
import {Chart as ChartJS, CategoryScale , LinearScale ,BarElement , Title , Tooltip,Legend} from 'chart.js';

function BarCharts(){
    return (
        <>
            <h2>Bar</h2>
            <Bar 
                data={{
                   labels : ['Red','Blue','Yellow','Green','Purple','Orange'],
                   datasets:[{
                    label: '# of votes',
                    data:[12,34,54,32,54,43,11]
                   }],
                }}
                height={200} 
                width={100}
            />

        </>
    )
}

ChartJS.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend);
export default BarCharts;