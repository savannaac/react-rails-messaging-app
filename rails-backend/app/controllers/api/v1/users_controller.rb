class Api::V1::UsersController < ApplicationController
    # before_action :authenticate_api_v1_user!, only: [:show]

    def index
        users = User.all.order(updated_at: :DESC)

        render json: users
    end

    def login 
        user = User.find_by(email: params[:email])

        if user && user.authenticate(params[:password])
            payload = { user_id: user.id }
            token = encode(payload)

            render json: { user: user, token: token }
        else 
            render json: { error: "ooops, something went wrong :(" }
        end
    end

    def token_authenticate 
        token = request.headers["Authenticate"]
        user = User.find(decode(token)["user_id"])

        render json: user
    end

    def create
        user = User.new(user_params)

        if user.save
            render json: user, status: 200
            payload = { user_id: user.id }
            token = encode(payload)

            render json: { user: UserSerializer.new(user), jwt: token }, status: 200
        else 
            render json: { errors: user.errors.full_messages.join(" ") }
        end
    end

    def new
        user = User.new
    end

    def show
        user = User.find_by(id: params[:id])

        render json: { user: UserSerializer.new(user)}
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