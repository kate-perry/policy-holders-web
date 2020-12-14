import axiosConfig from "../axiosConfig";

export async function createPolicyHolder(policyHolder) {
  return axiosConfig.post("/policyholders", policyHolder);
}

export async function getAllPolicyHolders() {
  return axiosConfig.get("/policyholders");
}

export async function getPolicyHolderById(id) {
  return axiosConfig.get(`/policyholders/${id}`);
}

export async function createInsuranceEvent(insuredEvent) {
  return axiosConfig.post("/insuredEvents", insuredEvent);
}

export async function getAllInsuranceEvents() {
  return axiosConfig.get("/insuredevents");
}

export async function getAllInsuranceEventsByPolicyHolder(id) {
  return axiosConfig.get(`/insuredevents/bypolicyholder/${id}`);
}

export async function getInsuranceEventById(id) {
  return axiosConfig.get(`/insuredevents/${id}`);
}
