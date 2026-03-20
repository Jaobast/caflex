
import { useNavigate } from "react-router-dom";
import './CafeCard.css'

type CafeCardProps= {
    id:string,
    img: string,
    name: string,
    stadtteil: string,
    spruch?:string,
}

function CafeCard({img, name, stadtteil, id}: CafeCardProps) {

  const navigate = useNavigate();

  function openCafe() {
    setTimeout(() => {
      navigate(`/cafe/${id}`);
    }, 500);
  }

  return (
    <button className="CafeCard " key={id} onClick={openCafe}>
        <img src={img} alt={name} />
        <div className='info'>
            <h3>{name}</h3>
            <p>{stadtteil}</p>
        </div>
    </button>
  )
}

function CafeCardLarge({img, name, stadtteil, spruch, id}: CafeCardProps) {

  const navigate = useNavigate();

  function openCafe() {
    setTimeout(() => {
      navigate(`/cafe/${id}`);
    }, 500);
  }

  return (
    <button className='CardLarge' key={id} onClick={openCafe}>
        <div className='info'>
            <p className="spruch" >{spruch}</p>
            <h2>{name}</h2>
            <p className="stadtteil" >{stadtteil}</p>
        </div>
        <img src={img} alt={name} />
    </button>
  )
}

function CafeCardSmall({img, name, stadtteil, spruch, id}: CafeCardProps) {

  const navigate = useNavigate();

  function openCafe() {
    setTimeout(() => {
      navigate(`/cafe/${id}`);
    }, 500);
  }

  return (
    <button className='CardSmall' key={id} onClick={openCafe}>
      <img src={img} alt={name} />
        <div className='info'>
            <h2>{name}</h2>
            <p className="spruch" >{spruch}</p>
            <p className="stadtteil" >{stadtteil}</p>
        </div>
    </button>
  )
}

export { CafeCard, CafeCardLarge, CafeCardSmall}
