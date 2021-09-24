class Api::V1::ConversationsController < ApplicationController

    def show
        conversation = Conversation.find(params[:id])
        render json: { conversation: ConversationSerializer.new(conversation) }
    end

    def create
        conversation = Conversation.create(name: conversation_params[:name])
        Participation.create(conversation_id: conversation.id, user_id: conversation_params[:participant_id])
        Participation.create(conversation_id: conversation.id, user_id: conversation_params[:user_id])
        Message.create(conversation_id: conversation.id, body: conversation_params[:message], user_id: conversation_params[:user_id])

        if conversation.save
            render json: { user: UserSerializer.new(User.find(conversation_params[:user_id]))}

        else
            render json: { errors: conversation.errors.full_messages.join(" ") }
        end
    end

    def update
        if @conversation.update(conversation_params)
          render json: conversation
        else
          render json: conversation.errors, status: :unprocessable_entity
        end
    end

    def destroy
        conversation.destroy

        head :no_content
    end

    private

    def conversation_params
        params.require(:conversation).permit(:name, :user_id, :participant_id, :message)
    end
end