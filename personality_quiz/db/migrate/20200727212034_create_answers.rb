class CreateAnswers < ActiveRecord::Migration[6.0]
  def change
    create_table :answers do |t|
      t.integer :question_id
      t.string :answer_content
      t.integer :value
      t.timestamps
    end
  end
end
