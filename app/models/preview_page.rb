class PreviewPage < ApplicationRecord
    validates :title, :code, :theme_id, :body_text, :image_url, presence: true
    belongs_to :theme
    belongs_to :user
end
