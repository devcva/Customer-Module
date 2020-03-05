
import Controller from '@ember/controller';
import {set} from '@ember/object';
import {A} from '@ember/array';


export default Controller.extend({
   
    cuslist:true,
    singleObj:null,
    arrObj:A(
        [
            {
             name:"sivalingam",
             displayname:"Cva",
             phonenumber:"1234567899"
            },
            {
             name:"lingamsiva",
             displayname:"siva",
             phonenumber:"765432456"
            } 
        ]),
    myObj1:A([]),


    actions:
    {
        showSingleObj(obj)
        {
           this.singleObj=obj;
           set(this,'cuslist',false);
           this.transitionToRoute('customers.customer');
        }
       
        
    }

});



