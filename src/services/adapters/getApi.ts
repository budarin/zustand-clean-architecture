import * as API from '../contracts/API/index.ts';

export function getApi(): typeof API {
    return API;
}
