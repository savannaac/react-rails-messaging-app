class Api::V1::UsersController < ApplicationController
    before_action :authenticate_user!

    def create
        user = User.new(user_params)

        if user.save
            session[:user_id] = user.id 
            
            render json: user, status: 200
        else 
            render json: { errors: user.errors.full_messages.join(" ") }
        end
    end

    def show
        render json: { message: "welcome! :)" }
    end

    def destroy
        session.clear 
    end

    private

    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
end