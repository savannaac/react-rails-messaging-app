class ApplicationController < ActionController::API
    before_action :configure_permitted_parameters, if: :devise_controller?

    def encode(payload)
        JsonWebToken.encode(payload)
    end

    def decode(token)
        JsonWebToken.decode(token)
    end

    protected

    def configure_permitted_parameters
        devise_parameter_sanitizer.permit(:sign_up, keys: [:username])
    end
end
