import React, { useState } from 'react'

export default function useShowItem(count,dataCard) {
      const [isCountShowItem, setIsCountShowItem] = useState(count);
    
      // Toggle item count (Show More / Show Less)
      const handlerShowItem = () => {
        // Reset to 6 items if all items are shown
        if (isCountShowItem > dataCard.length) {
          setIsCountShowItem(count);
        } else {
          // Increase item count
          setIsCountShowItem((prev) => prev + count);
        }
      };
  return {isCountShowItem, setIsCountShowItem, handlerShowItem}
}
