class PreviewPagesController < ApplicationController

    def index
        previews = PreviewPage.all
        render json: previews, include: :theme
    end
    
    def create
        previewPage = PreviewPage.create!(title: params[:title], code: params[:code], body_text: params[:body_text], theme_id: params[:theme_id], image_url: params[:image_url])
        render json: previewPage, status: :created
        rescue ActiveRecord::RecordInvalid => e
            render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
    end

end
