class CreateResults < ActiveRecord::Migration[6.0]
  def change
    create_table :results do |t|
      t.string :title
      t.string :description
      t.string :img_url
      t.integer :quiz_id
      t.timestamps
    end
  end
end
