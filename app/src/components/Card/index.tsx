import React, { useContext } from "react";
import { AppCtx, ICard } from "../../App";
import './style.scss';

interface Props {
  data: ICard;
}

const Card: React.FunctionComponent<Props> = ({data}) => {

  const { onToggleActive } = useContext(AppCtx);
  const { id, title, address, population, booking, cost, area, active } = data;

  return <div className="card">
    <div className="card__image" style={ id > 6 ? { backgroundImage: `url(${process.env.PUBLIC_URL}/images/default_img.jpeg)` } : { backgroundImage: `url(${process.env.PUBLIC_URL}/images/img${id}.jpeg)` }}></div>
    <div className="card__content">
      <div className="infos">
        <div className="infos__content">
          <h1 className="title">{title}</h1>
          <p className="address">{address}</p>
        </div>
        <input type="checkbox" id={`switch${id}`} defaultChecked={active} onChange={ () => onToggleActive(id)}/>
        <label htmlFor={`switch${id}`}></label>
      </div>
      <div className="stats">
        <div className="stats__population">{population} M<span>Habitants</span></div>
        <div className="stats__booking">{booking}<span>Hôtels</span></div>
        <div className="stats__cost">{cost} €<span>Revenu Moy</span></div>
        <div className="stats__area">{area}<span>km²</span></div>
      </div>
    </div>
  </div>
}

export default Card;
