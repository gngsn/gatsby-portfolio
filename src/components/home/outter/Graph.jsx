import * as React from "react";

import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';

const graph = ({ title, datasets, width, height }) => {
    
    const options = {
        maintainAspectRatio: false,
        responsive: false,
        legend: {
            display: false
        },
        tooltips: {
            enabled: false
        },
        scales: {
            yAxes: [{
                display: false,
                ticks: {
                    display: false,
                    beginAtZero: true
                },
                gridLines: {
                    display: false
                }
            }],
            xAxes: [{
                categoryPercentage: 1,
                gridLines: {
                    display: false,
                    drawBorder: false,
                },
                barThickness: 18,
                ticks: {
                    fontColor: "black",
                    fontSize: 16,
                    stepSize: 1,
                    beginAtZero: true
                }
            }]
        },
        animation: {
            duration: 5000,
        },
    }

    return (
        <Block>
            <h1>{title}</h1>
            <Bar
                data={datasets}
                width={width}
                height={height}
                options={options}
            />
        </Block>
    );
};

const Block = styled.div`
    display: flex; flex-direction: column;
    align-items: center;
    canvas {
        margin-top: 50px;
    }
    h1 {
        font-size: 2.5rem; display: inline;
        font-weight: 800;
    }
`;

export default graph;