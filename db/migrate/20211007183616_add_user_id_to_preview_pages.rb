class AddUserIdToPreviewPages < ActiveRecord::Migration[6.1]
  def change
    add_column :preview_pages, :user_id, :integer
  end
end
