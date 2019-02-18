class Api::BusinessesController < ApplicationController
  def create
    @business = Business.new(business_params)

    if @business.save
      render :show
    else
      render json: @business.errors.full_messages, status: 422
    end
  end

  def show
    @business = Business.find(params[:id])

    if @business
      render :show
    else
      render json: ['No existing business']
    end
  end

  def index
    @businesses = Business.all
  end

  def search

    if params[:queryFind] && params[:queryNear]
      @find_query = params[:queryFind].downcase
      @near_query = params[:queryNear].downcase

      @businesses = Business.all.select do |business|
        name = business.name.downcase
        city = business.city.downcase
        address = business.address.downcase
        (name.include?(@find_query)) && (city.include?(@near_query) || address.include?(@near_query))
      end
    elsif params[:queryNear]
      @near_query = params[:queryNear].downcase

      @businesses = Business.all.select do |business|
        city = business.city.downcase
        address = business.address.downcase
        (city.include?(@near_query) || address.include?(@near_query))
      end
    elsif !params[:queryFind].present? && !params[:queryNear].present?
      @businesses = Business.all
    end

    if @businesses != []
      render "api/businesses/index"
    else
      render json: ["No existing businesses, search again"], status: 422
    end

  end

  private
  def business_params
    params.require(:business).permit(:name, :address, :city, :state, :zipcode, :phone_number, :latitude, :longitude)
  end

end