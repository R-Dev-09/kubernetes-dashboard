import { startCase } from 'lodash/string';

export const getBasePath = (path = window.location.pathname) => /^\/?[a-zA-Z]+:/.test(path) ? path.slice(0, path.indexOf(':') + 1) : '/';

export const kubeCase = (string: string) => startCase(string).toLowerCase(); 