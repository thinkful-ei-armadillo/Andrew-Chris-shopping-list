/* global cuid Item*/

'use strict'; 

const store = (function () {
  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ]; 
  
  let hideCheckedItems = false;
  let searchTerm = ''; 
  
  function findByID(id){
    return store.items.find(function(element){
      return element.id === id; 
    });
  }

  function addItem(name){
    try{
      Item.validateName(name);
      this.items.push(Item.create(name)); 
    }catch(e){
      throw new Error(e.message); 
    }
  }
  return {
    items,
    hideCheckedItems,
    searchTerm,
    findByID, 
    addItem, 
  }; 
}() );