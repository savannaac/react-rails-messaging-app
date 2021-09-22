Rails.application.routes.draw do
  get 'current_user/index'
  # devise_for :users
  namespace :api do
    namespace :v1 do
      # devise_for :users, controllers: {
      #   registrations: "api/v1/registrations",
      #   sessions: "api/v1/sessions",
      #   # :passwords => "api/#{version}/users/passwords"
      # }
      
      resources :users
      resources :messages
      resources :conversations
      resources :participations

      get "/user-data", to: "users#show"
      # get "/users", to: "users#index"
      post "/login", to: "users#login"
      get "/login", to: "users#token_authenticate"
      post "logout", to: "users#destroy"
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  #no namespacing
  # devise_for :users, controllers: {
  #       registrations: "users/registrations",
  #       sessions: "users/sessions",
  #       # :passwords => "api/#{version}/users/passwords"
  #     }
  
  #   resources :users
  #   resources :messages
  #   resources :conversations
  #   resources :participations

  #   get "/user-data", to: "users#show"
end
