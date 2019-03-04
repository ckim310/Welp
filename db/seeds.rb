# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Business.destroy_all
Review.destroy_all

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

2.times do
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
  
User.create!(
  first_name: 'Admin',
  last_name: 'User',
  zipcode: 12345,
  email: 'admin@email.com',
  birthday_month: 2,
  birthday_day: 21,
  birthday_year: 2019,
  password: 'password'
)

User.create!(
  first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name,
  zipcode: Faker::Address.zip_code,
  email: Faker::Internet.email,
  birthday_month: Faker::Number.between(1,12),
  birthday_day: Faker::Number.between(1, 31),
  birthday_year: Faker::Number.between(1940, 2018),
  password: 'password'
)

app_academy = Business.create!(
  name: "App Academy",
  zipcode: 10018,
  address: "22 W 38th St",
  city: "New York",
  state: "NY",
  phone_number: "(415) 935-3408",
  latitude: 40.751373,
  longitude: -73.983948
)
aa_00 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/aa_00.png')
app_academy.photos.attach(io: aa_00, filename:"aa_00")
aa_01 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/aa_01.jpeg')
app_academy.photos.attach(io: aa_01, filename:"aa_01")
aa_02 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/aa_02.jpeg')
app_academy.photos.attach(io: aa_02, filename:"aa_02")

gong_cha = Business.create!(
  name: "Gong Cha",
  zipcode: 10018,
  address: "75 W 38th St",
  city: "New York",
  state: "NY",
  phone_number: "(212) 398-2716",
  latitude: 40.752310,
  longitude: -73.985630
  )

gong_cha_00 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/gong_cha_00.png')
gong_cha.photos.attach(io: gong_cha_00, filename:"gong_cha_00")
gong_cha_01 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/gong_cha_01.png')
gong_cha.photos.attach(io: gong_cha_01, filename:"gong_cha_01")
gong_cha_02 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/gong_cha_02.png')
gong_cha.photos.attach(io: gong_cha_02, filename:"gong_cha_02")

kft = Business.create!(
  name: "Kung Fu Tea",
  zipcode: 10001,
  address: "11 W 32nd St",
  city: "New York",
  state: "NY",
  phone_number: "(212) 695-5888",
  latitude: 40.747746,
  longitude: -73.986192
  )
  
kft_00 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/kft_00.png')
kft.photos.attach(io: kft_00, filename:"kft_00")
kft_01 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/kft_01.png')
kft.photos.attach(io: kft_01, filename:"kft_01")
kft_02 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/kft_02.png')
kft.photos.attach(io: kft_02, filename:"kft_02")

shake_shack = Business.create!(
  name: "Shake Shack",
  zipcode: 10018,
  address: "1333 Broadway",
  city: "New York",
  state: "NY",
  phone_number: "(646) 230-0696",
  latitude: 40.751170,
  longitude: -73.988130
  )

shake_shack_00 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/shake_shack_00.png')
shake_shack.photos.attach(io: shake_shack_00, filename:"shake_shack_00")
shake_shack_01 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/shake_shack_01.png')
shake_shack.photos.attach(io: shake_shack_01, filename:"shake_shack_01")
shake_shack_02 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/shake_shack_02.png')
shake_shack.photos.attach(io: shake_shack_02, filename:"shake_shack_02")

the_cibo = Business.create!(
  name: "The Cibo",
  zipcode: 10018,
  address: "22 W 38th St",
  city: "New York",
  state: "NY",
  phone_number: "(212) 933-4361",
  latitude: 40.751260,
  longitude: -73.984030
  )

cibo_00 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/cibo_00.png')
the_cibo.photos.attach(io: cibo_00, filename:"cibo_00")
cibo_01 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/cibo_01.png')
the_cibo.photos.attach(io: cibo_01, filename:"cibo_01")
cibo_02 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/cibo_02.png')
the_cibo.photos.attach(io: cibo_02, filename:"cibo_02")

cava = Business.create!(
  name: "Cava",
  zipcode: 10018,
  address: "1385 Broadway",
  city: "New York",
  state: "NY",
  phone_number: "(718) 502-9282",
  latitude: 40.752790,
  longitude: -73.987860
)

ippudo = Business.create!(
  name: "Ippudo NYC",
  zipcode: 10003,
  address: "65 4th Ave",
  city: "New York",
  state: "NY",
  phone_number: "(123) 456-7890",
  latitude: 40.730880,
  longitude: -73.990310
)

