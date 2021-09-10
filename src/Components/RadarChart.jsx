import { Radar } from 'react-chartjs-2'

export const RadarChart = ({ skills }) => {
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
        label: 'Skills',
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
      <div className='header'>
        <div className='links'></div>
      </div>
      <Radar data={data} options={options} />
    </div>
  )
}
