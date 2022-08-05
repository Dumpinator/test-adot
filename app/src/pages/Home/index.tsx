import React, { useCallback, useContext } from "react";
import { AppCtx, ICard } from "../../App";
import CardsList from "../../components/CardsList/CardsList";
import { Modal } from "../../components/Modal/modal";
import { useModal } from "../../useModal";
import './style.scss';

const Home: React.FunctionComponent = () => {

  const { isShown, toggle } = useModal();
  const { addCard, cards } = useContext(AppCtx);
  const [formData, setFormData] = React.useState<ICard | {}>({});

  const handleForm = useCallback(
    (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      id: cards.length + 1,
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  }, [cards, formData]);

  const handleSaveCard = (e: React.FormEvent, formData: ICard | {}) => {
    e.preventDefault();
    addCard(formData as ICard);
  };


  const content =
    <React.Fragment>
      <form>
        <label><input onChange={handleForm} type="text" id="title" placeholder="Nom de la destination" /></label>
        <label><input onChange={handleForm} type="text" id="address" name="address" placeholder="Adresse" /></label>
        <label><input type="text" name="image" placeholder="Lien de l'image" /></label>
        <div className="stats">
          <input type="number" onChange={handleForm} id="population" name="population" placeholder="Nb Habitants" />
          <input type="number" onChange={handleForm} id="booking" name="booking" placeholder="Nb Hôtels" />
          <input type="number" onChange={handleForm} id="cost" name="cost" placeholder="Revenu Moy" />
          <input type="number" onChange={handleForm} id="area" name="area" placeholder="Superficie" />
        </div>
        <div className="switch">
          <input type="checkbox" onChange={handleForm} id="active" defaultChecked={false}/>
          <label htmlFor="active">Activer</label>
        </div>
        <div className="btn">
          <button className="btn__cancel" type="button" onClick={toggle}>Cancel</button>
          <button type="submit"
            onClick={(e) => {
              e.preventDefault();
              handleSaveCard(e, formData);
              toggle();
            }}
          >Confirm</button>
        </div>
      </form>
    </React.Fragment>;

  return <div className="container">
    <div className="headerPage">
      <h1>Destination</h1>
      <button onClick={toggle}>+ Ajouter</button>
    </div>
    <Modal
          isShown={isShown}
          hide={toggle}
          headerText='Ajouter une nouvelle destination'
          modalContent={content}
        />
    <div className="content">
      <CardsList />
    </div>
  </div>;
}

export default Home;
