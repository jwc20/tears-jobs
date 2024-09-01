module Api
  module V0
    class JobListingsController < ApplicationController
      def index
        render json: JobListing.all
      end

      def show
        job_listing = JobListing.find(params[:id])
        render json: job_listing
      end
    end
  end
end
