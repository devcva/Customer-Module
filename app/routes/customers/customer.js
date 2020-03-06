import Route from '@ember/routing/route';
import {set} from '@ember/object';
import A from '@ember/array';
export default Route.extend({
    
    model()
    {
        this.controllerFor('customers').showSingleObj("cuslist");
        return this.controllerFor('customers').singleObj;
    },
    actions:
    {
        gotoback()
        {
             this.transitionTo('customers');
        }
    }
});
