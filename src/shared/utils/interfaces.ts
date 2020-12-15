export interface PolicyHolder {
    id: string,
    gender: string,
    dob: Date,
    ssn: string,
    smokingStatus: boolean,
    allergies: string,
    medicalConditions: string,
}

export interface InsuredEvent {
    id: string,
    policyHolderId: string,
    doi: Date,
    type: string,
    billedAmount: number,
    coveredAmount: number,
}