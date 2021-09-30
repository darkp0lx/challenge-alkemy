import React from 'react'
import { Radar } from 'react-chartjs-2'
import styled from 'styled-components'
import { useStats } from '../../hooks/useStats'

export const FeaturesTeam = ({ team }) => {
  const { skills, height, weight } = useStats(team)
  const data = {
    labels: [
      'Combat',
      'Durability',
      'Intelligence',
      'Power',
      'Speed',
      'Strength'
    ],
    datasets: [
      {
        label: `skills `,
        data: [
          skills?.combat,
          skills?.durability,
          skills?.intelligence,
          skills?.power,
          skills?.speed,
          skills?.strength
        ],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        labelColor: 'white'
      }
    ]
  }
  const options = {
    scale: {
      ticks: { beginAtZero: false }
    },
    plugins: {
      legend: {
        labels: {
          font: {
            size: 20,
            color: 'white',
            weight: 'bold'
          }
        }
      }
    }
  }
  console.log(height, 'altura')
  return (
    <div>
      <div style={{ width: '200px', height: '200px' }}>
        <Radar
          style={{ width: '200px', height: '200px' }}
          data={data}
          options={options}
        />
      </div>
      <Features>
        <span>Altura promedio:</span>
        {isNaN(height) ? 0 : height} cm
      </Features>

      <Features>
        <span>Peso promedio:</span>
        {isNaN(weight) ? 0 : weight} kg
      </Features>
    </div>
  )
}
const Features = styled.div`
  display: flex;
  justify-content: space-between;
`
