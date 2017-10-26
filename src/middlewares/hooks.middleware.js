export const createHooksMiddleware = configList => {
    return store => next => action => {
        const config = configList.find(config => {
            return Array.isArray(config.actionName)
                ? config.actionName.includes(action.type)
                : config.actionName === action.type;
        });

        if (config && config.before) {
            config.before(store.getState(), store.dispatch);
        }

        const result = next(action);

        if (config && config.after) {
            config.after(store.getState(), store.dispatch);
        }

        return result;
    };
};