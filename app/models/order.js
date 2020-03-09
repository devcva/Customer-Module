import Model from '@ember-data/model';
import DS from 'ember-data';

export default Model.extend({
    lineItems: DS.hasMany('line-item')
});
