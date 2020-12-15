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
