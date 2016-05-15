import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const emailSchema = new Schema({ type: String, address: String });
const phoneSchema = new Schema({ type: String, number: String, sms: Boolean });
const geoSchema = new Schema({ lat: Number, lng: Number });
const addressSchema = new Schema({
  type: String, name: String,
  street: String, line2: String,
  city: String, state: String, zip: String,
  geo: geoSchema,
});
const urlSchema = new Schema({ type: String, address: String });
const companySchema = new Schema({ type: String, id: { type: Schema.Types.ObjectId, ref: 'company' } });
const personSchema = new Schema({
  // id: { type: String, unique: true, index: true },
  name: { first: String, last: String },
  emails: [emailSchema],
  phones: [phoneSchema],
  addresses: [addressSchema],
  urls: [urlSchema],
  companies: [companySchema],
});

const Person = mongoose.model( 'Person', personSchema );
export default Person;
