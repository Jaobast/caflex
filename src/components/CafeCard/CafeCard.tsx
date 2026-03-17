
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
    <button className='OneCard' key={id} onClick={openCafe}>
        <div className='info'>
            <p className="spruch" >{spruch}</p>
            <h2>{name}</h2>
            <p className="stadtteil" >{stadtteil}</p>
        </div>
        <img src={img} alt={name} />
    </button>
  )
}

export { CafeCard, CafeCardLarge }
