class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.text :body
      t.belongs_to :user, foreign_key: true
      t.string :likes
      t.string :dislikes

      t.timestamps
    end
  end
end