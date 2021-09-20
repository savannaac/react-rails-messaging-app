class UserSerializer < ActiveModel::Serializer
    has_many :conversations
    has_many :messages, through: :conversations

    attributes :id, :username, :email, :created_at, :updated_at
end