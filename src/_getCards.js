import { BGADPCardsGetV1 } from '@cells-components/bgadp-cards-v1';

export const getCards = (config, htmlContext) => new Promise((ok, ko) => {
  let service = new BGADPCardsGetV1(config);
  service.htmlContext = htmlContext;
  service.generateRequest()
  .then(request => JSON.parse(request.response))
  .then(({ data }) => ok(data))
  .catch(error => ko(error));
});