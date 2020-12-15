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
