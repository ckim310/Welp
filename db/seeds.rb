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

5.times do
  User.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    zipcode: Faker::Address.zip_code,
    email: Faker::Internet.email,
    birthday_month: Faker::Number.between(1,12),
    birthday_day: Faker::Number.between(1, 31),
    birthday_year: Faker::Number.between(1940, 2018),
    password: 'password'
  )
end

Business.create!(
  name: "Gong Cha",
  zipcode: 10018,
  address: "75 W 38th St",
  city: "New York",
  state: "NY",
  phone_number: "(212) 398-2716",
  latitude: 40.752310,
  longitude: -73.985630
)

Business.create!(
  name: "Kung Fu Tea",
  zipcode: 10001,
  address: "11 W 32nd St",
  city: "New York",
  state: "NY",
  phone_number: "(212) 695-5888",
  latitude: 40.747746,
  longitude: -73.986192
)

5.times do
  Business.create(
    name: Faker::Coffee.blend_name,
    zipcode: Faker::Address.zip_code,
    address: Faker::Address.street_address,
    city: Faker::Address.city,
    state: Faker::Address.state,
    phone_number: Faker::PhoneNumber.cell_phone,
    latitude: Faker::Number.between(40.70, 41.0),
    longitude: Faker::Number.between(-73.9, -74.1)
  )
end


Review.create!(
  body: Faker::Food.description,
  author_id: User.first.id,
  business_id: Business.first.id,
  rating: 4
)

Review.create!(
  body: Faker::Food.description,
  author_id: User.first.id,
  business_id: Business.third.id,
  rating: 5
)

Review.create!(
  body: Faker::Food.description,
  author_id: User.second.id,
  business_id: Business.second.id,
  rating: 3
)

Review.create!(
  body: Faker::Food.description,
  author_id: User.second.id,
  business_id: Business.first.id,
  rating: 2
)