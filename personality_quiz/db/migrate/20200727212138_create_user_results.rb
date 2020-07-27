class CreateUserResults < ActiveRecord::Migration[6.0]
  def change
    create_table :api_results do |t|
      t.integer :user_id
      t.integer :result_id
      t.timestamps
    end
  end
end
