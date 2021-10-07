class UsersController < ApplicationController

    def show
        user = User.find_by(id: session[:user_id])
        if user
          render json: user, include: :preview_pages
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
      end

end