burger_lobster = Business.create!(
  name: "Burger & Lobster",
  zipcode: 10011,
  address: "39 W 19th St",
  city: "New York",
  state: "NY",
  phone_number: "(646) 833-7532",
  latitude: 40.740160,
  longitude: -73.993370
)

jane = Business.create!(
  name: "Jane",
  zipcode: 10012,
  address: "100 W Houston St",
  city: "New York",
  state: "NY",
  phone_number: "(646) 833-7532",
  latitude: 40.727380,
  longitude: -74.000200
)

google = Business.create!(
  name: "Google",
  zipcode: 10011,
  address: "85 10th Ave",
  city: "New York",
  state: "NY",
  phone_number: "(212) 565-0000",
  latitude: 40.743389,
  longitude: -74.007980
)

foursquare = Business.create!(
  name: "FourSquare",
  zipcode: 10010,
  address: "50 W 23rd St",
  city: "New York",
  state: "NY",
  phone_number: "(212) 000-0000",
  latitude: 40.705608,
  longitude: -74.016724
)

uipath = Business.create!(
  name: "UiPath",
  zipcode: 10016,
  address: "90 Park Ave 20th floor",
  city: "New York",
  state: "NY",
  phone_number: "(844) 432-0455",
  latitude: 40.750799,
  longitude: -73.978946
)

bark = Business.create!(
  name: "Bark & Co",
  zipcode: 10013,
  address: "221 Canal Street",
  city: "New York",
  state: "NY",
  phone_number: "(855) 520-2275",
  latitude: 40.717913,
  longitude: -73.999535
)

taboola = Business.create!(
  name: "Taboola",
  zipcode: 10010,
  address: "16 Madison Square West, 7th fl.",
  city: "New York",
  state: "NY",
  phone_number: "(212) 206-7663",
  latitude: 40.742919,
  longitude: -73.989295
)

deep_lab = Business.create!(
  name: "Deep Lab",
  zipcode: 10010,
  address: "Somewhere in NYC",
  city: "New York",
  state: "NY",
  phone_number: "(212) 111-1111",
  latitude: 40.712776,
  longitude: -74.005974
)

icapital = Business.create!(
  name: "iCapital Network",
  zipcode: 10165,
  address: "26th Floor, 60 E 42nd St",
  city: "New York",
  state: "NY",
  phone_number: "(212) 994-7400",
  latitude: 40.752303,
  longitude: -73.978431
)

medidata = Business.create!(
  name: "Medidata Solutions",
  zipcode: 10014,
  address: "350 Hudson St",
  city: "New York",
  state: "NY",
  phone_number: "(212) 918-1800",
  latitude: 40.727647,
  longitude: -74.006704
)

doximity = Business.create!(
  name: "Doximity",
  zipcode: 94107,
  address: "500 3rd St. Suite 510",
  city: "San Francisco",
  state: "CA",
  phone_number: "(415) 000-0000",
  latitude: 37.780827,
  longitude: -122.395815
)

simple_fractal = Business.create!(
  name: "Simple Fractal",
  zipcode: 10018,
  address: "500 7th Ave, 8th floor",
  city: "New York",
  state: "NY",
  phone_number: "(857) 207-9431",
  latitude: 40.753134,
  longitude: -73.989297
)

gamil_design = Business.create!(
  name: "Gamil Design",
  zipcode: 27602,
  address: "323 W Martin St, at Designbox",
  city: "Raleigh",
  state: "NC",
  phone_number: "(919) 000-0000",
  latitude: 35.776979,
  longitude: -78.643966
)

dasmen_residential = Business.create!(
  name: "Dasmen Residential",
  zipcode: 10901,
  address: "400 Rella Blvd #212",
  city: "Montebello",
  state: "NY",
  phone_number: "(888) 583-3212",
  latitude: 41.117364,
  longitude: -74.107409
)

sourcepoint = Business.create!(
  name: "Sourcepoint Technologies",
  zipcode: 10001,
  address: "1201 Broadway",
  city: "New York",
  state: "NY",
  phone_number: "(212) 123-4567",
  latitude: 40.745866,
  longitude: -73.988786
)

crowded = Business.create!(
  name: "Crowded",
  zipcode: 10016,
  address: "411 Fifth Avenue, Suite 703",
  city: "New York",
  state: "NY",
  phone_number: "(212) 123-4567",
  latitude: 40.901358,
  longitude: -73.833869
)

