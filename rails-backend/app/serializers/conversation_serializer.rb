class ConversationSerializer < ActiveModel::Serializer
    has_many :messages

    attributes :id, :name, :created_at, :updated_at
end