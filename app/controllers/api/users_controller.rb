class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render json: @user
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  # def edit
  # end

  # def update
  # end

  # def destroy
  # end

  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :zipcode, :email, :birthday_month, :birthday_day, :birthday_year, :password)
  end
end