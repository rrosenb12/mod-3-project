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

# puts 'creating users'
# 5.times do 
#     User.create(name: Faker::Name.unique.name)
# end

puts 'creating quizzes'
Quiz.create(title: 'Which Color Are You?', likes: 0)
Quiz.create(title: 'Which Instructor Are You?', likes: 0)
Quiz.create(title: 'Which Mod Are you?', likes: 0)

puts 'creating results'
Result.create(title:"Blue", description: "You are sad but also edgy. People like being around you but they can't really tell why. No one will ever call you 'nice' though, so that's a plus.", quiz_id: 1)
Result.create(title:"Red", description: "Like the color red, you think you're daring but you're not. Stop being so basic and go hang out with Blue.", quiz_id: 1)
Result.create(title:"GreenYellow", description: "You are everyone's favorite. I've never met someone who doesn't like GreenYellow. Never change your hue.", quiz_id: 1)
Result.create(title:"Violet",  description: "Just like Violet from The Incredibles, you have a killer side part and like to go invisible when your crush is around. It might sound creepy but he ends up falling for you. Nice.", quiz_id: 1)

Result.create(title:"Eric", description: "Right?", quiz_id: 2)
Result.create(title:"Tashawn", description: "Everyone pronounces your name wrong but you don't let it get under your skin.", quiz_id: 2)
Result.create(title:"Steven", description: "You always come up with the best captions for your Instagrams, making Monday mornings just a little less painful.", quiz_id: 2)
Result.create(title:"Andrew/Jeffi/Princeton", description: "You are filled with variety: the spice of life! Some days you might vibe more with your Andrew side, and come up with some sick ice breaker questions that makes you everyone's favorite. Other days, you're Jeffi: you're kindof edgy but filled with knowledge. Only on the weekends are you ever Princeton: you bring the party and think coding is hilarious. This is by far the best result.", quiz_id: 2)

Result.create(title:"Mod1", description: "You're pretty awkward and shy and are about to vomit when you think about the code challenge. 50/50 chance that tears will be shed.", quiz_id: 3)
Result.create(title:"Mod2", description: "Just like Mod2, you have way too much stuff going on. 50 files for a single lab??? What's going on????", quiz_id: 3)
Result.create(title:"Mod3", description: "You're nostalgic for the past. You didn't ask to break up with your girlfriend.", quiz_id: 3)
Result.create(title:"Mod4", description: "You are a closed book. All of these people keep yelling 'REACT' over Zoom... React to what??", quiz_id: 3)

puts 'creating questions'
Question.create(content: "What's your preffered vacation?", quiz_id: 1)
Question.create(content: "What letter does your name begin with?", quiz_id: 1)
Question.create(content: "Which Hogwurtz house are you with?", quiz_id: 1)
Question.create(content: "What was favorite class in highschool?", quiz_id: 1)

Question.create(content: "Does your slack profile pic look like you?", quiz_id: 2)
Question.create(content: "Which is your favorite:", quiz_id: 2)
Question.create(content: "What is your spirit pokemon?", quiz_id: 2)
Question.create(content: "How do you wear your hat?", quiz_id: 2)

Question.create(content: "Do you have a tendency to ramble?", quiz_id: 3)
Question.create(content: "Do you know what's going on?", quiz_id: 3)
Question.create(content: "How many times have you cried this week?", quiz_id: 3)
Question.create(content: "Pick the animal you hate the most:", quiz_id: 3)

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

Answer.create(question_id:5, answer_content: "Sometimes", value:5)
Answer.create(question_id:5, answer_content: "Always", value:6)
Answer.create(question_id:5, answer_content: "Who is she", value:7)
Answer.create(question_id:5, answer_content: "What is Slack?", value:8)

Answer.create(question_id:6, answer_content: "Beef", value:5)
Answer.create(question_id:6, answer_content: "Long Egg", value:6)
Answer.create(question_id:6, answer_content: "Taco", value:7)
Answer.create(question_id:6, answer_content: "Chicken", value:8)

Answer.create(question_id:7, answer_content: "Bulbasaur", value:5)
Answer.create(question_id:7, answer_content: "Shiny Charzard", value:6)
Answer.create(question_id:7, answer_content: "Cubone", value:7)
Answer.create(question_id:7, answer_content: "Jigglypuff", value:8)

Answer.create(question_id:8, answer_content: "To the side", value:5)
Answer.create(question_id:8, answer_content: "Headphones over my hat", value:6)
Answer.create(question_id:8, answer_content: "No hat I'm not an animal", value:7)
Answer.create(question_id:8, answer_content: "Regular", value:8)

Answer.create(question_id:9, answer_content: "Never. I am concise.", value:9)
Answer.create(question_id:9, answer_content: "Huge mansplainer over here.", value:10)
Answer.create(question_id:9, answer_content: "Yes but it's helpful (I think)", value:11)
Answer.create(question_id:9, answer_content: "I hate talking", value:12)

Answer.create(question_id:10, answer_content: "You guys don't?", value:9)
Answer.create(question_id:10, answer_content: "No idea", value:10)
Answer.create(question_id:10, answer_content: "Kindof?", value:11)
Answer.create(question_id:10, answer_content: "Who is Ruby and where did she go", value:12)

Answer.create(question_id:11, answer_content: "Not once", value:9)
Answer.create(question_id:11, answer_content: "Every night", value:10)
Answer.create(question_id:11, answer_content: "3.5", value:11)
Answer.create(question_id:11, answer_content: "I am crying right now", value:12)

Answer.create(question_id:12, answer_content: "Pigeon", value:9)
Answer.create(question_id:12, answer_content: "Anteater", value:10)
Answer.create(question_id:12, answer_content: "Bat", value:11)
Answer.create(question_id:12, answer_content: "Goblin Shark", value:12)