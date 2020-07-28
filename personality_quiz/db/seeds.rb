# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all 
Quiz.destroy_all 
Result.destroy_all
Question.destroy_all
UserResult.destroy_all
Answer.destroy_all

puts 'creating users'
5.times do 
    User.create(name: Faker::Name.unique.name)
end

puts 'creating quizzes'
Quiz.create(title: 'Which color are you')
Quiz.create(title: 'Which animal are you')
Quiz.create(title: 'Which day of the week are you')

puts 'creating results'
Result.create(description:"Blue", quiz_id: 1)
Result.create(description:"Red", quiz_id: 1)
Result.create(description:"GreenYellow", quiz_id: 1)
Result.create(description:"Violet", quiz_id: 1)


puts 'creating questions'
Question.create(content: "What's your preffered vacation?", quiz_id: 1)
Question.create(content: "What letter does your name begin with?", quiz_id: 1)
Question.create(content: "Which Hogwartz house are you with?", quiz_id: 1)
Question.create(content: "What was favorite class in highschool?", quiz_id: 1)


# puts 'creating user results'
# 10.times do
#     UserResult.create(user_id: User.all.sample.id, result_id: Result.all.sample.id)
# end

puts 'creating answers'
Answer.create(question_id:1, answer_content: "Forest", value:1)
Answer.create(question_id:1, answer_content: "City", value:2)
Answer.create(question_id:1, answer_content: "Desert", value:3)
Answer.create(question_id:1, answer_content: "Ocean", value:4)

Answer.create(question_id:2, answer_content: "a-e", value:1)
Answer.create(question_id:2, answer_content: "f-l", value:2)
Answer.create(question_id:2, answer_content: "m-s", value:3)
Answer.create(question_id:2, answer_content: "t-z", value:4)

Answer.create(question_id:3, answer_content: "Slitheren", value:1)
Answer.create(question_id:3, answer_content: "Huffle Puff", value:2)
Answer.create(question_id:3, answer_content: "Griffindor", value:3)
Answer.create(question_id:3, answer_content: "Ravenclaw", value:4)

Answer.create(question_id:4, answer_content: "Math", value:1)
Answer.create(question_id:4, answer_content: "Science", value:2)
Answer.create(question_id:4, answer_content: "History", value:3)
Answer.create(question_id:4, answer_content: "Art", value:4)


