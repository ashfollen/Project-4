class CreatePreviewPages < ActiveRecord::Migration[6.1]
  def change
    create_table :preview_pages do |t|
      t.string :title
      t.string :code
      t.string :body_text
      t.integer :theme_id
      t.string :image_url

      t.timestamps
    end
  end
end
