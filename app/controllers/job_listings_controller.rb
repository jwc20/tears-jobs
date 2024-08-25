class JobListingsController < ApplicationController
#   def index
#       @job_listings = JobListing.all
#   end

    def index
        @job_listings = JobListing.order(created_at: :desc).paginate(page: params[:page], per_page: 10)
    end
end
