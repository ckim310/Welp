class Api::ReviewsController < ApplicationController
  before_action :require_logged_in

  def create
    @review = current_user.reviews.new(review_params)

    if @review.save
      render "api/reviews/show"
    else
      render json: @review.errors.full_messages, status: :unprocessable_entity
    end
    
  end

  def update
    @review = current_user.reviews.find(params[:id])

    if @review.update(review_params)
      render "api/reviews/show"
    else
      render json: ['Cannot update review']
    end
    
  end

  def destroy
    @review = current_user.reviews.find(params[:id])

    if @review
      @review.destroy
      render "api/reviews/show"
    else
      render json: ['Unable to find review'], status: 422
    end
  end

  private
  def review_params
    params.require(:review).permit(:body, :rating, :business_id)
  end
end