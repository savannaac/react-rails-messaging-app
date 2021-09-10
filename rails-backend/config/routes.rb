Rails.application.routes.draw do
  # devise_for :users
  namespace :api do
    namespace :v1 do |version|
      devise_for :users, controllers: {
        :registrations => "api/#{version}/users/registrations",
        :sessions => "api/#{version}/users/sessions",
        :passwords => "api/#{version}/users/passwords"
      }
      # resources :
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
