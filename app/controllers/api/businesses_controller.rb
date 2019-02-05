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

    if params[:query].present?
      @businesses = Business.where('name ~ ?', params[:query])
    else
      @businesses = Business.none
    end

    render :index
  end

  private
  def business_params
    params.require(:business).permit(:name, :address, :city, :state, :zipcode, :phone_number, :latitude, :longitude)
  end

end