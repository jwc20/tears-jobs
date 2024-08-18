class JobListingsController < ApplicationController


  def index
    render json: JobListing.all
  end

end
