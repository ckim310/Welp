@reviews.each do |review|
  review.reactions.each do |reaction|
    json.set! reaction.id do
      json.id reaction.id
      json.type reaction.reaction_type
      json.reviewId reaction.review_id
      json.userId reaction.user_id
    end
  end
end