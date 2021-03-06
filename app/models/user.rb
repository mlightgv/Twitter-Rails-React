class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :followers

  def as_json(options={})
    { id: id, name: display_name, gravatar: gravatar }
  end

  def display_name
    first_name.present? ? "#{first_name} #{last_name}".titleize : email
  end

  def gravatar
    hash = Digest::MD5.hexdigest(email)
    "https://www.gravatar.com/avatar/#{hash}"
  end

  def self.who_to_follow(current_user_id)
    where(["id != :current_user_id and not exists (
      select 1 from followers
      where user_id = users.id and
      followed_by = :current_user_id)",
    { current_user_id: current_user_id } ]).all
  end

  def self.following(current_user_id)
    where(["id != :current_user_id and exists (
      select 1 from followers
      where user_id = users.id and
      followed_by = :current_user_id)",
    { current_user_id: current_user_id } ]).all
  end

end
