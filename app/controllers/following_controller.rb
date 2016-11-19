class FollowingController < ApplicationController
  def index
    render json: User.following(current_user.id)
  end

  def destroy
    follower = Follower.where(user_id: params[:user_id]).first
    follower.destroy
    render json: follower
  end
end
