# == Schema Information
#
# Table name: businesses
#
#  id           :bigint(8)        not null, primary key
#  name         :string           not null
#  zipcode      :integer          not null
#  address      :string           not null
#  phone_number :string           not null
#  latitude     :float            not null
#  longitude    :float            not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Business < ApplicationRecord
  validates :name, :zipcode, :address, :phone_number, :latitude, :longitude, presence: true
  validates :zipcode, length: { is: 5 }
end
