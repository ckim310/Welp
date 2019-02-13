class UpdateReactionsToIndexReviewId < ActiveRecord::Migration[5.2]
  def change
    remove_index :reactions, column: [:user_id, :reaction_type], unique: true
    add_index :reactions, [:user_id, :reaction_type, :review_id], unique: true
  end
end
