class Api::V1::UsersController < ApplicationController 
    before_action :authenticate_user!

    def show
        render json: { message: "welcome! :)" }
    end
end