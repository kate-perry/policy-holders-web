import _ from "lodash";

export function getInsuredEventsForPolicyHolderId(
  insuredEvents,
  policyHolderId
) {
  let foundInsuredEvents = [];
  foundInsuredEvents = _.filter(insuredEvents, {
    policyHolderId: policyHolderId,
  });
  return foundInsuredEvents;
}

export function getTotalCoveredAmount(insuredEvents) {
  let sum = _.sumBy(insuredEvents, "coveredAmount");
  return sum;
}

function getAge(dob) {
  let dobAsDate = new Date(dob);
  let todayAsDate = new Date();
  let ageDifference = todayAsDate - new Date(dobAsDate).getTime();
  var ageDate = new Date(ageDifference)
  console.log(Math.abs(ageDate.getUTCFullYear() - 1970))
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export function getAverageAgeOfPolicyHolders(policyHolders) {
  let count = policyHolders.length;
  let totalAge = 0;
  policyHolders.map((policyHolder) => (totalAge += getAge(policyHolder.dob)));
  return totalAge / count;
}

export function getNumberOfClaimsByYear(insuredEvents, year) {
  let eventsByYear = _.countBy(insuredEvents, function (event) {
    return event.doi.substring(0, 4);
  });
  if (eventsByYear) {
    return eventsByYear[year];
  } else {
    return 0;
  }
}
