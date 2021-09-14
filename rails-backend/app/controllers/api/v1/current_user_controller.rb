class CurrentUserController < ApplicationController
  before_action :authenticate_api_v1_user!

  def index
    render json: current_user, status: :ok
  end
end
