class Quiz < ApplicationRecord
    has_many :questions
    has_many :answers, through: :questions 
    has_many :results
    has_many :user_results, through: :results
    has_many :users, through: :user_results
end
