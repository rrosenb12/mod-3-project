Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :user_results
    end
  end
  namespace :api do
    namespace :v1 do
      resources :answers
    end
  end
  namespace :api do
    namespace :v1 do
      resources :questions
    end
  end
  namespace :api do
    namespace :v1 do
      resources :results
    end
  end
  namespace :api do
    namespace :v1 do
      resources :users
    end
  end
  namespace :api do
    namespace :v1 do
      resources :quizzes
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
