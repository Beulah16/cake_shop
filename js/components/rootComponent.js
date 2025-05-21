import HeaderComponent from './headerComponent.js';
import CakeListComponent from './cakelistComponent.js';
import FooterComponent from './footerComponent.js';
export default {
    components: {
        HeaderComponent,
        CakeListComponent,
        FooterComponent
    },
    data() {
        return {

        }
    },
    template: /* html */ `
    <HeaderComponent />
    <CakeListComponent />
    <FooterComponent />
    `

}