import { LitElement } from 'lit-element';
import { BGADPAccountsGetV0 } from '@cells-components/bgadp-accounts-v0'


/**
This component ...

Example:

```html
<dm-fabiola-roque-benhumea></dm-fabiola-roque-benhumea>
```

##styling-doc

@customElement dm-fabiola-roque-benhumea
@polymer
@LitElement
@demo demo/index.html
*/
export class DmFabiolaRoqueBenhumea extends LitElement {
  static get is() {
    return 'dm-fabiola-roque-benhumea';
  }

  // Declare properties
  static get properties() {
    return {
      host: { type: String },
      version: { type: Number },
      requiredToken: {
        type: String,
        attribute: 'required-token'
      },
      native: { type: Boolean },
      cardId: {
        type: String,
        attribute: 'card-id'
      }
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.host = '',  
    this.requiredToken = 'tsec'
  }

  get config() {
    return {
      host: this.host,
      requiredToken: this.requiredToken
    };
  }

  getAccounts() {
    let config = this.config;
    const service = new BGADPAccountsGetV0(config);
    service.htmlContext = this;
    service.generateRequest()
    .then( request => {
        console.log(request); 
        console.log(JSON.parse(request.response));
        return JSON.parse(request.response);
    })
    .then( ( {data} ) => {
      this.dispatchEvent(new CustomEvent('accounts-request-success', {
        bubbles: true,
        detail: data
      }));
    })
    .catch( error => {
      this.dispatchEvent(new CustomEvent('cards-request-error', {
        bubbles: true,
        detail: error
      }));
    });
  }
}
