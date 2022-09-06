import React from 'react'
import './History.css'
import {
    ResponsiveContainer, XAxis, YAxis, Legend, Tooltip,CartesianGrid,
    LineChart, Line
} from 'recharts'
import { Container } from 'react-bootstrap'
// import {} from 'd3-scale'



const data = [
    {
        Name: 'SSC ',
        Percentage: 57.79,
        PassingYear: '[ 2012 ]',
        College: 'Dnyanjyoti Vidyalaya Khadke.Tal-Bhusawal. Dist-Jalgaon.'

    },
    {
        Name: 'HSC ',
        Percentage: 75.14,
        PassingYear: '[ 2014 ]',
        College: 'Dnyanjyoti Uchha Madhyamik Vidyalaya Khadke.Tal-Bhusawal. Dist-Jalgaon.'

    },
    {
        Name: 'BSC ',
        Percentage: 70.14,
        PassingYear: '[ 2019 ]',
        College: 'K.Narkhede College of Science Bhusawal. Dist -Jalgaon.'


    },
    {
        Name: 'MSC ',
        Percentage: 84.00,
        PassingYear: '[ 2021 ]',
        College: 'K.Narkhede College of Science Bhusawal. Dist -Jalgaon.'


    },
    {
        Name: 'PGDCA',
        Percentage: 69.00,
        PassingYear: '[ 2020 ]',
        College: 'P.O Nahata College Bhusawal Dist-Jalgaon.'


    }
]


function Histroy() {



    return (
        <div id='history'>
            <h2 className='About-Title'>EDUCATION</h2>
            <h2 className='About-Subtitle'>--Our goal is to build products and services--</h2>
            <Container>
                <div>
                    <ResponsiveContainer width='100%' aspect={3}>
                        <LineChart data={data}>
                        <CartesianGrid strokeDasharray="4 4" />
                            <XAxis dataKey="Name" interval={'preserveStartEnd'} strokeWidth={3}/>
                            <YAxis strokeWidth={3}/>
                            <Tooltip />
                            <Legend />
                            <Line dataKey="Percentage" type='monotone' stroke='red' strokeWidth={3} />
                            <Line dataKey="College" stroke='green' />
                            <Line dataKey="PassingYear" stroke='purple' />
                            

                        </LineChart>

                    </ResponsiveContainer>

                </div>

            </Container>


        </div>
    )
}

export default Histroy