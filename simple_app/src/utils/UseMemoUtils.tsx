export const initialItems = new Array(29_999).fill(0).map((_, i) => {
    return {
        id: i,
        isSelected: i === 29_998
    }
})