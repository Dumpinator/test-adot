import React, { useContext } from "react";
import { AppCtx, IDataContext } from "../../App";
import Card from "../Card";
import './style.scss';

const CardsList: React.FunctionComponent = () => {

  const dataContext = useContext(AppCtx);

  return <div className="cardsList" >
    {
      dataContext?.map((item: IDataContext) => { return <Card key={item.id} data={item} /> })}
  </div>
}

export default CardsList;
