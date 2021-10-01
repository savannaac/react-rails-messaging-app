class Api::V1::UsersController < ApplicationController
    # before_action :authenticate_api_v1_user!, only: [:show]

    def index
        users = User.all.order(updated_at: :DESC)

        render json: users
    end

    def create
        user = User.create(user_params)

        if user
            token = encode_token({user_id: user.id})
            render json: { user: UserSerializer.new(user), jwt: token}
        else
            render json: { errors: user.errors.full_messages.join(" ") }
        end
    end

    def login 
        user = User.find_by(email: user_params[:email])

        if user
            render json: { user: UserSerializer.new(user), jwt: encode_token({user_id: user.id})}
        else 
            render json: { error: "ooops, something went wrong :(" }
        end
    end

    def profile
        render json: { user: UserSerializer.new(current_user)}
    end

    def destroy
        session.clear 
    end

    private

    def user_params
        params.require(:user).permit(:username, :email, :avatar_url, :password)
        # params.require(:user).permit(:username, :avatar_url)
    end
end