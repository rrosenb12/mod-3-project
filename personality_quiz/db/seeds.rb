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
15.times do 
    Result.create(description: Faker::Quote.unique.matz, quiz_id: Quiz.all.sample.id)
end

puts 'creating questions'
15.times do
    Question.create(content: Faker::Quote.unique.yoda, quiz_id: Quiz.all.sample.id)
end

puts 'creating user results'
10.times do
    UserResult.create(user_id: User.all.sample.id, result_id: Result.all.sample.id)
end

puts 'creating answers'
30.times do
    Answer.create(question_id: Question.all.sample.id, answer_content: Faker::Superhero.unique.name, value: rand(1..4))
end