# == Schema Information
#
# Table name: reviews
#
#  id          :bigint(8)        not null, primary key
#  body        :text             not null
#  rating      :integer          not null
#  author_id   :integer          not null
#  business_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Review < ApplicationRecord
  validates :body, :rating, :author_id, :business_id, presence: true
  validates :rating, inclusion: { in: 1..5 }
  validates :author_id, uniqueness: { scope: :business_id }

  belongs_to :user
  belongs_to :business
end
