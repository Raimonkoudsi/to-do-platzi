import React, {useState, useEffect} from "react";

const useLocalStorage = (itemName, initialValue) => {

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
  
        } catch(error) {
          setError(error);
        }
  
      }, 1000);
    }, [])
  
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
  
    return {
      item, //recibir
      saveItem, //actualizar
      loading, //cargando
      error //error
    };
}

export default useLocalStorage;