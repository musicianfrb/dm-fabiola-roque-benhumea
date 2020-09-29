import { BGADPAccountsGetV0 } from '@cells-components/bgadp-accounts-v0'

export const getAccounts = (config, htmlContext) => new Promise((ok, ko) => {
  let service = new BGADPAccountsGetV0(config);
  service.htmlContext = htmlContext;
  service.generateRequest()
  .then(request => JSON.parse(request.response))
  .then(({ data }) => ok(data))
  .catch(error => ko(error));
});