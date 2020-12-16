# Welcome to the Policy Holder Management System!

## To Run Locally...
1. Clone project and confirm you have the `master` branch pulled down
2. Run `npm install`
3. Run `npm start`

## About This System
This app was built with React, routed with React Router, styled by Material UI, and prepared to connect to an API with Axios.

The acompanying back-end to this system can be found in [policy-holders-api](https://github.com/kate-perry/policy-holders-api), where you will see the ghosts of Policy Holder API-past. Intended to run on a back-end of Django and MongoDB, the final connection was scrapped due to time constraints (plus, running MongoDB locally requires you to have MongoDB installed, and I shouldn't assume your setup). This web app is currently running on mocked datasets saved in /utils.

## Project Status
| Status             | User Story | Details |
|--------------------|------------|---------|
| Complete           | As a User, I would like to view aggregated metrics for all policy holders so that I can understand our insured pool data. | <ul><li>- [X] Total covered amount for all claims</li><br/><li>- [X] Total number of claims by year</li><br/><li>- [X] Average age of policy holders</li><ul> |
| Partially Complete | As a user, I would like to add a new policy holder and receive the user's generated unique ID in return so that I know the exchange was successful. | UI complete, missing either POST to API connection, or writing out to dataset file. |
| Partially Complete | As a user, I would like to add an Insured Event for a specific user based on their unique ID so that the event is tracked. | UI complete, missing either POST to API connection, or writing out to dataset file. |
| Complete           | As a user, I would like to see a list of all policy holders so that I can track everyone in the system. | |
| Complete           | As a user, I would like to see a list of all events on a policy holder's account based on their unique ID so that I am aware of their history. | |
| Complete           | As a user, I would like a pleasing front end to access policy holder information so that it is easy to view and analyze. | |
| To Do              | As a user, I would like all of the PI information to be secure so that I can protect my policy holders. | While it's not handled in the app, PII should be ecrypted at rest (where it's stored) and when it's moving (such as right after the user clicks "Create Policy Holder" and before the program sends the data to the API) |
| Complete           | As a user, I would like to see a README with documentation so I can know how to run the app. | |
