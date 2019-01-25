class BusinessesController < ApplicationController
  def create
    @business = Business.new(business_params)

    if @business.save
      render "/api/businesses/show"
    else
      render json: @business.errors.full_messages, status: 422
    end
  end

  def show
    @business = Business.find(params[:id])

    if @business
      render "api/businesses/show"
    else
      render json: ['No existing business']
    end
  end

  def index
    @businesses = Business.all
  end

  private
  def business_params
    params.require(:business).permit(:name, :address, :zipcode, :phone_number, :latitude, :longitude)
  end
end