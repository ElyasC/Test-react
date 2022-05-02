import './Card.css';
import SwitchExample from '../Switch';
function Card({ data }) {

  return (
    <div className='card' >
      <img className='card-img-top' src={data.imgDestination} alt='card img'></img>
      <div className='card-body'>
        <div className='toogle-section'>
          <h5 className="card-title">{data.destination}</h5>
          <div className="form-check form-switch">
            <SwitchExample/>
          </div>
        </div>
        <p className="card-text">{data.adresse}</p>
        <div className='info-section'>
          <div className='info-section-block'>
            <p>{data.nbHabitants}</p>
            <p>Habitants</p>
          </div>
          <div className='info-section-block'>
            <p>{data.nbHotel}</p>
            <p>Hôtels</p>
          </div>
          <div className='info-section-block'>
            <p>{data.revenuMoy}</p>
            <p>Revenu Moy</p>
          </div>
          <div className='info-section-block'>
            <p>{data.superficie}</p>
            <p>km²</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Card
