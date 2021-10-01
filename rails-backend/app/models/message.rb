class Message < ApplicationRecord
    belongs_to :user
    belongs_to :conversation

    validates_presence_of :body

    def screen_name
        user.username
    end

    def sender_avatar
        user.avatar_url
    end
end
