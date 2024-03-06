import Realm, {BSON, ObjectSchema} from 'realm';

import {ProfileProps} from '../services/models';

export class Profile extends Realm.Object<Profile> {
  _id!: BSON.ObjectId;
  name!: string;
  email!: string;
  phone!: number;
  image?: string;

  static generate(user: ProfileProps) {
    return {
      _id: new Realm.BSON.ObjectId(),
      name: user.name,
      email: user.email,
      phone: Number(user.phone),
      image: user.image,
    };
  }

  static schema: ObjectSchema = {
    name: 'Profile',
    properties: {
      _id: 'objectId',
      name: {type: 'string', indexed: 'full-text'},
      email: 'string',
      phone: 'int',
      image: {type: 'string', optional: true},
    },
    primaryKey: '_id',
  };
}
