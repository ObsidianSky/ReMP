export const sort = (field, items) => {
    const sortedItems = [].concat(items);

    sortedItems.sort((item1, item2) => {
        const value1 = item1[field];
        const value2 = item2[field];

        return value1 > value2 ? -1 : value1 < value2 ? 1 : 0
    });

    return sortedItems;
};