function newItem(url: string): HTMLImageElement {
    let item = newImage(url);
    item.addEventListener('click', () => {
        item.remove();
        let inventoryItem = document.createElement('img');
        inventoryItem.src = url;
        inventory.append(inventoryItem);
    });
    return item;
}
