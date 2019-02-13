# == Schema Information
#
# Table name: reactions
#
#  id            :bigint(8)        not null, primary key
#  reaction_type :string           not null
#  user_id       :integer          not null
#  review_id     :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Reaction < ApplicationRecord
  validates :reaction_type, inclusion: { in: %w(useful funny cool)}

  belongs_to :user

  belongs_to :review
end
