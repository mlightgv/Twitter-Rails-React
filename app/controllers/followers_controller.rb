class FollowersController < ApplicationController
  def index
    render json: User.where(["id != ?", current_user.id]).all
  end

  def create
    follower = Follower.create(user_id: params[:user_id], followed_by: current_user.id)
    render json: follower
  end
end
