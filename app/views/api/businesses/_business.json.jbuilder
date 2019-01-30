json.extract! business, :id, :name, :address, :city, :state, :phone_number, :latitude, :longitude
json.reviewsId business.reviews.pluck(:id)