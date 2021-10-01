class MessageSerializer < ActiveModel::Serializer
    belongs_to :user
    belongs_to :conversation

    attributes :id, :user_id, :conversation_id, :body, :created_at, :updated_at, :screen_name, :sender_avatar
end