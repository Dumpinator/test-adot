import React from "react";
import CardsList from "../../components/CardsList/CardsList";
import { Modal } from "../../components/Modal/modal";
import { useModal } from "../../useModal";
import './style.scss';

const Home: React.FunctionComponent = () => {

  const { isShown, toggle } = useModal();

  const content = <React.Fragment>
    <form>
      <label><input type="text" name="name" placeholder="Nom de la destination" /></label>
      <label><input type="text" name="address" placeholder="Adresse" /></label>
      <label><input type="text" name="image" placeholder="Lien de l'image" /></label>
      <div className="stats">
        <label><input type="number" name="population" placeholder="Nb Habitants" /></label>
        <label><input type="number" name="booking" placeholder="Nb Hôtels" /></label>
        <label><input type="number" name="cost" placeholder="Revenu Moy" /></label>
        <label><input type="number" name="area" placeholder="Superficie" /></label>
      </div>
      <input type="submit" value="Submit" />
    </form>
  </React.Fragment>;

  return <div className="container">
    <div className="header">
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
