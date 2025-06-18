import { createContext, useContext, useState } from "react";

const BasketContext = createContext();

function BasketProvider({ children }) {
  const [itemId, setItemId] = useState(1);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalItemQuantity, setTotalItemQuantity] = useState(0);

  function updateTotal(price, quantity, toBeAdded) {
    if (toBeAdded) {
      setTotal((prev) => prev + (price * quantity));
    } else {
      setTotal((prev) => prev - (price * quantity));
    }
  }

  function updateTotalItemQuantity(quantity, toBeRemoved) {
    if (toBeRemoved) {
      setTotalItemQuantity((prev) => prev - quantity);
    } else {
      setTotalItemQuantity((prev) => prev + quantity);
    }
  }

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

    updateTotal(productToBeAdded.price, productToBeAdded.quantity, true);
    updateTotalItemQuantity(productToBeAdded.quantity, false);
  }

  /**
   * TODO:
   * Function needs reworked, currently the line `const totalItemQuantityToRemove = productToBeRemoved.totalItemQuantity || 1;`
   * sets totalItemQuantityToRemove to either the totalItemQuantity of the item or 1. This is dumb.
   *
   * Function should get totalItemQuantity of an item and then subtract that...
   *
   * Look at Checkout.jsx and implement a decrement <Button /> which allows the user to
   * decide how many to remove.
   *
   * @param {*} productToBeRemoved
   */
  function removeFromBasket(productToBeRemoved, quantityToRemove) {
    setBasket((prevBasket) => {
      const existingItemIndex = prevBasket.findIndex(
        (item) => item.productId === productToBeRemoved.productId
      );

      if (existingItemIndex !== -1) {
        const updatedBasket = [...prevBasket];
        const existingItem = prevBasket[existingItemIndex];

        // const totalItemQuantityToRemove = productToBeRemoved.totalItemQuantity || 1;
        // const totalItemQuantityToRemove = 1;

        // Reduce quantity
        if (existingItem.quantity > quantityToRemove) {
          console.log(existingItem.title + " quantity is : " + existingItem.quantity);
          updatedBasket[existingItemIndex] = {
            ...existingItem,
            quantity: existingItem.quantity - quantityToRemove,
          };
          return updatedBasket;
        } else {
          // Remove item
          return updatedBasket.filter(
            (product) => product.productId !== productToBeRemoved.productId
          );
        }
      }

      // If no item found, return basket
      return prevBasket;
    });

    updateTotal(productToBeRemoved.price, quantityToRemove, false)
    updateTotalItemQuantity(quantityToRemove, true);
  }

  return (
    <BasketContext.Provider
      value={{ basket, addToBasket, removeFromBasket, total, totalItemQuantity }}
    >
      {children}
    </BasketContext.Provider>
  );
}

function useBasket() {
  return useContext(BasketContext);
}

export { BasketProvider, useBasket };
