import Route from '@ember/routing/route';
import {set} from '@ember/object';

export default Route.extend({
    model(params)
    {
        return this.store.query('post',{userId: params.id});
    },

    setupController(controller,model)
    {
        set(controller,'posts',model);
    }


});
