json.businesses do
  @businesses.each do |business|
    json.set! business.id do
      json.partial! "api/businesses/business", business: business
      json.reviewRating do
        json.array!(business.reviews) do |review|
          json.extract! review, :rating
        end
      end
    end
  end
end