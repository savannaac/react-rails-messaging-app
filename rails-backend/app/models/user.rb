class User < ApplicationRecord
    has_many :messages
    has_many :participations
    has_many :conversations, through :participations

    validates_presence_of :email, uniqueness: true 
end
