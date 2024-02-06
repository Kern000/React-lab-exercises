import React, { useState, useEffect, useMemo, useCallback } from "react";
import axios from "axios";

const MenuList = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedItems, setSelectedItems] = useState({});
  const [filename, setFilename] = useState("menu.json");

  const fetchMenuItems = useCallback(async () => {
    try {
      if (filename) {
        const fileToLoad = filename;
        console.log("loading,", fileToLoad);
        const response = await axios.get(fileToLoad);
        if (Array.isArray(response.data)) {
          setMenuItems(response.data);
        }
      }
    } catch (error) {
      console.error("Error fetching menu items:", error);
    }
  }, [filename]);

  useEffect(() => {
    fetchMenuItems();
  }, [fetchMenuItems]);

  // Filter menu items without useMemo
  const filteredMenuItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleMenuItemSelect = (itemId, itemCost) => {
    setSelectedItems((prevSelectedItems) => {
      const newSelectedItems = { ...prevSelectedItems };

      // here when we use {...prevSelectedItems} we are basically enumerating

      if (newSelectedItems[itemId]) {
        delete newSelectedItems[itemId];
      } else {
        newSelectedItems[itemId] = itemCost;
      }
      return newSelectedItems;
    });
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const totalCost = useMemo(()=> Object.values(selectedItems).reduce(
    (acc, cost) => acc + cost,
    0
  ), [selectedItems]);

  return (
    <div>
      <div>
        <input
          type="text"
          value={filename}
          onChange={(e) => setFilename(e.target.value)}
          placeholder="filename"
        />
      </div>
      <input
        type="text"
        value={search}
        onChange={handleSearchChange}
        placeholder="Search menu items..."
      />
      <ul>
        {filteredMenuItems.map((item) => (
          <li key={item.id}>
            {item.name} (${item.cost})
            <input
              type="checkbox"
              onChange={() => handleMenuItemSelect(item.id, item.cost)}
            />
          </li>
        ))}
      </ul>
      <div>Total cost: ${totalCost.toFixed(2)}</div>
    </div>
  );
};

export default MenuList;
