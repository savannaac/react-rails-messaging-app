class Conversation < ApplicationRecord
    has_many :users, through: :participations
    has_many :participations
    has_many :messages, dependent: :destroy
end
