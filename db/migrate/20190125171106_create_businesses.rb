class CreateBusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
      t.string :name, null: false
      t.integer :zipcode, null: false
      t.string :address, null: false
      t.string :phone_number, null: false
      t.float :latitude, null: false
      t.float :longitude, null: false
      
      t.timestamps
    end
  end
end
