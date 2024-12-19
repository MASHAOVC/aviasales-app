export const setSortOption = (option) => ({ type: 'SET_SORT_OPTION', payload: option });

export const toggleCheckbox = (name) => ({ type: 'TOGGLE_CHECKBOX', payload: name });
export const toggleAllCheckboxes = (isChecked) => ({ type: 'TOGGLE_ALL', payload: isChecked });
