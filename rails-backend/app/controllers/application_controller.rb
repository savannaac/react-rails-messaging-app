class ApplicationController < ActionController::API
    # before_action :configure_permitted_parameters, if: :devise_controller?

    # def created_at
    #     attributes['created_at'].strftime("%Y-%m-%d %H:%M")
    # end

    # def updated_at
    #     attributes['updated_at'].strftime("%Y-%m-%d %H:%M")
    # end

    def jwt_key
        ENV['SESSION_SECRET']
    end

    def encode(payload)
        JWT.encode(payload, jwt_key)
    end

    def decode(token)
        JWT.decode(token, jwt_key, true, { :algorithm => "HS256" })
    end

    def token
        request.headers["Authorization"]
    end

    protected

    def configure_permitted_parameters
        devise_parameter_sanitizer.permit(:sign_up, keys: [:username])
    end
end
