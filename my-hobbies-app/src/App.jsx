import chessImg from './assets/chess.png'
import musicImg from './assets/music.png'
import sportsImg from './assets/sports.png'
import gardeningImg from './assets/gardening.png'
import singingImg from './assets/singing.png'
import editingImg from './assets/editing.png'

const hobbies = [
  {
    key: 'chess',
    img: chessImg,
    title: 'CHESS',
    accent: '#4a8ef0',
    description:
      'I enjoy playing chess because it improves my thinking and decision-making skills.',
  },
  {
    key: 'music',
    img: musicImg,
    title: 'MUSIC',
    accent: '#b06bf0',
    description: 'I love listening to music because it relaxes my mind and lifts my mood.',
  },
  {
    key: 'sports',
    img: sportsImg,
    title: 'SPORTS',
    accent: '#4ad06a',
    description:
      'I enjoy playing sports because they keep me fit, active and teach me teamwork.',
  },
  {
    key: 'gardening',
    img: gardeningImg,
    title: 'GARDENING',
    accent: '#4ac96a',
    description: 'I love gardening because it connects me with nature and teaches me patience.',
  },
  {
    key: 'singing',
    img: singingImg,
    title: 'SINGING',
    accent: '#f0a03c',
    description:
      'I enjoy singing because it allows me to express my feelings and brings me joy.',
  },
  {
    key: 'editing',
    img: editingImg,
    title: 'EDITING',
    accent: '#3ea8f0',
    description:
      'I like editing because I enjoy creating creative and interesting photos and videos.',
  },
]

function HobbyCard({ img, title, accent, description }) {
  return (
    <div className="card" style={{ '--accent': accent }}>
      <div className="icon-ring">
        <img src={img} alt={title} />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default function App() {
  return (
    <div className="page">
      <div className="title-wrap">
        <h1>
          <span className="spark">&#10022;</span>
          <span className="white">MY</span> <span className="gold">HOBBIES</span>
          <span className="spark">&#10022;</span>
        </h1>
        <div className="subtitle">Things I love to do</div>
      </div>

      <div className="grid">
        {hobbies.map((hobby) => (
          <HobbyCard key={hobby.key} {...hobby} />
        ))}
      </div>
    </div>
  )
}
