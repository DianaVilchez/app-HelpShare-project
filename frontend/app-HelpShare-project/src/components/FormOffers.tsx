// import { useState } from "react";
// import { FormView } from "./FormView";
// import { useOfferConnection } from "../Services/useOfferConnection"; // Importa el hook correctamente

// export const FormOffers = () => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [category, setCategory] = useState('');
//   const [idUser, setIdUser] = useState<number>(1); // Asignar el id del usuario

//   // Usamos el custom hook aquí
//   const { offerConnection } = useOfferConnection();

//   const handleOfferSubmit = async () => {
//     console.log("Datos enviados:", title, description, category);
//     // Llamamos a la función offerConnection pasando los datos
//     await offerConnection(idUser, { title, description, category });
//   };

//   return (
//     <FormView
//       title={title}
//       description={description}
//       category={category}
//       setTitle={setTitle}
//       setDescription={setDescription}
//       setCategory={setCategory}
//       onSubmitOffer={handleOfferSubmit} // Pasamos handleOfferSubmit a FormularioOferta como prop
//     />
//   );
// };

import { useState } from "react";
import { FormView } from "./FormView";
import { useOfferConnection } from "../Services/useOfferConnection"; // Importa el hook correctamente

export const FormOffers = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const idUser = 1; // Definir idUser directamente

  // Usamos el custom hook aquí
  const { offerConnection } = useOfferConnection();

  const handleOfferSubmit = async () => {
    console.log("Datos enviados:", title, description, category);
    // Llamamos a la función offerConnection pasando el id_user y los datos de la oferta
    await offerConnection(idUser, { title, description, category });
  };

  return (
    <FormView
      title={title}
      description={description}
      category={category}
      setTitle={setTitle}
      setDescription={setDescription}
      setCategory={setCategory}
      onSubmitOffer={handleOfferSubmit} // Pasamos handleOfferSubmit a FormularioOferta como prop
    />
  );
};
