import { BGADPCardsGetV1 } from '@cells-components/bgadp-cards-v1';

export const getCardDetail = (cardId, config, htmlContext) => new Promise((ok, ko) => {
  config.params = { 'card-id': cardId };
  const service = new BGADPCardsGetV1(config);
  service.htmlContext = htmlContext;
  service.generateRequest()
    .then(request => JSON.parse(request.response))
    .then(({ data }) => ok(data))
    .catch(error => ko(error));
});