# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Business.destroy_all

User.create!(
  first_name: 'Demo',
  last_name: 'User',
  zipcode: 12345,
  email: 'demo@email.com',
  birthday_month: 1,
  birthday_day: 23,
  birthday_year: 2019,
  password: 'password'
)

Business.create!(
  name: "Gong Cha",
  zipcode: 10018,
  address: "75 W 38th St, New York, NY",
  phone_number: "(212)398-2716",
  longitude: 40.752310,
  latitude: -73.985630,
)

Business.create!(
  name: "Kung Fu Tea",
  zipcode: 10001,
  address: "11 W 32nd St, New York, NY",
  phone_number: "(212) 695-5888",
  longitude: 40.747746,
  latitude: -73.986192,
)