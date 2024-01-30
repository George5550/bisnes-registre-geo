import api from './api'

const resource = '/cla';

export const allCla = () => api.get(resource)