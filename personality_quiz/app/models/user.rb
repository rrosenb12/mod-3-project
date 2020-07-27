class User < ApplicationRecord
    has_many :user_results
    has_many :results, through: :user_results
    has_many :quizzes, through: :results
end
