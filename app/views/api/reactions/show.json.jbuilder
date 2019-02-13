@review.reactions.each do |reaction|
  json.set! reaction.id do
    json.type reaction.reaction_type
    json.review reaction.review.id
    json.user reaction.user.id
  end
end