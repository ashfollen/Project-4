class SessionsController < ApplicationController

    def create
        user = User.find_by(username: params[:username])
        session[:user_id] = user.id
        render json: user, include: :preview_pages
    end

    def destroy
        session.delete :user_id
        head :no_content
    end

end
