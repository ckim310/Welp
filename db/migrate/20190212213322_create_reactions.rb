class CreateReactions < ActiveRecord::Migration[5.2]
  def change
    create_table :reactions do |t|
      t.string :reaction_type, null: false
      t.integer :user_id, null: false
      t.integer :review_id, null: false
      
      t.timestamps
    end
    add_index :reactions, :user_id
    add_index :reactions, [:user_id, :reaction_type], unique: true
  end
end
