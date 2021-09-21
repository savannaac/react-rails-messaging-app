class ApplicationController < ActionController::API
    # before_action :configure_permitted_parameters, if: :devise_controller?

    # def created_at
    #     attributes['created_at'].strftime("%Y-%m-%d %H:%M")
    # end

    # def updated_at
    #     attributes['updated_at'].strftime("%Y-%m-%d %H:%M")
    # end
    

    # def encode(payload)
    #     JsonWebToken.encode(payload)
    # end

    # def decode(token)
    #     JsonWebToken.decode(token)
    # end

    # protected

    # def configure_permitted_parameters
    #     devise_parameter_sanitizer.permit(:sign_up, keys: [:username])
    # end
end
