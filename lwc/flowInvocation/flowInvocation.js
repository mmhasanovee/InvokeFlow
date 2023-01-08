import { api, LightningElement } from 'lwc';

export default class flowInvocation extends LightningElement {

    @api currentRecordId;
    @api listOfCats;
    @api isFireFlow;

    @api flowAPI;
    @api flowModalLabel;

    onFlowStatusChange(event) {
        if(event.detail.status == 'FINISHED'){
            console.log('Flow Finished')
            this.destroyFlow();
        }
    }

    destroyFlow(){
        const cEvent = new CustomEvent('destroyflow',{
            detail: true
        });
        this.dispatchEvent(cEvent);
    }

    get flowInputs() {
        return [
            {
                name: 'recordId',
                type: 'String',
                value: this.currentRecordId
            },
            {
                name: 'ListOfCats',
                type: 'String',
                value: this.listOfCats
            },
        ];
    }
}
