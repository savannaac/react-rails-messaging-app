class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  
  # devise :database_authenticatable, :registerable,
  #        :recoverable, :rememberable, :validatable, :jwt_authenticatable, jwt_revocation_strategy: JwtDenyList

  devise :database_authenticatable,
  :jwt_authenticatable, jwt_revocation_strategy: JwtDenylist

  # has_secure_password

  has_many :messages
  has_many :participations, dependent: :destroy
  has_many :conversations, through: :participations

  validates :username, uniqueness: { case_sensitive: false }
  validates :email, presence: true
  validates :avatar_url, presence: true
  validates :password, presence: true
end
