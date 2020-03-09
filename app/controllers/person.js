import Controller from '@ember/controller';
import {set} from '@ember/object';
export default Controller.extend({


    actions:
    {
       
        storeRec()
        {
            this.store.createRecord('person',{
                id:1,
                firstName:'selva',
                lastName:'kumar',
                age:20,
                }
                );
                this.store.createRecord('person',{
                    id:2,
                    firstName:'aravind',
                    lastName:'selvaraj',
                    age:22,
                    }
                    );
        },
        viewRec()
        {
            // set(this,'rec',this.store.findRecord('person',1).then(function(objj)
            // {
            //     return objj;
            // }));

            try
            {

                this.store.findRecord('person',1).then(function(objj){
                        console.log(objj);
                });
                // this.store.findRecord('person',"2").then(function(objj)
                //         {
                //         console.log(objj);
                //         });
            }
            catch(e)
            {
                console.log('EError: '+e);
            }
        },
        updateRec()
        {
            this.store.findRecord('person',"1").then(function(rec){
                rec.set('firstName','siva'); 
            })
        }

    }


});


