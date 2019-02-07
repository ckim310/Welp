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
  validates :body, :rating, presence: true
  validates :rating, inclusion: { in: 1..5, message: "is required" }
  validates :author_id, uniqueness: { scope: :business_id, message: "already has written a review, go update review" }

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :business
end
