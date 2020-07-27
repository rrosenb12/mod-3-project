class CreateResults < ActiveRecord::Migration[6.0]
  def change
    create_table :results do |t|
      t.string :description
      t.integer :quiz_id
      t.timestamps
    end
  end
end
