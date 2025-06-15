import { createContext, useContext, useState } from "react";

const BasketContext = createContext();

function BasketProvider({ children }) {
  const [basket, setBasket] = useState([]);
  const [itemId, setItemId] = useState(1);

  function addToBasket(productToBeAdded) {
    setBasket((prevBasket) => {
      const existingItemIndex = prevBasket.findIndex(
        (item) => item.productId === productToBeAdded.productId
      );

      if (existingItemIndex !== -1) {
        const updatedBasket = [...prevBasket];
        updatedBasket[existingItemIndex] = {
          ...updatedBasket[existingItemIndex],
          quantity:
            updatedBasket[existingItemIndex].quantity +
            productToBeAdded.quantity,
        };

        return updatedBasket;
      } else {
        productToBeAdded.positionInBasket = itemId;
        setItemId((prev) => prev + 1);
        return [...prevBasket, productToBeAdded];
      }
    });
  }

  function removeFromBasket(productToBeRemoved) {
    console.log("Removing: ", productToBeRemoved);

    setBasket((prevBasket) => {
      const existingItemIndex = prevBasket.findIndex(
        (item) => item.productId === productToBeRemoved.productId
      );

      if (existingItemIndex !== -1) {
        const updatedBasket = [...prevBasket];
        const existingItem = prevBasket[existingItemIndex];

        const quantityToRemove = productToBeRemoved.quantity || 1;

        // Reduce quantity
        if (existingItem.quantity > quantityToRemove) {
          console.log("More than one item to remove, reducing quantity");
          updatedBasket[existingItemIndex] = {
            ...existingItem,
            quantity: existingItem.quantity - quantityToRemove,
          };
          return updatedBasket;
        } else {
          // Remove item
          console.log("Only one item, removing: ", productToBeRemoved.title);
          return updatedBasket.filter(
            (product) => product.productId !== productToBeRemoved.productId
          );
        }
      }

      // If no item found, return basket
      return prevBasket;
    });
  }

  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket }}>
      {children}
    </BasketContext.Provider>
  );
}

function useBasket() {
  return useContext(BasketContext);
}

export { BasketProvider, useBasket };
