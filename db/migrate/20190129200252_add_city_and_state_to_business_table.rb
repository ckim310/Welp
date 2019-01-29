class AddCityAndStateToBusinessTable < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :city, :string
    add_column :businesses, :state, :string
  end
end
