import { useEffect, useState } from "react";

function useLocalStorage(itemName, initialValue) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(initialValue);
  const [sincronizedItem, setSincronizedItem] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        parsedItem = localStorageItem
          ? JSON.parse(localStorageItem)
          : initialValue;
        setItem(parsedItem);
        setLoading(false);
        setSincronizedItem(true)
      } catch (error) {
        setError(error);
      }
    }, 800);
  }, [sincronizedItem]);

  const saveItem = (newitem) => {
    try {
      const stringifieditem = JSON.stringify(newitem);
      localStorage.setItem(itemName, stringifieditem);
      setItem(newitem);
    } catch (error) {
      setError(error);
    }
  };
  const sincronizeItem = () => {
    setLoading(true)
    setSincronizedItem(false)
  }
  return {
    item,
    saveItem,
    loading,
    error,
    sincronizeItem,
  };
}

export { useLocalStorage };
