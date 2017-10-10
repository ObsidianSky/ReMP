export const createNavigationMiddleware = (configList) => {
    return store => next => action => {
        const config = configList.find(config => {
            return Array.isArray(config.actionName)
                ? config.actionName.includes(action.type)
                : config.actionName === action.type;
        });

        const result = next(action);

        if (config) {
            config.handler(store.getState());
        }

        return result;
    };
};