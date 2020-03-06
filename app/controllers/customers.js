import Controller from '@ember/controller';
import {set,observer} from '@ember/object';
import {A} from '@ember/array';


export default Controller.extend({
    cuslist:true,
    cusCount:null,
    singleObj:null,
    arrObj:A(
        [
            {
             name:"sivalingam",
             displayname:"siva",
             phonenumber:"123456789",
             isActive:"true",
             id:4
            },
            {
             name:"lingamsiva",
             displayname:"lingam",
             phonenumber:"765432456",
             isActive:"false",
             id:3
            },
            {
                name:"Aravind selvaraj",
                displayname:"Aravind",
                phonenumber:"123456789",
                isActive:"true",
                id:5
               },
               {
                name:"Bharani Shanmugam",
                displayname:"Bharani",
                phonenumber:"765432456",
                isActive:"true",
                id:1
               }  
        ]),
    myObj1:A([]),
    

    showSingleObj(prop)
    {
       set(this,prop,false);
    } ,
     
 

    actions:
    {
        singleCus(obj)
        {
            this.singleObj=obj;
            this.transitionToRoute('customers.customer');
        }    
    }
});