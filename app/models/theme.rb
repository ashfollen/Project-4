class Theme < ApplicationRecord
    has_many :preview_pages
    has_many :users, through: :preview_pages
end
