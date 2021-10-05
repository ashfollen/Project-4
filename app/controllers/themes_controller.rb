class ThemesController < ApplicationController

    def index
        themes = Theme.all
        render json: themes 
    end 

    def show 
        theme = Theme.find(params[:id])
        render json: theme 
    end

end
