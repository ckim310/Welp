@reactions.each do |reaction|
  json.set! reaction.id do
    json.partial! "api/reactions/reaction", reaction: reaction
  end
end