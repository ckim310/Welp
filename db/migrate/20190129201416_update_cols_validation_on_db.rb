class UpdateColsValidationOnDb < ActiveRecord::Migration[5.2]
  def change
    change_column_null :businesses, :city, false
    change_column_null :businesses, :state, false
  end
end
