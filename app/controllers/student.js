import Controller from '@ember/controller';
import {set} from '@ember/object';
export default Controller.extend({
    id:0,
    name:null,
    rec:null,
    actions:
    {
        addRec(name)
        {
            this.id++;
            this.store.createRecord('person',{
                id:this.id,
                name:name
            });
        },
        findRec(id)
        {
            // console.log(id);
            // this.store.findRecord('person','1').then(function(record){
            //     //set(this,'rec',record);
            //     console.log(record);
            // });


            set(this,'rec',this.store.peekRecord('person','1'));

            // this.store.findAll('person').then(function(recc){
            //     set(this,'rec',recc);
            //     console.log(recc);
            // });

        }
    }
});