concourse = Business.create!(
  name: "Concourse",
  zipcode: 10011,
  address: "636 Avenue of the Americas, Sixth Floor",
  city: "New York",
  state: "NY",
  phone_number: "(212) 987-6543",
  latitude: 40.728119,
  longitude: -74.003108
)

fake_business1 = Business.create(
  name: Faker::Coffee.blend_name,
  zipcode: Faker::Address.zip_code,
  address: Faker::Address.street_address,
  city: Faker::Address.city,
  state: Faker::Address.state,
  phone_number: Faker::PhoneNumber.cell_phone,
  latitude: Faker::Number.between(40.70, 41.0),
  longitude: Faker::Number.between(-73.9, -74.1)
)

fake_business2 = Business.create(
  name: Faker::Coffee.blend_name,
  zipcode: Faker::Address.zip_code,
  address: Faker::Address.street_address,
  city: Faker::Address.city,
  state: Faker::Address.state,
  phone_number: Faker::PhoneNumber.cell_phone,
  latitude: Faker::Number.between(40.70, 41.0),
  longitude: Faker::Number.between(-73.9, -74.1)
)

fake_business3 = Business.create(
  name: Faker::Coffee.blend_name,
  zipcode: Faker::Address.zip_code,
  address: Faker::Address.street_address,
  city: Faker::Address.city,
  state: Faker::Address.state,
  phone_number: Faker::PhoneNumber.cell_phone,
  latitude: Faker::Number.between(40.70, 41.0),
  longitude: Faker::Number.between(-73.9, -74.1)
)

fake_business4 = Business.create(
  name: Faker::Coffee.blend_name,
  zipcode: Faker::Address.zip_code,
  address: Faker::Address.street_address,
  city: Faker::Address.city,
  state: Faker::Address.state,
  phone_number: Faker::PhoneNumber.cell_phone,
  latitude: Faker::Number.between(40.70, 41.0),
  longitude: Faker::Number.between(-73.9, -74.1)
)

Review.create!(
  body: "App Academy is a great bootcamp! Such great and intelligent instructors who really helped me learn and grow in my knowledge",
  author_id: User.first.id,
  business_id: app_academy.id,
  rating: 5
)

Review.create!(
  body: "Learned so much at App Academy and would highly recommend others to attend this bootcamp if looking for a career change into software development.",
  author_id: User.second.id,
  business_id: app_academy.id,
  rating: 5
)

Review.create!(
  body: "Really intense and rigorous bootcamp. Would only recommend if you are seriously looking to go into computer programming. This fullstack bootcamp is no joke and requires a lot of hours. If you are looking to get into this seriously it's a great bootcamp to attend!",
  author_id: User.second.id,
  business_id: app_academy.id,
  rating: 5
)

Review.create!(
  body: Faker::Hipster.paragraph,
  author_id: User.first.id,
  business_id: fake_business1.id,
  rating: 1
)

Review.create!(
  body: Faker::Hipster.paragraph,
  author_id: User.first.id,
  business_id: fake_business3.id,
  rating: 5
)

Review.create!(
  body: Faker::Hipster.paragraph,
  author_id: User.second.id,
  business_id: fake_business2.id,
  rating: 3
)

Review.create!(
  body: Faker::Hipster.paragraph,
  author_id: User.second.id,
  business_id: fake_business1.id,
  rating: 4
)

Review.create!(
  body: Faker::Hipster.paragraph,
  author_id: User.third.id,
  business_id: fake_business2.id,
  rating: 5
)

Review.create!(
  body: Faker::Hipster.paragraph,
  author_id: User.third.id,
  business_id: fake_business4.id,
  rating: 4
)

Review.create!(
  body: Faker::Hipster.paragraph,
  author_id: User.second.id,
  business_id: fake_business3.id,
  rating: 4
)

Review.create!(
  body: Faker::Hipster.paragraph,
  author_id: User.last.id,
  business_id: fake_business1.id,
  rating: 3
)

Review.create!(
  body: Faker::Hipster.paragraph,
  author_id: User.fourth.id,
  business_id: fake_business3.id,
  rating: 5
)

Review.create!(
  body: Faker::Hipster.paragraph,
  author_id: User.first.id,
  business_id: Business.last.id,
  rating: 2
)

Review.create!(
  body: Faker::Hipster.paragraph,
  author_id: User.second.id,
  business_id: Business.last.id,
  rating: 4
)