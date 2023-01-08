import { LightningElement, track, api } from 'lwc';

export default class ComponentsContainer extends LightningElement {
    @api recordId;
    isFireFlow = false;
    flowAPI = 'ScreenFlow_Fire_From_LWC';
    flowLabel = 'Flow from LWC~';

    @track catList = [
        'Maria Cat',
        'Hafsa Cat',
        'Manha Cat'
    ];

    onBtnClick() {
        this.isFireFlow = true;
    }
    
    destroyFlowModal(){
        this.isFireFlow = false;
    }
}