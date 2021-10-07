class PreviewPagesController < ApplicationController

    def index
        previews = PreviewPage.all
        render json: previews, include: :theme
    end
    
    def create
        previewPage = PreviewPage.create!(title: params[:title], code: params[:code], body_text: params[:body_text], theme_id: params[:theme_id], image_url: params[:image_url], user_id: params[:user_id])
        render json: previewPage, status: :created
        rescue ActiveRecord::RecordInvalid => e
            render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
    end

    def destroy
        previewPage = PreviewPage.find_by(id: params[:id])
        if previewPage
            previewPage.destroy
            head :no_content
        else
            render json: { error: "Page not found" }, status: :not_found
        end
    end

    def update
        previewPage = PreviewPage.find_by(id: params[:id])
        if previewPage
          previewPage.update(theme_id: params[:theme_id])
          render json: previewPage
        else
          render json: { error: "Page not found" }, status: :not_found
        end
      end

end
