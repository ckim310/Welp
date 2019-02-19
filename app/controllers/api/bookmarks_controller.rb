class Api::BookmarksController < ApplicationController
  before_action :require_logged_in

  def create
    @bookmark = Bookmark.new(bookmark_params)

    if @bookmark.save
      @business = Business.find(bookmark_params[:business_id])

      render "api/businesses/show"
    else
      render json: @bookmark.errors.full_messages, status: 422
    end
  end

  def destroy
    @bookmark = current_user.bookmarks.find(params[:id])
    @business = Business.find(params[:business_id])

    if @bookmark
      @bookmark.destroy
      render "api/businesses/show"
    else
      render json: ['Unable to find bookmark'], status: 422
    end
  end

  private
  def bookmark_params
    params.require(:bookmark).permit(:user_id, :business_id)
  end
end