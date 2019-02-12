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
    @search_query = params[:query].downcase
      @businesses = Business.all.select do |business|
        name = business.name.downcase
        city = business.city.downcase
        address = business.address.downcase
        (name.include?(@search_query) || (city.include?(@search_query)) || address.include?(@search_query))
      end

      if @businesses != []
        render :index
      else
        render json: ['No existing businesses, search again'], status: 422
      end

  end

  private
  def business_params
    params.require(:business).permit(:name, :address, :city, :state, :zipcode, :phone_number, :latitude, :longitude)
  end

end