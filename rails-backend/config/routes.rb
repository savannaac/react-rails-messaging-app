Rails.application.routes.draw do
  # devise_for :users
  scope :api do
    scope :v1 do
      devise_for :users, controllers: {
        :registrations => "api/v1/users/registrations",
        :sessions => "api/v1/users/sessions",
        # :passwords => "api/#{version}/users/passwords"
      }
    # namespace :v1 do |version|
    #   devise_for :users, controllers: {
    #     :registrations => "api/#{version}/users/registrations",
    #     :sessions => "api/#{version}/users/sessions",
    #     # :passwords => "api/#{version}/users/passwords"
    #   }
      
    resources :users
    resources :messages
    resources :conversations
    resources :participations

    get "/user-data", to: "users#show"
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
