import Transform from '@ember-data/serializer/transform';

export default Transform.extend({
  deserialize(serialized) {
    return serialized / 100 ;         //returns dollars
  },

  serialize(deserialized) {
    return deserialized * 100;        //returns cent
  }
});
