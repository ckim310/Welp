# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all

User.create!(
  first_name: 'Christine',
  last_name: 'Kim',
  zipcode: 12345,
  username: 'ckim',
  email: 'ckimemail',
  birthday_month: 1,
  birthday_day: 22,
  birthday_year: 2019,
  password: 'password'
)