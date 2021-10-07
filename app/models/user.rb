class User < ApplicationRecord
    has_many :preview_pages
    has_many :themes, through: :preview_pages
end