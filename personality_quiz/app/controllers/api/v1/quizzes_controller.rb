class Api::V1::QuizzesController < ApplicationController

    def index
        quizzes = Quiz.all

        render json: quizzes   
    end

    def show
        quiz = Quiz.find(params[:id])

        render json: quiz
    end

    def update
        quiz = Quiz.find(params[:id])
        quiz.update!(quiz_params)
        
        render json: quiz
    end

    private

    def quiz_params
        params.require(:quiz).permit(:likes)
    end
end
