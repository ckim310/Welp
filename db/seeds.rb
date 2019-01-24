# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all

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