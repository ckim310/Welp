# == Schema Information
#
# Table name: bookmarks
#
#  id          :bigint(8)        not null, primary key
#  user_id     :integer          not null
#  business_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Bookmark < ApplicationRecord
  belongs_to :user
  
  belongs_to :business
end
