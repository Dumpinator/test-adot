import React, { useContext } from "react";
import { customAlphabet } from 'nanoid'
import { AppCtx } from "../../App";
import Card from "../Card";
import './style.scss';

const CardsList: React.FunctionComponent = () => {

  const { cards } = useContext(AppCtx);

  return <div className="cardsList" >
    {
      cards.map( (item, i) => {
        if (i > 5 ) {
          const nanoid = customAlphabet('1234567890', 10)
          const randomId = parseInt( nanoid() );
          console.log(randomId);
          item.id = randomId }
        return <Card key={ item.id } data={item} />
      })
    }
  </div>
}

export default CardsList;
