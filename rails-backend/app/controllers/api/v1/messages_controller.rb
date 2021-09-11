class Api::V1::MessagesController < ApplicationController
    before_action :set_message, only: [:show, :destroy]

    def index
        # messages = Message.all.order("updated_at DESC")
        # render json: messages
        messages = conversation.messages
        render json: messages
    end

    # def new
    #     message = Message.new
    #     # message = conversation.messages.new
    # end

    def create
        # puts params.inspect
        conversation = Conversation.find_or_create(params[:conversation_id])
        message = Message.new(conversation_id: conversation.id, message_params)

        if message.save
            render json: message
        else
            render json: { errors: message.errors.full_messages.join(" ") }
        end
    end

    def destroy
        message.destroy

        head :no_content
    end

    private

    def set_message
        message = Message.find(params[:id])
    end

    def message_params
        params.require(:message).permit(:user_id, :conversation_id, :body)
    end
end