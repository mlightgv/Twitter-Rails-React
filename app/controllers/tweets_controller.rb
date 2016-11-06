class TweetsController < ApplicationController

  def index
    #render json: Tweet.includes(:user).order(created_at: :desc).all
    render json: Tweet.stream_for(current_user.id)
  end

  def create
    tweet = Tweet.create(body: params[:body], user_id: current_user.id)
    render json: tweet
  end

end
