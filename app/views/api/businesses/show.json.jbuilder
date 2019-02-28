json.business do
  json.partial! "api/businesses/business", business: @business
  json.photoUrl url_for(@business.photo)
end


json.reviews do
  @business.reviews.each do |review|
    json.set! review.id do
      json.partial! "api/reviews/review", review: review
      json.authorName review.author.first_name + " " + review.author.last_name
      json.authorZipcode review.author.zipcode
      json.authorId review.author.id
      json.reactions review.reactions
    end
  end
end

json.bookmarks do
  @business.bookmarks.each do |bookmark|
    json.set! bookmark.id do
      json.partial! "api/bookmarks/bookmark", bookmark: bookmark
    end
  end
end