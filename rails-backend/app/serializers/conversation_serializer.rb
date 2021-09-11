class ConversationSerializer < ActiveModel::Serializer
    has_many :users
    has_many :participations
    has_many :messages

    attibutes :id, :name, :created_at, :updated_at
end