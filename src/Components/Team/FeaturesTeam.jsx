import React from 'react'
import { Radar } from 'react-chartjs-2'

export const FeaturesTeam = ({ team }) => {
  const stacksSkill = () => {
    const skills = {
      combat: 0,
      durability: 0,
      speed: 0,
      strength: 0,
      power: 0,
      intelligence: 0
    }
    team?.map(el => {
      skills.combat =
        skills.combat + isNaN(parseInt(el.powerstats.combat))
          ? 0
          : parseInt(el.powerstats?.combat)

      skills.durability =
        skills.durability + isNaN(parseInt(el.powerstats.durability))
          ? 0
          : parseInt(el.powerstats?.durability)

      skills.speed =
        skills.speed + isNaN(parseInt(el.powerstats?.speed))
          ? 0
          : parseInt(el.powerstats?.speed)

      skills.strength =
        skills.strength + isNaN(parseInt(el.powerstats?.strength))
          ? 0
          : parseInt(el.powerstats?.strength)

      skills.power =
        skills.power + isNaN(parseInt(el.powerstats?.power))
          ? 0
          : parseInt(el.powerstats?.power)

      skills.intelligence =
        skills.intelligence + isNaN(parseInt(el.powerstats?.intelligence))
          ? 0
          : parseInt(el.powerstats?.intelligence)
    })
    return skills
  }
  const skills = stacksSkill()

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
        label: 'Team Skills',
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

  return (
    <div>
      <div style={{ width: '200px', height: '200px' }}>
        <Radar
          style={{ width: '150px', height: '200px' }}
          data={data}
          options={options}
        />
      </div>
    </div>
  )
}
