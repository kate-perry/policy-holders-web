import axiosConfig from "./axios-config";

const url = "http://localhost:8080/api"
export async function createPolicyHolder(policyHolder) {
  return axiosConfig.post(`${url}/policyholders`, policyHolder).then((res) => res.data);
}

export async function getAllPolicyHolders() {
  return axiosConfig.get(`${url}/policyholders`).then((res) => res.data);
}

export async function getPolicyHolderById(id) {
  return axiosConfig.get(`${url}/policyholders/${id}`).then((res) => res.data);
}

export async function createInsuranceEvent(insuredEvent) {
  return axiosConfig.post(`${url}/insuredEvents`, insuredEvent).then((res) => res.data);
}

export async function getAllInsuranceEvents() {
  return axiosConfig.get(`${url}/insuredevents`).then((res) => res.data);
}

export async function getAllInsuranceEventsByPolicyHolder(id) {
  return axiosConfig.get(`${url}/insuredevents/bypolicyholder/${id}`).then((res) => res.data);
}

export async function getInsuranceEventById(id) {
  return axiosConfig.get(`${url}/insuredevents/${id}`).then((res) => res.data);
}
