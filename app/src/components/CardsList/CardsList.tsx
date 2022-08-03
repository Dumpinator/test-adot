import React, { useContext } from "react";
import { AppCtx } from "../../App";
import Card from "../Card";
import './style.scss';

const CardsList: React.FunctionComponent = () => {

  const { cards } = useContext(AppCtx);

  return <div className="cardsList" >
    {
      cards.map( item => {
        return <Card key={item.id} data={item} />
      })
    }
  </div>
}

export default CardsList;
