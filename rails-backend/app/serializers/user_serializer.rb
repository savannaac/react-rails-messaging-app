class UserSerializer < ActiveModel::Serializer
    # attributes :id, :username, :email, :created_at, :updated_at, :conversations
    attributes :id, :username, :avatar_url, :created_at, :updated_at, :conversations
    
    def conversations
        ActiveModelSerializers::SerializableResource.new(object.conversations, each_serializer: ConversationSerializer)
    end
end