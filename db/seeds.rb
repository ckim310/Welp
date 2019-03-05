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

app_academy = Business.new({
  name: "App Academy",
  zipcode: 10018,
  address: "22 W 38th St",
  city: "New York",
  state: "NY",
  phone_number: "(415) 935-3408",
  latitude: 40.751373,
  longitude: -73.983948
})

aa_00 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/aa_00.png')
app_academy.photos.attach(io: aa_00, filename:"aa_00.png")
aa_01 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/aa_01.jpeg')
app_academy.photos.attach(io: aa_01, filename:"aa_01.jpeg")
aa_02 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/aa_02.jpeg')
app_academy.photos.attach(io: aa_02, filename:"aa_02.jpeg")
app_academy.save!

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
gong_cha.photos.attach(io: gong_cha_00, filename:"gong_cha_00.png")
gong_cha_01 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/gong_cha_01.png')
gong_cha.photos.attach(io: gong_cha_01, filename:"gong_cha_01.png")
gong_cha_02 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/gong_cha_02.png')
gong_cha.photos.attach(io: gong_cha_02, filename:"gong_cha_02.png")

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
kft.photos.attach(io: kft_00, filename:"kft_00.png")
kft_01 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/kft_01.png')
kft.photos.attach(io: kft_01, filename:"kft_01.png")
kft_02 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/kft_02.png')
kft.photos.attach(io: kft_02, filename:"kft_02.png")

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
shake_shack.photos.attach(io: shake_shack_00, filename:"shake_shack_00.png")
shake_shack_01 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/shake_shack_01.png')
shake_shack.photos.attach(io: shake_shack_01, filename:"shake_shack_01.png")
shake_shack_02 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/shake_shack_02.png')
shake_shack.photos.attach(io: shake_shack_02, filename:"shake_shack_02.png")

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
the_cibo.photos.attach(io: cibo_00, filename:"cibo_00.png")
cibo_01 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/cibo_01.png')
the_cibo.photos.attach(io: cibo_01, filename:"cibo_01.png")
cibo_02 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/cibo_02.png')
the_cibo.photos.attach(io: cibo_02, filename:"cibo_02.png")

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
  
cava_00 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/cava_00.png')
cava.photos.attach(io: cava_00, filename:"cava_00.png")
cava_01 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/cava_01.png')
cava.photos.attach(io: cava_01, filename:"cava_01.png")
cava_02 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/cava_02.png')
cava.photos.attach(io: cava_02, filename:"cava_02.png")

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

ippudo_00 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/ippudo_00.jpg')
ippudo.photos.attach(io: ippudo_00, filename:"ippudo_00.jpg")
ippudo_01 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/ippudo_01.png')
ippudo.photos.attach(io: ippudo_01, filename:"ippudo_01.png")
ippudo_02 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/ippudo_02.png')
ippudo.photos.attach(io: ippudo_02, filename:"ippudo_02.png")

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

burger_lobster_00 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/burger_lobster_00.JPG')
burger_lobster.photos.attach(io: burger_lobster_00, filename:"burger_lobster_00.jpg")
burger_lobster_01 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/burger_lobster_01.png')
burger_lobster.photos.attach(io: burger_lobster_01, filename:"burger_lobster_01.png")
burger_lobster_02 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/burger_lobster_02.png')
burger_lobster.photos.attach(io: burger_lobster_02, filename:"burger_lobster_02.png")

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

jane_00 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/jane_00.png')
jane.photos.attach(io: jane_00, filename:"jane_00.png")
jane_01 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/jane_01.png')
jane.photos.attach(io: jane_01, filename:"jane_01.png")
jane_02 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/jane_02.png')
jane.photos.attach(io: jane_02, filename:"jane_02.png")

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

google_00 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/google_00.jpg')
google.photos.attach(io: google_00, filename:"google_00.jpg")
google_01 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/google_01.jpg')
google.photos.attach(io: google_01, filename:"google_01.jpg")
google_02 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/google_02.jpg')
google.photos.attach(io: google_02, filename:"google_02.jpg")
  
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
  
foursquare_00 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/foursquare_00.png')
foursquare.photos.attach(io: foursquare_00, filename:"foursquare_00.png")

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

uipath_00 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/uipath_00.jpg')
uipath.photos.attach(io: uipath_00, filename:"uipath_00.jpg")
  
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

bark_00 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/bark_00.png')
bark.photos.attach(io: bark_00, filename:"bark_00.png")
bark_01 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/bark_01.png')
bark.photos.attach(io: bark_01, filename:"bark_01.png")
bark_02 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/bark_02.png')
bark.photos.attach(io: bark_02, filename:"bark_02.png")

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

taboola_00 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/taboola_00.jpg')
taboola.photos.attach(io: taboola_00, filename:"taboola_00.jpg")

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

deep_lab_00 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/deep_lab_00.jpeg')
deep_lab.photos.attach(io: deep_lab_00, filename:"deep_lab_00.jpeg")

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

icapital_00 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/icapital_00.jpg')
icaptial.photos.attach(io: icapital_00, filename:"icapital_00.jpg")

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

medidata_00 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/medidata_00.jpg')
medidata.photos.attach(io: medidata_00, filename:"medidata_00.jpg")

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

doximity_00 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/doximity_00.png')
doximity.photos.attach(io: doximity_00, filename:"doximity_00.png")

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

simple_fractal_00 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/simple_fractal_00.png')
simple_fractal.photos.attach(io: simple_fractal_00, filename:"simple_fractal_00.png")

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

dasmen_residential_00 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/dasmen_residential_00.jpeg')
dasmen_residential.photos.attach(io: dasmen_residential_00, filename:"dasmen_residential_00.jpeg")

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

sourcepoint_00 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/sourcepoint_00.png')
sourcepoint.photos.attach(io: sourcepoint_00, filename:"sourcepoint_00.png")

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

faker1_00 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/faker1_00.jpg')
fake_business1.photos.attach(io: faker1_00, filename:"faker1_00.jpg")
faker1_01 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/faker1_01.png')
fake_business1.photos.attach(io: faker1_01, filename:"faker1_01.png")
faker1_02 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/faker1_02.png')
fake_business1.photos.attach(io: faker1_02, filename:"faker1_02.png")

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

faker2_00 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/faker2_00.jpg')
fake_business2.photos.attach(io: faker2_00, filename:"faker2_00.jpg")
faker2_01 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/faker2_01.jpg')
fake_business2.photos.attach(io: faker2_01, filename:"faker2_01.jpg")
faker2_02 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/faker2_02.jpg')
fake_business2.photos.attach(io: faker2_02, filename:"faker2_02.jpg")

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

faker3_00 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/faker3_00.jpg')
fake_business3.photos.attach(io: faker3_00, filename:"faker3_00.jpg")
faker3_01 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/faker3_01.jpg')
fake_business3.photos.attach(io: faker3_01, filename:"faker3_01.jpg")
faker3_02 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/faker3_02.JPG')
fake_business3.photos.attach(io: faker3_02, filename:"faker3_02.jpg")

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

faker4_00 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/faker4_00.jpg')
fake_business4.photos.attach(io: faker4_00, filename:"faker4_00.jpg")
faker4_01 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/faker4_01.jpg')
fake_business4.photos.attach(io: faker4_01, filename:"faker4_01.jpg")
faker4_02 = EzDownload.open('https://s3.amazonaws.com/welp-ck-dev/faker4_02.jpg')
fake_business4.photos.attach(io: faker4_02, filename:"faker4_02.jpg")

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
  author_id: User.third.id,
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