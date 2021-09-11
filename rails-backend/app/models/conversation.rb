class Conversation < ApplicationRecord
    has_many :users, through: :participations
    has_many :participations, dependent: :destroy
    has_many :messages, dependent: :destroy
end
