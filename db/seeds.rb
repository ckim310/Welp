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

Business.create!(
  name: "Shake Shack",
  zipcode: 10018,
  address: "1333 Broadway",
  city: "New York",
  state: "NY",
  phone_number: "(646) 230-0696",
  latitude: 40.751170,
  longitude: -73.988130
)

Business.create!(
  name: "The Cibo",
  zipcode: 10018,
  address: "22 W 38th St",
  city: "New York",
  state: "NY",
  phone_number: "(212) 933-4361",
  latitude: 40.751260,
  longitude: -73.984030
)

Business.create!(
  name: "Cava",
  zipcode: 10018,
  address: "1385 Broadway",
  city: "New York",
  state: "NY",
  phone_number: "(718) 502-9282",
  latitude: 40.752790,
  longitude: -73.987860
)

Business.create!(
  name: "Ippudo NYC",
  zipcode: 10003,
  address: "65 4th Ave",
  city: "New York",
  state: "NY",
  phone_number: "(123) 456-7890",
  latitude: 40.730880,
  longitude: -73.990310
)

Business.create!(
  name: "Burger & Lobster",
  zipcode: 10011,
  address: "39 W 19th St",
  city: "New York",
  state: "NY",
  phone_number: "(646) 833-7532",
  latitude: 40.740160,
  longitude: -73.993370
)

Business.create!(
  name: "Jane",
  zipcode: 10012,
  address: "100 W Houston St",
  city: "New York",
  state: "NY",
  phone_number: "(646) 833-7532",
  latitude: 40.727380,
  longitude: -74.000200
)

4.times do
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
  body: Faker::Hipster.paragraph,
  author_id: User.first.id,
  business_id: Business.first.id,
  rating: 1
)

Review.create!(
  body: Faker::Hipster.paragraph,
  author_id: User.first.id,
  business_id: Business.third.id,
  rating: 5
)

Review.create!(
  body: Faker::Hipster.paragraph,
  author_id: User.second.id,
  business_id: Business.second.id,
  rating: 3
)

Review.create!(
  body: Faker::Hipster.paragraph,
  author_id: User.second.id,
  business_id: Business.first.id,
  rating: 4
)

Review.create!(
  body: Faker::Hipster.paragraph,
  author_id: User.third.id,
  business_id: Business.second.id,
  rating: 5
)

Review.create!(
  body: Faker::Hipster.paragraph,
  author_id: User.third.id,
  business_id: Business.fifth.id,
  rating: 4
)

Review.create!(
  body: Faker::Hipster.paragraph,
  author_id: User.last.id,
  business_id: Business.first.id,
  rating: 3
)

Review.create!(
  body: Faker::Hipster.paragraph,
  author_id: User.fourth.id,
  business_id: Business.last.id,
  rating: 5
)