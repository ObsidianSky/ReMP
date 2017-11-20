export const START_LOADING = 'START_LOADING';
export const END_LOADING = 'END_LOADING';

export const showSpinner = () => ({
    type: START_LOADING
});

export const hideSpinner = error => ({
    type: END_LOADING
});