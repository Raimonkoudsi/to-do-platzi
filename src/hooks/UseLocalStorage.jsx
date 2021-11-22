import React, {useState, useEffect} from "react";

const useLocalStorage = (itemName, initialValue) => {

    //para saber si el storage esta sincronizado con las vistas
    const [sincronizedItem, setSincronizedItem] = useState(true);

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
  

    //lista de todos
    const [item, setItem] = useState(initialValue);
  
    useEffect(() => {
      setTimeout(() => {
  
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
        
          //verificar si hay algun dato guardado en el localstorage
          if(!localStorageItem) {
            localStorage.setItem(itemName , JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
    
          setItem(parsedItem);
          setLoading(false);

          setSincronizedItem(true);
  
        } catch(error) {
          setError(error);
        }
  
      }, 3000);
    }, [sincronizedItem]);
  
    //actualizar el localstorage
    const saveItem = (newItem) => {
  
      try {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        //recarga la pagina sin necesidad de verificar el storage
        setItem(newItem);
      } catch (error) {
        setError(error);
      }
  
    };

    const sincronizeItem = () => {
      setLoading(true);
      setSincronizedItem(false);
    }
  
    return {
      item, //recibir
      saveItem, //actualizar
      loading, //cargando
      error, //error
      sincronizeItem //sincroniza los items en las demas vistas
    };
}

export default useLocalStorage;