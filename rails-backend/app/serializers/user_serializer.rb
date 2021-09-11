class UserSerializer < ActiveModel::Serializer
    has_many :messages
    has_many :conversations
    has_many :participations

    attibutes :id, :username, :email, :created_at, :updated_at
end