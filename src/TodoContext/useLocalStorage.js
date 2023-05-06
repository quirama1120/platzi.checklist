import { useEffect, useState } from "react";

function useLocalStorage(itemName, initialValue) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(initialValue);

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
      } catch (error) {
        setError(error);
      }
    }, 1000);
  }, [itemName, initialValue]);

  const saveItem = (newitem) => {
    try {
      const stringifieditem = JSON.stringify(newitem);
      localStorage.setItem(itemName, stringifieditem);
      setItem(newitem);
    } catch (error) {
      setError(error);
    }
  };
  
  return {
    item,
    saveItem,
    loading,
    error,
  };
}

export { useLocalStorage };
