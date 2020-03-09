import DS from 'ember-data';
import {computed} from '@ember/object';

export default DS.Model.extend({
    
    firstName: DS.attr('string'),
    lastName: DS.attr('string'),
    age: DS.attr('number'),
   // birthday: DS.attr('date'),
    fullName: computed('firstName','lastName',function(){
        console.log('working');
        return `${this.firstName} ${this.lastName}`;
    })
});

