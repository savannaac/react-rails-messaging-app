class Conversation < ApplicationRecord
    has_many :participations, dependent: :destroy
    has_many :users, through: :participations
    has_many :messages, dependent: :destroy

    # def other_participants
    #     users.name.where.not(id: id)
    # end
end
