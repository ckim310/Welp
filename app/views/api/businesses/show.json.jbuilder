json.partial! "api/businesses/business", business: @business

@business.reviews.each do |review|
  json.set! review.id do
    json.body review.body
  end
end