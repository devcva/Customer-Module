import Route from '@ember/routing/route';
import {set} from '@ember/object';
import A from '@ember/array';
export default Route.extend({
    
    model(params)
    {
        this.controllerFor('customers').showSingleObj("cuslist");
        let currentObj=this.controllerFor('customers').arrObj;
        let returnObj=null;
        currentObj.forEach(element => {
            if (element.name==params.customer_id) {
               returnObj=element;
            }
        });
        return returnObj;
    },
    actions:
    {
        gotoback()
        {
             this.transitionTo('customers');
        }
    }
});
