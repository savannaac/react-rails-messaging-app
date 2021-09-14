class Api::V1::ConversationsController < ApplicationController
    before_action :set_conversation, only: [:show, :create, :edit, :update, :destroy]

    def index
        # conversations = Conversation.all.order("updated_at DESC")
        conversations = current_user.conversations
        render json: conversations
    end

    def show
    end
    
    def edit
    end

    def create
        conversation = Conversation.new

        if conversation.save
            render json: conversation
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

    def set_conversation
        conversation = Conversation.find(params[:id])
    end

    def conversation_params
        params.require(:conversation).permit(:name, :body)
    end
end